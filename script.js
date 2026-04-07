function setActiveNav() {
  const page = document.body.dataset.page;
  const links = document.querySelectorAll(".main-nav a");

  links.forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });
}

const literacySchedule = [
  { date: "2026-04-07", title: "Light Up the World with Words", week: 1 },
  { date: "2026-04-08", title: "Shining a Light on the Harlem Renaissance", week: 1 },
  { date: "2026-04-09", title: "The Deeper Message", week: 1 },
  { date: "2026-04-13", title: "Lyric Lines and Big Ideas", week: 2 },
  { date: "2026-04-14", title: "Lyric Poem Playground", week: 2 },
  { date: "2026-04-15", title: "Poetry Jam: Lyric Edition", week: 2 },
  { date: "2026-04-16", title: "Gathering Feedback: Lyric Poems", week: 2 },
  { date: "2026-04-20", title: "Through the Poet’s Eyes", week: 3 },
  { date: "2026-04-21", title: "Discovering Symbolism", week: 3 },
  { date: "2026-04-22", title: "Poetry Jam: Free Verse Edition", week: 3 },
  { date: "2026-04-23", title: "Gathering Feedback: Free Verse Poems", week: 3 },
  { date: "2026-04-27", title: "Once Upon a Poem", week: 4 },
  { date: "2026-04-28", title: "Poetry with a Plot", week: 4 },
  { date: "2026-04-29", title: "Poetry Jam: Narrative Edition", week: 4 },
  { date: "2026-04-30", title: "Gathering Feedback: Narrative Poems", week: 4 },
  { date: "2026-05-04", title: "Strike Gold in a Poem", week: 5 },
  { date: "2026-05-05", title: "Striking Gold!", week: 5 },
  { date: "2026-05-06", title: "Poetry Jam: Golden Shovel Edition", week: 5 },
  { date: "2026-05-07", title: "Gathering Feedback: Golden Shovel Poems", week: 5 },
  { date: "2026-05-11", title: "Creative Storytellers", week: 6 },
  { date: "2026-05-12", title: "Poetry Celebration Circles", week: 6 }
];

const themeSchedule = [
  { date: "2026-04-07", title: "Welcome to Hidden Histories", week: 1 },
  { date: "2026-04-08", title: "Setting the Stage", week: 1 },
  { date: "2026-04-09", title: "Curiosity & Competition", week: 1 },
  { date: "2026-04-13", title: "Technologies", week: 2 },
  { date: "2026-04-14", title: "How Trade Remixed the World", week: 2 },
  { date: "2026-04-15", title: "Meet the Taíno", week: 2 },
  { date: "2026-04-16", title: "In My Opinion", week: 2 },
  { date: "2026-04-20", title: "Becoming History Detectives", week: 3 },
  { date: "2026-04-21", title: "How Do Historians Know?", week: 3 },
  { date: "2026-04-22", title: "Primary and Secondary", week: 3 },
  { date: "2026-04-23", title: "I Know Because…", week: 3 },
  { date: "2026-04-27", title: "Telling Hidden Histories", week: 4 },
  { date: "2026-04-28", title: "Research Support Day", week: 4 },
  { date: "2026-04-29", title: "Taking Inspiration", week: 4 },
  { date: "2026-04-30", title: "I (Respectfully) Disagree!", week: 4 },
  { date: "2026-05-04", title: "Outlining", week: 5 },
  { date: "2026-05-05", title: "Giving Feedback", week: 5 },
  { date: "2026-05-06", title: "Wrapping It Up", week: 5 },
  { date: "2026-05-07", title: "Strengthen Your Claim!", week: 5 },
  { date: "2026-05-11", title: "The Final Discussion", week: 6 },
  { date: "2026-05-12", title: "Prisma Powers!", week: 6 },
  { date: "2026-05-13", title: "Expo Day Prep", week: 6 },
  { date: "2026-05-14", title: "Expo Day", week: 6 }
];

const readingSchedule = {
  "2026-04-07": "pp. 1–4",
  "2026-04-08": "pp. 5–7",
  "2026-04-09": "pp. 11–13",
  "2026-04-10": "pp. 15–17",
  "2026-04-13": "pp. 18–23",
  "2026-04-14": "pp. 25–27",
  "2026-04-15": "pp. 31–33",
  "2026-04-16": "pp. 34–37",
  "2026-04-17": "Catch up!",
  "2026-04-20": "pp. 38–45",
  "2026-04-21": "pp. 47–49",
  "2026-04-22": "pp. 51–55",
  "2026-04-23": "pp. 56–63",
  "2026-04-24": "Catch up!",
  "2026-04-27": "pp. 65–67",
  "2026-04-28": "pp. 70–75",
  "2026-04-29": "pp. 77–83",
  "2026-04-30": "pp. 85–89",
  "2026-05-01": "Catch up!",
  "2026-05-04": "pp. 90–93",
  "2026-05-05": "pp. 94–95 🎉",
  "2026-05-06": "Reading done",
  "2026-05-07": "Reading done",
  "2026-05-08": "Reading done",
  "2026-05-11": "Celebrate",
  "2026-05-12": "Final live day"
};

const cycleStart = "2026-04-07";
const cycleEnd = "2026-05-14";

function getTodayIso() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
}

function clampDate(iso) {
  if (iso < cycleStart) return cycleStart;
  if (iso > cycleEnd) return cycleEnd;
  return iso;
}

function addDays(iso, days) {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + days);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
}

function getWeekMonday(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  const day = dt.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  dt.setDate(dt.getDate() + diff);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
}

function formatShortDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}

function formatWeekRange(startIso) {
  const endIso = addDays(startIso, 4);
  const [sy, sm, sd] = startIso.split("-").map(Number);
  const [ey, em, ed] = endIso.split("-").map(Number);

  const start = new Date(sy, sm - 1, sd);
  const end = new Date(ey, em - 1, ed);

  const startLabel = start.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const endLabel = end.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return `${startLabel}–${endLabel}`;
}

function byDate(arr, iso) {
  return arr.find(x => x.date === iso);
}

function renderThisWeek() {
  const heading = document.getElementById("thisWeekHeading");
  const body = document.getElementById("thisWeekBody");

  if (!heading || !body) return;

  const actualToday = getTodayIso();
  const displayToday = clampDate(actualToday);
  const weekStart = getWeekMonday(displayToday);

  heading.textContent = `This Week — ${formatWeekRange(weekStart)}`;

  let rows = "";

  for (let i = 0; i < 5; i++) {
    const d = addDays(weekStart, i);

    if (d < cycleStart || d > cycleEnd) continue;

    const lit = byDate(literacySchedule, d);
    const theme = byDate(themeSchedule, d);
    const reading = readingSchedule[d] || "—";
    const rowClass = d === displayToday ? ' class="highlight"' : "";

    rows += `
      <tr${rowClass}>
        <td>${formatShortDate(d)}</td>
        <td>${reading}</td>
        <td>${lit ? lit.title : "No live session"}</td>
        <td>${theme ? theme.title : "No live session"}</td>
      </tr>
    `;
  }

  body.innerHTML = rows;
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  renderThisWeek();
});