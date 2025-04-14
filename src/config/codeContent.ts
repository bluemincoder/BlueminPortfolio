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
  "shadcn/ui", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Vercel", 
  "Postman", "Linux", "Windows", "pnpm", "npm", "Socket.io", "REST APIs"
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
  mobile: "+91-7879378715",
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
    role: "Software Developer Intern",
    company: "Jorte Career Counsel",
    duration: "May 2024 – Aug 2024",
    highlights: [
      "Built a scalable NEET test platform backend",
      "Integrated ImageKit for optimized media delivery",
      "Streamlined payments with Razorpay & automated test flows"
    ]
  }
];

internships.forEach((exp) => {
  console.log(\`💼 \${exp.role} @ \${exp.company} (\${exp.duration})\`);
  exp.highlights.forEach(item => console.log("🔹", item));
});
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
  cgpa: 7.05,
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
