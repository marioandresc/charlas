const OWNER = 'marioandresc';
const REPO = 'charlas';
const BRANCH = 'main';
const API = `https://api.github.com/repos/${OWNER}/${REPO}`;
const RAW = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/`;

const $ = (s) => document.querySelector(s);
let files = [];
let readme = '';

function esc(value = '') {
  return String(value).replace(/[&<>\"]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}

function inline(value = '') {
  return esc(value)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}

function md(src = '') {
  const lines = src.replace(/\r/g, '').split('\n');
  const out = [];
  let list = false, quote = false, code = false, buf = [];
  const close = () => {
    if (list) { out.push('</ul>'); list = false; }
    if (quote) { out.push('</blockquote>'); quote = false; }
  };
  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      if (!code) { close(); code = true; buf = []; }
      else { out.push(`<pre><code>${esc(buf.join('\n'))}</code></pre>`); code = false; }
      continue;
    }
    if (code) { buf.push(line); continue; }
    if (!line.trim()) { close(); continue; }
    const h = line.match(/^(#{1,4})\s+(.+)$/);
    if (h) { close(); const n = h[1].length; out.push(`<h${n}>${inline(h[2])}</h${n}>`); continue; }
    if (/^\s*[-*]\s+/.test(line)) {
      if (quote) { out.push('</blockquote>'); quote = false; }
      if (!list) { out.push('<ul>'); list = true; }
      out.push(`<li>${inline(line.replace(/^\s*[-*]\s+/, ''))}</li>`); continue;
    }
    if (/^\s*>/.test(line)) {
      if (list) { out.push('</ul>'); list = false; }
      if (!quote) { out.push('<blockquote>'); quote = true; }
      out.push(`<p>${inline(line.replace(/^\s*>\s?/, ''))}</p>`); continue;
    }
    close();
    out.push(`<p>${inline(line)}</p>`);
  }
  close();
  if (code) out.push(`<pre><code>${esc(buf.join('\n'))}</code></pre>`);
  return out.join('');
}

function allMarkdown() {
  return files.filter(f => f.type === 'blob' && /\.(md|txt)$/i.test(f.path));
}

function rootCorpus() {
  return allMarkdown()
    .filter(f => !f.path.includes('/'))
    .sort((a,b) => a.path.localeCompare(b.path, undefined, {numeric:true}));
}

function row(file, i = 0) {
  return `<div class="file-row" onclick="openFile('${encodeURIComponent(file.path)}')">
    <div class="file-no">${String(i + 1).padStart(2,'0')}</div>
    <div><div class="file-name">${esc(file.path)}</div><div class="file-size">${Math.max(1, Math.round((file.size || 0) / 1024))} KB</div></div>
    <div>→</div>
  </div>`;
}

function renderHome() {
  const corpus = rootCorpus();
  const all = allMarkdown();
  $('#content').innerHTML = `<div class="hero">
    <div>
      <div class="eyebrow">Corpus de investigación · humano ↔ IA</div>
      <h1>Cómo se construyen las ideas en conversación.</h1>
      <p>Un archivo de conversaciones reales convertido en material de investigación sobre <strong>co-construcción conceptual humano–IA</strong>.</p>
      <div class="section"><div class="notice"><strong>Pregunta central:</strong> ¿Cómo se distribuyen entre humano e IA el origen, el refinamiento, el andamiaje y la validación de conceptos durante una conversación prolongada?</div></div>
    </div>
    <div class="hero-card"><div><div class="tag">Pregunta central</div><div class="question">¿Quién introduce una idea, quién la desarrolla y qué intervención hace posible su siguiente transformación?</div></div>
      <div class="stats"><div class="stat"><b>${corpus.length}</b><span>registros raíz</span></div><div class="stat"><b>${all.length}</b><span>documentos Markdown/TXT</span></div><div class="stat"><b>${files.length}</b><span>archivos totales</span></div></div>
    </div>
  </div>
  <section class="section"><div class="section-head"><div><h2>Cuatro dimensiones</h2><p>La interfaz sigue la separación metodológica del proyecto.</p></div></div>
    <div class="grid"><div class="card"><span class="tag">01 · Origen</span><h3>¿Quién introdujo la idea?</h3><p>Identificar el punto donde aparece una estructura conceptual.</p></div>
    <div class="card"><span class="tag">02 · Desarrollo</span><h3>¿Quién la elaboró?</h3><p>Distinguir autoría de la posterior formalización o expansión.</p></div>
    <div class="card"><span class="tag">03 · Andamiaje</span><h3>¿Qué provocó el siguiente paso?</h3><p>Separar el origen de la intervención que hizo posible la elaboración.</p></div>
    <div class="card"><span class="tag">04 · Validación</span><h3>¿Qué aumentó la confianza?</h3><p>Observar cuándo crece la seguridad expresada y qué evidencia la acompaña.</p></div></div>
  </section>
  <section class="section"><div class="section-head"><div><h2>Corpus reciente</h2><p>La fuente permanece en GitHub; esta interfaz es su capa de lectura.</p></div><button class="nav-item" style="color:var(--accent)" onclick="showView('corpus')">Ver todo →</button></div>
    <div class="corpus-list">${corpus.slice(-6).reverse().map(row).join('') || '<div class="empty">No hay documentos en la raíz. Explora el corpus completo.</div>'}</div>
  </section>`;
}

function renderCorpus() {
  const c = allMarkdown().sort((a,b) => a.path.localeCompare(b.path, undefined, {numeric:true}));
  $('#content').innerHTML = `<div class="eyebrow">Archivo primario</div><h1 style="font-size:48px;letter-spacing:-.04em">Corpus</h1><p style="color:var(--muted);max-width:760px">${c.length} documentos Markdown/TXT encontrados en el repositorio. Se leen directamente desde <strong>main</strong>.</p><div class="corpus-list" style="margin-top:30px">${c.map(row).join('') || '<div class="empty">No se encontraron documentos.</div>'}</div>`;
}

function renderMethod() {
  const part = readme.split('## Una distinción metodológica fundamental')[1]?.split('## Qué NO pretende demostrar')[0];
  $('#content').innerHTML = `<div class="eyebrow">Marco de lectura</div><h1 style="font-size:48px;letter-spacing:-.04em">Metodología</h1><div class="markdown" style="padding:20px 0">${md(part || readme || 'La metodología se encuentra en README.md.')}</div><div class="notice">Principio de preservación: <strong>fuente → anotación → comparación → conclusión</strong>.</div>`;
}

function renderAnnotations() {
  const a = allMarkdown().filter(f => f.path.startsWith('annotations/'));
  $('#content').innerHTML = `<div class="eyebrow">Capa interpretativa</div><h1 style="font-size:48px">Anotaciones</h1><p style="color:var(--muted);max-width:700px">Material analítico separado de las conversaciones originales.</p><div class="corpus-list" style="margin-top:30px">${a.map(row).join('') || '<div class="empty">No se encontraron anotaciones.</div>'}</div>`;
}

function showView(view) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === view));
  const labels = {home:'Inicio', corpus:'Corpus', method:'Metodología', annotations:'Anotaciones'};
  $('#crumb').textContent = `Charlas / ${labels[view] || view}`;
  if (view === 'home') renderHome();
  if (view === 'corpus') renderCorpus();
  if (view === 'method') renderMethod();
  if (view === 'annotations') renderAnnotations();
}

async function openFile(encoded) {
  const path = decodeURIComponent(encoded);
  $('#reader').classList.add('open');
  $('#reader').setAttribute('aria-hidden','false');
  $('#reader-content').innerHTML = '<div class="empty">Cargando documento…</div>';
  $('#reader-meta').textContent = path;
  $('#github-file').href = `https://github.com/${OWNER}/${REPO}/blob/${BRANCH}/${path.split('/').map(encodeURIComponent).join('/')}`;
  try {
    const r = await fetch(RAW + path.split('/').map(encodeURIComponent).join('/'));
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    $('#reader-content').innerHTML = md(await r.text());
  } catch (e) {
    $('#reader-content').innerHTML = `<div class="notice"><strong>No se pudo cargar el documento.</strong><br>${esc(e.message)}</div>`;
  }
}

function search(q) {
  q = q.trim().toLowerCase();
  if (!q) return showView('corpus');
  const matches = files.filter(f => f.path.toLowerCase().includes(q));
  $('#content').innerHTML = `<div class="eyebrow">Búsqueda</div><h1 style="font-size:48px">${matches.length} resultado${matches.length === 1 ? '' : 's'}</h1><p style="color:var(--muted)">Coincidencias por nombre de archivo.</p><div class="corpus-list" style="margin-top:30px">${matches.map(row).join('') || '<div class="empty">Sin resultados.</div>'}</div>`;
}

async function load() {
  // Render a visible shell first, so a network/API problem can never leave a blank page.
  $('#content').innerHTML = `<div class="eyebrow">Cargando corpus</div><h1>CHARLAS</h1><p style="color:var(--muted)">Conectando con GitHub…</p>`;
  try {
    const response = await fetch(`${API}/git/trees/${BRANCH}?recursive=1`, {cache:'no-store'});
    if (!response.ok) throw new Error(`GitHub API respondió HTTP ${response.status}`);
    const tree = await response.json();
    files = (tree.tree || []).filter(x => x.type === 'blob');
    $('#repo-status').title = `${files.length} archivos encontrados`;
    $('#repo-status').style.background = '#61c7a6';
    const rr = await fetch(RAW + 'README.md', {cache:'no-store'});
    readme = rr.ok ? await rr.text() : '';
    renderHome();
  } catch (e) {
    $('#repo-status').style.background = '#d66';
    $('#content').innerHTML = `<div class="notice"><strong>No se pudo cargar el corpus.</strong><br>${esc(e.message)}<br><br><a href="https://github.com/${OWNER}/${REPO}" target="_blank" rel="noopener">Abrir repositorio en GitHub →</a></div>`;
  }
}

document.addEventListener('click', e => {
  const n = e.target.closest('.nav-item[data-view]');
  if (n) showView(n.dataset.view);
});

$('#search').addEventListener('keydown', e => { if (e.key === 'Enter') search(e.target.value); });
$('#close-reader').onclick = () => { $('#reader').classList.remove('open'); $('#reader').setAttribute('aria-hidden','true'); };
$('#menu').onclick = () => $('#sidebar').classList.toggle('open');
$('#theme').onclick = () => { document.body.classList.toggle('dark'); localStorage.setItem('charlas-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); };
if (localStorage.getItem('charlas-theme') === 'dark') document.body.classList.add('dark');

window.showView = showView;
window.openFile = openFile;
load();
