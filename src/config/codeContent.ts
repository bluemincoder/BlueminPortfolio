export const code = {
    welcome: `// app/api/welcome/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Welcome to Minal's portfolio!" });
}
`,

    aboutMe: `const superpower = () => "Turning ideas into clean, scalable, and user-friendly web apps.";
console.log(\`My superpower is: \${superpower()}\`);
`,

    skillsTools: `const mySkills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS",
  "shadcn/ui", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Vercel", "Framer Motion",
  "Aceternity UI", "Postman", "Linux", "Windows", "pnpm", "npm", "Socket.io", "REST APIs", "Redis"
];

const getSkills = () => {
  return mySkills.length
    ? \`Tech stack I work with: \${mySkills.join(", ")} 💡🚀\`
    : "Uh-oh... skills not loaded!";
};

console.log(getSkills());
`,

    contact: `const contactDetails = {
  name: "Minal Satankar",
  email: "minaalwork@gmail.com",
  location: "Bhopal, Madhya Pradesh",
  linkedIn: "linkedin.com/in/bluemincoder",
  github: "github.com/bluemincoder",
};

function reachOut() {
  console.log(\`Let's connect! 📬 Email: \${contactDetails.email}, LinkedIn: \${contactDetails.linkedIn}\`);
}

reachOut();
`,

    experience: `const internships = [
  {
    role: "Full Stack Dev Intern",
    company: "Medzillo",
    duration: "May 2025 – Present",
    highlights: [
      "Built scalable booking system (Next.js, Node, MongoDB)",
      "Setup Redis + Socket.IO for 100+ concurrent requests",
      "Optimized performance via code splitting, lazy loading"
    ]
  },
  {
    role: "Frontend Dev Intern",
    company: "LawQuest",
    duration: "Feb 2025 – Apr 2025",
    highlights: [
      "Made course & blog pages (Next.js)",
      "Integrated forms with Zod, Nodemailer",
      "Built reusable UI with Aceternity & Framer Motion"
    ]
  }
];

internships.forEach((exp) => {
  console.log(\`💼 \${exp.role} @ \${exp.company} (\${exp.duration})\`);
  exp.highlights.forEach(item => console.log("🔹", item));
});
`,

    leadership: `const leadershipRoles = [
  "CP/DSA Lead at GFG IIIT-BH Chapter",
  "Project Manager at OPCODE Spring Fest", 
  "Club Lead at PyC Coding Club IIIT-BH"
];

console.log("👑 Leadership Roles:");
leadershipRoles.forEach(role => console.log("🔹", role));
`,

    projects: `const projectField = {
  idea: "Overnight hackathon brilliance",
  execution: "Debugging marathons",
  outcome: "Works on my machine... most days!",
};

console.log("Project Field:", projectField);
`,

    educationJourney: `const education = {
  institute: "IIIT Bhagalpur",
  degree: "B.Tech in Electronics and Communication Engineering",
  duration: "2022 – 2026",
  cgpa: 7.16,
};

console.log("🎓 Studying at", education.institute);
console.log("📘 CGPA:", education.cgpa, "| Duration:", education.duration);
`,

    achievementsPor: `const achievements = [
  "Specialist on Codeforces | Top 7% in Div. 3 Round 984",
  "Knight on Leetcode | Top 0.01% in Contest 442",
  "3-Star on CodeChef | Top 0.02% in Starters 104"
];

const por = [
  "CP/DSA Lead at GFG IIIT-BH Chapter: Mentored 100+ students",
  "Club Lead at PyC IIIT-BH: Organized contests with 200+ participants"
];

console.log("🏆 Achievements:");
achievements.forEach(a => console.log("⭐", a));

console.log("🧑‍🏫 Positions of Responsibility:");
por.forEach(p => console.log("📌", p));
`,
};
