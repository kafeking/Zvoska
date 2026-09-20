ZVOSKA FEST 2026 — mobilní PWA

Obsah:
- 83 vystavovatelů
- mapa přízemí, 1. patra a 2. patra
- vyhledávání a filtry
- Navštíveno / Oblíbené
- automatické ukládání poznámek do localStorage
- export poznámek do PDF bez serveru
- offline režim přes service worker

NASAZENÍ
Nahrajte celý obsah této složky na HTTPS hosting tak, aby index.html byl v kořeni.
PWA/service worker fungují na HTTPS nebo localhostu; ne při prostém otevření index.html přes file://.

Doporučené bezplatné nasazení:
- Netlify Drop: přetáhnout celou složku/ZIP po rozbalení
- Cloudflare Pages
- Vercel

Před zveřejněním doporučujeme ručně zkontrolovat přepis názvů vystavovatelů proti oficiálnímu seznamu, protože zdrojem byly fotografie plánků.


VERZE 3:
- mapy jsou přiblížené a posuvné prstem
- všechna čísla stánků 1–83 mají velké klikací body
- klepnutí na číslo otevře detail vystavovatele
- zelený bod = navštíveno
- zoom +/- a celoobrazovková interaktivní mapa

VERZE V4
- samostatná ikona Hledat ve spodní navigaci
- rychlá vyhledávací obrazovka
- stručné zaměření u všech 83 vystavovatelů podle veřejně dostupných informací


VERZE V5:
- mapy mají 3× vyšší pixelové rozlišení (PNG)
- výchozí zoom mapy je 100 %
- minimální zoom mapy je 100 %
- přiblížení zůstává až do 265 %
