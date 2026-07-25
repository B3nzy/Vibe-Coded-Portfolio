// Portfolio Data Object (Derived from portfolio-data.json)
const portfolioData = {
  personal_info: {
    name: "Sumit Mandal",
    title: "Software Engineer",
    location: "Pune, Maharashtra, India",
    email: "sumit.mandal0123@gmail.com",
    phone: "+91 9647643906",
    github: "https://github.com/B3nzy",
    linkedin: "https://www.linkedin.com/in/sumit-mandal-807344238/",
    leetcode: "https://leetcode.com/user9952pw/",
    hackerrank: "https://www.hackerrank.com/Benzy",
  },
  summary:
    "Software Engineer with 3 years of experience engineering scalable backend ecosystems, full-stack applications and intelligent AI integrations. Expert in building event-driven microservices (.NET Core, Node.js) and managing distributed data layers across SQL and NoSQL environments. Adept at handling live production monitoring, cross-border team collaboration, and cloud-native containerization with Docker.",
  skills: {
    backend_development: [
      ".NET Core",
      "Microservices",
      "RabbitMQ",
      "Spring Boot",
      "Node.js",
      "Express",
      "RESTful APIs",
    ],
    ai_and_modern_tooling: [
      "Microsoft Semantic Kernel",
      "LLM Integration (LM Studio)",
      "Prompt Engineering",
      "Cursor",
      "Claude",
    ],
    databases: [
      "MS SQL",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Qdrant Vector Database",
    ],
    frontend_development: ["Next.js", "React", "Redux Toolkit", "Tailwind CSS"],
    cloud_and_devops: ["Azure", "AWS", "Docker", "Docker Compose", "Git"],
  },
  work_experience: [
    {
      company: "Xplor Technologies",
      role: "Software Engineer I",
      location: "Pune, India",
      duration: "Apr 2024 - Present",
      tech_stack: [".NET Core", "MS SQL", "RabbitMQ", "Azure", "Coralogix"],
      highlights: [
        "Co-own the development and maintenance of event-driven backend microservices for XplorPay, processing billions of dollars in transactions.",
        "Led the technical implementation for the biannual Card Association Updates (Visa, MasterCard, Discover, Amex), securing 100% compliance.",
        "Serve on active on-call rotation, monitoring live production data and troubleshooting high-priority runtime bugs.",
        "Partner daily with US-based product and engineering teams to align on feature requirements and system architecture.",
      ],
    },
    {
      company: "Dey Technologies (TaxEve)",
      role: "Backend Developer",
      location: "Kolkata, India",
      duration: "May 2023 - Aug 2023",
      tech_stack: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Stripe",
        "AWS",
      ],
      highlights: [
        "Sole backend developer for TaxEve, independently designing and implementing the entire backend for an e-filing platform.",
        "Delivered complete MVP within four months, handling authentication, payments (Stripe), and secure API development.",
        "Managed system integrations and AWS deployment, focusing on backend performance and robustness.",
      ],
    },
    {
      company: "Gamut Infosystems Ltd. (Farvision)",
      role: "Software Developer Trainee",
      location: "Kolkata, India",
      duration: "Jan 2023 - Mar 2023",
      tech_stack: [".NET", "C#", "MS SQL"],
      highlights: [
        "Enhanced backend functionality for Farvision 4.5 ERP, maintaining server-side components for real estate workflows.",
        "Supported database management, API integration, and backend business logic using .NET and C#.",
      ],
    },
  ],
  projects: [
    {
      title: "eCommerceSolution",
      subtitle: "Distributed Microservices System",
      duration: "Feb 2026 - Present",
      stack: [
        ".NET Core",
        "RabbitMQ",
        "Semantic Kernel",
        "Qdrant",
        "PostgreSQL",
        "Docker",
      ],
      github: "https://github.com/B3nzy",
      highlights: [
        "Engineered a decoupled microservices ecosystem using .NET Core and Ocelot Gateway.",
        "Implemented natural language product search with Qdrant Vector Database and local LLMs.",
        "Built AI-powered email microservice to write personalized order confirmations dynamically.",
        "Multi-database architecture: PostgreSQL (Identity), MS SQL (Catalog), MongoDB (Orders).",
      ],
    },
    {
      title: "WeaveWhisper",
      subtitle: "Multi-Vendor E-Commerce Marketplace",
      duration: "Nov 2023 - Mar 2024",
      stack: ["React", "Spring Boot", "MySQL", "AWS S3", "Razorpay", "Redux"],
      github: "https://github.com/B3nzy",
      highlights: [
        "Developed responsive marketplace bridging clothing brands with customers.",
        "Secure authentication via Spring Security & JWT for distinct user/vendor workflows.",
        "Integrated AWS S3 for media and Razorpay for secure transactional checkouts.",
        "Dynamic multi-attribute filtering using Redux Toolkit for efficient state management.",
      ],
    },
  ],
  education: [
    {
      degree: "Advanced Computing (PG-DAC)",
      institution: "IACSD Pune",
      location: "Pune, India",
      duration: "2023 - 2024",
      score: "87.5%",
    },
    {
      degree: "Bachelor of Technology",
      institution: "GCECT Kolkata",
      location: "Kolkata, India",
      duration: "2019 - 2023",
      score: "CGPA: 9.73",
    },
  ],
};

// Initialize UI
document.addEventListener("DOMContentLoaded", () => {
  populateSummary();
  populateSkills();
  populateExperience();
  populateProjects();
  populateEducation();
  initMobileMenu();
  initScrollReveal();
});

// Summary Population
function populateSummary() {
  document.getElementById("summary-text").innerText = portfolioData.summary;
}

// Skills Population
function populateSkills() {
  const container = document.getElementById("skills-container");
  const skillCategories = {
    backend_development: { label: "Backend", icon: "fa-server" },
    ai_and_modern_tooling: { label: "AI & Tools", icon: "fa-brain" },
    databases: { label: "Databases", icon: "fa-database" },
    frontend_development: { label: "Frontend", icon: "fa-code" },
    cloud_and_devops: { label: "Cloud/DevOps", icon: "fa-cloud" },
  };

  Object.entries(skillCategories).forEach(([key, config]) => {
    const skills = portfolioData.skills[key];
    const skillHtml = `
            <div class="space-y-4">
                <div class="flex items-center space-x-3 text-white font-semibold">
                    <i class="fa-solid ${config.icon} text-accent-primary"></i>
                    <span>${config.label}</span>
                </div>
                <div class="flex flex-wrap gap-2">
                    ${skills.map((s) => `<span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400 hover:text-white hover:border-accent-primary transition-all cursor-default">${s}</span>`).join("")}
                </div>
            </div>
        `;
    container.innerHTML += skillHtml;
  });
}

// Experience Timeline Population
function populateExperience() {
  const container = document.getElementById("experience-timeline");
  portfolioData.work_experience.forEach((exp, index) => {
    const isLeft = index % 2 === 0;
    const experienceHtml = `
            <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal">
                <div class="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-dark-card text-accent-primary shadow-xl z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <i class="fa-solid fa-briefcase text-xs"></i>
                </div>
                <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all card-hover">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h3 class="text-xl font-bold text-white">${exp.role}</h3>
                        <span class="text-sm font-medium text-accent-primary">${exp.duration}</span>
                    </div>
                    <div class="text-zinc-400 font-medium mb-4 flex items-center">
                        <i class="fa-solid fa-building-columns mr-2 text-xs"></i> ${exp.company}
                    </div>
                    <ul class="space-y-2 mb-6">
                        ${exp.highlights.map((h) => `<li class="text-sm text-zinc-500 leading-relaxed"><i class="fa-solid fa-circle-check text-[10px] mr-2 text-accent-secondary/50"></i>${h}</li>`).join("")}
                    </ul>
                    <div class="flex flex-wrap gap-2">
                        ${exp.tech_stack.map((t) => `<span class="px-2 py-0.5 bg-accent-primary/5 text-accent-primary/80 border border-accent-primary/10 rounded text-[10px] uppercase tracking-wider font-bold">${t}</span>`).join("")}
                    </div>
                </div>
            </div>
        `;
    container.innerHTML += experienceHtml;
  });
}

// Projects Population
function populateProjects() {
  const container = document.getElementById("projects-grid");
  portfolioData.projects.forEach((project) => {
    const projectHtml = `
            <div class="glass rounded-3xl overflow-hidden border border-white/5 group card-hover reveal">
                <div class="p-8 md:p-10">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h3 class="text-2xl font-bold text-white mb-1">${project.title}</h3>
                            <p class="text-accent-secondary text-sm font-medium">${project.subtitle}</p>
                        </div>
                        <a href="${project.github}" target="_blank" class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent-primary transition-colors">
                            <i class="fa-brands fa-github text-xl"></i>
                        </a>
                    </div>
                    <p class="text-zinc-500 text-sm mb-6">${project.duration}</p>
                    <ul class="space-y-3 mb-8">
                        ${project.highlights.map((h) => `<li class="text-sm text-zinc-400 leading-relaxed flex items-start"><i class="fa-solid fa-chevron-right text-[10px] mt-1.5 mr-3 text-accent-primary shrink-0"></i>${h}</li>`).join("")}
                    </ul>
                    <div class="flex flex-wrap gap-2">
                        ${project.stack.map((s) => `<span class="px-3 py-1 bg-white/5 text-zinc-400 rounded-lg text-xs font-medium border border-white/5">${s}</span>`).join("")}
                    </div>
                </div>
            </div>
        `;
    container.innerHTML += projectHtml;
  });
}

// Education Population
function populateEducation() {
  const container = document.getElementById("education-container");
  portfolioData.education.forEach((edu) => {
    const eduHtml = `
            <div class="glass p-8 rounded-2xl border border-white/5 reveal">
                <div class="flex items-center space-x-6">
                    <div class="w-16 h-16 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0">
                        <i class="fa-solid fa-graduation-cap text-2xl"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-white mb-1">${edu.degree}</h3>
                        <p class="text-zinc-400">${edu.institution} | ${edu.location}</p>
                        <div class="flex items-center mt-3 space-x-4">
                            <span class="text-sm text-zinc-500">${edu.duration}</span>
                            <span class="px-2 py-0.5 bg-accent-secondary/10 text-accent-secondary rounded text-xs font-bold">${edu.score}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    container.innerHTML += eduHtml;
  });
}

// Mobile Menu Logic
function initMobileMenu() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const close = document.getElementById("mobile-menu-close");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-link");

  toggle.addEventListener("click", () =>
    menu.classList.remove("translate-x-full"),
  );
  close.addEventListener("click", () => menu.classList.add("translate-x-full"));
  links.forEach((l) =>
    l.addEventListener("click", () => menu.classList.add("translate-x-full")),
  );
}

// Scroll Reveal Logic
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// Copy Email Utility
function copyEmail() {
  const email = document.getElementById("email-display").innerText;
  navigator.clipboard.writeText(email);
  const toast = document.getElementById("toast");
  toast.classList.replace("opacity-0", "opacity-100");
  setTimeout(() => toast.classList.replace("opacity-100", "opacity-0"), 2000);
}
