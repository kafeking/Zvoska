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

  const exhibitorDescriptions = {
  "1": "Profesionální chladicí a mrazicí technika, vitríny a gastro vybavení pro restaurace, hotely, obchody a další komerční provozy.",
  "2": "Rýže, luštěniny, koření, těstoviny, rajčatové výrobky, ajvary a další potraviny značek Lagris a Podravka.",
  "3": "Výrobce balených baget, sendvičů a chlazeného rychlého občerstvení.",
  "4": "Dodavatel potravin a surovin pro gastronomii a maloobchod.",
  "5": "Výrobce a distributor balených potravin – koření, bujóny, hotová jídla, masné výrobky, paštiky, zelenina a další značkové produkty.",
  "6": "Foodservice portfolio pro profesionální kuchyně – omáčky, dochucovadla, ingredience, hotová řešení a zmrzlinový sortiment.",
  "7": "Krabičky, obaly a jednorázové gastro balení pro jídlo, catering a rozvoz.",
  "8": "Široké portfolio potravin a nápojů – káva, čokoláda a cukrovinky, cereálie, kulinářské výrobky a další značky Nestlé.",
  "9": "Mléčné ingredience a výrobky pro retail i foodservice, včetně sýrů, smetany a dalších mléčných specialit.",
  "10": "Dovoz a velkoobchodní prodej mražených, chlazených a čerstvých ryb a mořských plodů.",
  "11": "Koncentráty PURENA pro džusy, limonády a nektary, ovocná pyré a nápojové systémy pro HoReCa.",
  "12": "Dodavatel potravinářských výrobků a surovin pro gastronomii.",
  "13": "Import, zastoupení a distribuce zahraničních výrobců potravin pro velkoobchod, retail a gastronomii.",
  "14": "Čaje – bylinné, ovocné, černé, zelené a další směsi pro retail i gastro.",
  "15": "Výrobce jogurtů, čerstvých sýrů, jogurtových nápojů, smoothies a dalších mléčných výrobků.",
  "16": "Mléčné výrobky značky Tatra – mléko, smetana, máslo, tvaroh, kondenzovaná mléka a gastro sortiment.",
  "17": "Sýry a mléčné výrobky značek Président, Galbani a dalších značek skupiny Lactalis.",
  "18": "Jednorázové nádobí, obaly, spotřební hygiena a stolní dekorace pro gastronomii.",
  "19": "Brambory, zelenina a zpracované bramborové či zeleninové polotovary pro gastronomii.",
  "20": "Ovocné a bylinné sirupy, limonádové a kávové sirupy pro domácí i profesionální použití.",
  "21": "Značka YUZEE – prémiové ovocné produkty a koncentráty z yuzu, maracuji, zázvoru, citronu a dalších citrusů pro nápoje a pokrmy.",
  "22": "Profesionální osvěžovače vzduchu, hygienické zásobníky a čisticí chemie.",
  "23": "Ovocné a zeleninové šťávy, mošty a nápoje z českého ovoce.",
  "24": "Polykarbonátové a akrylátové desky, plastové materiály a zakázkové zpracování včetně CNC.",
  "25": "Drogerie, čisticí a hygienické výrobky a distribuce spotřebních značek skupiny AC Marca.",
  "26": "Potravinářské značky Heinz – kečupy, omáčky, majonézy a další dochucovadla pro retail a gastro.",
  "27": "Profesionální praní, mytí nádobí, úklid a čisticí systémy včetně řešení P&G Professional.",
  "28": "Výrobce průmyslové papírové hygieny a hygienických řešení pro profesionální provozy.",
  "29": "Sirupy, nápojové koncentráty a řešení pro přípravu nealkoholických nápojů.",
  "30": "Mléčné výrobky a rostlinné alternativy – jogurty, dezerty a nápoje značek Danone a Alpro.",
  "31": "Aperitiv pro přípravu spritzu a dalších míchaných nápojů v italském stylu.",
  "32": "Pekařské výrobky – chleby, pečivo, croissanty, snacky, dorty a dezerty, včetně sortimentu k dopeku.",
  "33": "Donuty, koblihy, muffiny, cookies a další sladké pekařské výrobky.",
  "34": "Zmrzliny značek Magnum, Algida a další zmrzlinový sortiment pro gastro a maloobchod.",
  "35": "Mražené dorty, cheesecaky, muffiny a porcované dezerty pro foodservice.",
  "36": "Import a distribuce sladkého a slaného pečiva, cukrovinek a značkových potravin.",
  "37": "Káva Nespresso, profesionální kávové systémy a kapslová řešení pro HoReCa a kanceláře.",
  "38": "Profesionální gastronomická technika, projekce gastro provozů, servis a náhradní díly.",
  "39": "Mražené a předpečené pečivo, croissanty a sladké i slané pekařské výrobky pro foodservice.",
  "40": "Mražené dorty, řezy, cheesecaky a další prémiové cukrářské dezerty.",
  "41": "Zelenina a luštěniny – konzervované, mražené i připravené produkty pro retail a gastronomii.",
  "42": "Zdravé snacky Bombus – RAW a proteinové tyčinky, ovocné bonbony, kaše, sirupy a proteinové produkty.",
  "43": "Sýry a mléčné speciality značek Veselá kráva, Želetava, Smetanito, Gervais, Babybel a Kiri.",
  "44": "Výrobce masa a uzenin – šunky, salámy, uzená masa, krájené výrobky a speciality.",
  "45": "Dodavatel potravin a gastro sortimentu pro profesionální provozy.",
  "46": "Koření, kořenicí směsi, tekutá dochucovadla a další produkty pro přípravu, ochucení a dekoraci jídel.",
  "47": "Čerstvé a zpracované maso a masné výrobky pro gastronomii.",
  "48": "Moravské rodinné vinařství z Velkých Bílovic – vína z vlastních vinic a tradičních odrůd.",
  "49": "Rakouské rodinné vinařství z Weinviertelu, známé zejména Grüner Veltlinerem a dalšími odrůdovými víny.",
  "50": "Moravské vinařství – tichá a šumivá vína pro gastronomii i maloobchod.",
  "51": "Import a distribuce asijských, arabských, afrických a karibských potravin a značek.",
  "52": "Profesionální gastro vybavení a inventář pro kuchyně, restaurace a catering.",
  "53": "Farma a B2B dodavatel čerstvé sezónní zeleniny a dalších zemědělských produktů.",
  "54": "Polský výrobce masných výrobků, specializovaný zejména na různé druhy slaniny a baconu.",
  "55": "Hovězí burgerové placky, mleté maso, sous-vide maso a doplňky pro burgerové provozy.",
  "56": "Strouhanka, obalovací směsi, krutony a další pekařské ingredience pro kuchyně a potravinářství.",
  "57": "Omáčky a dochucovadla – kečupy, hořčice, majonézy, dresinky a gastro balení.",
  "58": "Dovoz a distribuce vín pro gastronomii a specializovaný trh.",
  "59": "Vegetariánské snacky a předkrmy – cibulové kroužky, sýrové a zeleninové bites a další finger food.",
  "60": "Mražené ryby, hotová jídla, zelenina, bylinky a snacky.",
  "61": "Mražená zelenina, ovoce, bylinky a připravené zeleninové směsi pro profesionální kuchyně.",
  "62": "Sýry a mléčné speciality značek Lučina, Král Sýrů, Sedlčanský Hermelín, Pribináček, Apetito a Liptov.",
  "63": "Český výrobce masa a uzenin – šunky, salámy, párky a další masné výrobky.",
  "64": "Zpracování drůbežího masa a drůbeží výrobky pro retail a gastronomii.",
  "65": "Distribuce potravin a surovin pro gastronomii.",
  "66": "Mražené burgery a masné convenience produkty – kuřecí stripsy, křídla, kebab a další sortiment.",
  "67": "Dodavatel potravin a surovin pro profesionální gastronomii.",
  "68": "Mražená zelenina a ovoce, zeleninové směsi, hotová jídla, polévky a další mražený sortiment.",
  "69": "Italský mlýn a výrobce profesionálních mouk pro pizzu, pečivo, cukrařinu a čerstvé těstoviny.",
  "70": "Tradiční italské uzeniny – prosciutto, mortadella, salámy, vařené šunky, pancetta a další speciality.",
  "71": "Italské sýry – Grana Padano, Parmigiano Reggiano, mozzarella, ricotta, provolone, gorgonzola a další.",
  "72": "Italská rýže a specializované druhy pro risotto a profesionální gastronomii.",
  "73": "Hluboce zmrazené čerstvé těstoviny, gnocchi, ravioli a další italské pasta speciality.",
  "74": "Italská cukrařina a gelato – mražené dezerty, monoporce, cheesecake a snídaňové pečivo pro foodservice.",
  "75": "Pesta, omáčky, olivy, nakládaná zelenina a další italské konzervované speciality a dochucovadla.",
  "76": "Italské jedlé oleje – olivové a další rostlinné oleje pro retail a gastronomii.",
  "77": "Vinařství z regionu Veneto zaměřené mimo jiné na Prosecco a další italská šumivá i tichá vína.",
  "78": "Dodavatel mražených ryb a mořských plodů pro gastronomii a maloobchod.",
  "79": "Hovězí maso a steakový sortiment pro profesionální gastronomii.",
  "80": "Pudingy, škroby, dezertní a pekařské směsi a další suché potravinářské výrobky.",
  "81": "Potraviny a suroviny pro profesionální gastronomii, zejména suchý a doplňkový sortiment.",
  "82": "Gastro suroviny a potravinářský sortiment pro profesionální kuchyně.",
  "83": "Čerstvá zelenina, ovoce a zelinářský sortiment pro gastronomii."
};
  exhibitors.forEach(e => { e.description = exhibitorDescriptions[e.id] || ''; });

  const floors = {
    ground:{label:'Přízemí',range:'1–9',map:'map-prizemi.png'},
    first:{label:'1. patro',range:'10–40',map:'map-1patro.png'},
    second:{label:'2. patro',range:'41–83',map:'map-2patro.png'}
  };


  // Klikací body stánků v původních pixelech jednotlivých plánků.
  // Na webu se převádějí na procenta, takže zůstávají na místě při libovolném zoomu.
  const mapSpots = {
    ground:{w:510,h:520,spots:{
      1:[440,313],2:[340,340],3:[315,340],4:[394,374],5:[369,392],6:[339,408],7:[286,422],8:[257,424],9:[226,424]
    }},
    first:{w:505,h:495,spots:{
      10:[320,256],11:[339,250],12:[336,224],13:[319,215],14:[287,183],15:[276,174],16:[265,164],17:[244,156],
      18:[184,200],19:[169,200],20:[153,218],21:[153,239],22:[153,260],23:[174,279],24:[187,279],
      25:[230,296],26:[242,311],27:[263,310],28:[278,300],29:[230,223],30:[294,290],31:[220,130],
      32:[226,68],33:[204,85],34:[309,44],35:[176,47],36:[159,55],37:[143,65],38:[105,104],39:[138,111],40:[162,111]
    }},
    second:{w:510,h:485,spots:{
      41:[189,352],42:[206,352],43:[223,354],44:[242,352],45:[260,354],46:[279,352],47:[296,352],48:[313,352],49:[331,352],50:[349,352],51:[364,352],
      52:[161,248],53:[272,128],54:[272,143],
      55:[289,182],56:[289,202],57:[289,221],58:[289,240],59:[289,260],60:[289,280],61:[289,299],
      62:[315,299],63:[315,280],64:[315,260],65:[315,240],66:[315,182],67:[315,202],68:[315,221],
      69:[363,172],70:[363,189],71:[363,206],72:[363,223],73:[363,240],74:[363,257],75:[363,274],76:[363,291],77:[363,306],
      78:[184,230],79:[200,218],80:[216,205],81:[232,193],82:[248,181],83:[263,168]
    }}
  };

  let mapZoom = 1.00;

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
    const items=[['home','⌂','Domů'],['map','▧','Mapa'],['search','search','Hledat'],['exhibitors','▦','Vystavovatelé'],['notes','▤','Poznámky']];
    return `<nav class="bottom-nav" aria-label="Hlavní navigace">${items.map(([v,ic,l])=>`<button class="nav-btn ${active===v?'active':''}" data-nav="${v}"><span class="nav-icon">${ic==='search'?'<i class="magnifier" aria-hidden="true"></i>':ic}</span><span>${l}${v==='notes'&&noteCount()?` · ${noteCount()}`:''}</span></button>`).join('')}</nav>`;
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

  function mapStageHtml(floorKey, fullscreen=false){
    const f=floors[floorKey], data=mapSpots[floorKey];
    const width=Math.round(data.w*mapZoom);
    const markers=Object.entries(data.spots).map(([booth,[x,y]])=>{
      const e=exhibitors.find(v=>v.booth===Number(booth));
      if(!e)return '';
      const u=userData(e.id);
      const left=(x/data.w*100).toFixed(3), top=(y/data.h*100).toFixed(3);
      return `<button class="map-hotspot ${u.visited?'visited':''} ${u.favorite?'favorite':''}" style="left:${left}%;top:${top}%" data-map-booth="${booth}" aria-label="Stánek ${booth} – ${esc(e.name)}" title="${esc(e.name)}">${booth}</button>`;
    }).join('');
    return `<div class="map-viewport ${fullscreen?'map-viewport-full':''}" data-map-viewport>
      <div class="map-stage" data-map-stage style="width:${width}px">
        <img src="${f.map}" alt="Interaktivní plánek ${esc(f.label)} Zvoska Fest 2026" draggable="false">
        ${markers}
      </div>
    </div>`;
  }

  function mapHtml(){
    const f=floors[route.floor];
    const list=exhibitors.filter(e=>e.floor===f.label);
    return `<main class="app-shell">${topbar(f.label,`Stánky ${f.range}`)}<section class="section">
      <div class="floor-tabs">${Object.entries(floors).map(([k,v])=>`<button class="chip ${route.floor===k?'active':''}" data-map-floor="${k}">${v.label}</button>`).join('')}</div>
      <div class="map-card interactive" style="margin-top:12px">
        <div class="map-tools"><div><strong>Klikni na číslo stánku</strong><span> · mapu posouvej prstem</span></div><div class="zoom-tools"><button data-zoom-out aria-label="Oddálit mapu">−</button><span>${Math.round(mapZoom*100)} %</span><button data-zoom-in aria-label="Přiblížit mapu">+</button></div></div>
        ${mapStageHtml(route.floor)}
        <button class="map-expand" data-expand-map aria-label="Mapa přes celou obrazovku">⛶</button>
      </div>
      <div class="map-legend"><span><i class="legend-dot"></i> stánek</span><span><i class="legend-dot visited"></i> navštíveno</span></div>
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

  function searchHtml(){
    const q=route.search.trim().toLocaleLowerCase('cs');
    const list=q ? exhibitors.filter(e=>e.name.toLocaleLowerCase('cs').includes(q)||String(e.booth).includes(q)) : [];
    return `<main class="app-shell">${topbar('Hledat','Název firmy nebo číslo stánku')}<section class="section">
      <div class="search-wrap search-page"><span class="search-icon">⌕</span><input id="search" class="search" type="search" inputmode="search" autocomplete="off" placeholder="Např. Nespresso nebo 37…" value="${esc(route.search)}"></div>
      <div style="margin-top:14px">${q ? (list.length?listHtml(list):'<div class="empty">Nic jsem nenašel.</div>') : '<div class="empty search-hint">Začněte psát název vystavovatele nebo číslo stánku.</div>'}</div>
    </section>${navHtml('search')}</main>`;
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
    const detailNav=['map','search','exhibitors','notes'].includes(route.backView)?route.backView:'exhibitors';
    return `<main class="app-shell">${topbar('Detail vystavovatele','',true)}<section class="section"><div class="detail-card">
      <div class="detail-head"><div class="detail-booth">${e.booth}</div><div><h2 class="detail-name">${esc(e.name)}</h2><div class="tags"><span class="tag">${esc(e.floor)}</span>${e.zone?`<span class="tag">${esc(e.zone)}</span>`:''}</div></div></div>
      <div class="detail-actions"><button class="big-toggle ${u.visited?'visited':''}" data-visit="${e.id}">${u.visited?'✓ Navštíveno':'○ Navštíveno'}</button><button class="big-toggle ${u.favorite?'fav':''}" data-fav="${e.id}">${u.favorite?'★ Oblíbené':'☆ Oblíbené'}</button></div>
      <div class="exhibitor-about"><div class="about-title">Zaměření</div><p>${esc(e.description)}</p></div>
      <label class="note-label" for="note">Moje poznámka</label><textarea id="note" class="note" maxlength="${MAX_NOTE}" placeholder="Co mě zde zaujalo…">${esc(u.note)}</textarea><div class="note-count"><span id="noteLen">${u.note.length}</span> / ${MAX_NOTE}</div>
    </div></section>${navHtml(detailNav)}</main>`;
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
    else if(route.view==='search')html=searchHtml();
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
      const go=()=>navigate('detail',{id:Number(el.dataset.detail),backView:route.view,backFloor:route.floor}); el.onclick=go; el.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')go()};
    });
    document.querySelectorAll('[data-visit]').forEach(b=>b.onclick=e=>{e.stopPropagation();const id=Number(b.dataset.visit);updateData(id,{visited:!userData(id).visited});render();showToast(userData(id).visited?'Označeno jako navštívené':'Označení zrušeno')});
    document.querySelectorAll('[data-fav]').forEach(b=>b.onclick=e=>{e.stopPropagation();const id=Number(b.dataset.fav);updateData(id,{favorite:!userData(id).favorite});render();});
    document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{route.filter=b.dataset.filter;render()});
    document.querySelectorAll('[data-back]').forEach(b=>b.onclick=()=>navigate(route.backView||'exhibitors',{floor:route.backFloor||route.floor}));
    const search=document.getElementById('search'); if(search){search.oninput=e=>{route.search=e.target.value;const pos=e.target.selectionStart;render();const n=document.getElementById('search');n.focus({preventScroll:true});n.setSelectionRange(pos,pos)}; if(route.view==='search'&&!route.search)requestAnimationFrame(()=>search.focus({preventScroll:true}))}
    const note=document.getElementById('note'); if(note){note.oninput=e=>{const id=Number(route.id), val=e.target.value;updateData(id,{note:val});document.getElementById('noteLen').textContent=val.length}}
    bindInteractiveMap(document);
    const exp=document.querySelector('[data-expand-map]');if(exp)exp.onclick=()=>openMapFullscreen();
    document.querySelectorAll('[data-delete-note]').forEach(b=>b.onclick=()=>{const id=Number(b.dataset.deleteNote); if(confirm('Smazat tuto poznámku?')){updateData(id,{note:''});render();}});
    const pdf=document.getElementById('exportPdf'); if(pdf)pdf.onclick=exportPdf;
  }

  function bindInteractiveMap(root){
    root.querySelectorAll('[data-map-booth]').forEach(b=>b.onclick=e=>{
      e.stopPropagation();
      navigate('detail',{id:Number(b.dataset.mapBooth),backView:'map',backFloor:route.floor});
    });
    const zin=root.querySelector('[data-zoom-in]'), zout=root.querySelector('[data-zoom-out]');
    if(zin)zin.onclick=()=>changeMapZoom(.25);
    if(zout)zout.onclick=()=>changeMapZoom(-.25);
    const vp=root.querySelector('[data-map-viewport]');
    if(vp && !vp.dataset.centered){
      vp.dataset.centered='1';
      requestAnimationFrame(()=>{
        vp.scrollLeft=Math.max(0,(vp.scrollWidth-vp.clientWidth)/2);
        vp.scrollTop=Math.max(0,(vp.scrollHeight-vp.clientHeight)/2);
      });
    }
  }

  function changeMapZoom(delta){
    mapZoom=Math.max(1.00,Math.min(2.65,Math.round((mapZoom+delta)*100)/100));
    render();
  }

  function openMapFullscreen(){
    const f=floors[route.floor];
    const wrap=document.createElement('div');
    wrap.className='fullscreen';
    wrap.innerHTML=`<div class="fullscreen-head"><span>${esc(f.label)} · klikni na číslo stánku</span><div class="fullscreen-actions"><div class="zoom-tools dark"><button data-full-zoom-out aria-label="Oddálit">−</button><span data-full-zoom-label>${Math.round(mapZoom*100)} %</span><button data-full-zoom-in aria-label="Přiblížit">+</button></div><button class="fullscreen-close" aria-label="Zavřít">×</button></div></div><div class="fullscreen-body" data-full-body>${mapStageHtml(route.floor,true)}</div>`;
    document.body.appendChild(wrap);
    const body=wrap.querySelector('[data-full-body]');
    const rerender=()=>{
      body.innerHTML=mapStageHtml(route.floor,true);
      wrap.querySelector('[data-full-zoom-label]').textContent=`${Math.round(mapZoom*100)} %`;
      bindInteractiveMap(body);
    };
    wrap.querySelector('[data-full-zoom-in]').onclick=()=>{mapZoom=Math.min(2.65,Math.round((mapZoom+.25)*100)/100);rerender()};
    wrap.querySelector('[data-full-zoom-out]').onclick=()=>{mapZoom=Math.max(1.00,Math.round((mapZoom-.25)*100)/100);rerender()};
    wrap.querySelector('.fullscreen-close').onclick=()=>wrap.remove();
    bindInteractiveMap(body);
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
