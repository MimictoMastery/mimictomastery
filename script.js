
const nowList = document.getElementById("now-list");
const projectsList = document.getElementById("projects-list");
const goalsList = document.getElementById("goals-list");
const lessonsList = document.getElementById("lessons-list");
const socialLinks = document.getElementById("social-links");
const postsList = document.getElementById("posts-list");

const goalRing = document.getElementById("goal-ring");
const goalPercent = document.getElementById("goal-percent");
const goalSummary = document.getElementById("goal-summary");

const blogReader = document.getElementById("blog-reader");
const backButton = document.getElementById("back-button");
const readerMeta = document.getElementById("reader-meta");
const readerTitle = document.getElementById("reader-title");
const readerBody = document.getElementById("reader-body");

const youtubeButton = document.getElementById("youtube-button");
const githubButton = document.getElementById("github-button");

const currentActivities = [
  "Learning JavaScript",
  "Building my portfolio",
  "Practicing Git and GitHub"
];

const projects = [
  {
    title: "Code Quest Arcade",
    description: "A retro JavaScript trivia game.",
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

const goals = [
  {
    text: "Finish my portfolio website",
    completed: false
  },
  {
    text: "Build stronger JavaScript skills",
    completed: false
  },
  {
    text: "Publish projects on GitHub",
    completed: false
  },
  {
    text: "Land my first developer job",
    completed: false
  }
];

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

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/MimictoMastery"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/"
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

function renderActivities() {
  currentActivities.forEach(function(activity) {
    const item = createElement("li", "", activity);
    nowList.appendChild(item);
  });
}

function renderProjects() {
  projects.forEach(function(project) {
    const card = createElement("article", "project-card");

    const title = createElement("h3", "", project.title);
    const description = createElement("p", "", project.description);
    const status = createElement("p", "project-status", project.status);
    const technology = createElement(
      "p",
      "project-tech",
      "Built with: " + project.technology
    );

    card.append(title, description, status, technology);
    projectsList.appendChild(card);
  });
}

function renderGoals() {
  goalsList.replaceChildren();

  goals.forEach(function(goal, index) {
    const label = createElement("label", "goal-item");

    const checkbox = createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = goal.completed;

    const text = createElement("span", "", goal.text);

    label.append(checkbox, text);
    goalsList.appendChild(label);

    checkbox.addEventListener("change", function() {
      goals[index].completed = checkbox.checked;
      updateGoalProgress();
    });
  });

  updateGoalProgress();
}

function updateGoalProgress() {
  const completedCount = goals.filter(function(goal) {
    return goal.completed;
  }).length;

  const totalGoals = goals.length;

  const percentage = totalGoals === 0
    ? 0
    : Math.round((completedCount / totalGoals) * 100);

  goalPercent.textContent = percentage + "%";

  goalSummary.textContent =
    completedCount + " of " + totalGoals + " goals complete.";

  goalRing.style.background =
    "conic-gradient(#3478C7 " +
    percentage +
    "%, #30303D " +
    percentage +
    "%)";
}

function renderLessons() {
  lessons.forEach(function(lesson) {
    const card = createElement("article", "lesson-card");

    const title = createElement("h3", "", lesson.topic);
    const takeaway = createElement("p", "", lesson.takeaway);

    card.append(title, takeaway);
    lessonsList.appendChild(card);
  });
}

function renderSocialLinks() {
  socials.forEach(function(social) {
    const link = createElement("a", "social-link", social.name);

    link.href = social.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    socialLinks.appendChild(link);
  });
}

function renderPosts() {
  posts.forEach(function(post, index) {
    const button = createElement("button", "post-card");

    button.type = "button";

    const title = createElement("h3", "", post.title);
    const meta = createElement(
      "p",
      "meta",
      post.date + " · " + post.category
    );

    button.append(title, meta);

    button.addEventListener("click", function() {
      openPost(index);
    });

    postsList.appendChild(button);
  });
}

function openPost(index) {
  const post = posts[index];

  if (!post) {
    return;
  }

  readerMeta.textContent = post.date + " · " + post.category;
  readerTitle.textContent = post.title;

  readerBody.replaceChildren();

  post.body.forEach(function(paragraph) {
    const p = createElement("p", "", paragraph);
    readerBody.appendChild(p);
  });

  blogReader.classList.remove("hidden");
  backButton.focus();
}

backButton.addEventListener("click", function() {
  blogReader.classList.add("hidden");
});

youtubeButton.href = "https://www.youtube.com/";
githubButton.href = "https://github.com/MimictoMastery";

youtubeButton.target = "_blank";
githubButton.target = "_blank";

youtubeButton.rel = "noopener noreferrer";
githubButton.rel = "noopener noreferrer";

renderActivities();
renderProjects();
renderGoals();
renderLessons();
renderSocialLinks();
renderPosts();


async function showDailyQuote() {
  const quoteElement = document.getElementById("daily-quote");
  const authorElement = document.getElementById("quote-author");

  if (!quoteElement || !authorElement) {
    return;
  }

  try {
    const response = await fetch("quotes.json");

    if (!response.ok) {
      throw new Error("Could not load quotes.json");
    }

    const quotes = await response.json();

    if (!Array.isArray(quotes) || quotes.length === 0) {
      throw new Error("No quotes found.");
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteElement.textContent = '"' + randomQuote.quote + '"';
    authorElement.textContent = "— " + randomQuote.author;
  } catch (error) {
    console.error("Daily quote error:", error);

    quoteElement.textContent =
      "Every small step is progress. Keep going!";

    authorElement.textContent = "— Mimic to Mastery";
  }
}

showDailyQuote();
