var w=Object.defineProperty;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var T=(e,r,a)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,v=(e,r)=>{for(var a in r||(r={}))F.call(r,a)&&T(e,a,r[a]);if(p)for(var a of p(r))S.call(r,a)&&T(e,a,r[a]);return e};import{h as l}from"./vendor.js";var C=[{code:"AT",name:{de:"\xD6sterreich",en:"Austria"}},{code:"BE",name:{de:"Belgien",en:"Belgium"}},{code:"BG",name:{de:"Bulgarien",en:"Bulgaria"}},{code:"CH",name:{de:"Schweiz",en:"Switzerland"}},{code:"CY",name:{de:"Zypern",en:"Cyprus"}},{code:"CZ",name:{de:"Tschechien",en:"Czechia"}},{code:"DE",name:{de:"Deutschland",en:"Germany"}},{code:"DK",name:{de:"D\xE4nemark",en:"Denmark"}},{code:"EE",name:{de:"Estland",en:"Estonia"}},{code:"GR",name:{de:"Griechenland",en:"Greece"}},{code:"ES",name:{de:"Spanien",en:"Spain"}},{code:"FI",name:{de:"Finnland",en:"Finland"}},{code:"FR",name:{de:"Frankreich",en:"France"}},{code:"HR",name:{de:"Kroatien",en:"Croatia"}},{code:"HU",name:{de:"Ungarn",en:"Hungary"}},{code:"IS",name:{de:"Island",en:"Iceland"}},{code:"IT",name:{de:"Italien",en:"Italy"}},{code:"LT",name:{de:"Litauen",en:"Lithuania"}},{code:"LU",name:{de:"Luxemburg",en:"Luxemburg"}},{code:"LV",name:{de:"Lettland",en:"Latvia"}},{code:"MT",name:{de:"Malta",en:"Malta"}},{code:"NL",name:{de:"Niederlande",en:"Netherlands"}},{code:"NO",name:{de:"Norwegen",en:"Norway"}},{code:"PL",name:{de:"Polen",en:"Poland"}},{code:"PT",name:{de:"Portugal",en:"Portugal"}},{code:"RO",name:{de:"Rom\xE4nien",en:"Romania"}},{code:"SE",name:{de:"Schweden",en:"Sweden"}},{code:"SI",name:{de:"Slovenien",en:"Slovenia"}},{code:"SK",name:{de:"Slovakei",en:"Slovakia"}},{code:"GB",name:{de:"Vereinigtes K\xF6nigreich",en:"United Kingdom"}},{code:"FX",name:{de:"Frontex",en:"Frontex"},hint:{de:"Posten, die Frontex mit Eigenkaptial erworben hat",en:"Assets Frontex bought with its capital"}}];const E={ofAll:{en:"of all assets",de:"aller Lieferungen"},providedInTotal:{en:"provided",de:"bereitgestellt"}},L={en:"Contributions of $country to Frontex from 2015 to 2020",de:"Lieferungen von $country an Frontex von 2015 bis 2020"},x={en:"Source: Frontex Annual Implementation Reports, 2015 - 2020",de:"Quelle: Frontex Annual Implementation Reports, 2015 - 2020"},z={en:"contributions from 2015 to 2020",de:"Lieferungen zwischen 2015 und 2020"},I={officers:{title:{en:"officers",de:"Polizeibeamte"},description:{en:"Officers who implement Frontex border control operations, as well as deportations coordinated by Frontex. Profiles include Border Surveillance Officers, Return (deportation) Escorts, and Liaison Officers.",de:"Beamte, die Grenzontrollen und Abschiebungen im Auftrag von Frontex durchf\xFChren. Dies beinhaltet Grenzbeamte, Abschiebungsbeamte sowie Verbindungsoffiziere."}},detectors:{title:{en:"human presence detectors",de:"Personenerkennungssensoren"},description:{en:'Heartbeat Detectors <a href="https://ted.europa.eu/udl?uri=TED:NOTICE:369932-2017:TEXT:EN:HTML&tabId=1">are used</a> by Frontex to \u201Cenable precise detection of human beings hidden in stationary vehicles\u201D. Carbon Dioxide Detectors <a href="https://ted.europa.eu/udl?uri=TED:NOTICE:369932-2017:TEXT:EN:HTML&tabId=1">are used</a> by Frontex \u201Cfor the measurement of the existing CO2 concentration in a closed volume for the detection of people hiding in confined spaces such as trailers, rooms and vehicles (monitoring the CO2 concentration of human exhaled air).\u201D',de:'Herzschlag-Sensoren <a href="https://ted.europa.eu/udl?uri=TED:NOTICE:369932-2017:TEXT:EN:HTML&tabId=1">werden von Frontex genutzt</a>, um die \u201Epr\xE4zise Erkennung von versteckten Menschen in Fahrzeugen zu erm\xF6glichen\u201F. Kohlenstoffdioxid-Sensoren <a href="https://ted.europa.eu/udl?uri=TED:NOTICE:369932-2017:TEXT:EN:HTML&tabId=1">werden von Frontex genutzt</a>, \u201Ef\xFCr die Messung der CO2-Konzentration in einem geschlossenen Raum, um Menschen, die sich etwa in Anh\xE4ngern, R\xE4umen und Fahrzeugen verstecken, zu erkennen\u201F'}},dogTeam:{title:{en:"dog teams",de:"Hundestaffeln"},description:{en:"",de:""}},vessels:{title:{en:"vessels",de:"Schiffe"},description:{en:'Vessels used for border control operations at sea. For example, <a href="https://fdra-naval.blogspot.com/2013/07/opv-clase-rio-segura-espana.html">Spanish OPV Rio Segura</a>, which was used by Frontex for its operation in the Central Mediterranean before the agency pulled all maritime assets from the area.',de:'Schiffe und Boote werden f\xFCr Grenzkontrolleins\xE4tze auf dem Meer verwendet. Zum Beispiel das spanische Schiff <a href="https://fdra-naval.blogspot.com/2013/07/opv-clase-rio-segura-espana.html">OPV Rio Segura</a>, welches von Frontex im Mittelmeer genutzt wurde, bis im Gebiet alle Wasserfahrzeuge zur\xFCckgezogen wurden.'}},aircrafts:{title:{en:"aircrafts",de:"Flugzeuge"},description:{en:'used for surveillance purposes, both at land and at sea. For example, <a href="https://twitter.com/scandura/status/1206277807824867330?lang=es">the Frontex-leased OSPREY1 aircraft</a>, which is routinely deployed by Frontex in the Central Mediterranean and has been linked to pullbacks in cooperation with the so-called Libyan Coast Guard.',de:'Sowohl an Land als auch auf See werden Flugzeuge zu \xDCberwachungszwecken eingesetzt. Ein Beispiel ist das von <a href="https://twitter.com/scandura/status/1206277807824867330">Frontex verwendete Flugzeug OSPREY1</a> , welches regelm\xE4\xDFig bei Eins\xE4tzen im Mittelmeer verwendet und mit Pushbacks in Kooperation mit der sogenannten Libyschen K\xFCstenwache in Verbindung gebracht wurde.'}},patrolCar:{title:{en:"patrol cars",de:"Streifenwagen"},description:{en:"Cars used for land border patrolling. Patrol cars were also the first mid-sized asset purchased by the agency.",de:"Fahrzeuge, die an Land f\xFCr Grenzkontrollen verwendet werden. Streifenwagen waren auch die ersten mittelgro\xDFen Fahrzeuge, die von der Agentur gekauft wurden."}}};var O={stats:E,shareText:L,attribution:x,description:z,groups:I};let o,n,R,k;function N(e=document.documentElement.lang==="de"?"de":"en"){o=e,n=o==="de"?"de-DE":"en-US",R=new Intl.NumberFormat(n).format,k=new Intl.NumberFormat(n,{style:"percent",maximumFractionDigits:1,minimumFractionDigits:1}).format}N();C.sort((e,r)=>e.name[o]<r.name[o]?-1:1);function P(e){if(e==="FX")return"\u{1F1EA}\u{1F1FA}";const r=e.toUpperCase().split("").map(a=>127397+a.charCodeAt());return String.fromCodePoint(...r)}function A(e){return e.name[o]}function Ce(e){return`${P(e.code)} ${A(e)}`}function u(e){return e.reduce((r,a)=>{var t;for(let s in a)r[s]=((t=r[s])!=null?t:0)+a[s];return r},{})}function i(...e){return[...e,o].reduce((r,a)=>r==null?void 0:r[a],O)}function ue(e,r){const a=()=>{const t=i("groups",e,"title");r.querySelector("h5").innerText=t.charAt(0).toUpperCase()+t.slice(1);const s=r.querySelector("p");s.innerHTML=i("groups",e,"description"),s.querySelectorAll("a").forEach(c=>{c.setAttribute("target","_blank"),c.setAttribute("rel","noopener noreferrer")})};return i("groups",e,"description")?l("button",{class:"btn btn-sm btn-light ml-2","data-toggle":"modal","data-target":`#${r.id}`,onClick:a},l("i",{class:"fa fa-info"}),l("span",{class:"sr-only"},"More information...")):void 0}function G(e){var a;return`${window.dataAssets||((a=document.querySelector("script[data-assets]"))==null?void 0:a.dataset.assets)}assets/countries/${e.code}-${o}.png`}var y;const he=(y=navigator.canShare)==null?void 0:y.call(navigator,{files:[new File([],"",{type:"image/png"})]});async function be(e){var g;const r=G(e),a=e.name[o],s=await(await fetch(r)).blob();if(s.size===0)throw new Error;const c=`${a}.png`,m=[new File([s],c,{type:s.type})];if((g=navigator.canShare)!=null&&g.call(navigator,{files:m}))return await navigator.share({title:a,text:i("shareText").replace("$country",a),files:m}),!0;{const d=document.createElement("a");return d.href=window.URL.createObjectURL(s),d.download=c,d.click(),!0}}const M=[{year:2020,officers:340,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:44},{year:2019,officers:376,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:7},{year:2018,officers:338,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:13},{year:2017,officers:393,detectors:0,dogTeam:2,vessels:0,aircrafts:0,patrolCar:57},{year:2016,officers:0,detectors:0,dogTeam:11,vessels:0,aircrafts:0,patrolCar:48},{year:2015,officers:0,detectors:0,dogTeam:2,vessels:0,aircrafts:0,patrolCar:4}],D=[{year:2020,officers:44,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2019,officers:96,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2018,officers:64,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2017,officers:38,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2016,officers:0,detectors:0,dogTeam:2,vessels:0,aircrafts:0,patrolCar:0},{year:2015,officers:0,detectors:0,dogTeam:2,vessels:1,aircrafts:1,patrolCar:0}],B=[{year:2020,officers:268,detectors:0,dogTeam:0,vessels:14,aircrafts:0,patrolCar:62},{year:2019,officers:248,detectors:0,dogTeam:0,vessels:8,aircrafts:0,patrolCar:0},{year:2018,officers:302,detectors:0,dogTeam:0,vessels:1,aircrafts:1,patrolCar:60},{year:2017,officers:721,detectors:0,dogTeam:0,vessels:1,aircrafts:1,patrolCar:132},{year:2016,officers:0,detectors:0,dogTeam:0,vessels:3,aircrafts:0,patrolCar:147},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:144}],H=[{year:2020,officers:37,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:6},{year:2019,officers:40,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2018,officers:49,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:3},{year:2017,officers:45,detectors:0,dogTeam:1,vessels:0,aircrafts:0,patrolCar:5},{year:2016,officers:0,detectors:0,dogTeam:1,vessels:0,aircrafts:0,patrolCar:13},{year:2015,officers:0,detectors:0,dogTeam:1,vessels:0,aircrafts:0,patrolCar:11}],U=[{year:2020,officers:7,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:2},{year:2019,officers:12,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2018,officers:12,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2017,officers:10,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2016,officers:0,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:2,aircrafts:0,patrolCar:0}],K=[{year:2020,officers:237,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:38},{year:2019,officers:242,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:13},{year:2018,officers:190,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:6},{year:2017,officers:155,detectors:0,dogTeam:3,vessels:0,aircrafts:0,patrolCar:9},{year:2016,officers:0,detectors:0,dogTeam:3,vessels:0,aircrafts:0,patrolCar:24},{year:2015,officers:0,detectors:0,dogTeam:1,vessels:0,aircrafts:0,patrolCar:1}],$=[{year:2020,officers:1017,detectors:0,dogTeam:0,vessels:4,aircrafts:2,patrolCar:217},{year:2019,officers:793,detectors:0,dogTeam:0,vessels:4,aircrafts:1,patrolCar:68},{year:2018,officers:953,detectors:0,dogTeam:0,vessels:4,aircrafts:1,patrolCar:45},{year:2017,officers:953,detectors:0,dogTeam:3,vessels:4,aircrafts:1,patrolCar:18},{year:2016,officers:0,detectors:0,dogTeam:1,vessels:40,aircrafts:2,patrolCar:25},{year:2015,officers:0,detectors:0,dogTeam:9,vessels:0,aircrafts:1,patrolCar:29}],V=[{year:2020,officers:326,detectors:0,dogTeam:0,vessels:2,aircrafts:4,patrolCar:1},{year:2019,officers:245,detectors:1,dogTeam:0,vessels:8,aircrafts:2,patrolCar:0},{year:2018,officers:204,detectors:0,dogTeam:0,vessels:0,aircrafts:3,patrolCar:0},{year:2017,officers:109,detectors:0,dogTeam:0,vessels:0,aircrafts:2,patrolCar:0},{year:2016,officers:0,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:0,aircrafts:2,patrolCar:0}],X=[{year:2020,officers:167,detectors:8,dogTeam:0,vessels:8,aircrafts:0,patrolCar:26},{year:2019,officers:211,detectors:10,dogTeam:0,vessels:6,aircrafts:1,patrolCar:3},{year:2018,officers:223,detectors:21,dogTeam:0,vessels:8,aircrafts:1,patrolCar:3},{year:2017,officers:155,detectors:33,dogTeam:10,vessels:6,aircrafts:0,patrolCar:15},{year:2016,officers:0,detectors:7,dogTeam:7,vessels:8,aircrafts:1,patrolCar:0},{year:2015,officers:0,detectors:0,dogTeam:4,vessels:4,aircrafts:1,patrolCar:0}],q=[{year:2020,officers:1622,detectors:0,dogTeam:0,vessels:49,aircrafts:4,patrolCar:0},{year:2019,officers:2017,detectors:0,dogTeam:0,vessels:29,aircrafts:3,patrolCar:0},{year:2018,officers:3044,detectors:0,dogTeam:0,vessels:72,aircrafts:12,patrolCar:0},{year:2017,officers:2441,detectors:0,dogTeam:0,vessels:43,aircrafts:3,patrolCar:0},{year:2016,officers:0,detectors:0,dogTeam:0,vessels:53,aircrafts:2,patrolCar:24},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:505,aircrafts:12,patrolCar:0}],Y=[{year:2020,officers:619,detectors:1,dogTeam:0,vessels:22,aircrafts:2,patrolCar:10},{year:2019,officers:1001,detectors:0,dogTeam:0,vessels:11,aircrafts:15,patrolCar:0},{year:2018,officers:943,detectors:2,dogTeam:0,vessels:10,aircrafts:9,patrolCar:15},{year:2017,officers:941,detectors:0,dogTeam:20,vessels:16,aircrafts:8,patrolCar:45},{year:2016,officers:0,detectors:1,dogTeam:5,vessels:19,aircrafts:6,patrolCar:50},{year:2015,officers:0,detectors:0,dogTeam:44,vessels:9,aircrafts:5,patrolCar:32}],Z=[{year:2020,officers:76,detectors:0,dogTeam:0,vessels:6,aircrafts:0,patrolCar:12},{year:2019,officers:86,detectors:0,dogTeam:0,vessels:2,aircrafts:1,patrolCar:1},{year:2018,officers:177,detectors:0,dogTeam:0,vessels:7,aircrafts:1,patrolCar:0},{year:2017,officers:201,detectors:0,dogTeam:7,vessels:8,aircrafts:1,patrolCar:4},{year:2016,officers:0,detectors:0,dogTeam:12,vessels:9,aircrafts:2,patrolCar:11},{year:2015,officers:0,detectors:0,dogTeam:17,vessels:14,aircrafts:2,patrolCar:12}],j=[{year:2020,officers:299,detectors:0,dogTeam:0,vessels:2,aircrafts:0,patrolCar:14},{year:2019,officers:547,detectors:0,dogTeam:0,vessels:3,aircrafts:2,patrolCar:0},{year:2018,officers:753,detectors:0,dogTeam:0,vessels:3,aircrafts:3,patrolCar:0},{year:2017,officers:662,detectors:0,dogTeam:0,vessels:4,aircrafts:2,patrolCar:0},{year:2016,officers:0,detectors:0,dogTeam:0,vessels:2,aircrafts:3,patrolCar:0},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:5,aircrafts:4,patrolCar:0}],_=[{year:2020,officers:128,detectors:0,dogTeam:0,vessels:12,aircrafts:0,patrolCar:10},{year:2019,officers:143,detectors:0,dogTeam:0,vessels:8,aircrafts:0,patrolCar:2},{year:2018,officers:128,detectors:0,dogTeam:0,vessels:4,aircrafts:0,patrolCar:9},{year:2017,officers:130,detectors:0,dogTeam:0,vessels:6,aircrafts:0,patrolCar:17},{year:2016,officers:0,detectors:0,dogTeam:0,vessels:16,aircrafts:0,patrolCar:8},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:9,aircrafts:0,patrolCar:6}],Q=[{year:2020,officers:126,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:26},{year:2019,officers:89,detectors:0,dogTeam:0,vessels:0,aircrafts:1,patrolCar:13},{year:2018,officers:77,detectors:0,dogTeam:0,vessels:0,aircrafts:2,patrolCar:12},{year:2017,officers:87,detectors:0,dogTeam:0,vessels:0,aircrafts:1,patrolCar:12},{year:2016,officers:0,detectors:0,dogTeam:0,vessels:0,aircrafts:2,patrolCar:9},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:0,aircrafts:3,patrolCar:0}],W=[{year:2020,officers:14,detectors:0,dogTeam:0,vessels:0,aircrafts:2,patrolCar:0},{year:2019,officers:21,detectors:0,dogTeam:0,vessels:0,aircrafts:2,patrolCar:0},{year:2018,officers:16,detectors:0,dogTeam:0,vessels:0,aircrafts:2,patrolCar:0},{year:2017,officers:33,detectors:0,dogTeam:0,vessels:0,aircrafts:4,patrolCar:0},{year:2016,officers:0,detectors:0,dogTeam:0,vessels:0,aircrafts:1,patrolCar:0},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:8,aircrafts:4,patrolCar:0}],J=[{year:2020,officers:1194,detectors:0,dogTeam:0,vessels:10,aircrafts:24,patrolCar:2},{year:2019,officers:1248,detectors:0,dogTeam:0,vessels:35,aircrafts:29,patrolCar:0},{year:2018,officers:1545,detectors:0,dogTeam:0,vessels:43,aircrafts:22,patrolCar:0},{year:2017,officers:1261,detectors:0,dogTeam:0,vessels:14,aircrafts:10,patrolCar:5},{year:2016,officers:0,detectors:0,dogTeam:0,vessels:51,aircrafts:22,patrolCar:0},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:70,aircrafts:32,patrolCar:0}],ee=[{year:2020,officers:257,detectors:0,dogTeam:0,vessels:2,aircrafts:1,patrolCar:27},{year:2019,officers:319,detectors:0,dogTeam:0,vessels:2,aircrafts:2,patrolCar:0},{year:2018,officers:212,detectors:0,dogTeam:0,vessels:2,aircrafts:1,patrolCar:0},{year:2017,officers:159,detectors:0,dogTeam:0,vessels:0,aircrafts:1,patrolCar:28},{year:2016,officers:0,detectors:0,dogTeam:9,vessels:0,aircrafts:3,patrolCar:21},{year:2015,officers:0,detectors:0,dogTeam:1,vessels:0,aircrafts:2,patrolCar:6}],re=[{year:2020,officers:53,detectors:0,dogTeam:0,vessels:0,aircrafts:3,patrolCar:1},{year:2019,officers:48,detectors:0,dogTeam:0,vessels:0,aircrafts:3,patrolCar:0},{year:2018,officers:68,detectors:0,dogTeam:0,vessels:0,aircrafts:4,patrolCar:0},{year:2017,officers:46,detectors:0,dogTeam:0,vessels:0,aircrafts:3,patrolCar:0},{year:2016,officers:0,detectors:0,dogTeam:1,vessels:0,aircrafts:0,patrolCar:1},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0}],ae=[{year:2020,officers:338,detectors:0,dogTeam:0,vessels:7,aircrafts:5,patrolCar:15},{year:2019,officers:540,detectors:0,dogTeam:0,vessels:9,aircrafts:9,patrolCar:1},{year:2018,officers:540,detectors:0,dogTeam:0,vessels:5,aircrafts:2,patrolCar:7},{year:2017,officers:293,detectors:0,dogTeam:0,vessels:5,aircrafts:5,patrolCar:13},{year:2016,officers:0,detectors:0,dogTeam:6,vessels:16,aircrafts:11,patrolCar:13},{year:2015,officers:0,detectors:0,dogTeam:12,vessels:28,aircrafts:6,patrolCar:20}],se=[{year:2020,officers:30,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:4},{year:2019,officers:70,detectors:0,dogTeam:0,vessels:2,aircrafts:0,patrolCar:0},{year:2018,officers:82,detectors:0,dogTeam:0,vessels:2,aircrafts:4,patrolCar:0},{year:2017,officers:513,detectors:0,dogTeam:0,vessels:15,aircrafts:14,patrolCar:0},{year:2016,officers:0,detectors:0,dogTeam:0,vessels:40,aircrafts:24,patrolCar:1},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:136,aircrafts:15,patrolCar:0}],te=[{year:2020,officers:305,detectors:0,dogTeam:0,vessels:2,aircrafts:1,patrolCar:33},{year:2019,officers:509,detectors:0,dogTeam:0,vessels:2,aircrafts:2,patrolCar:4},{year:2018,officers:614,detectors:0,dogTeam:0,vessels:2,aircrafts:0,patrolCar:12},{year:2017,officers:707,detectors:0,dogTeam:0,vessels:2,aircrafts:0,patrolCar:19},{year:2016,officers:0,detectors:0,dogTeam:0,vessels:34,aircrafts:2,patrolCar:25},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:2,aircrafts:1,patrolCar:2}],oe=[{year:2020,officers:87,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2019,officers:88,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2018,officers:45,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2017,officers:186,detectors:0,dogTeam:0,vessels:2,aircrafts:0,patrolCar:0},{year:2016,officers:0,detectors:0,dogTeam:2,vessels:3,aircrafts:0,patrolCar:0},{year:2015,officers:0,detectors:0,dogTeam:4,vessels:1,aircrafts:0,patrolCar:0}],ce=[{year:2020,officers:268,detectors:0,dogTeam:0,vessels:0,aircrafts:1,patrolCar:45},{year:2019,officers:309,detectors:2,dogTeam:0,vessels:0,aircrafts:1,patrolCar:57},{year:2018,officers:258,detectors:3,dogTeam:0,vessels:0,aircrafts:2,patrolCar:14},{year:2017,officers:330,detectors:2,dogTeam:0,vessels:0,aircrafts:1,patrolCar:20},{year:2016,officers:0,detectors:2,dogTeam:0,vessels:0,aircrafts:1,patrolCar:38},{year:2015,officers:0,detectors:0,dogTeam:1,vessels:0,aircrafts:1,patrolCar:4}],ie=[{year:2020,officers:471,detectors:0,dogTeam:0,vessels:22,aircrafts:2,patrolCar:11},{year:2019,officers:542,detectors:0,dogTeam:0,vessels:9,aircrafts:3,patrolCar:2},{year:2018,officers:777,detectors:0,dogTeam:0,vessels:12,aircrafts:2,patrolCar:2},{year:2017,officers:534,detectors:0,dogTeam:16,vessels:11,aircrafts:7,patrolCar:3},{year:2016,officers:0,detectors:0,dogTeam:15,vessels:8,aircrafts:6,patrolCar:1},{year:2015,officers:0,detectors:0,dogTeam:23,vessels:17,aircrafts:7,patrolCar:10}],fe=[{year:2020,officers:321,detectors:0,dogTeam:0,vessels:25,aircrafts:2,patrolCar:34},{year:2019,officers:270,detectors:0,dogTeam:0,vessels:9,aircrafts:1,patrolCar:8},{year:2018,officers:279,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:9},{year:2017,officers:494,detectors:0,dogTeam:6,vessels:0,aircrafts:1,patrolCar:24},{year:2016,officers:0,detectors:0,dogTeam:10,vessels:4,aircrafts:5,patrolCar:26},{year:2015,officers:0,detectors:0,dogTeam:22,vessels:0,aircrafts:3,patrolCar:42}],de=[{year:2020,officers:41,detectors:0,dogTeam:0,vessels:2,aircrafts:1,patrolCar:0},{year:2019,officers:81,detectors:0,dogTeam:0,vessels:2,aircrafts:1,patrolCar:0},{year:2018,officers:80,detectors:0,dogTeam:0,vessels:2,aircrafts:1,patrolCar:0},{year:2017,officers:108,detectors:0,dogTeam:2,vessels:5,aircrafts:3,patrolCar:0},{year:2016,officers:0,detectors:0,dogTeam:4,vessels:42,aircrafts:3,patrolCar:4},{year:2015,officers:0,detectors:0,dogTeam:3,vessels:9,aircrafts:1,patrolCar:1}],le=[{year:2020,officers:74,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:11},{year:2019,officers:74,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:10},{year:2018,officers:60,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:8},{year:2017,officers:65,detectors:0,dogTeam:2,vessels:0,aircrafts:0,patrolCar:6},{year:2016,officers:0,detectors:0,dogTeam:3,vessels:0,aircrafts:1,patrolCar:11},{year:2015,officers:0,detectors:0,dogTeam:1,vessels:0,aircrafts:0,patrolCar:3}],ne=[{year:2020,officers:71,detectors:0,dogTeam:0,vessels:0,aircrafts:1,patrolCar:19},{year:2019,officers:95,detectors:0,dogTeam:0,vessels:0,aircrafts:1,patrolCar:0},{year:2018,officers:118,detectors:0,dogTeam:0,vessels:0,aircrafts:1,patrolCar:2},{year:2017,officers:85,detectors:0,dogTeam:2,vessels:0,aircrafts:0,patrolCar:1},{year:2016,officers:0,detectors:0,dogTeam:3,vessels:0,aircrafts:1,patrolCar:22},{year:2015,officers:0,detectors:0,dogTeam:4,vessels:0,aircrafts:2,patrolCar:2}],me=[{year:2020,officers:41,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2019,officers:89,detectors:0,dogTeam:0,vessels:2,aircrafts:0,patrolCar:0},{year:2018,officers:222,detectors:0,dogTeam:0,vessels:2,aircrafts:0,patrolCar:0},{year:2017,officers:188,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2016,officers:0,detectors:0,dogTeam:0,vessels:2,aircrafts:1,patrolCar:0},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:2,aircrafts:0,patrolCar:0}],ge=[{year:2020,officers:0,detectors:36,dogTeam:0,vessels:0,aircrafts:5,patrolCar:36},{year:2019,officers:50,detectors:35,dogTeam:0,vessels:0,aircrafts:10,patrolCar:16},{year:2018,officers:91,detectors:7,dogTeam:0,vessels:0,aircrafts:7,patrolCar:0},{year:2017,officers:0,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0},{year:2016,officers:0,detectors:0,dogTeam:0,vessels:0,aircrafts:7,patrolCar:0},{year:2015,officers:0,detectors:0,dogTeam:0,vessels:0,aircrafts:0,patrolCar:0}];var pe={AT:M,BE:D,BG:B,CH:H,CY:U,CZ:K,DE:$,DK:V,EE:X,GR:q,ES:Y,FI:Z,FR:j,HR:_,HU:Q,IS:W,IT:J,LT:ee,LU:re,LV:ae,MT:se,NL:te,NO:oe,PL:ce,PT:ie,RO:fe,SE:de,SI:le,SK:ne,GB:me,FX:ge};const Te=["officers","vessels","aircrafts","patrolCar","dogTeam","detectors"],h=([,e],[,r])=>r-e,f={};for(const[e,r]of Object.entries(pe))f[e]=u(r.map(a=>{const t=v({},a);return delete t.year,t}));const b=u(Object.values(f));function we({code:e}){const r=f[e],a={};for(const s of Te)a[s]=r[s]/b[s]||0;return{sortedGroups:Object.entries(a).sort(h),totals:r}}function Fe(e){return Object.entries(f).map(([r,a])=>[C.find(t=>t.code===r),a[e]/b[e]]).sort(h)}export{pe as a,f as b,C as c,we as d,R as e,ue as f,Ce as g,G as h,i,he as j,Te as k,o as l,Fe as m,A as n,P as o,k as p,be as s};
