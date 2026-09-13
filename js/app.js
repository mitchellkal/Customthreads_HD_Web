/* ============================================================
   2) FARBEN
   Eine Farbe steht genau einmal hier. Jede Stoffvariante weiter
   unten sagt dann, welche dieser Farben es bei ihr wirklich gibt —
   so kann niemand etwas wählen, das der Lieferant nicht führt.
   Neue Farbe: eine Zeile ergänzen. hex = Stofffarbe,
   shadow = etwas dunkler, dafür sind die Nähte und Falten.
   ============================================================ */
const FARBEN = {
  schwarz:      {name:"Schwarz",       hex:"#141414", shadow:"#000000"},
  weiss:        {name:"Weiß",          hex:"#f4f4f1", shadow:"#c9c9c4"},
  natur:        {name:"Natur",         hex:"#e9e1d0", shadow:"#c2b8a3"},
  sand:         {name:"Sand",          hex:"#d8c8ac", shadow:"#b09e82"},
  grau:         {name:"Graumeliert",   hex:"#a9b0b6", shadow:"#7c8288"},
  dunkelgrau:   {name:"Dunkelgrau",    hex:"#4a4f54", shadow:"#2b2f33"},
  anthrazit:    {name:"Anthrazit",     hex:"#2e3236", shadow:"#171a1d"},
  navy:         {name:"Navy",          hex:"#1d2a44", shadow:"#0e1526"},
  royal:        {name:"Royalblau",     hex:"#1f4fa3", shadow:"#123069"},
  hellblau:     {name:"Hellblau",      hex:"#8fb8d8", shadow:"#6a90ac"},
  petrol:       {name:"Petrol",        hex:"#1f6b72", shadow:"#0f4247"},
  flasche:      {name:"Flaschengrün",  hex:"#1f4d35", shadow:"#0f2e1f"},
  oliv:         {name:"Oliv",          hex:"#5c5f3c", shadow:"#3a3d26"},
  rot:          {name:"Rot",           hex:"#9e2231", shadow:"#5f121c"},
  bordeaux:     {name:"Bordeaux",      hex:"#5e1a26", shadow:"#380f17"},
  orange:       {name:"Orange",        hex:"#c4622a", shadow:"#8a4019"},
  gelb:         {name:"Senfgelb",      hex:"#c9a227", shadow:"#8f7014"},
  rosa:         {name:"Altrosa",       hex:"#c9909a", shadow:"#9a6670"},
  lila:         {name:"Aubergine",     hex:"#4b2f4e", shadow:"#2c1a2e"},
  braun:        {name:"Braun",         hex:"#5a4030", shadow:"#38271d"}
};

/* Kürzel für die immer wiederkehrenden Farbsets */
const SET_BASIS   = ["schwarz","weiss","navy","grau","dunkelgrau","rot","flasche","royal"];
const SET_GROSS   = ["schwarz","weiss","navy","grau","dunkelgrau","anthrazit","rot","bordeaux",
                     "royal","hellblau","petrol","flasche","oliv","sand","natur","orange","gelb","rosa","lila","braun"];
const SET_SCHWER  = ["schwarz","weiss","navy","grau","anthrazit","flasche","bordeaux","sand","natur","oliv"];
const SET_FROTTEE = ["weiss","natur","sand","grau","anthrazit","schwarz","navy","petrol","rosa","bordeaux"];
const SET_CANVAS  = ["natur","sand","schwarz","anthrazit","oliv","navy","bordeaux","braun"];

/* ============================================================
   2b) PRODUKTE
   Jedes Produkt hat
     gruppe   Überschrift in der Produktauswahl
     cm       wie viele Zeichen-Einheiten ein Zentimeter ist,
              damit die Größenangabe realistisch bleibt
     views    vorne und, wo es Sinn ergibt, hinten
     stoffe   die wählbaren Varianten mit Passform, Gewicht und Farben
   ============================================================ */

/* Bausteine, die mehrere Produkte teilen */
const POS_SHIRT_VORNE = [
  {id:"brust-links",  name:"Brust links",   x:236, y:322, def:9},
  {id:"brust-rechts", name:"Brust rechts",  x:364, y:322, def:9},
  {id:"brust-mitte",  name:"Brust mittig",  x:300, y:336, def:14},
  {id:"brust-gross",  name:"Brust groß",    x:300, y:372, def:22},
  {id:"bauch",        name:"Bauch mittig",  x:300, y:440, def:12},
  {id:"aermel-l",     name:"Ärmel links",   x:140, y:246, def:5},
  {id:"aermel-r",     name:"Ärmel rechts",  x:460, y:246, def:5},
  {id:"saum",         name:"Saum unten",    x:300, y:486, def:8}
];
const POS_SHIRT_HINTEN = [
  {id:"nacken",        name:"Nacken klein",   x:300, y:196, def:6},
  {id:"ruecken-oben",  name:"Rücken oben",    x:300, y:300, def:20},
  {id:"ruecken-gross", name:"Rücken groß",    x:300, y:370, def:28},
  {id:"ruecken-unten", name:"Rücken unten",   x:300, y:470, def:12},
  {id:"aermel-l-h",    name:"Ärmel links",    x:140, y:246, def:5},
  {id:"aermel-r-h",    name:"Ärmel rechts",   x:460, y:246, def:5}
];
const POS_SWEAT_VORNE = [
  {id:"brust-links",  name:"Brust links",   x:238, y:332, def:9},
  {id:"brust-rechts", name:"Brust rechts",  x:362, y:332, def:9},
  {id:"brust-mitte",  name:"Brust mittig",  x:300, y:350, def:14},
  {id:"brust-gross",  name:"Brust groß",    x:300, y:392, def:22},
  {id:"aermel-l",     name:"Ärmel links",   x:136, y:296, def:5},
  {id:"aermel-r",     name:"Ärmel rechts",  x:464, y:296, def:5}
];
const POS_SWEAT_HINTEN = [
  {id:"nacken",        name:"Nacken klein",  x:300, y:210, def:6},
  {id:"ruecken-oben",  name:"Rücken oben",   x:300, y:330, def:20},
  {id:"ruecken-gross", name:"Rücken groß",   x:300, y:400, def:28},
  {id:"ruecken-unten", name:"Rücken unten",  x:300, y:498, def:12}
];

const SHIRT_BODY_V = "M254 140 Q300 186 346 140 L406 154 L516 204 L480 300 L412 276 L420 510 Q300 538 180 510 L188 276 L120 300 L84 204 L194 154 Z";
const SHIRT_BODY_H = "M254 140 Q300 164 346 140 L406 154 L516 204 L480 300 L412 276 L420 510 Q300 538 180 510 L188 276 L120 300 L84 204 L194 154 Z";
const SHIRT_NAEHTE = (c)=>`
  <path d="M120 300 L188 276 M480 300 L412 276" stroke="${c.shadow}" stroke-width="2" opacity=".55" fill="none"/>
  <path d="M180 510 Q300 538 420 510" stroke="${c.shadow}" stroke-width="2" opacity=".45" fill="none"/>`;

const SWEAT_BODY_V = "M252 148 Q300 194 348 148 L422 160 L534 218 L496 356 L424 322 L420 540 Q300 570 180 540 L176 322 L104 356 L66 218 L178 160 Z";
const SWEAT_BODY_H = "M252 148 Q300 172 348 148 L422 160 L534 218 L496 356 L424 322 L420 540 Q300 570 180 540 L176 322 L104 356 L66 218 L178 160 Z";
const SWEAT_NAEHTE = (c)=>`
  <path d="M104 356 L176 322 M496 356 L424 322" stroke="${c.shadow}" stroke-width="3" opacity=".6" fill="none"/>
  <path d="M116 334 L180 302 M484 334 L420 302" stroke="${c.shadow}" stroke-width="2" opacity=".35" fill="none"/>
  <path d="M180 508 L420 508" stroke="${c.shadow}" stroke-width="3" opacity=".5"/>
  <path d="M180 540 Q300 570 420 540" stroke="${c.shadow}" stroke-width="2" opacity=".4" fill="none"/>`;

const PRODUCTS = {

  /* ---------- Kleidung ---------- */
  tshirt: {
    name:"T-Shirt", gruppe:"Kleidung", cm:4.2,
    views:{
      vorne:{ body:SHIRT_BODY_V, pos:POS_SHIRT_VORNE, detail:(c)=>`
        <path d="M254 140 Q300 186 346 140 Q300 164 254 140 Z" fill="${c.shadow}" opacity=".9"/>`+SHIRT_NAEHTE(c) },
      hinten:{ body:SHIRT_BODY_H, pos:POS_SHIRT_HINTEN, detail:(c)=>`
        <path d="M254 140 Q300 164 346 140 Q300 154 254 140 Z" fill="${c.shadow}" opacity=".9"/>
        <path d="M246 150 Q300 176 354 150" fill="none" stroke="${c.shadow}" stroke-width="2" opacity=".5"/>`+SHIRT_NAEHTE(c) }
    },
    stoffe:[
      {fit:"Regular Fit", stoff:"180 g/m² Baumwolle", info:"der Allrounder, sitzt gerade und ist nicht zu dünn", farben:SET_GROSS},
      {fit:"Oversized",   stoff:"220 g/m² schwere Baumwolle", info:"breite Schultern, kürzer geschnitten, fällt schwer", farben:SET_SCHWER},
      {fit:"Slim Fit",    stoff:"160 g/m² feiner Single Jersey", info:"körpernah, weicher Griff", farben:SET_BASIS},
      {fit:"Longsleeve",  stoff:"190 g/m² Baumwolle", info:"langärmlig, sonst wie Regular", farben:SET_BASIS}
    ]
  },

  polo: {
    name:"Poloshirt", gruppe:"Kleidung", cm:4.2,
    views:{
      vorne:{ body:"M262 136 Q300 170 338 136 L406 154 L516 204 L480 300 L412 276 L420 510 Q300 538 180 510 L188 276 L120 300 L84 204 L194 154 Z",
        pos:POS_SHIRT_VORNE, detail:(c)=>`
        <path d="M256 134 L300 176 L274 204 L240 158 Z" fill="${c.hex}" stroke="${c.shadow}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M344 134 L300 176 L326 204 L360 158 Z" fill="${c.hex}" stroke="${c.shadow}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M290 176 L290 248 M310 176 L310 248" stroke="${c.shadow}" stroke-width="2" opacity=".8"/>
        <circle cx="300" cy="198" r="4.5" fill="${c.shadow}"/>
        <circle cx="300" cy="230" r="4.5" fill="${c.shadow}"/>`+SHIRT_NAEHTE(c) },
      hinten:{ body:SHIRT_BODY_H, pos:POS_SHIRT_HINTEN, detail:(c)=>`
        <path d="M252 132 L348 132 L344 158 L256 158 Z" fill="${c.hex}" stroke="${c.shadow}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M256 158 Q300 178 344 158" fill="none" stroke="${c.shadow}" stroke-width="2" opacity=".6"/>`+SHIRT_NAEHTE(c) }
    },
    stoffe:[
      {fit:"Regular Fit", stoff:"180 g/m² Piqué", info:"der Standard für Firmenkleidung", farben:SET_GROSS},
      {fit:"Schwer",      stoff:"220 g/m² Piqué", info:"für den täglichen Einsatz, formstabil", farben:SET_SCHWER},
      {fit:"Stretch",     stoff:"210 g/m² Piqué mit Elasthan", info:"bewegt sich mit, knittert kaum", farben:SET_BASIS},
      {fit:"Damen tailliert", stoff:"180 g/m² Piqué", info:"seitlich eingearbeitet, längere Form", farben:SET_BASIS}
    ]
  },

  hoodie: {
    name:"Hoodie", gruppe:"Kleidung", cm:4.0,
    views:{
      vorne:{
        body:"M244 146 L178 160 L66 218 L104 356 L176 322 L180 540 Q300 570 420 540 L424 322 L496 356 L534 218 L422 160 L356 146 Z",
        hinter:(c)=>`
          <path d="M218 178 Q206 82 300 78 Q394 82 382 178 Q300 222 218 178 Z" fill="${c.hex}" stroke="${c.shadow}" stroke-width="2"/>
          <path d="M218 178 Q206 82 300 78 Q394 82 382 178 Q300 222 218 178 Z" fill="url(#shade)"/>`,
        pos:POS_SWEAT_VORNE.concat([{id:"kapuze", name:"Kapuze", x:300, y:120, def:6}]),
        detail:(c)=>`
          <path d="M250 150 Q300 192 350 150" fill="none" stroke="${c.shadow}" stroke-width="3.5" opacity=".85"/>
          <path d="M280 176 L280 252 M320 176 L320 252" stroke="${c.shadow}" stroke-width="4.5" stroke-linecap="round" opacity=".85"/>
          <path d="M210 400 L390 400 L376 494 L224 494 Z" fill="none" stroke="${c.shadow}" stroke-width="2.5" opacity=".6"/>`+SWEAT_NAEHTE(c) },
      hinten:{
        body:"M244 146 L178 160 L66 218 L104 356 L176 322 L180 540 Q300 570 420 540 L424 322 L496 356 L534 218 L422 160 L356 146 Z",
        pos:[
          {id:"kapuze-h",      name:"Kapuze hinten", x:300, y:216, def:8},
          {id:"ruecken-gross", name:"Rücken groß",   x:300, y:400, def:28},
          {id:"ruecken-mitte", name:"Rücken mittig", x:300, y:390, def:20},
          {id:"ruecken-unten", name:"Rücken unten",  x:300, y:498, def:12}
        ],
        detail:(c)=>`
          <path d="M236 150 Q222 270 300 280 Q378 270 364 150 Z" fill="${c.hex}" stroke="${c.shadow}" stroke-width="2"/>
          <path d="M236 150 Q222 270 300 280 Q378 270 364 150 Z" fill="url(#shade)"/>`+SWEAT_NAEHTE(c) }
    },
    stoffe:[
      {fit:"Regular",    stoff:"280 g/m² Baumwollmischung", info:"innen angeraut, der Klassiker", farben:SET_GROSS},
      {fit:"Oversized",  stoff:"350 g/m² schwerer Sweat", info:"boxy geschnitten, kräftiger Stoff, hält die Stickerei besonders gut", farben:SET_SCHWER},
      {fit:"Zip-Hoodie", stoff:"300 g/m² mit durchgehendem Reißverschluss", info:"zum Überziehen, Stickerei dann links auf der Brust", farben:SET_BASIS},
      {fit:"Leicht",     stoff:"240 g/m² French Terry", info:"dünner, für Übergangszeit und Innenräume", farben:SET_BASIS}
    ]
  },

  crewneck: {
    name:"Crewneck", gruppe:"Kleidung", cm:4.0,
    views:{
      vorne:{ body:SWEAT_BODY_V, pos:POS_SWEAT_VORNE, detail:(c)=>`
        <path d="M252 148 Q300 194 348 148 Q300 172 252 148 Z" fill="${c.shadow}" opacity=".9"/>
        <path d="M246 156 Q300 208 354 156" fill="none" stroke="${c.shadow}" stroke-width="2.5" opacity=".7"/>`+SWEAT_NAEHTE(c) },
      hinten:{ body:SWEAT_BODY_H, pos:POS_SWEAT_HINTEN, detail:(c)=>`
        <path d="M252 148 Q300 172 348 148 Q300 160 252 148 Z" fill="${c.shadow}" opacity=".9"/>
        <path d="M246 156 Q300 186 354 156" fill="none" stroke="${c.shadow}" stroke-width="2.5" opacity=".6"/>`+SWEAT_NAEHTE(c) }
    },
    stoffe:[
      {fit:"Regular",   stoff:"280 g/m² Baumwollmischung", info:"Rundhalspullover, innen angeraut", farben:SET_GROSS},
      {fit:"Oversized", stoff:"350 g/m² schwerer Sweat", info:"weit geschnitten, tief sitzende Schultern", farben:SET_SCHWER},
      {fit:"Leicht",    stoff:"240 g/m² French Terry", info:"dünner Sommerpullover", farben:SET_BASIS}
    ]
  },

  jacke: {
    name:"Jacke", gruppe:"Kleidung", cm:4.0,
    views:{
      vorne:{
        body:"M248 152 L352 152 L424 162 L536 220 L498 358 L426 324 L422 536 L178 536 L174 324 L102 358 L64 220 L176 162 Z",
        pos:[
          {id:"brust-links",  name:"Brust links",  x:232, y:300, def:9},
          {id:"brust-rechts", name:"Brust rechts", x:368, y:300, def:9},
          {id:"kragen",       name:"Kragen",       x:246, y:132, def:4},
          {id:"aermel-l",     name:"Ärmel links",  x:134, y:300, def:5},
          {id:"aermel-r",     name:"Ärmel rechts", x:466, y:300, def:5},
          {id:"saum",         name:"Saum unten",   x:230, y:496, def:8}
        ],
        detail:(c)=>`
          <path d="M242 152 L242 116 Q300 104 358 116 L358 152 Z" fill="${c.hex}" stroke="${c.shadow}" stroke-width="2" stroke-linejoin="round"/>
          <path d="M300 116 L300 536" stroke="${c.shadow}" stroke-width="3"/>
          <path d="M294 130 L306 130 M294 150 L306 150 M294 170 L306 170 M294 190 L306 190 M294 210 L306 210
                   M294 230 L306 230 M294 250 L306 250 M294 270 L306 270 M294 290 L306 290 M294 310 L306 310
                   M294 330 L306 330 M294 350 L306 350 M294 370 L306 370 M294 390 L306 390 M294 410 L306 410
                   M294 430 L306 430 M294 450 L306 450 M294 470 L306 470 M294 490 L306 490 M294 510 L306 510" stroke="${c.shadow}" stroke-width="1.4" opacity=".5"/>
          <path d="M200 392 L262 392 L262 452 L200 452 Z M338 392 L400 392 L400 452 L338 452 Z" fill="none" stroke="${c.shadow}" stroke-width="2.2" opacity=".55"/>
          <path d="M102 358 L174 324 M498 358 L426 324" stroke="${c.shadow}" stroke-width="3" opacity=".55" fill="none"/>
          <path d="M178 512 L422 512" stroke="${c.shadow}" stroke-width="2.5" opacity=".4"/>` },
      hinten:{
        body:"M248 152 L352 152 L424 162 L536 220 L498 358 L426 324 L422 536 L178 536 L174 324 L102 358 L64 220 L176 162 Z",
        pos:[
          {id:"nacken",        name:"Nacken klein", x:300, y:190, def:7},
          {id:"ruecken-oben",  name:"Rücken oben",  x:300, y:300, def:20},
          {id:"ruecken-gross", name:"Rücken groß",  x:300, y:380, def:26},
          {id:"ruecken-unten", name:"Rücken unten", x:300, y:486, def:12}
        ],
        detail:(c)=>`
          <path d="M242 152 L242 118 Q300 108 358 118 L358 152 Z" fill="${c.hex}" stroke="${c.shadow}" stroke-width="2" stroke-linejoin="round"/>
          <path d="M178 246 L422 246" stroke="${c.shadow}" stroke-width="2" opacity=".45"/>
          <path d="M102 358 L174 324 M498 358 L426 324" stroke="${c.shadow}" stroke-width="3" opacity=".55" fill="none"/>
          <path d="M178 512 L422 512" stroke="${c.shadow}" stroke-width="2.5" opacity=".4"/>` }
    },
    stoffe:[
      {fit:"Softshell",  stoff:"300 g/m², wind- und wasserabweisend", info:"die Standardjacke für draußen, sehr gut bestickbar", farben:SET_BASIS},
      {fit:"Fleecejacke",stoff:"280 g/m² Anti-Pilling-Fleece", info:"warm und leicht, weicher Untergrund", farben:SET_BASIS},
      {fit:"Steppjacke", stoff:"gefüttert, leicht wattiert", info:"Stickerei nur auf der Brust, die Steppnähte begrenzen die Fläche", farben:["schwarz","navy","anthrazit","oliv","bordeaux"]},
      {fit:"Arbeitsjacke", stoff:"schwerer Canvas, verstärkte Nähte", info:"für Handwerk und Baustelle", farben:["schwarz","anthrazit","navy","oliv","sand","braun"]}
    ]
  },

  schuerze: {
    name:"Schürze", gruppe:"Kleidung", cm:3.8,
    views:{
      vorne:{
        body:"M228 188 L372 188 L372 306 L432 346 L432 600 Q300 626 168 600 L168 346 L228 306 Z",
        hinter:(c)=>`
          <path d="M234 194 Q300 108 366 194" fill="none" stroke="${c.hex}" stroke-width="14" stroke-linecap="round"/>
          <path d="M234 194 Q300 108 366 194" fill="none" stroke="${c.shadow}" stroke-width="15" stroke-linecap="round" opacity=".28"/>`,
        pos:[
          {id:"latz",        name:"Latz mittig",   x:300, y:246, def:9},
          {id:"latz-links",  name:"Latz links",    x:258, y:246, def:7},
          {id:"mitte",       name:"Mitte oben",    x:300, y:400, def:16},
          {id:"gross",       name:"Groß mittig",   x:300, y:430, def:24},
          {id:"tasche",      name:"Auf der Tasche",x:300, y:490, def:8},
          {id:"traeger",     name:"Auf dem Träger",x:300, y:130, def:4}
        ],
        detail:(c)=>`
          <path d="M170 352 L64 386 M430 352 L536 386" stroke="${c.hex}" stroke-width="13" stroke-linecap="round"/>
          <path d="M170 352 L64 386 M430 352 L536 386" stroke="${c.shadow}" stroke-width="14" stroke-linecap="round" opacity=".22" fill="none"/>
          <rect x="222" y="452" width="156" height="102" rx="4" fill="none" stroke="${c.shadow}" stroke-width="2.5" opacity=".7"/>
          <path d="M300 452 L300 554" stroke="${c.shadow}" stroke-width="2" opacity=".5"/>
          <path d="M168 352 L432 352" stroke="${c.shadow}" stroke-width="2" opacity=".3"/>` }
    },
    stoffe:[
      {fit:"Latzschürze mit Tasche", stoff:"195 g/m² Mischgewebe, 72 × 86 cm", info:"der Gastro-Klassiker, 60 °C waschbar, riesige Farbauswahl", farben:SET_GROSS},
      {fit:"Deluxe Latzschürze",     stoff:"schwerer Canvas mit Kontrastnaht", info:"hochwertigere Optik, nachhaltig produziert, wenige Farben", farben:["schwarz","anthrazit","natur","oliv"]},
      {fit:"Latzschürze ohne Tasche",stoff:"195 g/m² Mischgewebe", info:"schlicht, die größte Farbauswahl überhaupt", farben:SET_GROSS},
      {fit:"Bistroschürze",          stoff:"195 g/m² Mischgewebe, kurz gebunden", info:"für den Service, Stickerei unten rechts", farben:SET_GROSS},
      {fit:"Barista-Schürze",        stoff:"Canvas mit Kreuzträgern", info:"Träger über Kreuz, entlastet den Nacken", farben:SET_CANVAS}
    ]
  },

  cap: {
    name:"Cap", gruppe:"Kleidung", cm:12.2,
    views:{
      vorne:{
        body:"M166 430 C166 272 224 232 300 232 C376 232 434 272 434 430 Q300 448 166 430 Z",
        pos:[
          {id:"front",       name:"Front mittig", x:300, y:352, def:7},
          {id:"front-gross", name:"Front groß",   x:300, y:352, def:11},
          {id:"seite-l",     name:"Seite links",  x:212, y:360, def:4},
          {id:"seite-r",     name:"Seite rechts", x:388, y:360, def:4},
          {id:"schirm",      name:"Auf dem Schirm", x:300, y:488, def:6}
        ],
        detail:(c)=>`
          <path d="M300 234 L300 434 M236 250 Q254 340 246 432 M364 250 Q346 340 354 432" fill="none" stroke="${c.shadow}" stroke-width="1.6" opacity=".38"/>
          <path d="M164 426 Q300 444 436 426 Q440 450 436 462 Q300 480 164 462 Q160 450 164 426 Z" fill="${c.shadow}" opacity=".8"/>
          <path d="M166 452 Q300 470 434 452 Q512 484 462 520 Q300 546 138 520 Q88 484 166 452 Z" fill="${c.hex}" stroke="${c.shadow}" stroke-width="2"/>
          <path d="M166 452 Q300 470 434 452 Q512 484 462 520 Q300 546 138 520 Q88 484 166 452 Z" fill="url(#shade)"/>
          <circle cx="300" cy="236" r="8" fill="${c.shadow}"/>` },
      hinten:{
        body:"M166 430 C166 272 224 232 300 232 C376 232 434 272 434 430 Q300 448 166 430 Z",
        pos:[
          {id:"rueck-oben",  name:"Über dem Verschluss", x:300, y:300, def:6},
          {id:"rueck-seite", name:"Seite",               x:212, y:350, def:4}
        ],
        detail:(c)=>`
          <path d="M236 250 Q254 340 246 432 M364 250 Q346 340 354 432" fill="none" stroke="${c.shadow}" stroke-width="1.6" opacity=".38"/>
          <path d="M282 380 L282 436 L318 436 L318 380 Z" fill="url(#studio)"/>
          <path d="M240 392 L282 392 M318 392 L360 392 M240 412 L282 412 M318 412 L360 412"
                stroke="${c.shadow}" stroke-width="3" opacity=".6"/>
          <path d="M164 426 Q300 444 436 426 Q440 450 436 462 Q300 480 164 462 Q160 450 164 426 Z" fill="${c.shadow}" opacity=".8"/>
          <circle cx="300" cy="236" r="8" fill="${c.shadow}"/>` }
    },
    stoffe:[
      {fit:"5-Panel Klassiker", stoff:"Baumwolltwill, vorgeformter Schirm", info:"günstig und sehr gut bestickbar", farben:SET_GROSS},
      {fit:"Snapback Trucker",  stoff:"Front aus Twill, Rücken aus Netz", info:"moderner Look, luftig", farben:SET_BASIS},
      {fit:"Dad Cap",           stoff:"weiche, unstrukturierte Front", info:"legt sich an den Kopf, Motiv sollte kleiner bleiben", farben:SET_BASIS},
      {fit:"Beanie",            stoff:"Strick, doppellagiger Umschlag", info:"Stickerei auf den Umschlag, im Winter der Renner", farben:SET_BASIS}
    ]
  },

  /* ---------- Textil & Zubehör ---------- */
  handtuch: {
    name:"Handtuch", gruppe:"Textil & Zubehör", cm:6.6,
    views:{
      vorne:{
        body:"M136 116 L464 116 L464 584 L136 584 Z",
        pos:[
          {id:"unten",  name:"Unterer Rand", x:300, y:526, def:10},
          {id:"oben",   name:"Oberer Rand",  x:300, y:213, def:10},
          {id:"mitte",  name:"Mitte",        x:300, y:350, def:16},
          {id:"gross",  name:"Groß mittig",  x:300, y:350, def:24},
          {id:"ecke",   name:"Ecke",         x:212, y:166, def:6}
        ],
        detail:(c)=>`
          <rect x="136" y="192" width="328" height="42" fill="${c.shadow}" opacity=".3"/>
          <rect x="136" y="466" width="328" height="42" fill="${c.shadow}" opacity=".3"/>
          <path d="M136 128 L464 128 M136 572 L464 572" stroke="${c.shadow}" stroke-width="1.5" opacity=".45"/>
          <path d="M136 116 L136 584 M464 116 L464 584" stroke="${c.shadow}" stroke-width="3" opacity=".5"/>` }
    },
    stoffe:[
      {fit:"Gästetuch 30 × 50", stoff:"500 g/m² Frottee", info:"klein, für Barber, Kosmetik und Wellness", farben:SET_FROTTEE},
      {fit:"Handtuch 50 × 100", stoff:"500 g/m² Frottee", info:"die gängigste Größe", farben:SET_FROTTEE},
      {fit:"Duschtuch 70 × 140",stoff:"500 g/m² Frottee", info:"groß, Platz für ein breites Motiv", farben:SET_FROTTEE},
      {fit:"Bademantel",        stoff:"Frottee oder Velours, mit Gürtel", info:"Stickerei auf Brust oder Rücken", farben:["weiss","natur","grau","anthrazit","navy"]}
    ]
  },

  augenmaske: {
    name:"Augenmaske", gruppe:"Textil & Zubehör", cm:19,
    views:{
      vorne:{
        body:"M118 250 Q118 198 178 198 L422 198 Q482 198 482 250 L482 402 Q482 454 422 454 L178 454 Q118 454 118 402 Z",
        hinter:(c)=>`
          <path d="M118 300 Q52 326 118 352" fill="none" stroke="${c.shadow}" stroke-width="11" stroke-linecap="round"/>
          <path d="M482 300 Q548 326 482 352" fill="none" stroke="${c.shadow}" stroke-width="11" stroke-linecap="round"/>`,
        pos:[
          {id:"mitte", name:"Mitte",       x:300, y:326, def:9},
          {id:"links", name:"Links",       x:222, y:326, def:6},
          {id:"unten", name:"Unterer Rand",x:300, y:410, def:7}
        ],
        detail:(c)=>`
          <path d="M118 250 Q118 198 178 198 L422 198 Q482 198 482 250 L482 402 Q482 454 422 454 L178 454 Q118 454 118 402 Z"
                fill="none" stroke="#dcdcd7" stroke-width="7" opacity=".8"/>
          <path d="M136 252 Q136 214 182 214 L418 214 Q464 214 464 252 L464 400 Q464 438 418 438 L182 438 Q136 438 136 400 Z"
                fill="none" stroke="${c.shadow}" stroke-width="1.5" opacity=".5"/>` }
    },
    stoffe:[
      {fit:"Augenmaske gepolstert", stoff:"Mikrofaser mit Einfassband", info:"weich, blickdicht, mit elastischem Band", farben:["schwarz","anthrazit","grau","weiss","rosa","bordeaux","navy"]},
      {fit:"Kosmetiktuch",          stoff:"Mikrofaser, waschbar", info:"zum Abschminken, ersetzt Wattepads", farben:["grau","weiss","rosa","schwarz","anthrazit"]},
      {fit:"Spa-Stirnband",         stoff:"Frottee mit Klett", info:"hält die Haare aus dem Gesicht", farben:["weiss","rosa","grau","schwarz"]}
    ]
  },

  babylatz: {
    name:"Babylätzchen", gruppe:"Textil & Zubehör", cm:12.4,
    views:{
      vorne:{
        body:"M232 214 Q170 244 164 348 Q158 460 240 512 Q300 542 360 512 Q442 460 436 348 Q430 244 368 214 Q340 254 300 254 Q260 254 232 214 Z",
        hinter:(c)=>`
          <path d="M232 214 Q300 158 368 214" fill="none" stroke="${c.hex}" stroke-width="16" stroke-linecap="round"/>
          <path d="M232 214 Q300 158 368 214" fill="none" stroke="${c.shadow}" stroke-width="17" stroke-linecap="round" opacity=".25"/>`,
        pos:[
          {id:"mitte", name:"Mitte",  x:300, y:370, def:9},
          {id:"unten", name:"Unten",  x:300, y:452, def:8},
          {id:"klein", name:"Klein oben", x:300, y:300, def:5}
        ],
        detail:(c)=>`
          <circle cx="352" cy="182" r="9" fill="${c.shadow}"/>
          <path d="M232 214 Q170 244 164 348 Q158 460 240 512 Q300 542 360 512 Q442 460 436 348 Q430 244 368 214"
                fill="none" stroke="${c.shadow}" stroke-width="2" opacity=".45"/>` }
    },
    stoffe:[
      {fit:"Lätzchen Frottee",   stoff:"Baumwollfrottee mit Druckknopf", info:"saugfähig, waschbar bei 60 °C", farben:["weiss","natur","rosa","hellblau","grau","sand"]},
      {fit:"Lätzchen beschichtet",stoff:"Frottee mit wasserdichter Rückseite", info:"nichts geht durch, ideal als Geschenk", farben:["weiss","natur","rosa","hellblau"]},
      {fit:"Kapuzenhandtuch Baby",stoff:"Frottee mit Kapuze", info:"das beliebteste Geschenk zur Geburt", farben:["weiss","natur","rosa","hellblau"]}
    ]
  },

  kissen: {
    name:"Kissenbezug", gruppe:"Textil & Zubehör", cm:6.8,
    views:{
      vorne:{
        body:"M148 150 L452 150 L452 454 L148 454 Z",
        pos:[
          {id:"mitte", name:"Mitte",        x:300, y:302, def:16},
          {id:"gross", name:"Groß mittig",  x:300, y:302, def:26},
          {id:"ecke",  name:"Ecke unten",   x:214, y:398, def:8},
          {id:"oben",  name:"Oberer Rand",  x:300, y:196, def:12}
        ],
        detail:(c)=>`
          <rect x="164" y="166" width="272" height="272" fill="none" stroke="${c.shadow}" stroke-width="1.5" opacity=".5"/>
          <path d="M148 150 L452 150 L452 454 L148 454 Z" fill="none" stroke="${c.shadow}" stroke-width="3" opacity=".55"/>
          <path d="M396 150 L396 454" stroke="${c.shadow}" stroke-width="1.5" opacity=".35"/>` }
    },
    stoffe:[
      {fit:"Kissenbezug 40 × 40", stoff:"Baumwoll-Canvas, mit Reißverschluss", info:"die gängige Deko-Größe", farben:SET_CANVAS},
      {fit:"Kissenbezug 50 × 50", stoff:"Baumwoll-Canvas, mit Reißverschluss", info:"etwas größer, mehr Fläche fürs Motiv", farben:SET_CANVAS},
      {fit:"Kissen mit Füllung",  stoff:"Canvas inklusive Inlett", info:"fertig zum Verschenken", farben:SET_CANVAS}
    ]
  },

  tischdecke: {
    name:"Tischdecke", gruppe:"Textil & Zubehör", cm:2.9,
    views:{
      vorne:{
        body:"M100 150 L500 150 L500 520 L100 520 Z",
        pos:[
          {id:"ecke",  name:"Ecke",         x:180, y:470, def:14},
          {id:"mitte", name:"Mitte",        x:300, y:335, def:26},
          {id:"kante", name:"Untere Kante", x:300, y:490, def:18},
          {id:"oben",  name:"Obere Kante",  x:300, y:180, def:18}
        ],
        detail:(c)=>`
          <path d="M118 168 L482 168 L482 502 L118 502 Z" fill="none" stroke="${c.shadow}" stroke-width="1.6" opacity=".5" stroke-dasharray="6 5"/>
          <path d="M100 150 L500 150 L500 520 L100 520 Z" fill="none" stroke="${c.shadow}" stroke-width="3" opacity=".55"/>` }
    },
    stoffe:[
      {fit:"Tischdecke Baumwolle", stoff:"halbleinen, waschbar bei 60 °C", info:"für Gastro und Events, Motiv meist in die Ecke", farben:["weiss","natur","sand","anthrazit","schwarz","flasche","bordeaux"]},
      {fit:"Tischläufer",          stoff:"Baumwolle, schmal", info:"liegt längs über dem Tisch, Motiv an beide Enden", farben:["weiss","natur","sand","anthrazit","schwarz"]},
      {fit:"Serviette",            stoff:"Baumwolle, 45 × 45", info:"Motiv klein in eine Ecke, passt zur Tischdecke", farben:["weiss","natur","sand","anthrazit","bordeaux"]}
    ]
  },

  patch: {
    name:"Patch / Aufnäher", gruppe:"Textil & Zubehör", cm:30,
    views:{
      vorne:{
        body:"M172 172 L428 172 Q456 172 456 200 L456 452 Q456 480 428 480 L172 480 Q144 480 144 452 L144 200 Q144 172 172 172 Z",
        pos:[
          {id:"flaeche", name:"Ganze Fläche", x:300, y:326, def:7},
          {id:"klein",   name:"Kleiner Patch", x:300, y:326, def:5}
        ],
        detail:(c)=>`
          <path d="M172 172 L428 172 Q456 172 456 200 L456 452 Q456 480 428 480 L172 480 Q144 480 144 452 L144 200 Q144 172 172 172 Z"
                fill="none" stroke="${c.shadow}" stroke-width="12" opacity=".85"/>
          <path d="M182 186 L418 186 Q442 186 442 210 L442 442 Q442 466 418 466 L182 466 Q158 466 158 442 L158 210 Q158 186 182 186 Z"
                fill="none" stroke="${c.shadow}" stroke-width="2" stroke-dasharray="5 4" opacity=".55"/>` }
    },
    stoffe:[
      {fit:"Aufnäher zum Aufbügeln", stoff:"Stickerei auf Twill, Rand umstickt", info:"selbst aufbügeln, hält auf Baumwolle und Mischgewebe", farben:["schwarz","weiss","navy","anthrazit","natur","rot","oliv"]},
      {fit:"Aufnäher zum Aufnähen",  stoff:"Stickerei auf Twill, Merrow-Rand", info:"für Leder, Jeans und alles was keine Hitze mag", farben:["schwarz","weiss","navy","anthrazit","natur","rot","oliv"]},
      {fit:"Patch mit Klett",        stoff:"Rückseite mit Klettband", info:"abnehmbar, praktisch für Wechselmotive", farben:["schwarz","anthrazit","navy","oliv"]}
    ]
  }
};

/* Produkte nach Einsatz: nur sinnvolle Schwerpunkte zeigen */
const BRANCHEN = {
  "Barbershop / Friseur": {
    hint:"Schürzen und Handtücher für deinen Laden, dazu Teamwear für den Alltag.",
    products:[
      {id:"schuerze", focus:"für den täglichen Einsatz am Stuhl"},
      {id:"handtuch", focus:"für Salon, Studio und Service"},
      {id:"polo", focus:"als einheitliches Team-Outfit"},
      {id:"tshirt", focus:"locker und unkompliziert"}
    ]
  },
  "Gastronomie / Café": {
    hint:"Funktionale Schürzen stehen im Mittelpunkt. Polos und Shirts ergänzen dein Team.",
    products:[
      {id:"schuerze", focus:"für Küche, Bar und Service"},
      {id:"polo", focus:"für Service und Empfang"},
      {id:"tshirt", focus:"für Backoffice und Teamtage"},
      {id:"hoodie", focus:"für Außeneinsatz und Lieferteam"}
    ]
  },
  "Handwerk / Bau": {
    hint:"Robuste Teamwear, die auf der Baustelle und beim Kundentermin funktioniert.",
    products:[
      {id:"polo", focus:"professionell beim Kundentermin"},
      {id:"tshirt", focus:"für Arbeit und Bewegung"},
      {id:"jacke", focus:"für Außeneinsatz und Übergang"},
      {id:"hoodie", focus:"für kalte Arbeitstage"}
    ]
  },
  "Wellness / Physio": {
    hint:"Ruhige, hochwertige Textilien für Praxis, Studio und Behandlung.",
    products:[
      {id:"handtuch", focus:"für Behandlung und Spa"},
      {id:"augenmaske", focus:"für Ruhe und Entspannung"},
      {id:"tshirt", focus:"für dein Praxisteam"},
      {id:"schuerze", focus:"für Empfang und Anwendungen"}
    ]
  },
  "Verein": {
    hint:"Ein gemeinsamer Look für Team, Training und Auftritt.",
    products:[
      {id:"hoodie", focus:"für Team und Fans"},
      {id:"tshirt", focus:"für Training und Turnier"},
      {id:"crewneck", focus:"für Verein und Freizeit"},
      {id:"cap", focus:"für Auftritt und Sommer"}
    ]
  },
  "Sonstiges": {
    hint:"Wähle, was am besten zu deinem Anlass und deinem Team passt.",
    products:[
      {id:"polo", focus:"klassisch und vielseitig"},
      {id:"tshirt", focus:"locker und unkompliziert"},
      {id:"hoodie", focus:"weich und sichtbar"},
      {id:"cap", focus:"kleines Logo, großer Auftritt"}
    ]
  }
};

/* ============================================================
   2c) LOGO-FALLBACK FÜR DIE VORSCHAU
   Wenn noch kein eigenes Logo zur Hand ist, kann das Custom Threads
   Logo zum Testen auf das Textil gelegt werden.
   ============================================================ */
const CUSTOM_THREADS_LOGO = {
  id:"custom-threads",
  name:"Custom Threads Logo",
  cm:8,
  src:"img/logo.png"
};

/* ============================================================
   3) Zustand + Aufbau
   ============================================================ */
const state = {
  branche:"", product:"polo", view:"vorne", stoff:PRODUCTS.polo.stoffe[0],
  color:null, posId:"brust-links", sizeCm:8, x:238, y:322,
  logo:null, logoRatio:1, motiv:null
};

const $ = s=>document.querySelector(s);
const svg = $("#stage-svg");
const gGarment = $("#garment");
const gLogo = $("#logo-layer");
const imgLogo = $("#logo-img");
const imgMask = $("#mask-img");
const rectTex = $("#logo-tex");
const rectHit = $("#logo-hit");

const V   = ()=>PRODUCTS[state.product].views[state.view] || PRODUCTS[state.product].views.vorne;
const POS = ()=>V().pos;

function buildChips(container, items, activeId, onPick){
  container.innerHTML = "";
  items.forEach(it=>{
    const b=document.createElement("button");
    b.className="chip"; b.type="button"; b.textContent=it.name;
    b.setAttribute("aria-pressed", it.id===activeId ? "true":"false");
    b.onclick=()=>onPick(it.id);
    container.appendChild(b);
  });
}

/* Beim Produktwechsel: Variante, Farbe, Ansicht und Position neu setzen */
function setProduct(id){
  state.product = id;
  state.stoff   = PRODUCTS[id].stoffe[0];
  state.view    = PRODUCTS[id].views.vorne ? "vorne" : Object.keys(PRODUCTS[id].views)[0];
  pickFarbe();
  snapPosition();
  buildProducts(); buildStoffe(); buildViews(); buildColors(); buildPositions();
}

/* Farbe behalten wenn es sie bei der neuen Variante gibt, sonst erste nehmen */
function pickFarbe(){
  const liste = state.stoff.farben;
  const alt = state.color && liste.find(k=>FARBEN[k].name===state.color.name);
  const key = alt || liste[0];
  state.color = Object.assign({key}, FARBEN[key]);
}

/* Position auf die aktuelle Ansicht ziehen, möglichst die gleiche behalten */
function snapPosition(){
  const liste = POS();
  const p = liste.find(p=>p.id===state.posId) || liste[0];
  state.posId=p.id; state.x=p.x; state.y=p.y; state.sizeCm=p.def;
  const sl=$("#size"); if(sl) sl.value=p.def;
}

function buildProducts(){
  const wrap=$("#produkt"); wrap.innerHTML="";
  const config = BRANCHEN[state.branche];
  if(!config){
    wrap.innerHTML = '<p class="product-empty">Wähle oben zuerst deinen Einsatz.</p>';
    $("#produkt-hint").textContent = "Zuerst Einsatz wählen";
    return;
  }
  $("#produkt-hint").textContent = config.products.length+" passende Optionen";
  config.products.forEach((entry,index)=>{
    const b=document.createElement("button");
    b.className="product-card"; b.type="button";
    b.setAttribute("aria-pressed", entry.id===state.product?"true":"false");
    b.innerHTML = `<span class="product-index">0${index+1}</span><span><b>${PRODUCTS[entry.id].name}</b><small>${entry.focus}</small></span><span class="product-arrow" aria-hidden="true">→</span>`;
    b.onclick=()=>{ setProduct(entry.id); buildProducts(); render(); };
    wrap.appendChild(b);
  });
}

function buildStoffe(){
  const sel=$("#artikel"), list=PRODUCTS[state.product].stoffe;
  sel.innerHTML = list.map((a,i)=>`<option value="${i}">${a.fit} · ${a.stoff}</option>`).join("");
  const i = Math.max(0, list.indexOf(state.stoff));
  sel.value = i; state.stoff = list[i];
  $("#artikel-meta").textContent = state.stoff.info + " · " + state.stoff.farben.length + " Farben";
}
$("#artikel").addEventListener("change", e=>{
  state.stoff = PRODUCTS[state.product].stoffe[+e.target.value];
  $("#artikel-meta").textContent = state.stoff.info + " · " + state.stoff.farben.length + " Farben";
  pickFarbe(); buildColors(); render();
});

function buildViews(){
  const wrap=$("#ansicht"), keys=Object.keys(PRODUCTS[state.product].views);
  const label={vorne:"Vorderseite", hinten:"Rückseite"};
  wrap.style.display = keys.length>1 ? "" : "none";
  wrap.innerHTML="";
  keys.forEach(k=>{
    const b=document.createElement("button");
    b.className="chip"; b.type="button"; b.textContent=label[k]||k;
    b.setAttribute("aria-pressed", k===state.view?"true":"false");
    b.onclick=()=>{ state.view=k; snapPosition(); buildViews(); buildPositions(); render(); };
    wrap.appendChild(b);
  });
}

function buildPositions(){
  buildChips($("#position"), POS(), state.posId, id=>{
    const p=POS().find(p=>p.id===id);
    state.posId=id; state.x=p.x; state.y=p.y; state.sizeCm=p.def;
    $("#size").value=p.def;
    buildPositions(); render();
  });
}

function buildColors(){
  const wrap=$("#farbe"); wrap.innerHTML="";
  state.stoff.farben.forEach(key=>{
    const c=FARBEN[key];
    const b=document.createElement("button");
    b.className="sw"; b.type="button"; b.style.background=c.hex;
    b.setAttribute("aria-pressed", key===state.color.key?"true":"false");
    b.setAttribute("aria-label", c.name);
    b.title=c.name;
    b.onclick=()=>{ state.color=Object.assign({key},c); buildColors(); render(); };
    wrap.appendChild(b);
  });
  $("#farbe-name").innerHTML = state.color.name +
    ` <span>· ${state.stoff.farben.length} Farben bei dieser Variante</span>`;
}

/* Branche-Chips */
document.querySelectorAll("#branche .chip").forEach(b=>{
  b.type="button";
  b.onclick=()=>{
    const v=b.dataset.v;
    const already = b.getAttribute("aria-pressed")==="true";
    document.querySelectorAll("#branche .chip").forEach(x=>x.setAttribute("aria-pressed","false"));
    if(already){ state.branche=""; }
    else{
      b.setAttribute("aria-pressed","true"); state.branche=v;
      const suggest=BRANCHEN[v].products[0].id;
      if(suggest!==state.product) setProduct(suggest);
    }
    buildProducts();
    $("#branche-hint").textContent = state.branche ? BRANCHEN[state.branche].hint : "Wähle deinen Einsatz. Danach zeigen wir dir nur Produkte, die dafür sinnvoll sind.";
    $("#next-step-1").disabled = !state.branche;
    render();
  };
});

/* Drei klare Schritte statt einer langen Formularspalte */
let currentStep=1;
let highestStep=1;
function setStep(step){
  if(step>1 && !state.branche) return;
  if(step>highestStep) highestStep=step;
  currentStep=step;
  $(".cfg-grid").classList.toggle("preview-first", step===2);
  document.querySelectorAll(".cfg-step").forEach(s=>{
    const active=+s.dataset.step===step;
    s.hidden=!active; s.classList.toggle("active",active);
  });
  document.querySelectorAll("[data-step-nav]").forEach(b=>{
    const active=+b.dataset.stepNav===step;
    b.classList.toggle("active",active);
    b.setAttribute("aria-current",active?"step":"false");
    b.disabled=+b.dataset.stepNav>highestStep;
  });
  if(step===3) renderSummary();
  if(window.matchMedia("(max-width:960px)").matches){
    const target=step===2 ? $(".stage") : $(".cfg-step[data-step=\""+step+"\"]");
    if(target) target.scrollIntoView({behavior:"smooth",block:"start"});
  }
}
document.querySelectorAll("[data-step-nav]").forEach(b=>b.onclick=()=>setStep(+b.dataset.stepNav));
$("#next-step-1").onclick=()=>setStep(2);
$("#next-step-2").onclick=()=>setStep(3);
document.querySelectorAll("[data-step-back]").forEach(b=>b.onclick=()=>setStep(+b.dataset.stepBack));

/* ============================================================
   3b) Galerie "Motive & Arbeiten"
   Ein Eintrag pro echtem Foto. Neues Bild nach img/work/ legen und
   hier eine Zeile ergänzen — mehr ist nicht nötig.
   ============================================================ */
const WERKE = [
  {src:"img/work/onepiece-panel.jpg", name:"Manga-Panel",          group:"Sondermotive", tag:"über 100.000 Stiche"},
  {src:"img/work/solo-leveling.jpg",  name:"Anime-Motiv",          group:"Sondermotive", tag:"mehrfarbig gestickt"},
  {src:"img/work/spiderman.jpg",      name:"Comic-Motiv",          group:"Sondermotive", tag:"feine Konturen"},
  {src:"img/work/cooking-bull.jpg",   name:"Cooking Bull",          group:"Firmenlogos", tag:"Rücken, groß"},
  {src:"img/work/metzgerei-back.jpg", name:"Metzgerei Back",        group:"Firmenlogos", tag:"Brust, zweifarbig"},
  {src:"img/work/belma-handtuecher.jpg", name:"Belma's Beautyroom", group:"Firmenlogos", tag:"Serie auf Handtüchern"},
  {src:"img/work/aura-schwetzingen.jpg", name:"Aura Schwetzingen", group:"Firmenlogos", tag:"sauber auf Frottee"},
  {src:"img/work/barbershop.jpg",     name:"Barbershop",           group:"Firmenlogos", tag:"für Schürze und Teamwear"},
  {src:"img/work/Cafe-yuca.jpg",      name:"Café Yuca",             group:"Firmenlogos", tag:"stark im Auftritt"},
  {src:"img/work/Ergowelt.JPG",       name:"Ergowelt",              group:"Firmenlogos", tag:"direkt aus der Maschine"},
  {src:"img/work/Hausmeister-kurz.jpg", name:"Hausmeister-Service", group:"Firmenlogos", tag:"Arbeitskleidung"}
];
function buildWerke(){
  const grid=document.getElementById("werk-grid"); if(!grid) return;
  const groups=["Firmenlogos","Sondermotive"];
  grid.innerHTML = groups.map(group=>{
    const works=WERKE.filter(w=>w.group===group);
    return `<section class="werk-group" aria-labelledby="werk-${group.toLowerCase()}">
      <div class="werk-group-head"><h3 id="werk-${group.toLowerCase()}">${group}</h3><span>${works.length} Arbeiten</span></div>
      <div class="werk-row" aria-label="${group}">${works.map(w=>
        `<figure class="werk">
           <span class="shot"><img src="${w.src}" alt="${w.name}, ${group}, ${w.tag} gestickt" loading="lazy" decoding="async" width="760" height="760"></span>
           <figcaption class="txt"><b>${w.name}</b><span class="cat">${group}</span><span class="tag">${w.tag}</span></figcaption>
         </figure>`).join("")}</div>
    </section>`;
  }).join("");
  document.querySelectorAll(".werk-row").forEach(row=>{
    let dragging=false, startX=0, startScroll=0;
    row.addEventListener("pointerdown",e=>{
      if(e.pointerType!=="mouse" || e.button!==0) return;
      dragging=true; startX=e.clientX; startScroll=row.scrollLeft;
      row.classList.add("dragging"); row.setPointerCapture(e.pointerId);
    });
    row.addEventListener("pointermove",e=>{
      if(!dragging) return;
      row.scrollLeft=startScroll-(e.clientX-startX);
    });
    ["pointerup","pointercancel"].forEach(type=>row.addEventListener(type,()=>{
      dragging=false; row.classList.remove("dragging");
    }));
  });
}

/* ============================================================
  3c) Logo-Fallback in der Vorschau
  ============================================================ */
function buildMotivGrid(){
  const grid=$("#motiv-grid"); if(!grid) return;
  grid.innerHTML="";
  [CUSTOM_THREADS_LOGO].forEach(m=>{
    const b=document.createElement("button");
    b.className="mini"; b.type="button"; b.title=m.name;
    b.setAttribute("aria-label", m.name+" auf das Textil legen");
    b.innerHTML=`<img src="${m.src}" alt=""><span>${m.name}</span>`;
    b.onclick=()=>useMotiv(m);
    grid.appendChild(b);
  });
}

function useMotiv(m){
  const probe=new Image();
  probe.onload=()=>{
    state.motiv=m;
    state.logo=m.src;
    state.logoRatio = probe.naturalWidth/probe.naturalHeight || 1;
    state.sizeCm=m.cm; $("#size").value=m.cm;
    imgLogo.setAttribute("href", m.src);
    imgMask.setAttribute("href", m.src);
    $("#motiv-active").classList.add("on");
    $("#motiv-active-img").src = m.src;
    $("#motiv-active-name").textContent = m.name;
    $("#drop").querySelector("b").textContent = "Lieber dein eigenes Logo?";
    $("#drop").querySelector("span").textContent = "Datei hierher ziehen oder klicken — ersetzt das angezeigte Logo.";
    render();
  };
  probe.src=m.src;
}

$("#motiv-clear").onclick=()=>{
  state.motiv=null; state.logo=null;
  $("#motiv-active").classList.remove("on");
  $("#drop").querySelector("b").textContent = "Logo hierher ziehen oder klicken";
  $("#drop").querySelector("span").textContent = "PNG, JPG oder SVG — am besten mit freigestelltem Hintergrund. Bleibt auf deinem Gerät.";
  render();
};

/* ============================================================
   4) Zeichnen
   ============================================================ */
function render(){
  const P = PRODUCTS[state.product], v = V(), c = state.color;
  gGarment.innerHTML =
    (v.hinter ? v.hinter(c) : "") +
    `<path d="${v.body}" fill="${c.hex}" stroke="${c.shadow}" stroke-width="2" stroke-linejoin="round"/>` +
    `<path d="${v.body}" fill="url(#shade)"/>` +
    v.detail(c);

  const w = state.sizeCm * P.cm;
  const h = w / (state.logoRatio || 1);
  const x = state.x - w/2, y = state.y - h/2;

  if(state.logo){
    $("#placeholder").style.display="none";
    gLogo.style.display="";
    [imgLogo, imgMask].forEach(el=>{
      el.setAttribute("x",x); el.setAttribute("y",y);
      el.setAttribute("width",w); el.setAttribute("height",h);
    });
    rectTex.setAttribute("x",x); rectTex.setAttribute("y",y);
    rectTex.setAttribute("width",w); rectTex.setAttribute("height",h);
    rectHit.setAttribute("x",x-8); rectHit.setAttribute("y",y-8);
    rectHit.setAttribute("width",w+16); rectHit.setAttribute("height",h+16);
  }else{
    gLogo.style.display="none";
    $("#placeholder").style.display="";
  }

  const cm = state.sizeCm.toFixed(1).replace(".0","").replace(".",",");
  $("#size-out").textContent = cm+" cm";
  $("#size-badge").textContent = "ca. "+cm+" cm breit";
  $("#drag-hint").style.display = state.logo ? "" : "none";
  renderSummary();
  updateLinks();
}

function posName(){
  return (POS().find(p=>p.id===state.posId)||{}).name || "frei platziert";
}
function seite(){
  return Object.keys(PRODUCTS[state.product].views).length>1
    ? (state.view==="hinten" ? "Rückseite" : "Vorderseite") : "";
}
function renderSummary(){
  const a = state.stoff;
  const rows = [
    ["Branche", state.branche || "noch offen"],
    ["Produkt", PRODUCTS[state.product].name],
    ["Stoff & Passform", a.fit+", "+a.stoff],
    ["Farbe", state.color.name],
    ["Motiv", state.motiv ? state.motiv.name : (state.logo ? "eigenes Logo" : "noch offen")],
    ["Position", posName() + (seite() ? " ("+seite()+")" : "")],
    ["Motivgröße", "ca. "+state.sizeCm.toFixed(1).replace(".0","").replace(".",",")+" cm breit"],
    ["Stückzahl", ($("#menge").value || "—")]
  ];
  // Bewusst ueber textContent statt innerHTML: in "rows" steckt mit der
  // Stueckzahl ein Wert, den der Besucher selbst tippt. So kann daraus
  // niemals Markup werden, egal was drin steht.
  const dl = $("#summary-dl");
  dl.textContent = "";
  rows.forEach(r=>{
    const dt = document.createElement("dt"); dt.textContent = r[0];
    const dd = document.createElement("dd"); dd.textContent = r[1];
    dl.append(dt, dd);
  });
}

/* ============================================================
   5) Logo-Upload
   ============================================================ */
const drop=$("#drop"), file=$("#file");
drop.onclick=()=>file.click();
drop.addEventListener("dragover",e=>{e.preventDefault();drop.classList.add("over")});
drop.addEventListener("dragleave",()=>drop.classList.remove("over"));
drop.addEventListener("drop",e=>{
  e.preventDefault(); drop.classList.remove("over");
  if(e.dataTransfer.files[0]) loadLogo(e.dataTransfer.files[0]);
});
file.addEventListener("change",e=>{ if(e.target.files[0]) loadLogo(e.target.files[0]); });

const LOGO_TYPEN = ["image/png","image/jpeg","image/webp","image/svg+xml"];
function loadLogo(f){
  // Feste Liste statt "faengt mit image/ an": der Dateidialog bietet genau
  // diese vier an, also wird auch nur das angenommen.
  if(!f || !LOGO_TYPEN.includes(f.type)){
    alert("Bitte ein Bild im Format PNG, JPG, WEBP oder SVG wählen."); return;
  }
  if(f.size > 8*1024*1024){ alert("Die Datei ist größer als 8 MB. Schick sie mir einfach direkt im Chat."); return; }
  const r=new FileReader();
  r.onload=()=>{
    const probe=new Image();
    probe.onload=()=>{
      state.logo=r.result;
      state.motiv=null;
      $("#motiv-active").classList.remove("on");
      state.logoRatio = probe.naturalWidth / probe.naturalHeight || 1;
      imgLogo.setAttribute("href", r.result);
      imgMask.setAttribute("href", r.result);
      drop.querySelector("b").textContent = "✓ " + f.name.slice(0, 60);
      drop.querySelector("span").textContent = "Klick, um ein anderes Logo zu wählen.";
      render();
    };
    probe.onerror=()=>alert("Die Datei konnte nicht gelesen werden. Versuch es mit einem PNG.");
    probe.src=r.result;
  };
  r.readAsDataURL(f);
}

/* ============================================================
   6) Motiv verschieben
   ============================================================ */
let dragging=false;
function svgPoint(evt){
  const r=svg.getBoundingClientRect();
  return {
    x:(evt.clientX-r.left)/r.width*600,
    y:(evt.clientY-r.top)/r.height*650
  };
}
rectHit.addEventListener("pointerdown",e=>{
  if(!state.logo) return;
  dragging=true; svg.classList.add("dragging");
  rectHit.setPointerCapture(e.pointerId); e.preventDefault();
});
svg.addEventListener("pointermove",e=>{
  if(!dragging) return;
  const p=svgPoint(e);
  state.x=Math.max(40,Math.min(560,p.x));
  state.y=Math.max(40,Math.min(610,p.y));
  state.posId="frei";
  document.querySelectorAll("#position .chip").forEach(c=>c.setAttribute("aria-pressed","false"));
  render();
});
["pointerup","pointercancel"].forEach(ev=>svg.addEventListener(ev,()=>{
  dragging=false; svg.classList.remove("dragging");
}));

/* ============================================================
   7) Größe
   ============================================================ */
$("#size").addEventListener("input",e=>{ state.sizeCm=parseFloat(e.target.value); render(); });
["menge","firma","wunsch"].forEach(id=>$("#"+id).addEventListener("input",()=>{renderSummary();updateLinks()}));

/* ============================================================
   8) WhatsApp-Nachricht
   ============================================================ */
function messageText(detailed){
  const L=[];
  L.push("Hallo Custom Threads!");
  L.push("");
  if(!detailed){
    L.push("Ich interessiere mich für bestickte Teamwear und hätte gern ein Angebot.");
    L.push("");
    L.push("Mein Logo schicke ich direkt hier im Chat mit.");
    return L.join("\n");
  }
  const a = state.stoff;
  L.push("Ich hätte gern ein Angebot:");
  if($("#firma").value.trim()) L.push("• Firma: "+$("#firma").value.trim());
  if(state.branche) L.push("• Branche: "+state.branche);
  L.push("• Produkt: "+PRODUCTS[state.product].name);
  L.push("• Stoff & Passform: "+a.fit+", "+a.stoff);
  L.push("• Textilfarbe: "+state.color.name);
  L.push("• Stickposition: "+posName()+(seite() ? " ("+seite()+")" : ""));
  L.push("• Motivgröße: ca. "+state.sizeCm.toFixed(1).replace(".0","").replace(".",",")+" cm breit");
  if($("#menge").value) L.push("• Stückzahl: "+$("#menge").value);
  if($("#wunsch").value.trim()) L.push("• Wunschtermin: "+$("#wunsch").value.trim());
  L.push("");
  L.push(state.motiv && state.logo===state.motiv.src
    ? "In der Vorschau habe ich das Custom Threads Logo benutzt. Mein eigenes Logo schicke ich hier im Chat mit."
    : (state.logo ? "Mein Logo schicke ich direkt hier im Chat mit." : "Mein Logo reiche ich gleich nach."));
  return L.join("\n");
}
function waLink(detailed){
  return "https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(messageText(detailed));
}
function updateLinks(){
  $("#wa-btn").href = waLink(true);
  document.querySelectorAll("[data-wa-simple]").forEach(a=>a.href=waLink(false));
  $("#tel-btn").href = "tel:"+CONFIG.telHref;
  $("#tel-link2").href = "tel:"+CONFIG.telHref;
  $("#tel-label").textContent = CONFIG.telAnzeige;
}

/* ============================================================
   9) Kleinkram
   ============================================================ */
$("#burger").onclick=()=>{
  const n=$("#mainnav"), open=n.classList.toggle("open");
  $("#burger").setAttribute("aria-expanded", open?"true":"false");
};
document.querySelectorAll("#mainnav a").forEach(a=>a.onclick=()=>$("#mainnav").classList.remove("open"));
$("#year").textContent=new Date().getFullYear();

const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);} }),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

setProduct(state.product); buildMotivGrid(); buildWerke(); render();