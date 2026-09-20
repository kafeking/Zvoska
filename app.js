(() => {
  'use strict';

  const APP_KEY = 'zvoskaFest2026_user_v1';
  const MAX_NOTE = 1000;

  const exhibitors = [
    {id:1,booth:1,name:'TEFCOLD CZ s.r.o.',floor:'Přízemí',zone:''},
    {id:2,booth:2,name:'Podravka - Lagris a.s.',floor:'Přízemí',zone:''},
    {id:3,booth:3,name:'Crocodille ČR, spol. s r.o.',floor:'Přízemí',zone:''},
    {id:4,booth:4,name:'Farm ACZ s.r.o.',floor:'Přízemí',zone:''},
    {id:5,booth:5,name:'Orkla Foods Česko a Slovensko a.s.',floor:'Přízemí',zone:''},
    {id:6,booth:6,name:'UNILEVER ČR, spol. s r.o.',floor:'Přízemí',zone:''},
    {id:7,booth:7,name:'Ježkovy krabičky s.r.o.',floor:'Přízemí',zone:''},
    {id:8,booth:8,name:'Nestlé Česko s.r.o.',floor:'Přízemí',zone:''},
    {id:9,booth:9,name:'FrieslandCampina Nederland B.V.',floor:'Přízemí',zone:''},
    {id:10,booth:10,name:'AG SEAFOOD s.r.o.',floor:'1. patro',zone:''},
    {id:11,booth:11,name:'Juice Bar CZ, s.r.o.',floor:'1. patro',zone:''},
    {id:12,booth:12,name:'Fiora Food Czech Republic spol. s r.o.',floor:'1. patro',zone:''},
    {id:13,booth:13,name:'BMC Brno, s.r.o.',floor:'1. patro',zone:''},
    {id:14,booth:14,name:'TEEKANNE, s.r.o.',floor:'1. patro',zone:''},
    {id:15,booth:15,name:'HOLLANDIA Karlovy Vary, s.r.o.',floor:'1. patro',zone:''},
    {id:16,booth:16,name:'Mlékárna Hlinsko, a.s.',floor:'1. patro',zone:''},
    {id:17,booth:17,name:'Lactalis CZ, s.r.o.',floor:'1. patro',zone:''},
    {id:18,booth:18,name:'WIMEX s.r.o.',floor:'1. patro',zone:''},
    {id:19,booth:19,name:'DUNAJ - OSTRAVA CZ s.r.o.',floor:'1. patro',zone:''},
    {id:20,booth:20,name:'Produkty Vladimir s.r.o.',floor:'1. patro',zone:''},
    {id:21,booth:21,name:'K + L Market s.r.o.',floor:'1. patro',zone:''},
    {id:22,booth:22,name:'KALVEI, s.r.o.',floor:'1. patro',zone:''},
    {id:23,booth:23,name:'VITAMINÁTOR s.r.o.',floor:'1. patro',zone:''},
    {id:24,booth:24,name:'Zenit, spol. s r.o.',floor:'1. patro',zone:''},
    {id:25,booth:25,name:'AC MARCA Czech Republic s.r.o.',floor:'1. patro',zone:''},
    {id:26,booth:26,name:'H.J. Heinz Supply Chain Europe B.V., odštěpný závod',floor:'1. patro',zone:''},
    {id:27,booth:27,name:'Professional support s.r.o.',floor:'1. patro',zone:''},
    {id:28,booth:28,name:'BM plus, spol. s r.o.',floor:'1. patro',zone:''},
    {id:29,booth:29,name:'TROPICO, spol. s r.o.',floor:'1. patro',zone:''},
    {id:30,booth:30,name:'Danone a.s.',floor:'1. patro',zone:''},
    {id:31,booth:31,name:'GREPOOL Spritz Aperitif',floor:'1. patro',zone:''},
    {id:32,booth:32,name:'La Lorraine, a.s.',floor:'1. patro',zone:'Sweet zóna'},
    {id:33,booth:33,name:'STOKSON SPÓŁKA JAWNA HENRYK STOKLOSA I WSPÓLNICY',floor:'1. patro',zone:'Sweet zóna'},
    {id:34,booth:34,name:'Magnum ICC ČR, spol. s r.o.',floor:'1. patro',zone:'Sweet zóna'},
    {id:35,booth:35,name:'SWEET DELIGHT a.s.',floor:'1. patro',zone:'Sweet zóna'},
    {id:36,booth:36,name:'M.K. INVEST Group s.r.o.',floor:'1. patro',zone:'Sweet zóna'},
    {id:37,booth:37,name:'Nestlé Nespresso S.A.',floor:'1. patro',zone:'Sweet zóna'},
    {id:38,booth:38,name:'GASTRO MACH, s.r.o.',floor:'1. patro',zone:'Sweet zóna'},
    {id:39,booth:39,name:'EUROPASTRY INTERNATIONAL',floor:'1. patro',zone:'Sweet zóna'},
    {id:40,booth:40,name:'Erlenbacher Backwaren GmbH',floor:'1. patro',zone:'Sweet zóna'},
    {id:41,booth:41,name:'Bonduelle Central Europe Kft.',floor:'2. patro',zone:''},
    {id:42,booth:42,name:'DMHERMES TRADE s.r.o.',floor:'2. patro',zone:''},
    {id:43,booth:43,name:'BEL Sýry Česko a.s.',floor:'2. patro',zone:''},
    {id:44,booth:44,name:'PRANTL Masný průmysl s.r.o.',floor:'2. patro',zone:''},
    {id:45,booth:45,name:'PAJERO s.r.o.',floor:'2. patro',zone:''},
    {id:46,booth:46,name:'GUMeKo s.r.o.',floor:'2. patro',zone:''},
    {id:47,booth:47,name:'MASO V + W, spol. s r.o.',floor:'2. patro',zone:''},
    {id:48,booth:48,name:'rodinné vinařství SEDLÁK, s.r.o.',floor:'2. patro',zone:''},
    {id:49,booth:49,name:'Weingut R & A Pfaffl GmbH & Co KG',floor:'2. patro',zone:''},
    {id:50,booth:50,name:'VÍNO ZLOMEK & VÁVRA s.r.o.',floor:'2. patro',zone:''},
    {id:51,booth:51,name:'HEUSCHEN & SCHROUFF ORIENTAL FOODS TRADING B.V.',floor:'2. patro',zone:''},
    {id:52,booth:52,name:'TOMGAST Czech Republic s.r.o.',floor:'2. patro',zone:''},
    {id:53,booth:53,name:'René Lukosz',floor:'2. patro',zone:''},
    {id:54,booth:54,name:'KAMINARZ Sp. z o.o.',floor:'2. patro',zone:''},
    {id:55,booth:55,name:'BURGR JAKO KRÁVA s.r.o.',floor:'2. patro',zone:''},
    {id:56,booth:56,name:'Leimer KG - smart food CZ s.r.o.',floor:'2. patro',zone:''},
    {id:57,booth:57,name:'SPAK Foods s.r.o.',floor:'2. patro',zone:''},
    {id:58,booth:58,name:'VINIFIKAJ CENTRAL EUROPE, s.r.o.',floor:'2. patro',zone:''},
    {id:59,booth:59,name:'Le Duc Fine Food B.V',floor:'2. patro',zone:''},
    {id:60,booth:60,name:'FrOSTA Sp. z o.o.',floor:'2. patro',zone:''},
    {id:61,booth:61,name:'Ardo NV Czech Republic Office',floor:'2. patro',zone:''},
    {id:62,booth:62,name:'Savencia Fromage & Dairy Czech Republic, a.s.',floor:'2. patro',zone:''},
    {id:63,booth:63,name:'STEINEX a.s.',floor:'2. patro',zone:''},
    {id:64,booth:64,name:'MIELEWCZYK.PRO Sp. z o.o.',floor:'2. patro',zone:''},
    {id:65,booth:65,name:'K M S, spol. s r.o.',floor:'2. patro',zone:''},
    {id:66,booth:66,name:'Koliber Food sp. z o.o.',floor:'2. patro',zone:''},
    {id:67,booth:67,name:'ALIMENTO s.r.o.',floor:'2. patro',zone:''},
    {id:68,booth:68,name:'Equus a.s.',floor:'2. patro',zone:''},
    {id:69,booth:69,name:'MOLINO NALDONI SRL',floor:'2. patro',zone:'Italská zóna'},
    {id:70,booth:70,name:'Industria Salumi Simonini s.p.a.',floor:'2. patro',zone:'Italská zóna'},
    {id:71,booth:71,name:'Caseificio Ghidetti s.r.l.',floor:'2. patro',zone:'Italská zóna'},
    {id:72,booth:72,name:'Riso Gallo International S.A.',floor:'2. patro',zone:'Italská zóna'},
    {id:73,booth:73,name:'ZINI PRODOTTI ALIMENTARI S.p.a.',floor:'2. patro',zone:'Italská zóna'},
    {id:74,booth:74,name:'MARTINUCCI S.R.L.',floor:'2. patro',zone:'Italská zóna'},
    {id:75,booth:75,name:'Fratelli Polli',floor:'2. patro',zone:'Italská zóna'},
    {id:76,booth:76,name:'F.lli RUATA S.p.A.',floor:'2. patro',zone:'Italská zóna'},
    {id:77,booth:77,name:'Borgo Molino Vigne e Vini S.r.l.',floor:'2. patro',zone:'Italská zóna'},
    {id:78,booth:78,name:'EURO FRIGO Praha spol. s r.o.',floor:'2. patro',zone:"Zvoska Chef's Kitchen"},
    {id:79,booth:79,name:'Beef House, s.r.o.',floor:'2. patro',zone:"Zvoska Chef's Kitchen"},
    {id:80,booth:80,name:'Amylon, a.s.',floor:'2. patro',zone:"Zvoska Chef's Kitchen"},
    {id:81,booth:81,name:'AVENA s.r.o.',floor:'2. patro',zone:"Zvoska Chef's Kitchen"},
    {id:82,booth:82,name:'VARIANT spol. s r.o.',floor:'2. patro',zone:"Zvoska Chef's Kitchen"},
    {id:83,booth:83,name:'Váš Zelinář s.r.o.',floor:'2. patro',zone:"Zvoska Chef's Kitchen"}
  ];

  const floors = {
    ground:{label:'Přízemí',range:'1–9',map:'assets/map-prizemi.jpg'},
    first:{label:'1. patro',range:'10–40',map:'assets/map-1patro.jpg'},
    second:{label:'2. patro',range:'41–83',map:'assets/map-2patro.jpg'}
  };

  let state = loadState();
  let route = {view:'home', floor:'ground', filter:'all', search:'', id:null};
  const app = document.getElementById('app');

  function loadState(){
    try{
      const raw = JSON.parse(localStorage.getItem(APP_KEY) || '{}');
      return {version:1, exhibitors: raw.exhibitors && typeof raw.exhibitors === 'object' ? raw.exhibitors : {}};
    }catch(e){ return {version:1, exhibitors:{}}; }
  }
  function saveState(){ localStorage.setItem(APP_KEY, JSON.stringify(state)); }
  function userData(id){ return state.exhibitors[id] || {visited:false,favorite:false,note:''}; }
  function updateData(id, patch){
    const prev = userData(id);
    state.exhibitors[id] = {...prev, ...patch};
    saveState();
  }
  function esc(s=''){return String(s).replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]))}
  function floorKeyFromLabel(label){return label==='Přízemí'?'ground':label==='1. patro'?'first':'second'}
  function floorLabel(k){return floors[k]?.label || 'Přízemí'}
  function countVisited(){return exhibitors.reduce((n,e)=>n+(userData(e.id).visited?1:0),0)}
  function noteCount(){return exhibitors.reduce((n,e)=>n+(userData(e.id).note.trim()?1:0),0)}
  function favoritesCount(){return exhibitors.reduce((n,e)=>n+(userData(e.id).favorite?1:0),0)}
  function progressPct(){return Math.round(countVisited()/exhibitors.length*100)}

  function navigate(view, extra={}){
    route = {...route, view, ...extra};
    render();
    window.scrollTo({top:0,behavior:'instant'});
  }

  function navHtml(active){
    const items=[['home','⌂','Domů'],['map','▧','Mapa'],['exhibitors','▦','Vystavovatelé'],['notes','▤','Poznámky']];
    return `<nav class="bottom-nav" aria-label="Hlavní navigace">${items.map(([v,ic,l])=>`<button class="nav-btn ${active===v?'active':''}" data-nav="${v}"><span class="nav-icon">${ic}</span><span>${l}${v==='notes'&&noteCount()?` · ${noteCount()}`:''}</span></button>`).join('')}</nav>`;
  }

  function homeHtml(){
    const visited=countVisited(), pct=progressPct();
    return `<main class="app-shell page-blue"><section class="hero">
      <div class="hero-kicker">Průvodce návštěvníka</div>
      <h1 class="hero-title">ZVOSKA<br>FEST 2026</h1>
      <div class="hero-meta">22. 9. 2026<br>GONG OSTRAVA</div>
      <div class="sticker-row" aria-hidden="true"><div class="sticker green">Fresh<br>Zvoska</div><div class="sticker orange">One day<br>full of food!</div></div>
      <div class="progress-card"><div class="progress-head"><span>Navštíveno ${visited} z 83</span><span>${pct} %</span></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div></div>
      <div class="floor-grid">
        ${Object.entries(floors).map(([k,f],i)=>`<button class="floor-card ${i===1?'active':''}" data-floor="${k}"><span><div class="floor-name">${f.label}</div><div class="floor-range">${f.range}</div></span><span class="arrow">›</span></button>`).join('')}
      </div>
    </section>${navHtml('home')}</main>`;
  }

  function topbar(title, sub='', back=false){
    return `<header class="topbar"><div class="topbar-row">${back?'<button class="back-btn" data-back aria-label="Zpět">‹</button>':''}<div><h1>${esc(title)}</h1>${sub?`<div class="sub">${esc(sub)}</div>`:''}</div></div></header>`;
  }

  function mapHtml(){
    const f=floors[route.floor];
    const list=exhibitors.filter(e=>e.floor===f.label);
    return `<main class="app-shell">${topbar(f.label,`Stánky ${f.range}`)}<section class="section">
      <div class="floor-tabs">${Object.entries(floors).map(([k,v])=>`<button class="chip ${route.floor===k?'active':''}" data-map-floor="${k}">${v.label}</button>`).join('')}</div>
      <div class="map-card" style="margin-top:12px"><img src="${f.map}" alt="Plánek ${f.label} Zvoska Fest 2026"><button class="map-expand" data-expand-map aria-label="Zvětšit mapu">⛶</button></div>
      <h2 class="section-title">Vystavovatelé</h2>
      ${listHtml(list)}
    </section>${navHtml('map')}</main>`;
  }

  function filteredExhibitors(){
    const q=route.search.trim().toLocaleLowerCase('cs');
    return exhibitors.filter(e=>{
      const u=userData(e.id);
      if(route.filter==='visited'&&!u.visited)return false;
      if(route.filter==='unvisited'&&u.visited)return false;
      if(route.filter==='favorites'&&!u.favorite)return false;
      if(q && !(e.name.toLocaleLowerCase('cs').includes(q)||String(e.booth).includes(q)||e.zone.toLocaleLowerCase('cs').includes(q))) return false;
      return true;
    });
  }

  function exhibitorsHtml(){
    const list=filteredExhibitors();
    return `<main class="app-shell">${topbar('Vystavovatelé',`${exhibitors.length} stánků`)}<section class="section">
      <div class="search-wrap"><span class="search-icon">⌕</span><input id="search" class="search" type="search" autocomplete="off" placeholder="Hledat název nebo číslo stánku…" value="${esc(route.search)}"></div>
      <div class="filter-row" style="margin-top:12px">${[['all','Všichni'],['visited','Navštívení'],['unvisited','Nenavštívení'],['favorites',`Oblíbené${favoritesCount()?` (${favoritesCount()})`:''}`]].map(([k,l])=>`<button class="chip ${route.filter===k?'active':''}" data-filter="${k}">${l}</button>`).join('')}</div>
      <div style="margin-top:12px">${list.length?listHtml(list):'<div class="empty">Nic jsem nenašel.</div>'}</div>
    </section>${navHtml('exhibitors')}</main>`;
  }

  function listHtml(list){
    return `<div class="list">${list.map(e=>{
      const u=userData(e.id); const meta=[e.floor,e.zone].filter(Boolean).join(' · ');
      return `<article class="exhibitor-row"><div class="booth">${e.booth}</div><div class="exhibitor-main" data-detail="${e.id}" tabindex="0"><div class="exhibitor-name">${esc(e.name)}</div><div class="exhibitor-meta">${esc(meta)}</div></div><div class="row-actions"><button class="small-action ${u.visited?'checked':''}" data-visit="${e.id}" aria-label="${u.visited?'Označit jako nenavštívené':'Označit jako navštívené'}">${u.visited?'●':'○'}</button><button class="small-action ${u.favorite?'favorite':''}" data-fav="${e.id}" aria-label="Oblíbené">${u.favorite?'★':'☆'}</button></div></article>`;
    }).join('')}</div>`;
  }

  function detailHtml(){
    const e=exhibitors.find(x=>x.id===Number(route.id)); if(!e){navigate('exhibitors');return ''}
    const u=userData(e.id);
    return `<main class="app-shell">${topbar('Detail vystavovatele','',true)}<section class="section"><div class="detail-card">
      <div class="detail-head"><div class="detail-booth">${e.booth}</div><div><h2 class="detail-name">${esc(e.name)}</h2><div class="tags"><span class="tag">${esc(e.floor)}</span>${e.zone?`<span class="tag">${esc(e.zone)}</span>`:''}</div></div></div>
      <div class="detail-actions"><button class="big-toggle ${u.visited?'visited':''}" data-visit="${e.id}">${u.visited?'✓ Navštíveno':'○ Navštíveno'}</button><button class="big-toggle ${u.favorite?'fav':''}" data-fav="${e.id}">${u.favorite?'★ Oblíbené':'☆ Oblíbené'}</button></div>
      <label class="note-label" for="note">Moje poznámka</label><textarea id="note" class="note" maxlength="${MAX_NOTE}" placeholder="Co mě zde zaujalo…">${esc(u.note)}</textarea><div class="note-count"><span id="noteLen">${u.note.length}</span> / ${MAX_NOTE}</div>
    </div></section>${navHtml('exhibitors')}</main>`;
  }

  function notesHtml(){
    const notes=exhibitors.filter(e=>userData(e.id).note.trim());
    return `<main class="app-shell">${topbar('Moje poznámky',`${notes.length} ${notes.length===1?'vystavovatel':notes.length>=2&&notes.length<=4?'vystavovatelé':'vystavovatelů'}`)}<section class="section">
      ${notes.length?`<div class="notes-list">${notes.map(e=>{const u=userData(e.id);return `<article class="note-card"><div class="booth">${e.booth}</div><div><div class="exhibitor-name">${esc(e.name)}</div><div class="exhibitor-meta">${esc([e.floor,e.zone].filter(Boolean).join(' · '))}</div><p>${esc(u.note)}</p></div><div class="note-actions"><button data-detail="${e.id}" aria-label="Upravit">✎</button><button class="danger" data-delete-note="${e.id}" aria-label="Smazat poznámku">⌫</button></div></article>`}).join('')}</div><button class="export-btn" id="exportPdf">▤ &nbsp; Exportovat do PDF</button>`:'<div class="empty">Zatím nemáte žádné poznámky.<br>Otevřete vystavovatele a napište si, co vás zaujalo.</div>'}
    </section>${navHtml('notes')}</main>`;
  }

  function render(){
    let html='';
    if(route.view==='home')html=homeHtml();
    else if(route.view==='map')html=mapHtml();
    else if(route.view==='exhibitors')html=exhibitorsHtml();
    else if(route.view==='detail')html=detailHtml();
    else if(route.view==='notes')html=notesHtml();
    app.innerHTML=html;
    bind();
  }

  function bind(){
    document.querySelectorAll('[data-nav]').forEach(b=>b.onclick=()=>navigate(b.dataset.nav));
    document.querySelectorAll('[data-floor]').forEach(b=>b.onclick=()=>navigate('map',{floor:b.dataset.floor}));
    document.querySelectorAll('[data-map-floor]').forEach(b=>b.onclick=()=>navigate('map',{floor:b.dataset.mapFloor}));
    document.querySelectorAll('[data-detail]').forEach(el=>{
      const go=()=>navigate('detail',{id:Number(el.dataset.detail)}); el.onclick=go; el.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')go()};
    });
    document.querySelectorAll('[data-visit]').forEach(b=>b.onclick=e=>{e.stopPropagation();const id=Number(b.dataset.visit);updateData(id,{visited:!userData(id).visited});render();showToast(userData(id).visited?'Označeno jako navštívené':'Označení zrušeno')});
    document.querySelectorAll('[data-fav]').forEach(b=>b.onclick=e=>{e.stopPropagation();const id=Number(b.dataset.fav);updateData(id,{favorite:!userData(id).favorite});render();});
    document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{route.filter=b.dataset.filter;render()});
    document.querySelectorAll('[data-back]').forEach(b=>b.onclick=()=>navigate('exhibitors'));
    const search=document.getElementById('search'); if(search){search.oninput=e=>{route.search=e.target.value;const pos=e.target.selectionStart;render();const n=document.getElementById('search');n.focus();n.setSelectionRange(pos,pos)}}
    const note=document.getElementById('note'); if(note){note.oninput=e=>{const id=Number(route.id), val=e.target.value;updateData(id,{note:val});document.getElementById('noteLen').textContent=val.length}}
    const exp=document.querySelector('[data-expand-map]');if(exp)exp.onclick=()=>openMapFullscreen();
    document.querySelectorAll('[data-delete-note]').forEach(b=>b.onclick=()=>{const id=Number(b.dataset.deleteNote); if(confirm('Smazat tuto poznámku?')){updateData(id,{note:''});render();}});
    const pdf=document.getElementById('exportPdf'); if(pdf)pdf.onclick=exportPdf;
  }

  function openMapFullscreen(){
    const f=floors[route.floor]; const wrap=document.createElement('div');wrap.className='fullscreen';wrap.innerHTML=`<div class="fullscreen-head"><span>${esc(f.label)}</span><button class="fullscreen-close" aria-label="Zavřít">×</button></div><div class="fullscreen-body"><img src="${f.map}" alt="Plánek ${esc(f.label)}"></div>`;document.body.appendChild(wrap);wrap.querySelector('.fullscreen-close').onclick=()=>wrap.remove();wrap.onclick=e=>{if(e.target===wrap)wrap.remove()};
  }

  let toastTimer;
  function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),1800)}

  function wrapText(ctx,text,maxWidth){
    const paragraphs=String(text).split(/\n/); const lines=[];
    for(const p of paragraphs){
      if(!p){lines.push('');continue}
      const words=p.split(/\s+/); let line='';
      for(const w of words){const test=line?line+' '+w:w;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=w}else line=test}
      if(line)lines.push(line);
    }
    return lines;
  }

  async function exportPdf(){
    const items=exhibitors.filter(e=>userData(e.id).note.trim());
    if(!items.length){alert('Nejdříve si napište alespoň jednu poznámku.');return}
    showToast('Připravuji PDF…');
    try{
      await new Promise(r=>setTimeout(r,50));
      const canvases=renderPdfCanvases(items);
      const jpegPages=[];
      for(const c of canvases){const url=c.toDataURL('image/jpeg',.9);jpegPages.push(dataUrlToBytes(url));}
      const blob=buildPdfFromJpegs(jpegPages,1240,1754);
      const url=URL.createObjectURL(blob); const a=document.createElement('a');a.href=url;a.download='zvoska-fest-2026-moje-poznamky.pdf';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);showPdfSuccess();
    }catch(err){console.error(err);alert('PDF se nepodařilo vytvořit. Zkuste to prosím znovu.');}
  }

  function renderPdfCanvases(items){
    const W=1240,H=1754,M=84, blue='#0b47b7', ink='#062a69', yellow='#ffd61a', muted='#62718a';
    const pages=[]; let c,ctx,y;
    function newPage(){c=document.createElement('canvas');c.width=W;c.height=H;ctx=c.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);ctx.fillStyle=blue;ctx.fillRect(0,0,W,235);ctx.fillStyle='#fff';ctx.font='900 62px Arial, sans-serif';ctx.fillText('ZVOSKA FEST 2026',M,92);ctx.font='700 34px Arial, sans-serif';ctx.fillText('Moje poznámky',M,150);ctx.font='600 25px Arial, sans-serif';ctx.fillText('22. 9. 2026 · GONG OSTRAVA',M,195);y=300;pages.push(c)}
    newPage();
    for(const e of items){
      const u=userData(e.id);ctx.font='700 30px Arial, sans-serif';const noteLines=wrapText(ctx,u.note,W-M*2-20);const need=125+noteLines.length*42;
      if(y+need>H-90)newPage();
      ctx.fillStyle=yellow;roundRect(ctx,M,y,74,74,16);ctx.fill();ctx.fillStyle=ink;ctx.font='900 35px Arial, sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(String(e.booth),M+37,y+37);ctx.textAlign='left';ctx.textBaseline='alphabetic';
      ctx.fillStyle=ink;ctx.font='900 30px Arial, sans-serif';const nameLines=wrapText(ctx,e.name,W-M*2-110);nameLines.slice(0,2).forEach((line,i)=>ctx.fillText(line,M+98,y+32+i*34));
      const nameH=Math.max(1,Math.min(2,nameLines.length))*34;ctx.fillStyle=muted;ctx.font='700 22px Arial, sans-serif';ctx.fillText([e.floor,e.zone].filter(Boolean).join(' · '),M+98,y+nameH+36);
      y+=Math.max(90,nameH+58);ctx.fillStyle='#eef3f8';roundRect(ctx,M,y,W-M*2,16+noteLines.length*42+14,14);ctx.fill();ctx.fillStyle='#25466f';ctx.font='500 28px Arial, sans-serif';let ty=y+42;noteLines.forEach(line=>{ctx.fillText(line,M+22,ty);ty+=42});y=ty+32;
      ctx.fillStyle='#dbe3ee';ctx.fillRect(M,y,W-M*2,2);y+=34;
    }
    return pages;
  }
  function roundRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.roundRect?ctx.roundRect(x,y,w,h,r):(ctx.rect(x,y,w,h));}
  function dataUrlToBytes(dataUrl){const b64=dataUrl.split(',')[1],bin=atob(b64),out=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)out[i]=bin.charCodeAt(i);return out}
  function buildPdfFromJpegs(images,w,h){
    const enc=new TextEncoder(), parts=[], offsets=[0]; let len=0;
    const add=s=>{const b=typeof s==='string'?enc.encode(s):s;parts.push(b);len+=b.length};
    add('%PDF-1.4\n%âãÏÓ\n');
    const n=2+images.length*3;
    function obj(num,bodyParts){offsets[num]=len;add(`${num} 0 obj\n`);bodyParts();add('\nendobj\n')}
    obj(1,()=>add('<< /Type /Catalog /Pages 2 0 R >>'));
    const kids=[];for(let i=0;i<images.length;i++)kids.push(`${3+i*3} 0 R`);
    obj(2,()=>add(`<< /Type /Pages /Count ${images.length} /Kids [ ${kids.join(' ')} ] >>`));
    for(let i=0;i<images.length;i++){
      const p=3+i*3, cont=p+1, img=p+2, jpeg=images[i];
      obj(p,()=>add(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 ${img} 0 R >> >> /Contents ${cont} 0 R >>`));
      const stream='q\n595.28 0 0 841.89 0 0 cm\n/Im0 Do\nQ\n';
      obj(cont,()=>{add(`<< /Length ${enc.encode(stream).length} >>\nstream\n`);add(stream);add('endstream')});
      obj(img,()=>{add(`<< /Type /XObject /Subtype /Image /Width ${w} /Height ${h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`);add(jpeg);add('\nendstream')});
    }
    const xref=len;add(`xref\n0 ${n+1}\n0000000000 65535 f \n`);for(let i=1;i<=n;i++)add(String(offsets[i]).padStart(10,'0')+' 00000 n \n');add(`trailer\n<< /Size ${n+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`);
    return new Blob(parts,{type:'application/pdf'});
  }

  function showPdfSuccess(){
    const o=document.createElement('div');o.className='pdf-overlay';o.innerHTML=`<div class="pdf-success"><div class="pdf-icon">▤</div><h2>PDF je připraveno!</h2><p>Soubor byl vygenerován přímo ve vašem telefonu.</p><div class="pdf-file">zvoska-fest-2026-moje-poznamky.pdf</div><button class="pdf-close">Zavřít</button></div>`;document.body.appendChild(o);o.querySelector('.pdf-close').onclick=()=>o.remove();
  }

  if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
  render();
})();
