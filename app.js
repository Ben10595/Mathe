const TOPICS = [
  {
    id: "grundlagen",
    title: "Grundlagen und Rechenregeln",
    tags: ["Basis", "Pflicht"],
    know: [
      "Punkt vor Strich, Klammern von innen nach außen",
      "Vorzeichen sicher, Minus mal Minus ist Plus",
      "Umformen, sauber und Schritt für Schritt"
    ],
    formulas: [
      "a + b·c bedeutet erst b·c",
      "Klammer vor allem: 2(3x-1)=6x-2"
    ],
    pitfalls: [
      "Klammern vergessen",
      "Vorzeichenfehler beim Umformen"
    ],
    quiz: [
      { q: "Was rechnest du zuerst: 6 + 4 · 3 ?", a: "Erst 4 · 3 = 12, dann 6 + 12 = 18." },
      { q: "2(5x-3) ausmultiplizieren", a: "10x - 6" }
    ]
  },
  {
    id: "bruch",
    title: "Bruchrechnung",
    tags: ["Basis", "Sehr häufig"],
    know: [
      "Kürzen und Erweitern",
      "Addieren und Subtrahieren nur mit gleichem Nenner",
      "Dividieren ist mal Kehrwert"
    ],
    formulas: [
      "a/b + c/d = (ad+bc) / bd",
      "a/b : c/d = a/b · d/c"
    ],
    pitfalls: [
      "Nenner beim Plus nicht gleich gemacht",
      "Kehrwert beim Teilen vergessen"
    ],
    quiz: [
      { q: "Wie addierst du 1/4 + 1/8 ?", a: "Nenner 8: 1/4 = 2/8, dann 2/8 + 1/8 = 3/8." },
      { q: "3/5 : 6/7", a: "3/5 · 7/6, erst kürzen: 3 mit 6, dann = 7/10." }
    ]
  },
  {
    id: "prozent",
    title: "Prozentrechnung",
    tags: ["Pflicht", "Sehr häufig"],
    know: [
      "Grundwert G, Prozentwert W, Prozentsatz p",
      "Erhöhen und verringern mit Faktor",
      "Prozent in Dezimalzahl umwandeln"
    ],
    formulas: [
      "W = (p/100) · G",
      "p = (W/G) · 100",
      "G = W / (p/100)",
      "Faktor: neu = alt · (1 + p/100) oder alt · (1 - p/100)"
    ],
    pitfalls: [
      "Prozent vergessen durch 100 zu teilen",
      "Plus oder Minus beim Faktor verwechselt"
    ],
    quiz: [
      { q: "Was ist 15 Prozent von 80?", a: "W = 0,15 · 80 = 12." },
      { q: "Preis 50, minus 20 Prozent. Neuer Preis?", a: "50 · 0,8 = 40." }
    ]
  },
  {
    id: "dreisatz",
    title: "Dreisatz und Verhältnis, Kreuz",
    tags: ["Pflicht", "Häufig"],
    know: [
      "Direkt proportional: mehr mehr, weniger weniger",
      "Indirekt proportional: mehr weniger",
      "Erst Tabelle, dann auf 1, dann hochrechnen"
    ],
    formulas: [
      "Direkt: y = k·x",
      "Indirekt: y = k/x"
    ],
    pitfalls: [
      "Direkt und indirekt verwechselt",
      "Einheiten nicht beachtet"
    ],
    quiz: [
      { q: "Direkt oder indirekt: 3 Arbeiter brauchen 6 Tage. 6 Arbeiter?", a: "Indirekt. Doppelt so viele Arbeiter, halb so viele Tage, also 3 Tage." },
      { q: "2 kg kosten 6 Euro. 5 kg kosten?", a: "Direkt. 1 kg = 3 Euro, 5 kg = 15 Euro." }
    ]
  },
  {
    id: "terme",
    title: "Terme und Umformen",
    tags: ["Pflicht"],
    know: [
      "Zusammenfassen, gleiche Variablen und gleiche Potenz",
      "Ausklammern, Ausmultiplizieren",
      "Binomische Formeln kennen"
    ],
    formulas: [
      "(a+b)^2 = a^2 + 2ab + b^2",
      "(a-b)^2 = a^2 - 2ab + b^2",
      "(a+b)(a-b) = a^2 - b^2"
    ],
    pitfalls: [
      "2ab vergessen",
      "Vorzeichenfehler bei (a-b)^2"
    ],
    quiz: [
      { q: "(x+3)^2 ausmultiplizieren", a: "x^2 + 6x + 9" },
      { q: "x^2 - 9 faktorisieren", a: "(x-3)(x+3)" }
    ]
  },
  {
    id: "gleichungen",
    title: "Gleichungen lösen",
    tags: ["Pflicht", "Sehr häufig"],
    know: [
      "Äquivalenzumformungen, beide Seiten gleich behandeln",
      "Bruchgleichungen, erst Hauptnenner",
      "Textaufgaben in Gleichung übersetzen"
    ],
    formulas: [
      "Wenn Brüche: mit Hauptnenner multiplizieren",
      "Wenn Klammern: erst ausmultiplizieren"
    ],
    pitfalls: [
      "Nicht beide Seiten verändert",
      "Vorzeichen beim rüberholen falsch"
    ],
    quiz: [
      { q: "Löse: 3x - 5 = 10", a: "3x = 15, x = 5." },
      { q: "Löse: x/4 + 2 = 5", a: "x/4 = 3, x = 12." }
    ]
  },
  {
    id: "potenzen",
    title: "Potenzen und Wurzeln",
    tags: ["Häufig"],
    know: [
      "Potenzgesetze sicher",
      "Wurzel als umgekehrte Potenz",
      "Zahlenfaktor und Variablen getrennt behandeln"
    ],
    formulas: [
      "a^m · a^n = a^(m+n)",
      "a^m / a^n = a^(m-n)",
      "(a^m)^n = a^(m·n)",
      "sqrt(a^2) = |a|"
    ],
    pitfalls: [
      "Exponenten addieren obwohl plus im Term steht",
      "Betrag bei Wurzel aus Quadrat vergessen"
    ],
    quiz: [
      { q: "Vereinfache: x^3 · x^5", a: "x^8" },
      { q: "Vereinfache: (2x^2)^3", a: "8x^6" }
    ]
  },
  {
    id: "funktionen",
    title: "Funktionen und Graphen",
    tags: ["Pflicht", "Sehr häufig"],
    know: [
      "y = f(x), Werte einsetzen",
      "Graph lesen, steigend fallend Nullstellen",
      "Achsenabschnitt und Steigung verstehen"
    ],
    formulas: [
      "Steigung m = (y2 - y1) / (x2 - x1)",
      "Lineare Funktion: y = m x + b"
    ],
    pitfalls: [
      "m und b verwechselt",
      "Punkte falsch abgelesen"
    ],
    quiz: [
      { q: "Was ist b bei y = 2x + 3?", a: "b = 3, der y Achsenabschnitt." },
      { q: "Steigung aus Punkten (1,2) und (3,6)", a: "m = (6-2)/(3-1) = 4/2 = 2." }
    ]
  },
  {
    id: "quadratisch",
    title: "Quadratische Funktionen, Parabel",
    tags: ["Häufig"],
    know: [
      "Normalform und Scheitelpunktform",
      "Nullstellen, Scheitelpunkt, Öffnung",
      "Faktorisieren oder pq Formel"
    ],
    formulas: [
      "y = ax^2 + bx + c",
      "pq Formel bei x^2 + px + q = 0: x = -p/2 ± sqrt((p/2)^2 - q)",
      "Scheitelpunkt: xS = -b/(2a)"
    ],
    pitfalls: [
      "Vorzeichen bei pq Formel",
      "a vergessen, wenn nicht 1"
    ],
    quiz: [
      { q: "Nullstellen von x^2 - 9", a: "x = 3 und x = -3." },
      { q: "Scheitel x Koordinate bei y = 2x^2 + 8x + 1", a: "xS = -b/(2a) = -8/(4) = -2." }
    ]
  },
  {
    id: "geometrie",
    title: "Geometrie: Umfang, Fläche, Volumen",
    tags: ["Pflicht", "Häufig"],
    know: [
      "Formeln sicher, Einheiten beachten",
      "Umfang, Fläche, Volumen unterscheiden",
      "Kreis und Zylinder kommen oft"
    ],
    formulas: [
      "Rechteck A = a·b, U = 2a + 2b",
      "Dreieck A = (g·h)/2",
      "Kreis A = pi r^2, U = 2 pi r",
      "Quader V = a·b·c, Zylinder V = pi r^2 h"
    ],
    pitfalls: [
      "cm und cm^2 verwechselt",
      "r und d verwechselt"
    ],
    quiz: [
      { q: "Kreisfläche mit r = 3", a: "A = pi · 9 ≈ 28,27." },
      { q: "Dreiecksfläche g=10, h=4", a: "A = (10·4)/2 = 20." }
    ]
  },
  {
    id: "pythagoras",
    title: "Satz des Pythagoras",
    tags: ["Häufig"],
    know: [
      "Nur im rechtwinkligen Dreieck",
      "Hypotenuse ist die längste Seite, gegenüber vom rechten Winkel",
      "Umstellen, Wurzel ziehen"
    ],
    formulas: [
      "a^2 + b^2 = c^2",
      "c = sqrt(a^2 + b^2)"
    ],
    pitfalls: [
      "Falsche Seite als c genommen",
      "Wurzel vergessen"
    ],
    quiz: [
      { q: "a=6, b=8, c?", a: "c = sqrt(36+64) = sqrt(100) = 10." },
      { q: "Wann darfst du Pythagoras benutzen?", a: "Nur wenn ein Winkel 90 Grad ist." }
    ]
  },
  {
    id: "trigo",
    title: "Trigonometrie: sin cos tan",
    tags: ["Oft in Prüfungen"],
    know: [
      "Rechtwinkliges Dreieck: Gegenkathete, Ankathete, Hypotenuse",
      "sin cos tan zuordnen",
      "Winkel mit arctan oder arcsin oder arccos"
    ],
    formulas: [
      "sin = Gegen / Hyp",
      "cos = An / Hyp",
      "tan = Gegen / An"
    ],
    pitfalls: [
      "Gegen und An vertauscht",
      "Taschenrechner Grad und nicht Radiant"
    ],
    quiz: [
      { q: "Wie lautet tan?", a: "tan = Gegenkathete / Ankathete." },
      { q: "Du kennst Gegen und Hyp, welche Funktion?", a: "sin, weil sin = Gegen / Hyp." }
    ]
  },
  {
    id: "statistik",
    title: "Statistik und Auswertung",
    tags: ["Kommt oft"],
    know: [
      "Mittelwert, Median, Spannweite",
      "Diagramme lesen, Balken Kreis",
      "Daten sauber sortieren"
    ],
    formulas: [
      "Mittelwert = Summe / Anzahl",
      "Spannweite = max - min"
    ],
    pitfalls: [
      "Median bei gerader Anzahl falsch",
      "Achsen falsch gelesen"
    ],
    quiz: [
      { q: "Median von 2, 3, 7, 10", a: "Mittel der mittleren: (3+7)/2 = 5." },
      { q: "Spannweite bei 4, 9, 2, 12", a: "12 - 2 = 10." }
    ]
  },
  {
    id: "wahrscheinlichkeit",
    title: "Wahrscheinlichkeit",
    tags: ["Häufig"],
    know: [
      "Ergebnisraum, günstige durch mögliche",
      "Baumdiagramm und Pfadregeln",
      "Unabhängig oder ohne Zurücklegen"
    ],
    formulas: [
      "P = günstig / möglich",
      "Bei Baum: entlang multiplizieren, gleiche Enden addieren"
    ],
    pitfalls: [
      "Mit und ohne Zurücklegen verwechselt",
      "Addieren statt multiplizieren im Baum"
    ],
    quiz: [
      { q: "Wahrscheinlichkeit bei fairem Würfel eine 6", a: "1/6." },
      { q: "Baum: erst rot 1/2 dann blau 1/3, Pfad?", a: "1/2 · 1/3 = 1/6." }
    ]
  },
  {
    id: "linearsystem",
    title: "Lineare Gleichungssysteme",
    tags: ["Manchmal"],
    know: [
      "Einsetzverfahren, Gleichsetzverfahren, Additionsverfahren",
      "Lösung als Punkt im Koordinatensystem",
      "Probe machen"
    ],
    formulas: [
      "Additionsverfahren: Gleichungen so multiplizieren, dass eine Variable wegfällt"
    ],
    pitfalls: [
      "Fehler beim Multiplizieren",
      "Probe vergessen"
    ],
    quiz: [
      { q: "Wozu Probe bei LGS?", a: "Checkt, ob die gefundene Lösung beide Gleichungen erfüllt." },
      { q: "Was bedeutet keine Lösung geometrisch?", a: "Zwei parallele Geraden, die sich nie schneiden." }
    ]
  }
];

const LS_KEY = "mathe_overview_progress_v1";

const els = {
  cards: document.getElementById("cards"),
  search: document.getElementById("search"),
  expandAll: document.getElementById("expandAll"),
  collapseAll: document.getElementById("collapseAll"),
  progressText: document.getElementById("progressText"),
  barFill: document.getElementById("barFill"),

  quizModal: document.getElementById("quizModal"),
  closeQuiz: document.getElementById("closeQuiz"),
  startQuiz: document.getElementById("startQuiz"),
  revealAnswer: document.getElementById("revealAnswer"),
  nextQuestion: document.getElementById("nextQuestion"),
  quizTopic: document.getElementById("quizTopic"),
  quizCount: document.getElementById("quizCount"),
  quizQ: document.getElementById("quizQ"),
  quizA: document.getElementById("quizA"),
};

function loadProgress(){
  try{
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch{
    return {};
  }
}
function saveProgress(state){
  localStorage.setItem(LS_KEY, JSON.stringify(state));
}

let progressState = loadProgress();

function topicMatches(topic, q){
  if(!q) return true;
  const s = q.toLowerCase().trim();
  const inTitle = topic.title.toLowerCase().includes(s);
  const inTags = (topic.tags || []).some(t => t.toLowerCase().includes(s));
  const inKnow = (topic.know || []).some(k => k.toLowerCase().includes(s));
  const inForm = (topic.formulas || []).some(f => f.toLowerCase().includes(s));
  return inTitle || inTags || inKnow || inForm;
}

function escapeHtml(str){
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render(){
  const q = els.search.value || "";
  const filtered = TOPICS.filter(t => topicMatches(t, q));

  els.cards.innerHTML = filtered.map(t => {
    const checked = !!progressState[t.id];
    const tagHtml = (t.tags || []).map(tag => `<span class="pill">${escapeHtml(tag)}</span>`).join("");

    const knowList = (t.know || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");
    const formList = (t.formulas || []).map(x => `<li><span class="kbd">${escapeHtml(x)}</span></li>`).join("");
    const pitList = (t.pitfalls || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");

    return `
      <article class="card" data-id="${escapeHtml(t.id)}">
        <div class="cardTop">
          <div>
            <h3>${escapeHtml(t.title)}</h3>
            <div class="tagRow">${tagHtml}</div>
          </div>
          <span class="pill ${checked ? "good" : "warn"}">
            ${checked ? "Kann ich" : "Üben"}
          </span>
        </div>

        <div class="details">
          <details>
            <summary>
              Details anzeigen
              <span class="chev">›</span>
            </summary>

            <div class="block">
              <b>Was du können musst</b>
              <ul class="list">${knowList}</ul>

              <b style="display:block;margin-top:10px;">Formeln und Regeln</b>
              <ul class="list">${formList}</ul>

              <b style="display:block;margin-top:10px;">Typische Fallen</b>
              <ul class="list">${pitList}</ul>
            </div>
          </details>

          <label class="checkRow">
            <input type="checkbox" class="topicCheck" ${checked ? "checked" : ""} />
            <span>Als gelernt markieren</span>
          </label>
        </div>
      </article>
    `;
  }).join("");

  bindCardEvents();
  updateProgressUI();
}

function bindCardEvents(){
  document.querySelectorAll(".topicCheck").forEach(cb => {
    cb.addEventListener("change", (e) => {
      const card = e.target.closest(".card");
      const id = card?.dataset?.id;
      if(!id) return;
      progressState[id] = e.target.checked;
      saveProgress(progressState);
      render();
    });
  });
}

function updateProgressUI(){
  const total = TOPICS.length;
  const done = Object.values(progressState).filter(Boolean).length;
  els.progressText.textContent = `${done} von ${total}`;
  const pct = total ? Math.round((done / total) * 100) : 0;
  els.barFill.style.width = `${pct}%`;
}

els.search.addEventListener("input", render);

els.expandAll.addEventListener("click", () => {
  document.querySelectorAll("details").forEach(d => d.open = true);
});
els.collapseAll.addEventListener("click", () => {
  document.querySelectorAll("details").forEach(d => d.open = false);
});

/* Quiz */
let quizPool = [];
let quizIndex = 0;

function buildQuizPool(){
  const pool = [];
  for(const t of TOPICS){
    for(const item of (t.quiz || [])){
      pool.push({ topic: t.title, q: item.q, a: item.a });
    }
  }
  for(let i = pool.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool;
}

function showQuizQuestion(){
  if(!quizPool.length) return;

  const item = quizPool[quizIndex % quizPool.length];
  els.quizTopic.textContent = item.topic;
  els.quizCount.textContent = `${quizIndex + 1} von ${quizPool.length}`;
  els.quizQ.textContent = item.q;
  els.quizA.textContent = item.a;
  els.quizA.classList.add("hidden");
}

function openQuiz(){
  quizPool = buildQuizPool();
  quizIndex = 0;
  els.quizModal.classList.remove("hidden");
  showQuizQuestion();
}
function closeQuiz(){
  els.quizModal.classList.add("hidden");
}

els.startQuiz.addEventListener("click", openQuiz);
els.closeQuiz.addEventListener("click", closeQuiz);

els.revealAnswer.addEventListener("click", () => {
  els.quizA.classList.remove("hidden");
});
els.nextQuestion.addEventListener("click", () => {
  quizIndex++;
  showQuizQuestion();
});

els.quizModal.addEventListener("click", (e) => {
  if(e.target === els.quizModal) closeQuiz();
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && !els.quizModal.classList.contains("hidden")) closeQuiz();
});

render();
