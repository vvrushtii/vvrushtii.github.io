/* Vrushti Patel: portfolio. Plain JS, hash-routed so it works on any static host. */
(() => {
  "use strict";

  const EMAIL = "vrushti1412@gmail.com";
  const LINKS = {
    linkedin: "https://linkedin.com/in/vrushtipatel14",
    github: "https://github.com/vvrushtii",
    demo: "https://complaint-radar-8xsgbewhv94vvhhrxmrcwx.streamlit.app/",
    repo: "https://github.com/vvrushtii/COMPLAINT-RADAR",
    resume: "assets/Vrushti_Patel_Resume.pdf",
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(pointer: fine)").matches;

  const ARROW = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>`;
  const ARROW_R = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
  const DOWNLOAD = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v12M7 11l5 5 5-5M5 20h14"/></svg>`;
  const BACK = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`;

  /* ------------------------------------------------------------------ content */
  const PROJECTS = [
    {
      id: "complaint-radar", n: "01", featured: true, status: "live", statusText: "Live",
      title: "Complaint Radar",
      tags: ["Data", "ML"],
      blurb: "An automated pipeline that reads live Google Play reviews of Swiggy, Zomato, Blinkit and Zepto every day and ranks what each company should fix first.",
      stack: ["Python", "pandas", "scikit-learn", "NLP", "SQL", "Streamlit", "GitHub Actions"],
      mini: [["93.2%", "sentiment accuracy"], ["4", "apps tracked daily"], ["9,000+", "reviews analysed"]],
      links: [["Live demo", LINKS.demo], ["GitHub", LINKS.repo]],
    },
    {
      id: "synthetic-data-auditor", n: "02", status: "wip", statusText: "In progress",
      title: "Synthetic Data Auditor",
      tags: ["Data", "ML"],
      blurb: "A web-based auditor that compares synthetic data with the original on quality, ML usefulness and privacy risk, and produces a clear report.",
      stack: ["Python", "JavaScript", "scikit-learn", "Google Colab", "Vercel"],
      bullets: [
        "Compares a synthetic dataset against the original to check how faithful it is.",
        "Tests <b>ML usefulness</b>: does a model trained on synthetic data still work on real data?",
        "Estimates <b>privacy risk</b> using simulated attacks, then produces a clear report.",
      ],
    },
    {
      id: "musey", n: "03", status: "wip", statusText: "In progress",
      title: "Musey",
      tags: ["Mobile"],
      blurb: "A native iOS app for visual product discovery: a swipe-to-save feed, outfit suggestions, user pins and an offline-first catalogue.",
      stack: ["Swift", "SwiftUI", "Firebase", "XCTest"],
      bullets: [
        "A <b>swipe-to-save</b> product feed, outfit suggestions and user pins.",
        "An <b>offline-first</b> catalogue, backed by Firebase Auth and Firestore.",
        "<b>45 unit tests</b>, using an in-memory Firebase stand-in so online logic can be tested offline.",
      ],
    },
    {
      id: "keystroke-dynamics", n: "04", status: "wip", statusText: "In progress",
      title: "Keystroke-Based Key Generation",
      tags: ["Research"],
      blurb: "A group research paper on generating cryptographic keys from the way people type (keystroke dynamics).",
      stack: ["Research", "Cryptography", "Behavioural biometrics"],
      bullets: [
        "Group research paper on <b>behaviour-based cryptographic key generation</b>.",
        "Explores keystroke dynamics, the rhythm of how a person types, as the source of key material.",
        "I'm a contributing author. The paper is still in progress.",
      ],
    },
  ];

  const SKILLS = [
    ["Programming", ["Python", "SQL", "JavaScript", "Swift", "HTML", "CSS"]],
    ["Data & ML", ["pandas", "scikit-learn", "NLP", "Statistics", "Data cleaning", "ML basics"]],
    ["Tools", ["Git & GitHub", "GitHub Actions", "Streamlit", "Plotly", "Google Colab", "Firebase", "Vercel"]],
    ["Business", ["Data interpretation", "Reporting", "Market research", "Competitor analysis"]],
  ];

  /* ------------------------------------------------------------------ templates */
  const chips = (arr, cls = "") => `<div class="chips">${arr.map((t) => `<span class="chip ${cls}">${t}</span>`).join("")}</div>`;
  const btn = (label, href, cls = "", icon = ARROW, ext = true) =>
    `<a class="btn ${cls}" href="${href}" ${ext ? 'target="_blank" rel="noopener"' : ""}>${label} ${icon}</a>`;

  function home() {
    return `
    <section class="hero">
      <div>
        <span class="status"><i></i> Open to new opportunities</span>
        <h1><span class="mask"><span>Vrushti</span></span><span class="mask"><span><em>Patel</em></span></span></h1>
        <div class="roles"><span>Data science student. I</span>
          <span class="swap" id="swap"><span class="on">analyse data.</span><span>build models.</span><span>write SQL.</span><span>ship dashboards.</span></span>
        </div>
        <p class="lead">I'm a Computer Science student specialising in Data Science. I find patterns in data and turn them into clear decisions.</p>
        <div class="row">
          ${btn("See my work", "#/work", "primary arrow-r", ARROW_R, false)}
          ${btn("Download résumé", LINKS.resume, "", DOWNLOAD, false).replace("<a ", "<a download ")}
        </div>
      </div>
      <aside class="viz" data-reveal>
        <div class="viz-head"><span>Complaint Radar</span><span>Swiggy · Nov 2026</span></div>
        <h3>What should they fix first?</h3>
        <div class="bar"><div class="bar-top"><span>Customer support</span><b>+0.28★</b></div><div class="track"><div class="fill" style="--w:100%"></div></div></div>
        <div class="bar"><div class="bar-top"><span>Late / slow delivery</span><b>+0.28★</b></div><div class="track"><div class="fill" style="--w:98%"></div></div></div>
        <div class="bar"><div class="bar-top"><span>Refund / money issues</span><b>+0.21★</b></div><div class="track"><div class="fill" style="--w:74%"></div></div></div>
        <div class="viz-foot"><span>Estimated rating gain if fixed</span><a href="#/work/complaint-radar">Case study →</a></div>
      </aside>
    </section>

    <section class="stats" data-reveal>
      <div class="stat"><b data-count data-to="8.09" data-dec="2">0</b><span>CGPA, till 6th semester</span></div>
      <div class="stat"><b data-count data-to="2">0</b><span>Internships completed</span></div>
      <div class="stat"><b data-count data-to="4">0</b><span>Projects &amp; papers</span></div>
      <div class="stat"><b data-count data-to="9000" data-suffix="+" data-sep="1">0</b><span>Reviews analysed live</span></div>
    </section>

    <section class="cta-band" data-reveal>
      <h2>Want someone who <em>measures</em> their own work?</h2>
      ${btn("Get in touch", "#/contact", "", ARROW_R, false)}
    </section>`;
  }

  function work() {
    const filters = ["All", "Data", "ML", "Mobile", "Research"];
    return `
    <div class="page-head"><span class="eyebrow">Selected work</span>
      <h1 class="title">Projects that go <em>end to end</em>.</h1>
      <p class="lead">From collecting messy data to shipping something a person can actually use. Open a project for the full story.</p>
    </div>
    <div class="filters" role="group" aria-label="Filter projects">
      ${filters.map((f, i) => `<button class="filter ${i ? "" : "on"}" data-filter="${f}">${f}</button>`).join("")}
    </div>
    <div class="grid" id="grid">
      ${PROJECTS.map((p) => `
      <a class="card ${p.featured ? "featured" : ""}" href="#/work/${p.id}" data-tags="${p.tags.join(",")}" data-reveal>
        <div class="card-top"><span class="num">${p.n}</span><span class="badge ${p.status}">${p.statusText}</span></div>
        <div><h3>${p.title}</h3><p>${p.blurb}</p>
          ${p.mini ? `<div class="mini-stats">${p.mini.map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join("")}</div>` : ""}
        </div>
        <div class="card-bottom">${chips(p.stack.slice(0, p.featured ? 7 : 4))}<span class="go">${ARROW_R}</span></div>
      </a>`).join("")}
    </div>`;
  }

  function complaintRadar() {
    const p = PROJECTS[0];
    return `
    <a class="back" href="#/work">${BACK} All work</a>
    <div class="page-head" style="padding-top:18px"><span class="eyebrow">Case study · 2026</span>
      <h1 class="title">Complaint <em>Radar</em></h1>
      <p class="lead">What should Swiggy, Zomato, Blinkit and Zepto fix first? I built a pipeline that reads thousands of live app reviews and answers that every day.</p>
      <div class="row" style="margin-top:28px">${btn("Open the live app", LINKS.demo, "accent")}${btn("View code on GitHub", LINKS.repo)}</div>
    </div>
    <dl class="meta" data-reveal>
      <div><dt>Role</dt><dd>Solo project</dd></div><div><dt>Status</dt><dd>Live, refreshes daily</dd></div>
      <div><dt>Data</dt><dd>Google Play reviews, 4 apps</dd></div><div><dt>Stack</dt><dd>Python, SQL, Streamlit</dd></div>
    </dl>

    <section class="section" data-reveal><h2>The problem</h2><div class="prose">
      <p>App teams receive thousands of reviews and have no time to read them. Counting complaints is not enough: a rare but furious problem and a common mild one need to be compared fairly.</p>
      <p>So the question became: <b>which complaint, if fixed, would raise the app's rating the most?</b></p></div></section>

    <section class="section" data-reveal><h2>How it works</h2><div>
      <div class="steps">
        <div class="step"><h3>Collect</h3><p>A scheduled GitHub Actions job pulls fresh reviews daily and merges them into a growing history.</p></div>
        <div class="step"><h3>Understand</h3><p>A multilingual model reads Hinglish. Each review gets a sentiment score and complaint themes.</p></div>
        <div class="step"><h3>Rank</h3><p>An impact score estimates rating gain per theme, with 95% bootstrap confidence ranges.</p></div>
        <div class="step"><h3>Show</h3><p>A Streamlit dashboard with a competitor benchmark and spike alerts. SQL cross-checks the maths.</p></div>
      </div></div></section>

    <section class="section" data-reveal><h2>Results</h2><div>
      <div class="results">
        <div class="result"><b data-count data-to="93.2" data-dec="1" data-suffix="%">0</b><span>sentiment accuracy on 4,793 held-out reviews</span></div>
        <div class="result"><b data-count data-to="4">0</b><span>apps tracked, refreshed automatically</span></div>
        <div class="result"><b data-count data-to="9000" data-suffix="+" data-sep="1">0</b><span>reviews analysed with real complaint text</span></div>
        <div class="result"><b data-count data-to="40" data-suffix="/40">0</b><span>SQL results matching the Python pipeline</span></div>
      </div>
      <div class="viz compare" data-reveal style="margin-top:26px;padding:26px;max-width:620px">
        <div class="viz-head"><span>Sentiment accuracy</span><span>held-out test set</span></div>
        <div class="bar" style="margin-top:14px"><div class="bar-top"><span>Multilingual embedding model (mine)</span><b>93.2%</b></div><div class="track"><div class="fill" style="--w:93.2%"></div></div></div>
        <div class="bar"><div class="bar-top"><span>VADER baseline (English rule-based)</span><b>85.2%</b></div><div class="track"><div class="fill base" style="--w:85.2%"></div></div></div>
      </div>
      <div class="prose" style="margin-top:34px"><ul>
        <li><b>Customer support and refund problems</b> rank alongside late delivery as the biggest rating drags across the apps, not just delivery speed.</li>
        <li>For Swiggy, support (+0.28★) and late delivery (+0.28★) were <b>statistically tied</b>, so the dashboard refuses to crown one.</li>
        <li>Many angry reviews are in <b>Hinglish</b>, which standard English sentiment tools handle poorly.</li></ul></div>
    </div></section>

    <section class="section" data-reveal><h2>Screens</h2><div class="shots">
      <figure class="shot" data-reveal><img decoding="async" src="assets/img/cr-fix-first.png" alt="Complaint Radar fix-first chart with confidence ranges"><figcaption>Fix-first: themes ranked by impact, with confidence ranges</figcaption></figure>
      <figure class="shot" data-reveal><img decoding="async" src="assets/img/cr-benchmark.png" alt="Competitor benchmark heatmap across four apps"><figcaption>Competitor benchmark: who is losing customers on what</figcaption></figure>
      <figure class="shot" data-reveal><img decoding="async" src="assets/img/cr-alerts.png" alt="Spike alerts tab"><figcaption>Spike alerts: sudden jumps in a complaint theme</figcaption></figure>
      <figure class="shot" data-reveal><img decoding="async" src="assets/img/cr-model-quality.png" alt="Model quality tab with accuracy tables"><figcaption>Model quality: measured, not assumed</figcaption></figure>
      <div class="video" data-reveal><video controls preload="none" playsinline poster="assets/img/cr-fix-first.png"><source src="assets/img/cr-walkthrough.mp4" type="video/mp4"></video></div>
    </div></section>

    <section class="section" data-reveal><h2>Honest notes</h2><div class="prose">
      <p>I report what did not work as well as what did.</p>
      <ul>
        <li>My theme-detection model only <b>tied simple keyword rules</b> (0.70 vs 0.69), which is within noise on a small labelled set.</li>
        <li>The evaluation labels were assigned with an AI assistant, so treat those scores as indicative.</li>
        <li>The impact score shows association, not proven cause. The history is a few weeks, and Play Store reviews skew negative.</li></ul>
      <div class="note">Built with an AI coding assistant, then studied and extended by me. The numbers above come from the project's own evaluation report.</div>
    </div></section>

    <div class="next" data-reveal><span class="eyebrow">Next project</span>${btn("Synthetic Data Auditor", "#/work/synthetic-data-auditor", "arrow-r", ARROW_R, false)}</div>`;
  }

  function project(p, i) {
    const next = PROJECTS[(i + 1) % PROJECTS.length];
    return `
    <a class="back" href="#/work">${BACK} All work</a>
    <div class="page-head" style="padding-top:18px"><span class="eyebrow">Project ${p.n}</span>
      <h1 class="title">${p.title}</h1><p class="lead">${p.blurb}</p></div>
    <dl class="meta" data-reveal>
      <div><dt>Status</dt><dd>${p.statusText}</dd></div><div><dt>Area</dt><dd>${p.tags.join(" · ")}</dd></div>
      <div style="grid-column:span 2"><dt>Stack</dt><dd>${p.stack.join(", ")}</dd></div>
    </dl>
    <section class="section" data-reveal><h2>What it is</h2><div class="prose"><ul>${p.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
      <div class="note">This one is still in progress, so there is no public demo yet. Ask me about it and I'll walk you through it.</div></div></section>
    <div class="next" data-reveal><span class="eyebrow">Next</span>${btn(next.title, `#/work/${next.id}`, "arrow-r", ARROW_R, false)}</div>`;
  }

  function about() {
    return `
    <div class="about-top">
      <div><div class="page-head" style="padding-top:12px"><span class="eyebrow">About</span>
        <h1 class="title">Curious about <em>patterns</em>.</h1></div>
        <div class="prose" data-reveal>
          <p>I'm a final-year B.Sc. Computer Science student at UIT, Karnavati University, specialising in Data Science. I like taking messy data, finding what it says, and turning that into something clear enough to act on.</p>
          <p>I've worked as a data analyst intern in legal analytics and as a marketing intern in AI &amp; digital strategy. Outside coursework I build projects end to end, from data collection to something deployed.</p>
          <p>I'm always keen on a new challenge, so if something here looks useful, say hello.</p></div>
        <div class="row" style="margin-top:28px" data-reveal>${btn("Download résumé", LINKS.resume, "primary", DOWNLOAD, false).replace("<a ", "<a download ")}${btn("Let's talk", "#/contact", "", ARROW_R, false)}</div></div>
      <div class="portrait-wrap" data-reveal><div class="portrait photo"><img src="assets/img/vrushti.jpg" width="640" height="672" decoding="async" alt="Portrait of Vrushti Patel"></div><span class="tag">Gandhinagar, India</span></div>
    </div>

    <h2 class="sub" data-reveal>Experience</h2>
    <div class="timeline">
      <div class="tl" data-reveal><time>May – Jul 2026</time><div><h3>Data Analyst Intern</h3><p>TrunKind Solutions LLP · Legal Analytics · Remote</p>
        <ul><li>Analysed datasets for legal analytics projects to find patterns, trends and actionable insights.</li><li>Cleaned, queried and analysed data with Python and SQL.</li><li>Turned findings into clear write-ups for legal research, reporting and documentation.</li></ul></div></div>
      <div class="tl" data-reveal><time>Jun – Jul 2025</time><div><h3>Marketing Intern, AI &amp; Digital Strategy</h3><p>FX31 Labs (formerly Fractal31) · Remote</p>
        <ul><li>Conducted market research and competitor analysis to guide content planning for AI technology solutions.</li><li>Created and optimised content for online platforms to improve brand visibility.</li></ul></div></div>
    </div>

    <h2 class="sub" data-reveal>Education</h2>
    <div class="timeline">
      <div class="tl" data-reveal><time>2023 – 2027</time><div><h3>B.Sc. Computer Science</h3><p>UIT, Karnavati University · Specialisation in Data Science</p>
        <ul><li>CGPA 8.09 / 10 (till 6th semester).</li><li>Coursework: Statistics, DBMS, Machine Learning, Data Structures &amp; Algorithms.</li><li>12th (CBSE, PCB) 83% · 10th (CBSE) 90%.</li></ul></div></div>
    </div>

    <h2 class="sub" data-reveal>Skills</h2>
    <div class="skill-groups">${SKILLS.map(([g, items]) => `<div class="skill-group" data-reveal><h3>${g}</h3>${chips(items, "solid")}</div>`).join("")}</div>

    <h2 class="sub" data-reveal>Beyond the code</h2>
    <div class="timeline">
      <div class="tl" data-reveal><time>2025 – 2026</time><div><h3>Management Head, UIT Students Committee</h3><p>UIT, Karnavati University</p>
        <ul><li>Core team member for UIT's flagship events (AriaRo 4.0, Inferno 3.0) and all 2025 – 26 events and workshops.</li></ul></div></div>
      <div class="tl" data-reveal><time>Karnavati University</time><div><h3>Social Media Team, Blend Magazine</h3><p>Instagram handle</p></div></div>
      <div class="tl" data-reveal><time>Certifications</time><div><h3>Learning</h3><p>Complete Python Pro Bootcamp (Angela Yu, Udemy, Sep 2024) · Data Science Training, 1 month (Acmegrade, Feb 2024)</p>
        <ul><li>Also attended the Bindcat Nexus Cyber Security Event and a Drone Technology Bootcamp at SVNIT.</li></ul></div></div>
    </div>`;
  }

  function resume() {
    return `
    <div class="page-head"><span class="eyebrow">Download</span><h1 class="title">Résumé</h1></div>
    <div class="resume-bar" data-reveal>
      <span class="chip">PDF · 1 page · updated Nov 2026</span>
      <div class="row">${btn("Open in new tab", LINKS.resume, "", ARROW)}${btn("Download PDF", LINKS.resume, "primary", DOWNLOAD, false).replace("<a ", "<a download ")}</div>
    </div>
    <figure class="paper" data-reveal><img decoding="async" src="assets/img/resume-preview.png" alt="Preview of Vrushti Patel's one-page résumé"><figcaption>Click to enlarge. The PDF has selectable text and clickable links.</figcaption></figure>`;
  }

  function contact() {
    const mail = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>`;
    return `
    <div class="page-head"><span class="eyebrow">Contact</span><h1 class="title">Let's <em>talk</em>.</h1>
      <p class="lead">I'm open to new opportunities and happy to talk about anything tech. The quickest way to reach me is email.</p></div>
    <div class="contact-grid">
      <a class="contact-card" href="mailto:${EMAIL}" data-reveal><small>Email</small><strong class="plain">${EMAIL}${mail}</strong></a>
      <a class="contact-card" href="${LINKS.linkedin}" target="_blank" rel="noopener" data-reveal><small>LinkedIn</small><strong class="plain">/in/vrushtipatel14${mail}</strong></a>
      <a class="contact-card" href="${LINKS.github}" target="_blank" rel="noopener" data-reveal><small>GitHub</small><strong>@vvrushtii${mail}</strong></a>
      <a class="contact-card" href="${LINKS.resume}" download data-reveal><small>Résumé</small><strong>Download PDF${mail}</strong></a>
    </div>
    <div class="row" style="margin-top:28px" data-reveal><button class="btn" id="copy">Copy email address</button></div>`;
  }

  /* ------------------------------------------------------------------ router */
  const view = document.getElementById("view");
  const nav = document.getElementById("nav");
  const pill = document.getElementById("pill");
  let swapTimer = null;

  function resolve() {
    const [a = "", b = ""] = location.hash.replace(/^#\/?/, "").split("/");
    if (a === "work" && b) {
      const i = PROJECTS.findIndex((p) => p.id === b);
      if (i === 0) return { key: "work", title: "Complaint Radar", html: complaintRadar() };
      if (i > 0) return { key: "work", title: PROJECTS[i].title, html: project(PROJECTS[i], i) };
    }
    if (a === "work") return { key: "work", title: "Work", html: work() };
    if (a === "about") return { key: "about", title: "About", html: about() };
    if (a === "resume") return { key: "resume", title: "Résumé", html: resume() };
    if (a === "contact") return { key: "contact", title: "Contact", html: contact() };
    return { key: "home", title: "Data Science Student", html: home() };
  }

  function setActive(key) {
    nav.querySelectorAll("a").forEach((l) => (l.dataset.nav === key ? l.setAttribute("aria-current", "page") : l.removeAttribute("aria-current")));
    movePill();
  }
  function movePill() {
    const on = nav.querySelector('[aria-current="page"]');
    if (!on) { pill.style.opacity = 0; return; }
    pill.style.width = on.offsetWidth + "px";
    pill.style.transform = `translateX(${on.offsetLeft}px)`;
    pill.style.opacity = 1;
  }

  let first = true;
  function render() {
    const r = resolve();
    const paint = () => {
      clearInterval(swapTimer);
      view.innerHTML = r.html;
      document.title = (r.key === "home" ? "" : r.title + " | ") + (r.key === "home" ? "Vrushti Patel | " + r.title : "Vrushti Patel");
      setActive(r.key);
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      requestAnimationFrame(() => (document.documentElement.style.scrollBehavior = ""));
      view.classList.remove("is-leaving");
      if (!reduced) { view.classList.add("is-entering"); setTimeout(() => view.classList.remove("is-entering"), 900); }
      if (!first) view.focus({ preventScroll: true });
      first = false;
      enhance();
    };
    if (first || reduced) paint();
    else { view.classList.add("is-leaving"); setTimeout(paint, 210); }
  }

  /* ------------------------------------------------------------------ enhancements */
  function enhance() {
    // staggered reveal on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        e.target.querySelectorAll("[data-count]").forEach(count);
        if (e.target.matches("[data-count]")) count(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    view.querySelectorAll("[data-reveal]").forEach((el) => {
      const sib = [...el.parentElement.children].filter((c) => c.hasAttribute("data-reveal"));
      el.style.setProperty("--i", Math.min(sib.indexOf(el), 6));
      io.observe(el);
    });
    view.querySelectorAll("[data-count]").forEach((el) => { if (!el.closest("[data-reveal]")) io.observe(el); });

    // rotating role words on the home page
    const swap = document.getElementById("swap");
    if (swap && !reduced) {
      const items = [...swap.children]; let i = 0;
      swapTimer = setInterval(() => {
        items[i].classList.remove("on"); items[i].classList.add("off");
        const prev = items[i]; setTimeout(() => prev.classList.remove("off"), 600);
        i = (i + 1) % items.length; items[i].classList.add("on");
      }, 2300);
    }

    // work page: filters + card spotlight / tilt
    const grid = document.getElementById("grid");
    if (grid) {
      document.querySelectorAll(".filter").forEach((b) => b.addEventListener("click", () => {
        document.querySelectorAll(".filter").forEach((x) => x.classList.toggle("on", x === b));
        grid.querySelectorAll(".card").forEach((c) => {
          const show = b.dataset.filter === "All" || c.dataset.tags.split(",").includes(b.dataset.filter);
          c.classList.toggle("hide", !show);
          if (show && !reduced) c.animate([{ opacity: 0, transform: "translateY(16px)" }, { opacity: 1, transform: "none" }], { duration: 520, easing: "cubic-bezier(.22,1,.36,1)" });
        });
      }));
      if (fine && !reduced) grid.querySelectorAll(".card").forEach((c) => {
        c.addEventListener("pointermove", (e) => {
          const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
          c.style.setProperty("--px", x * 100 + "%"); c.style.setProperty("--py", y * 100 + "%");
          c.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * 3}deg) rotateY(${(x - 0.5) * 4}deg) translateY(-4px)`;
        });
        c.addEventListener("pointerleave", () => (c.style.transform = ""));
      });
    }

    // screenshots lightbox
    view.querySelectorAll(".shot, .paper").forEach((s) => s.addEventListener("click", () => openLightbox(s.querySelector("img"), (s.querySelector("figcaption") || {}).textContent || "")));

    const copy = document.getElementById("copy");
    if (copy) copy.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(EMAIL); toast("Email copied"); }
      catch { toast(EMAIL); }
    });
  }

  function count(el) {
    if (el.dataset.done) return; el.dataset.done = 1;
    const to = parseFloat(el.dataset.to), dec = +el.dataset.dec || 0, suf = el.dataset.suffix || "", sep = el.dataset.sep;
    const fmt = (v) => (sep ? Math.round(v).toLocaleString("en-IN") : v.toFixed(dec)) + suf;
    if (reduced) { el.textContent = fmt(to); return; }
    const t0 = performance.now(), dur = 1500;
    const tick = (t) => {
      const k = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - k, 4);
      el.textContent = fmt(to * e);
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ------------------------------------------------------------------ global UI */
  const lb = document.getElementById("lightbox");
  function openLightbox(img, cap) { lb.querySelector("img").src = img.src; lb.querySelector("img").alt = img.alt; lb.querySelector("p").textContent = cap; lb.hidden = false; }
  lb.addEventListener("click", () => (lb.hidden = true));
  addEventListener("keydown", (e) => { if (e.key === "Escape") lb.hidden = true; });

  const toastEl = document.getElementById("toast"); let toastT;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("show"), 2200); }

  document.getElementById("theme").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("vp-theme", next); } catch (e) {}
    document.querySelector('meta[name="theme-color"]').content = next === "dark" ? "#0d0d10" : "#f5f3ee";
  });

  const bar = document.getElementById("progress");
  addEventListener("scroll", () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
  }, { passive: true });

  if (fine && !reduced) {
    let raf;
    addEventListener("pointermove", (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { document.documentElement.style.setProperty("--mx", e.clientX + "px"); document.documentElement.style.setProperty("--my", e.clientY + "px"); });
    }, { passive: true });
  }

  addEventListener("hashchange", render);
  addEventListener("resize", movePill);
  document.fonts && document.fonts.ready.then(movePill);
  render();
})();
