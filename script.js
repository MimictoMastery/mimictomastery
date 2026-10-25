
// =====================================================
// MIMIC TO MASTERY
// Portfolio, Code Lab, Goals, Blog, and Arcade
// =====================================================

// -----------------------------------------------------
// CONFIGURATION
// -----------------------------------------------------

const SITE_CONFIG = {
  github: "https://github.com/MimictoMastery",

  // Change this to the real URL of your Code Quest Arcade.
  // This default expects a game at:
  // code-quest-arcade/index.html
  arcade: "./code-quest-arcade/index.html",

  // Optional: your actual YouTube channel URL.
  youtube: "https://www.youtube.com/"
};

// -----------------------------------------------------
// CURRENT ACTIVITIES
// -----------------------------------------------------

const currentActivities = [
  "Learning JavaScript",
  "Building my portfolio",
  "Practicing Git and GitHub",
  "Turning ideas into working projects"
];

// -----------------------------------------------------
// PROJECTS
// -----------------------------------------------------

const projects = [
  {
    title: "Code Quest Arcade",
    description: "A retro-inspired coding challenge game.",
    status: "In progress",
    technology: "JavaScript, Express, SQLite"
  },
  {
    title: "Mimic to Mastery",
    description: "My personal coding and storytelling website.",
    status: "Building",
    technology: "HTML, CSS, JavaScript"
  },
  {
    title: "ADHD Flip Cards",
    description: "Interactive cards for learning about ADHD traits.",
    status: "Practice project",
    technology: "HTML, CSS, JavaScript"
  }
];

// -----------------------------------------------------
// GOALS
// -----------------------------------------------------

const defaultGoals = [
  { text: "Finish my portfolio website", completed: false },
  { text: "Build stronger JavaScript skills", completed: false },
  { text: "Publish projects on GitHub", completed: false },
  { text: "Land my first developer job", completed: false }
];

let goals = loadGoals();

function loadGoals() {
  try {
    const saved = localStorage.getItem("mtm-goals");

    if (saved) {
      const parsed = JSON.parse(saved);

      if (
        Array.isArray(parsed) &&
        parsed.length === defaultGoals.length &&
        parsed.every(goal =>
          goal &&
          typeof goal.text === "string" &&
          typeof goal.completed === "boolean"
        )
      ) {
        return parsed;
      }
    }
  } catch (error) {
    console.warn("Goals could not be loaded:", error);
  }

  return defaultGoals.map(goal => ({ ...goal }));
}

function saveGoals() {
  try {
    localStorage.setItem("mtm-goals", JSON.stringify(goals));
  } catch (error) {
    console.warn("Goals could not be saved:", error);
  }
}

// -----------------------------------------------------
// LESSONS
// -----------------------------------------------------

const lessons = [
  {
    topic: "HTML",
    takeaway: "HTML gives a webpage its structure."
  },
  {
    topic: "CSS",
    takeaway: "CSS controls how a webpage looks."
  },
  {
    topic: "JavaScript",
    takeaway: "JavaScript adds behavior and interaction."
  }
];

// -----------------------------------------------------
// SOCIAL LINKS
// -----------------------------------------------------

const socials = [
  {
    name: "GitHub",
    url: SITE_CONFIG.github
  },
  {
    name: "YouTube",
    url: SITE_CONFIG.youtube
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/"
  }
];

// -----------------------------------------------------
// BLOG POSTS
// -----------------------------------------------------

const posts = [
  {
    title: "My Journey from Mimicry to Mastery",
    date: "October 2026",
    category: "My Story",
    body: [
      "Learning to code as an adult means learning new skills one step at a time.",
      "Every mistake is an opportunity to understand something better. Every commit is proof that I kept going.",
      "This is where I share my progress, my projects, and the lessons I learn along the way."
    ]
  },
  {
    title: "Learning to Code with ADHD",
    date: "October 2026",
    category: "Learning",
    body: [
      "Learning something new can feel overwhelming when there are so many things to remember.",
      "Breaking a project into smaller steps helps me focus on one idea at a time.",
      "I do not have to learn everything today. I just have to keep moving forward."
    ]
  },
  {
    title: "Stories, Appalachia, and Technology",
    date: "October 2026",
    category: "Appalachian Roots",
    body: [
      "Before I started learning to code, storytelling was already part of my life.",
      "Storytelling and programming both involve organizing ideas, solving problems, and helping people understand something."
    ]
  }
];

// -----------------------------------------------------
// ROTATING CODE SNIPPETS
// A different snippet is selected on each page load.
// -----------------------------------------------------

const snippets = [
  {
    language: "JavaScript",
    title: "Say hello to JavaScript",
    description: "Your first step toward making a webpage interactive.",
    code: 'const name = "Mastery";\nconsole.log("Hello, " + name + "!");',
    explanation: "const creates a variable that cannot be reassigned. console.log() prints a message to the console."
  },
  {
    language: "JavaScript",
    title: "Make a decision",
    description: "Teach your program to choose between two paths.",
    code: 'const score = 85;\n\nif (score >= 70) {\n  console.log("Level complete!");\n} else {\n  console.log("Try again!");\n}',
    explanation: "An if statement checks a condition. If the condition is true, the first block runs; otherwise, else runs."
  },
  {
    language: "JavaScript",
    title: "Repeat an action",
    description: "Loops help you repeat code without writing it again.",
    code: 'for (let i = 1; i <= 5; i++) {\n  console.log("Level " + i);\n}',
    explanation: "A for loop starts at 1, continues while i is at most 5, and increases i after every round."
  },
  {
    language: "JavaScript",
    title: "Create a function",
    description: "Bundle reusable instructions into one named action.",
    code: 'function levelUp(xp) {\n  return xp + 100;\n}\n\nconsole.log(levelUp(50));',
    explanation: "A function accepts input, performs a task, and can return a result. Here, 50 XP becomes 150 XP."
  },
  {
    language: "JavaScript",
    title: "Explore an array",
    description: "Store a collection of items in a single variable.",
    code: 'const skills = ["HTML", "CSS", "JS"];\n\nskills.forEach(skill => {\n  console.log(skill);\n});',
    explanation: "An array stores multiple values. forEach() runs a callback once for each item."
  },
  {
    language: "HTML",
    title: "Build a semantic section",
    description: "Use meaningful HTML elements to organize content.",
    code: '<section aria-labelledby="title">\n  <h2 id="title">My Projects</h2>\n  <p>Ideas becoming reality.</p>\n</section>',
    explanation: "A section groups related content. The heading and aria-labelledby help communicate its purpose."
  },
  {
    language: "CSS",
    title: "Create a glass panel",
    description: "A tiny example of the glassmorphism look.",
    code: '.glass {\n  background: rgba(12, 22, 48, .65);\n  border: 1px solid rgba(255,255,255,.2);\n  backdrop-filter: blur(16px);\n  border-radius: 20px;\n}',
    explanation: "A translucent background, a subtle border, and backdrop-filter combine to create a frosted-glass appearance."
  },
  {
    language: "JavaScript",
    title: "Find an element",
    description: "Connect JavaScript to an element in your HTML.",
    code: 'const heading = document.querySelector("h1");\n\nif (heading) {\n  heading.textContent = "I am learning!";\n}',
    explanation: "querySelector() finds the first matching element. The if statement prevents an error if no matching element exists."
  },
  {
    language: "CSS",
    title: "Add a neon glow",
    description: "Make an element shine without an image.",
    code: '.neon {\n  color: #42edff;\n  text-shadow: 0 0 12px #42edff;\n  box-shadow: 0 0 20px rgba(66,237,255,.2);\n}',
    explanation: "text-shadow adds glow to text. box-shadow adds glow around an element's box."
  },
  {
    language: "JavaScript",
    title: "Listen for a click",
    description: "Respond when a visitor interacts with a button.",
    code: 'const button = document.querySelector("button");\n\nbutton?.addEventListener("click", () => {\n  alert("Quest started!");\n});',
    explanation: "addEventListener() waits for an event. The optional chaining operator ?. avoids calling the method if button is null."
  }
];

let currentSnippetIndex = 0;

function chooseInitialSnippet() {
  let previousIndex = -1;

  try {
    previousIndex = Number(
      localStorage.getItem("mtm-last-snippet")
    );
  } catch (error) {
    // The snippet still works if browser storage is unavailable.
  }

  const candidates = snippets
    .map((snippet, index) => index)
    .filter(index => index !== previousIndex);

  const pool = candidates.length > 0
    ? candidates
    : snippets.map((snippet, index) => index);

  currentSnippetIndex =
    pool[Math.floor(Math.random() * pool.length)];

  rememberSnippet();
}

function rememberSnippet() {
  try {
    localStorage.setItem(
      "mtm-last-snippet",
      String(currentSnippetIndex)
    );
  } catch (error) {
    // Storage is optional; random selection still works.
  }
}

function renderSnippet() {
  const snippet = snippets[currentSnippetIndex];

  const language = document.getElementById("snippet-language");
  const title = document.getElementById("snippet-title");
  const description = document.getElementById("snippet-description");
  const code = document.getElementById("snippet-code");
  const explanation = document.getElementById("snippet-explanation");
  const counter = document.getElementById("snippet-counter");
  const feedback = document.getElementById("snippet-feedback");

  if (!language || !title || !description || !code ||
      !explanation || !counter) {
    return;
  }

  language.textContent = snippet.language;
  title.textContent = snippet.title;
  description.textContent = snippet.description;
  code.textContent = snippet.code;
  explanation.textContent = snippet.explanation;

  counter.textContent =
    String(currentSnippetIndex + 1).padStart(2, "0") +
    " / " +
    String(snippets.length).padStart(2, "0");

  if (feedback) {
    feedback.textContent = "";
  }
}

function nextSnippet() {
  if (snippets.length < 2) return;

  let nextIndex;

  do {
    nextIndex = Math.floor(Math.random() * snippets.length);
  } while (nextIndex === currentSnippetIndex);

  currentSnippetIndex = nextIndex;
  rememberSnippet();
  renderSnippet();
}

async function copySnippet() {
  const code = document.getElementById("snippet-code");
  const feedback = document.getElementById("snippet-feedback");

  if (!code || !feedback) return;

  try {
    await navigator.clipboard.writeText(code.textContent);
    feedback.textContent = "Code copied! Ready to practice.";
  } catch (error) {
    feedback.textContent =
      "Copy is unavailable here. Select the code and copy it manually.";
  }
}

// -----------------------------------------------------
// QUOTES
// Uses quotes.json if available, otherwise local quotes.
// -----------------------------------------------------

const fallbackQuotes = [
  {
    quote: "Every small step is progress. Keep going!",
    author: "Mimic to Mastery"
  },
  {
    quote: "You do not have to know everything to begin.",
    author: "A reminder for the journey"
  },
  {
    quote: "Mistakes mean you are trying something new.",
    author: "Mimic to Mastery"
  },
  {
    quote: "Build it, break it, learn from it, repeat.",
    author: "Developer wisdom"
  },
  {
    quote: "You are allowed to be a beginner.",
    author: "Mimic to Mastery"
  }
];

let availableQuotes = [...fallbackQuotes];
let currentQuoteIndex = -1;

async function loadQuotes() {
  try {
    const response = await fetch("./quotes.json");

    if (!response.ok) {
      throw new Error("Quotes file unavailable.");
    }

    const quotes = await response.json();

    if (
      Array.isArray(quotes) &&
      quotes.length > 0 &&
      quotes.every(item =>
        item &&
        typeof item.quote === "string" &&
        typeof item.author === "string"
      )
    ) {
      availableQuotes = quotes;
    }
  } catch (error) {
    // The built-in quotes keep the section working.
    console.info("Using built-in inspiration quotes.");
  }

  showRandomQuote();
}

function showRandomQuote() {
  const quoteElement = document.getElementById("daily-quote");
  const authorElement = document.getElementById("quote-author");

  if (!quoteElement || !authorElement) return;

  let nextIndex = 0;

  if (availableQuotes.length > 1) {
    do {
      nextIndex = Math.floor(Math.random() * availableQuotes.length);
    } while (nextIndex === currentQuoteIndex);
  }

  currentQuoteIndex = nextIndex;

  const quote = availableQuotes[currentQuoteIndex];

  quoteElement.textContent = '"' + quote.quote + '"';
  authorElement.textContent = "— " + quote.author;
}

// -----------------------------------------------------
// SAFE ELEMENT CREATION
// -----------------------------------------------------

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}

// -----------------------------------------------------
// RENDER ACTIVITIES
// -----------------------------------------------------

function renderActivities() {
  const list = document.getElementById("now-list");
  if (!list) return;

  list.replaceChildren();

  currentActivities.forEach(activity => {
    list.appendChild(createElement("li", "", activity));
  });
}

// -----------------------------------------------------
// RENDER PROJECTS
// -----------------------------------------------------

function renderProjects() {
  const list = document.getElementById("projects-list");
  if (!list) return;

  list.replaceChildren();

  projects.forEach(project => {
    const card = createElement("article", "project-card");

    card.append(
      createElement("h3", "", project.title),
      createElement("p", "", project.description),
      createElement("p", "project-status", project.status),
      createElement("p", "project-tech", "Built with: " + project.technology)
    );

    list.appendChild(card);
  });
}

// -----------------------------------------------------
// GOALS + PROGRESS RING
// -----------------------------------------------------

function renderGoals() {
  const list = document.getElementById("goals-list");
  if (!list) return;

  list.replaceChildren();

  goals.forEach((goal, index) => {
    const label = createElement("label", "goal-item");
    const checkbox = createElement("input");
    const text = createElement("span", "", goal.text);

    checkbox.type = "checkbox";
    checkbox.checked = goal.completed;
    checkbox.setAttribute(
      "aria-label",
      "Mark goal complete: " + goal.text
    );

    if (goal.completed) {
      label.classList.add("is-complete");
    }

    checkbox.addEventListener("change", () => {
      goals[index].completed = checkbox.checked;

      label.classList.toggle("is-complete", checkbox.checked);

      saveGoals();
      updateGoalProgress();
    });

    label.append(checkbox, text);
    list.appendChild(label);
  });

  updateGoalProgress();
}

function updateGoalProgress() {
  const ring = document.getElementById("goal-ring");
  const percentageElement = document.getElementById("goal-percent");
  const summary = document.getElementById("goal-summary");

  if (!ring || !percentageElement || !summary) return;

  const completed = goals.filter(goal => goal.completed).length;
  const total = goals.length;

  const percentage = total
    ? Math.round((completed / total) * 100)
    : 0;

  percentageElement.textContent = percentage + "%";

  summary.textContent =
    completed + " of " + total + " goals complete.";

  ring.style.background =
    "conic-gradient(var(--cyan) " + percentage +
    "%, #303b5b " + percentage + "%)";

  ring.setAttribute(
    "aria-label",
    percentage + " percent of goals completed"
  );
}

// -----------------------------------------------------
// RENDER LESSONS
// -----------------------------------------------------

function renderLessons() {
  const list = document.getElementById("lessons-list");
  if (!list) return;

  list.replaceChildren();

  lessons.forEach(lesson => {
    const card = createElement("article", "lesson-card");

    card.append(
      createElement("h3", "", lesson.topic),
      createElement("p", "", lesson.takeaway)
    );

    list.appendChild(card);
  });
}

// -----------------------------------------------------
// RENDER SOCIAL LINKS
// -----------------------------------------------------

function renderSocialLinks() {
  const list = document.getElementById("social-links");
  if (!list) return;

  list.replaceChildren();

  socials.forEach(social => {
    const link = createElement("a", "social-link", social.name);

    link.href = social.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    list.appendChild(link);
  });
}

// -----------------------------------------------------
// BLOG
// -----------------------------------------------------

function renderPosts() {
  const list = document.getElementById("posts-list");
  if (!list) return;

  list.replaceChildren();

  posts.forEach((post, index) => {
    const button = createElement("button", "post-card");
    button.type = "button";

    const title = createElement("h3", "", post.title);
    const meta = createElement(
      "p",
      "meta",
      post.date + " · " + post.category
    );

    button.append(title, meta);

    button.addEventListener("click", () => openPost(index));

    list.appendChild(button);
  });
}

function openPost(index) {
  const post = posts[index];

  if (!post) return;

  const reader = document.getElementById("blog-reader");
  const meta = document.getElementById("reader-meta");
  const title = document.getElementById("reader-title");
  const body = document.getElementById("reader-body");
  const backButton = document.getElementById("back-button");

  if (!reader || !meta || !title || !body) return;

  meta.textContent = post.date + " · " + post.category;
  title.textContent = post.title;

  body.replaceChildren();

  post.body.forEach(paragraph => {
    body.appendChild(createElement("p", "", paragraph));
  });

  reader.classList.remove("hidden");
  reader.scrollIntoView({ behavior: "smooth", block: "nearest" });

  if (backButton) backButton.focus({ preventScroll: true });
}

function closePost() {
  const reader = document.getElementById("blog-reader");

  if (reader) {
    reader.classList.add("hidden");
  }
}

// -----------------------------------------------------
// CODE QUEST ARCADE CONNECTION
// -----------------------------------------------------

function configureArcade() {
  const launch = document.getElementById("arcade-launch");
  const note = document.getElementById("arcade-note");

  if (!launch || !note) return;

  launch.href = SITE_CONFIG.arcade;

  note.textContent =
    "Launch destination: " + SITE_CONFIG.arcade +
    ". Update SITE_CONFIG.arcade when your game is hosted elsewhere.";
}

// -----------------------------------------------------
// STARTUP
// -----------------------------------------------------

function init() {
  renderActivities();
  renderProjects();
  renderGoals();
  renderLessons();
  renderSocialLinks();
  renderPosts();

  chooseInitialSnippet();
  renderSnippet();

  configureArcade();
  loadQuotes();

  const nextButton = document.getElementById("next-snippet-button");
  const copyButton = document.getElementById("copy-snippet-button");
  const quoteButton = document.getElementById("new-quote-button");
  const backButton = document.getElementById("back-button");

  if (nextButton) {
    nextButton.addEventListener("click", nextSnippet);
  }

  if (copyButton) {
    copyButton.addEventListener("click", copySnippet);
  }

  if (quoteButton) {
    quoteButton.addEventListener("click", showRandomQuote);
  }

  if (backButton) {
    backButton.addEventListener("click", closePost);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
