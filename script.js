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
  {
    date: "2026-04-07",
    session: 1,
    week: 1,
    title: "Light Up the World with Words",
    connect: "“Describe It, Don’t Name It!” with sensory clues",
    explore: "What is poetry? Lines, stanzas, and blackout poetry",
    tryIt: "Create a blackout poem in your journal",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-04-08",
    session: 2,
    week: 1,
    title: "Shining a Light on the Harlem Renaissance",
    connect: "Match modern art to clues from the Harlem Renaissance",
    explore: "How poets and artists from the Harlem Renaissance changed what the world could see",
    tryIt: "Brainstorm a poetry collection topic you want to shine a light on",
    breakout: "Theme breakout research groups"
  },
  {
    date: "2026-04-09",
    session: 3,
    week: 1,
    title: "The Deeper Message",
    connect: "Notice how images and words can point to a bigger message",
    explore: "How theme works in poetry and why it matters",
    tryIt: "Brainstorm four themes you could explore in your poetry collection",
    breakout: "Theme debate prep groups"
  },
  {
    date: "2026-04-13",
    session: 4,
    week: 2,
    title: "Lyric Lines and Big Ideas",
    connect: "Listen for rhythm, rhyme, and repeated ideas",
    explore: "How lyric poems use sound and description to communicate theme",
    tryIt: "Identify the theme of “For a Poet” and support it with evidence",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-04-14",
    session: 5,
    week: 2,
    title: "Lyric Poem Playground",
    connect: "Play with rhyme and repeated phrases",
    explore: "How lyric poems can feel musical and emotional",
    tryIt: "Plan your own lyric poem with a theme, details, and rhyme ideas",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-04-15",
    session: 6,
    week: 2,
    title: "Poetry Jam: Lyric Edition",
    connect: "Notice what makes a line sound memorable",
    explore: "What strong lyric poems do with repetition and flow",
    tryIt: "Draft your lyric poem",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-04-16",
    session: 7,
    week: 2,
    title: "Gathering Feedback: Lyric Poems",
    connect: "Listen for what is working in a partner’s poem",
    explore: "How feedback can help a poem grow clearer and stronger",
    tryIt: "Revise and polish your lyric poem using feedback",
    breakout: "Feedback breakouts"
  },
  {
    date: "2026-04-20",
    session: 8,
    week: 3,
    title: "Through the Poet’s Eyes",
    connect: "Think about whose voice you hear in a poem",
    explore: "How point of view shapes meaning in free verse",
    tryIt: "Compare advice and point of view in two poems",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-04-21",
    session: 9,
    week: 3,
    title: "Discovering Symbolism",
    connect: "Match objects and images to moods and meanings",
    explore: "How poets use symbolism and imagery in free verse",
    tryIt: "Plan your free verse poem using symbols and descriptive language",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-04-22",
    session: 10,
    week: 3,
    title: "Poetry Jam: Free Verse Edition",
    connect: "Study how a picture can spark poetic language",
    explore: "How free verse can sound natural while still carrying strong images",
    tryIt: "Draft your free verse poem",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-04-23",
    session: 11,
    week: 3,
    title: "Gathering Feedback: Free Verse Poems",
    connect: "Notice where a poem paints a clear picture",
    explore: "How revision sharpens imagery and theme",
    tryIt: "Revise and polish your free verse poem using feedback",
    breakout: "Feedback breakouts"
  },
  {
    date: "2026-04-27",
    session: 12,
    week: 4,
    title: "Once Upon a Poem",
    connect: "Track what happens in a poem like a story",
    explore: "How narrative poems use plot, character, and figurative language",
    tryIt: "Make inferences about figurative language and discuss the poem with someone at home",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-04-28",
    session: 13,
    week: 4,
    title: "Poetry with a Plot",
    connect: "Notice how conflict and story can live inside a poem",
    explore: "How narrative poems build plot across stanzas",
    tryIt: "Plan your narrative poem with plot events and figurative language",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-04-29",
    session: 14,
    week: 4,
    title: "Poetry Jam: Narrative Edition",
    connect: "Study how poets build tension and movement",
    explore: "How narrative poems balance story and craft",
    tryIt: "Draft your narrative poem",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-04-30",
    session: 15,
    week: 4,
    title: "Gathering Feedback: Narrative Poems",
    connect: "Look for the moment a character changes or learns",
    explore: "How revision helps a story-poem feel complete",
    tryIt: "Revise and polish your narrative poem using feedback",
    breakout: "Feedback breakouts"
  },
  {
    date: "2026-05-04",
    session: 16,
    week: 5,
    title: "Strike Gold in a Poem",
    connect: "Notice how words and visuals can work together",
    explore: "How golden shovel poems remix earlier lines and themes",
    tryIt: "Analyze theme and illustration choices in a published poem",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-05-05",
    session: 17,
    week: 5,
    title: "Striking Gold!",
    connect: "Notice how one borrowed line can spark something new",
    explore: "How golden shovel poems build from another poet’s words",
    tryIt: "Plan your golden shovel poem and choose the line you will remix",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-05-06",
    session: 18,
    week: 5,
    title: "Poetry Jam: Golden Shovel Edition",
    connect: "Notice where older and newer voices meet",
    explore: "How structure and line choice shape a golden shovel poem",
    tryIt: "Draft your golden shovel poem",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-05-07",
    session: 19,
    week: 5,
    title: "Gathering Feedback: Golden Shovel Poems",
    connect: "Look for where the original line and new message connect",
    explore: "How revision helps a final poem collection feel polished",
    tryIt: "Revise your golden shovel poem and reflect on the message of your collection",
    breakout: "Feedback breakouts"
  },
  {
    date: "2026-05-11",
    session: 20,
    week: 6,
    title: "Creative Storytellers",
    connect: "Notice what makes a poem memorable to listeners",
    explore: "How writers reflect on growth across a full poetry cycle",
    tryIt: "Share a favorite poem and reflect on how your writing has changed this cycle",
    breakout: "Campfire celebration circles"
  },
  {
    date: "2026-05-12",
    session: 21,
    week: 6,
    title: "Poetry Celebration Circles",
    connect: "Listen for one craft move you want to carry into future writing",
    explore: "How celebration helps a learning community close a cycle well",
    tryIt: "Share a final piece and name one craft move you are proud of",
    breakout: "Campfire celebration circles"
  }
];

const themeSchedule = [
  {
    date: "2026-04-07",
    session: 1,
    week: 1,
    title: "Welcome to Hidden Histories",
    explore: "Then & Now guesses about everyday objects",
    explain: "Ada Lovelace and the hidden history of computers",
    tryIt: "Become a historian and reflect on hidden histories hiding inside everyday objects",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-04-08",
    session: 2,
    week: 1,
    title: "Setting the Stage",
    explore: "What the common story of the Age of Exploration usually includes",
    explain: "How historians gather clues from who, what, where, when, why, and how",
    tryIt: "Get curious about one object at home and practice drawing conclusions from an artifact",
    breakout: "Theme breakout research groups"
  },
  {
    date: "2026-04-09",
    session: 3,
    week: 1,
    title: "Curiosity & Competition",
    explore: "How curiosity and competition pushed explorers to take risks",
    explain: "Why leaders funded dangerous voyages",
    tryIt: "Represent what drove Magellan more: curiosity, competition, or both",
    breakout: "Theme debate prep groups"
  },
  {
    date: "2026-04-13",
    session: 4,
    week: 2,
    title: "Technologies",
    explore: "How tools and inventions made long voyages possible",
    explain: "Why technology mattered alongside curiosity and competition",
    tryIt: "Join a voyage and trace how curiosity, competition, and technology worked together",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-04-14",
    session: 5,
    week: 2,
    title: "How Trade Remixed the World",
    explore: "How global trade changed what people could eat, use, and exchange",
    explain: "Why trade reshaped everyday life",
    tryIt: "Imagine life without global trade and decide what would be worth trading for",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-04-15",
    session: 6,
    week: 2,
    title: "Meet the Taíno",
    explore: "What colonization was and who it harmed",
    explain: "Why it matters to hear perspectives missing from the common story",
    tryIt: "Write from another perspective and explain what newcomers should have done differently",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-04-16",
    session: 7,
    week: 2,
    title: "In My Opinion",
    explore: "How to form a clear historical claim",
    explain: "What respectful dialogue sounds like",
    tryIt: "Summarize the Age of Exploration and explain why it still matters today",
    breakout: "Discussion circles"
  },
  {
    date: "2026-04-20",
    session: 8,
    week: 3,
    title: "Becoming History Detectives",
    explore: "Whose stories usually get left out of history",
    explain: "What makes a topic a hidden history",
    tryIt: "Choose a hidden history to research and identify who was involved and what happened",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-04-21",
    session: 9,
    week: 3,
    title: "How Do Historians Know?",
    explore: "How historians gather information from different types of sources",
    explain: "How research questions help close gaps in understanding",
    tryIt: "Dig deeper into where, when, and why your hidden history mattered",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-04-22",
    session: 10,
    week: 3,
    title: "Primary and Secondary",
    explore: "How to tell the difference between primary and secondary sources",
    explain: "Why source choice shapes what we can claim",
    tryIt: "Reflect on how your hidden history changes your understanding of the Age of Exploration",
    breakout: "Research breakouts"
  },
  {
    date: "2026-04-23",
    session: 11,
    week: 3,
    title: "I Know Because…",
    explore: "How historians connect claims to evidence",
    explain: "Why hidden histories deserve to be uncovered",
    tryIt: "Build a claim and choose evidence that supports why your hidden history matters",
    breakout: "Discussion and coaching breakouts"
  },
  {
    date: "2026-04-27",
    session: 12,
    week: 4,
    title: "Telling Hidden Histories",
    explore: "Different ways historians and artists can represent a story",
    explain: "How project choices shape what an audience notices",
    tryIt: "Choose your final project type and start brainstorming how to represent your hidden history",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-04-28",
    session: 13,
    week: 4,
    title: "Research Support Day",
    explore: "How images, artifacts, and symbols can support a project",
    explain: "How to choose pieces that truly connect to your topic",
    tryIt: "Find two supporting pieces and sketch a plan for your project",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-04-29",
    session: 14,
    week: 4,
    title: "Taking Inspiration",
    explore: "How artists and storytellers make history feel alive",
    explain: "How inspiration can influence project choices",
    tryIt: "Start creating your project and set a goal for tomorrow’s work",
    breakout: "Studio breakouts"
  },
  {
    date: "2026-04-30",
    session: 15,
    week: 4,
    title: "I (Respectfully) Disagree!",
    explore: "How to disagree respectfully about ideas and interpretations",
    explain: "Why discussion skills matter when studying history",
    tryIt: "Keep creating and finish your original project component",
    breakout: "Discussion circles"
  },
  {
    date: "2026-05-04",
    session: 16,
    week: 5,
    title: "Outlining",
    explore: "How a strong statement explains both the project and its meaning",
    explain: "Why structure helps an audience follow your thinking",
    tryIt: "Outline your personal statement and plan how your project will teach visitors",
    breakout: "No breakout rooms today"
  },
  {
    date: "2026-05-05",
    session: 17,
    week: 5,
    title: "Giving Feedback",
    explore: "What helpful feedback sounds like",
    explain: "How criteria can guide revision",
    tryIt: "Use feedback criteria to revise your project and statement",
    breakout: "Feedback breakouts"
  },
  {
    date: "2026-05-06",
    session: 18,
    week: 5,
    title: "Wrapping It Up",
    explore: "How to pull research, visuals, and explanation into one polished project",
    explain: "What makes an audience-ready presentation",
    tryIt: "Wrap up project pieces and make final choices for how you will present them",
    breakout: "Breakout rooms"
  },
  {
    date: "2026-05-07",
    session: 19,
    week: 5,
    title: "Strengthen Your Claim!",
    explore: "How questioning can sharpen a historical claim",
    explain: "Why strong evidence makes a final discussion stronger",
    tryIt: "Strengthen your claim and get ready to defend it with evidence",
    breakout: "Discussion prep breakouts"
  },
  {
    date: "2026-05-11",
    session: 20,
    week: 6,
    title: "The Final Discussion",
    explore: "The strongest arguments on both sides of the final question",
    explain: "How historians weigh evidence, impact, and perspective",
    tryIt: "Join the final discussion and support your claim with evidence from the cycle",
    breakout: "Discussion circles"
  },
  {
    date: "2026-05-12",
    session: 21,
    week: 6,
    title: "Prisma Powers!",
    explore: "How to reflect on what changed in your thinking this cycle",
    explain: "Why communities celebrate learning and growth",
    tryIt: "Reflect on your growth, share appreciations, and polish last details before Expo prep",
    breakout: "Reflection circles"
  },
  {
    date: "2026-05-13",
    session: 22,
    week: 6,
    title: "Expo Day Prep",
    explore: "How to get a project ready for an audience",
    explain: "What strong rehearsal and setup look like",
    tryIt: "Rehearse, organize materials, and make final Expo decisions",
    breakout: "Expo prep groups"
  },
  {
    date: "2026-05-14",
    session: 23,
    week: 6,
    title: "Expo Day",
    explore: "How to present clearly and confidently to visitors",
    explain: "Why sharing your work completes the research process",
    tryIt: "Present your hidden history project and celebrate the work of the whole cohort",
    breakout: "Expo sharing groups"
  }
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
const dailyPracticeItems = [
  "Project journal practice",
  "Literacy journal practice",
  "Daily math practice",
  "Check the reading schedule"
];

function getTodayIso() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
}

function clampDate(iso, start = cycleStart, end = cycleEnd) {
  if (iso < start) return start;
  if (iso > end) return end;
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

function formatLongDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
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

function renderDailyPractice() {
  const list = document.getElementById("dailyPracticeList");
  if (!list) return;

  list.innerHTML = dailyPracticeItems
    .map(item => `<li>${item}</li>`)
    .join("");
}

function renderTodayPage() {
  const title = document.getElementById("todayPageTitle");
  if (!title) return;

  const notice = document.getElementById("todayNotice");
  const readingAssignment = document.getElementById("readingAssignment");
  const todayBadge = document.getElementById("todayBadge");
  const litLiveSession = document.getElementById("litLiveSession");
  const themeLiveSession = document.getElementById("themeLiveSession");
  const litOverviewContent = document.getElementById("litOverviewContent");
  const themeOverviewContent = document.getElementById("themeOverviewContent");

  const actualToday = getTodayIso();
  const displayToday = clampDate(actualToday);

  const lit = byDate(literacySchedule, displayToday);
  const theme = byDate(themeSchedule, displayToday);
  const reading = readingSchedule[displayToday] || "Check schedule";
  const weekNum = lit?.week || theme?.week || 1;

  title.textContent = `Today — ${formatLongDate(displayToday)}`;
  readingAssignment.textContent = reading;

  if (lit) {
    todayBadge.textContent = `Week ${lit.week} · Session ${lit.session}`;
  } else if (theme) {
    todayBadge.textContent = `Week ${theme.week} · Session ${theme.session}`;
  } else {
    todayBadge.textContent = `Week ${weekNum}`;
  }

  if (actualToday < cycleStart) {
    notice.innerHTML = `
      <div class="notice">
        <h3 class="section-title">Heads up!</h3>
        <p>This hub is showing the first day of the cycle right now because today is before the cycle begins.</p>
      </div>
    `;
  } else if (actualToday > cycleEnd) {
    notice.innerHTML = `
      <div class="notice">
        <h3 class="section-title">Heads up!</h3>
        <p>This hub is showing the last day of the cycle right now because today is after the live cycle.</p>
      </div>
    `;
  } else {
    notice.innerHTML = "";
  }

  litLiveSession.textContent = lit ? lit.breakout : "No live session today";
  themeLiveSession.textContent = theme ? theme.breakout : "No live session today";

  if (lit) {
    litOverviewContent.innerHTML = `
      <p><strong>Session ${lit.session} · ${lit.title}</strong></p>
      <ul class="pretty-list" style="margin-top:.6rem;">
        <li><strong>Connect:</strong> ${lit.connect}</li>
        <li><strong>Explore:</strong> ${lit.explore}</li>
        <li><strong>Try It Out:</strong> ${lit.tryIt}</li>
      </ul>
    `;
  } else {
    litOverviewContent.innerHTML = `<p>No Literacy Lab live session today.</p>`;
  }

  if (theme) {
    themeOverviewContent.innerHTML = `
      <p><strong>Session ${theme.session} · ${theme.title}</strong></p>
      <ul class="pretty-list" style="margin-top:.6rem;">
        <li><strong>Explore:</strong> ${theme.explore}</li>
        <li><strong>Explain:</strong> ${theme.explain}</li>
        <li><strong>Try It Out:</strong> ${theme.tryIt}</li>
      </ul>
    `;
  } else {
    themeOverviewContent.innerHTML = `<p>No Theme Workshop live session today.</p>`;
  }
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

function highlightCurrentDate() {
  const today = getTodayIso();
  const displayDate = clampDate(today);

  document.querySelectorAll("[data-date]").forEach((el) => {
    if (el.dataset.date === displayDate) {
      el.classList.add("is-today");
    } else {
      el.classList.remove("is-today");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();

  if (typeof renderDailyPractice === "function") renderDailyPractice();
  if (typeof renderTodayPage === "function") renderTodayPage();
  if (typeof renderThisWeek === "function") renderThisWeek();

  highlightCurrentDate();
});