const OWNER='marioandresc',REPO='charlas',BRANCH='main';
const API=`https://api.github.com/repos/${OWNER}/${REPO}`;
const RAW=`https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/`;
const $=s=>document.querySelector(s);
let files=[], readme='';

function esc(s){return s.replace(/[&<>\"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));}
function inline(s){return esc(s).replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>').replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');}
function md(src){
  const lines=src.replace(/\r/g,'').split('\n'), out=[]; let list=false,quote=false,code=false,buf=[];
  const closeList=()=>{if(list){out.push('</ul>');list=false}},closeQuote=()=>{if(quote){out.push('</blockquote>');quote=false}};
  for(const line of lines){
    if(line.trim().startsWith('```')){if(!code){closeList();closeQuote();code=true;buf=[]}else{out.push('<pre><code>'+esc(buf.join('\n'))+'</code></pre>');code=false}continue}
    if(code){buf.push(line);continue}
    if(/^\s*$/.test(line)){closeList();closeQuote();continue}
    let m=line.match(/^(#{1,4})\s+(.+)$/); if(m){closeList();closeQuote();const n=m[1].length;out.push(`<h${n}>${inline(m[2])}</h${n}>`);continue}
    if(/^\s*[-*]\s+/.test(line)){closeQuote();if(!list){out.push('<ul>');list=true}out.push('<li>'+inline(line.replace(/^\s*[-*]\s+/,''))+'</li>');continue}
    if(/^\s*>/.test(line)){closeList();if(!quote){out.push('<blockquote>');quote=true}out.push('<p>'+inline(line.replace(/^\s*>\s?/,''))+'</p>');continue}
    closeList();closeQuote();out.push('<p>'+inline(line)+'</p>');
  }
  closeList();closeQuote();if(code)out.push('<pre><code>'+esc(buf.join('\n'))+'</code></pre>');return out.join('');
}

async function load(){
  try{
    const r=await fetch(`${API}/git/trees/${BRANCH}?recursive=1`); if(!r.ok)throw Error('GitHub API');
    const tree=await r.json(); files=(tree.tree||[]).filter(x=>x.type==='blob');
    $('#repo-status').title=`${files.length} archivos encontrados`;
    const rr=await fetch(RAW+'README.md');readme=await rr.text();
    renderHome();
  }catch(e){$('#content').innerHTML='<div class="notice"><strong>No se pudo cargar el corpus.</strong><br>Comprueba la conexión y vuelve a intentar.</div>';$('#repo-status').style.background='#d66'}
}
function count(prefix){return files.filter(f=>f.path.startsWith(prefix)).length}
function corpusFiles(){return files.filter(f=>/\.(md|txt)$/i.test(f.path)&&!f.path.includes('/')).sort((a,b)=>a.path.localeCompare(b.path,undefined,{numeric:true}));}
function renderHome(){
  const c=corpusFiles();
  $('#content').innerHTML=`<div class="hero"><div><div class="eyebrow">Corpus de investigación · humano ↔ IA</div><h1>Cómo se construyen las ideas en conversación.</h1><p>Un archivo de conversaciones reales convertido en material de investigación sobre <strong>co-construcción conceptual humano–IA</strong>.</p><div class="section"><div class="notice">${inline('La pregunta central: ¿Cómo se distribuyen entre humano e IA el origen, el refinamiento, el andamiaje y la validación de conceptos durante una conversación prolongada?')}</div></div></div><div class="hero-card"><div><div class="tag">Pregunta central</div><div class="question">¿Quién introduce una idea, quién la desarrolla y qué intervención hace posible su siguiente transformación?</div></div><div class="stats"><div class="stat"><b>${c.length}</b><span>registros raíz</span></div><div class="stat"><b>${count('annotations/')}</b><span>anotaciones</span></div><div class="stat"><b>${files.length}</b><span>archivos totales</span></div></div></div></div>
  <section class="section"><div class="section-head"><div><h2>Cuatro dimensiones</h2><p>La interfaz sigue la separación metodológica del proyecto.</p></div></div><div class="grid"><div class="card"><span class="tag">01 · Origen</span><h3>¿Quién introdujo la idea?</h3><p>Identificar el punto donde aparece una estructura conceptual.</p></div><div class="card"><span class="tag">02 · Desarrollo</span><h3>¿Quién la elaboró?</h3><p>Distinguir autoría de la posterior formalización o expansión.</p></div><div class="card"><span class="tag">03 · Andamiaje</span><h3>¿Qué provocó el siguiente paso?</h3><p>Separar el origen de la intervención que hizo posible la elaboración.</p></div><div class="card"><span class="tag">04 · Validación</span><h3>¿Qué aumentó la confianza?</h3><p>Observar cuándo crece la seguridad expresada y qué evidencia la acompaña.</p></div></div></section>
  <section class="section"><div class="section-head"><div><h2>Explorar el corpus</h2><p>La fuente permanece en GitHub; esta interfaz es su capa de lectura.</p></div><button class="nav-item" style="color:var(--accent)" onclick="showView('corpus')">Ver todo →</button></div><div class="corpus-list">${c.slice(-5).reverse().map(row).join('')}</div></section>`;
}
function row(f,i){return `<div class="file-row" onclick="openFile('${encodeURIComponent(f.path)}')"><div class="file-no">${String(i+1).padStart(2,'0')}</div><div><div class="file-name">${esc(f.path)}</div><div class="file-size">${Math.round(f.size/1024)} KB</div></div><div>→</div></div>`}
function showView(view){document.querySelectorAll('.nav-item').forEach(x=>x.classList.toggle('active',x.dataset.view===view));if(view==='home')renderHome();if(view==='corpus')renderCorpus();if(view==='method')renderMethod();if(view==='annotations')renderAnnotations();$('#crumb').textContent=`Charlas / ${view==='home'?'Inicio':view==='corpus'?'Corpus':view==='method'?'Metodología':'Anotaciones'}`)}
function renderCorpus(){const c=corpusFiles();$('#content').innerHTML=`<div class="eyebrow">Archivo primario</div><h1 style="font-size:48px;letter-spacing:-.04em">Corpus</h1><p style="color:var(--muted);max-width:700px">${c.length} documentos en la raíz. Los archivos se leen directamente desde la rama <strong>main</strong>; nada de aquí reemplaza la fuente original.</p><div class="corpus-list" style="margin-top:30px">${c.map(row).join('')}</div>`}
function renderMethod(){const section=readme.split('## Una distinción metodológica fundamental')[1]?.split('## Qué NO pretende demostrar')[0]||'## Metodología\n\nLa documentación metodológica se encuentra en el README y en los directorios de investigación.';$('#content').innerHTML=`<div class="eyebrow">Marco de lectura</div><h1 style="font-size:48px;letter-spacing:-.04em">Metodología</h1><div class="markdown" style="padding:20px 0">${md(section)}</div><div class="notice">Principio de preservación: <strong>fuente → anotación → comparación → conclusión</strong>. La interpretación posterior no debe confundirse con lo ocurrido durante la conversación.</div>`}
function renderAnnotations(){const a=files.filter(f=>f.path.startsWith('annotations/'));$('#content').innerHTML=`<div class="eyebrow">Capa interpretativa</div><h1 style="font-size:48px;letter-spacing:-.04em">Anotaciones</h1><p style="color:var(--muted);max-width:700px">Material analítico separado de las conversaciones originales para conservar trazabilidad.</p><div class="corpus-list" style="margin-top:30px">${a.map(row).join('')}</div>`}
async function openFile(encoded){const path=decodeURIComponent(encoded);$('#reader').classList.add('open');$('#reader').setAttribute('aria-hidden','false');$('#reader-content').innerHTML='<div class="empty">Cargando documento…</div>';$('#reader-meta').textContent=path;$('#github-file').href=`https://github.com/${OWNER}/${REPO}/blob/${BRANCH}/${encodeURIComponent(path).replace(/%2F/g,'/')}`;try{const r=await fetch(RAW+path.split('/').map(encodeURIComponent).join('/'));const text=await r.text();$('#reader-content').innerHTML=md(text)}catch(e){$('#reader-content').innerHTML='<div class="notice">No se pudo cargar este documento.</div>'}}
function search(q){q=q.trim().toLowerCase();if(!q){showView('corpus');return}const matches=files.filter(f=>f.path.toLowerCase().includes(q));$('#content').innerHTML=`<div class="eyebrow">Búsqueda</div><h1 style="font-size:48px">${matches.length} resultado${matches.length===1?'':'s'}</h1><p style="color:var(--muted)">Coincidencias por nombre de archivo. El contenido completo se consulta al abrir cada documento.</p><div class="corpus-list" style="margin-top:30px">${matches.map(row).join('')||'<div class="empty">Sin resultados.</div>'}</div>`}

document.addEventListener('click',e=>{const n=e.target.closest('.nav-item[data-view]');if(n)showView(n.dataset.view)});
$('#search').addEventListener('keydown',e=>{if(e.key==='Enter')search(e.target.value)});
$('#close-reader').onclick=()=>{$('#reader').classList.remove('open');$('#reader').setAttribute('aria-hidden','true')};
$('#menu').onclick=()=>$('#sidebar').classList.toggle('open');
$('#theme').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('charlas-theme',document.body.classList.contains('dark')?'dark':'light')};
if(localStorage.getItem('charlas-theme')==='dark')document.body.classList.add('dark');
load();
window.showView=showView;window.openFile=openFile;
