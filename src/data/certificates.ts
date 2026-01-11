export interface Project {
  name: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  imageUrl: string
  skills: string[]
  type: "course" | "hackathon" | "competition"
  project?: Project
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "React & Redux Course",
    issuer: "Prashant Sir",
    date: "Aug-2024",
    imageUrl: "/cert/react.jpg",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    type: "course",
  },
  {
    id: "2",
    title: "Devathon",
    issuer: "Devsinc",
    date: "7-Sep-2024",
    imageUrl: "/cert/devsinc.jpg",
    skills: ["React", "MongoDB", "Web Dev", "Next.js"],
    type: "hackathon",
    project: {
      name: "Health Management System",
    },
  },
  {
    id: "4",
    title: "Decathon",
    issuer: "Decentral Developers",
    date: "02-Feb-2025",
    imageUrl: "/cert/1st.png",
    skills: ["Frontend Development", "React", "Tailwind"],
    type: "hackathon",
    project: {
      name: "Landing Page of Consultation Service",
    }
  },
  {
    id: "3",
    title: "Risk Assessment e-Learning",
    issuer: "Universal Robots",
    date: "14-Sep-2024",
    imageUrl: "/cert/risk.png",
    skills: ["Risk Assessment", "Safety", "Universal Robots"],
    type: "course",
  },
  {
    id: "5",
    title: "Infym AI Hackathon+Training",
    issuer: "Infym Ai",
    date: "1-March-2025",
    imageUrl: "/cert/infymAi.png",
    skills: ["Machine Learning", "Data Cleaning", "Feature Engineering"],
    type: "hackathon",
    project: {
      name: "Tumour Predicition",
    },
  },
  {
    id: "6",
    title: "HR Hackathon 2.0",
    issuer: "Code Blitz",
    date: "1-Feb-2025",
    imageUrl: "/cert/fc.jpeg",
    skills: ["Speed Programming", "DSA", "Problem Solving"],
    type: "competition",
  },
  {
    id: "7",
    title: "Webathon",
    issuer: "Cachelogics",
    date: "1-March-2025",
    imageUrl: "/cert/cachelogics-certificate.png",
    skills: ["Frontend Development", "React", "Tailwind"],
    type: "hackathon",
    project: {
      name: "Cachelogics landing page",
    },
  },
  {
    id: "8",
    title: "PF-PuCon'25",
    issuer: "FCIT, Punjab University",
    date: "1-May-2025",
    imageUrl: "/cert/pf-pucon.jpg",
    skills: ["Feature Extraction", "Correlation", "AI", "Model Training", "Data cleaning"],
    type: "competition",
  },
  {
    id: "9",
    title: "Softec'25",
    issuer: "Fast University",
    date: "1-March-2025",
    imageUrl: "/cert/softec.png",
    skills: ["Frontend Development", "React", "Tailwind"],
    type: "hackathon",
    project: {
      name: "Health Assistant-Hygieia",
    }
  },
]
