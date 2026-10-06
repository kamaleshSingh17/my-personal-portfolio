export const personalInfo = {
  name: "Kamalesh Singh D",
  eyebrow: "CSE STUDENT • ASPIRING FULL STACK DEVELOPER",
  role: "CSE Student | Aspiring Full Stack Developer",
  college: "IFET College of Engineering",
  degree: "Computer Science and Engineering",
  email: "kamaleshsingh.tech@gmail.com",
  phone: "+91 9361383505",
  whatsappUrl: "https://wa.me/+919361383505?text=Hello%20Kamalesh%20Singh%20D",
  githubUrl: "https://github.com/kamaleshSingh17",
  linkedinUrl: "https://www.linkedin.com/in/kamalesh-singh-d-973976343",
  resumePath: "/kamaleshsingh_resume.pdf",
  profileImage: "/kamalesh.jpeg",
  heroBio: "Passionate Computer Science student who enjoys building real-world applications, solving problems, and exploring modern technologies.",
  aboutBio: "I am a passionate Computer Science and Engineering student at IFET College with a strong interest in software development and problem solving. I enjoy building real-world projects and continuously improving my technical skills. I am eager to learn new technologies and grow as a Full Stack Developer.",
  footerBio: "CSE Student & Aspiring Full Stack Developer passionate about building real-world software.",
  copyrightYear: "2026"
};

export const aboutHighlights = [
  {
    icon: "fa-graduation-cap",
    title: "CSE Student",
    description: "Pursuing B.E. in Computer Science & Engineering at IFET College with strong technical foundation."
  },
  {
    icon: "fa-laptop-code",
    title: "Full Stack Development",
    description: "Dedicated to creating end-to-end web applications with modern frontend and backend architectures."
  },
  {
    icon: "fa-rocket",
    title: "Project Builder",
    description: "Practical approach to development by architecting and delivering functional, real-world solutions."
  },
  {
    icon: "fa-book-open",
    title: "Continuous Learner",
    description: "Proactively mastering industry tools, modern frameworks, and algorithmic problem solving."
  }
];

export const skillCategories = [
  { id: "all", label: "All" },
  { id: "programming", label: "Programming" },
  { id: "web", label: "Web" },
  { id: "app", label: "App" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools" }
];

export const skillsData = [
  // Programming
  { name: "Python", category: "programming", icon: "fa-brands fa-python", color: "#3776AB" },
  { name: "C", category: "programming", icon: "fa-solid fa-code", color: "#00599C" },
  { name: "C++", category: "programming", icon: "fa-solid fa-code", color: "#004482" },
  { name: "Dart", category: "programming", icon: "fa-solid fa-terminal", color: "#0175C2" },
  { name: "Java", category: "programming", icon: "fa-brands fa-java", color: "#EA2D2E" },
  
  // Web / Frontend
  { name: "HTML", category: "web", icon: "fa-brands fa-html5", color: "#E34F26" },
  { name: "CSS", category: "web", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
  { name: "JavaScript", category: "web", icon: "fa-brands fa-js", color: "#F7DF1E" },
  { name: "React", category: "web", icon: "fa-brands fa-react", color: "#61DAFB" },
  
  // Backend
  { name: "Node.js", category: "web", icon: "fa-brands fa-node-js", color: "#339933" },
  
  // App Development
  { name: "Flutter", category: "app", icon: "fa-solid fa-mobile-screen-button", color: "#02569B" },
  
  // Database
  { name: "MySQL", category: "database", icon: "fa-solid fa-database", color: "#4479A1" },
  { name: "MongoDB", category: "database", icon: "fa-solid fa-leaf", color: "#47A248" },
  
  // Tools
  { name: "MS Office", category: "tools", icon: "fa-solid fa-file-lines", color: "#D83B01" },
  { name: "VS Code", category: "tools", icon: "fa-solid fa-laptop-code", color: "#007ACC" },
  { name: "GitHub", category: "tools", icon: "fa-brands fa-github", color: "#6e5494" }
];

export const projectsData = [
  {
    id: "smart-attendance",
    title: "Smart Attendance System",
    description: "A Flutter and Firebase-based attendance management system designed to simplify attendance tracking and management.",
    technologies: [
      { name: "Flutter", icon: "fa-brands fa-google" },
      { name: "Firebase", icon: "fa-solid fa-fire" }
    ],
    image: "/attendance_app.png",
    hasImage: true,
    githubUrl: null, // Placeholder as not provided
    liveUrl: null    // Placeholder as not provided
  }
];

export const certificationsData = [
  {
    id: "cert-1",
    title: "Honors Diploma in Computer Applications",
    organization: "CSC",
    icon: "fa-solid fa-award",
    badgeColor: "#2563EB",
    status: "Verified Credential"
  },
  {
    id: "cert-2",
    title: "Python",
    organization: "HackerRank",
    icon: "fa-brands fa-python",
    badgeColor: "#16A34A",
    status: "Verified Assessment"
  },
  {
    id: "cert-3",
    title: "SQL Intermediate",
    organization: "HackerRank",
    icon: "fa-solid fa-database",
    badgeColor: "#0284C7",
    status: "Verified Assessment"
  },
  {
    id: "cert-4",
    title: "Data Science with Python",
    organization: "Infosys",
    icon: "fa-solid fa-chart-line",
    badgeColor: "#0284C7",
    status: "Certified Course"
  },
  {
    id: "cert-5",
    title: "Prompt Engineering",
    organization: "Infosys",
    icon: "fa-solid fa-brain",
    badgeColor: "#7C3AED",
    status: "Certified Course"
  },
  {
    id: "cert-6",
    title: "Full Stack Development",
    organization: "Coderz Academy",
    icon: "fa-solid fa-code",
    badgeColor: "#2563EB",
    status: "Professional Program"
  }
];

export const emailJsConfig = {
  publicKey: "CBCsrSrkhreI4Ex5C",
  serviceId: "service_e1w8oon",
  templateId: "template_jyw4egp"
};
