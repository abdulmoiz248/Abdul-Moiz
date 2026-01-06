
export const projects = [
 
  {
    title: "Tasks by AION",
    description: "AI-Powered Automation Platform",
    fullDescription:
      "Aion Tasks is an AI-powered automation platform built to streamline documentation, research, and productivity workflows. The system allows users to upload document templates and dynamically generate content using AI, create on-brand AI-generated slide decks, intelligently expand spreadsheets with pattern detection, and run advanced research that delivers instant insights via webhooks. It integrates multiple AI engines to deliver faster, smarter task execution with a focus on automation at scale.",
    imageUrl: "/aion.png",
    techStack: ["React", "Netlify", "OpenAI", "Claude", "Perplexity"],
    githubUrl: "",
    deployedUrl: "https://tasks.go-aion.com/login",
    category: "ai",
  },
  {
    title: "Zero Limit Apparel",
    description: "E-Commerce Platform",
    fullDescription:
      "Zero Limit Apparel is an e-commerce platform project I developed, which involves building a seamless online shopping experience. The website is deployed using Next.js and MongoDB, providing users with an intuitive interface for browsing and purchasing products. Since deployment, the site has attracted over 1,500 visitors, demonstrating its functionality and reach",
    imageUrl: "/dark.jpeg",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "MongoDB"],
    githubUrl: "https://github.com/abdulmoiz248/Zero-Limit",
    deployedUrl: "https://zero-limit.vercel.app",
    category: "web",
  },
  
  {
    title: "Personal Assistant",
    description:
      "Your Ultimate Discord Personal Assistant – Automate Tasks, Manage Finances, and Boost Productivity",
    fullDescription: `A smart Discord-based assistant designed to streamline productivity and daily management. It automates email handling, tracks income and expenses, and generates monthly income statements. The assistant also sends daily LeetCode challenges to keep coding skills sharp and provides task reminders for events, deadlines, and birthdays.`,
    imageUrl: "/assistant.png",
    techStack: ["Next.js", "TypeScript", "Nodemailer"],
    githubUrl: "https://github.com/abdulmoiz248/Ai-Assistant-",
    category: "web",
  },
  {

  title: "Fear Insight",
  description: "Premium Streetwear Apparel Brand",
  fullDescription:
    "Fear Insight is a faith‑driven streetwear brand, offering premium quality clothing that blends fashion with spiritual inspiration and bold self‑expression. The platform allows users to browse and shop a curated collection of apparel. Built with Next.js and backed by modern web tech, the store emphasises quality fabrics, meaningful brand messaging, and a seamless shopping experience.",
  imageUrl: "/fearinsight.png",
  techStack: ["Next.js", "TailwindCSS", "TypeScript", "Supabase"], 
  githubUrl: "",         // not publicly shared
  deployedUrl: "https://fearinsight.com/",
  category: "web"
}
,
{
  "title": "ProtoML",
  "description": "Automated ML Research Paper Analysis with Multi-Agent System",
  "fullDescription": "ProtoML is an intelligent system leveraging Groq and Gemini AI agents to automatically discover, analyze, and summarize the latest machine learning research papers from arXiv. It features multi-agent scoring, debates for paper selection, PDF processing, semantic embeddings, structured report generation, and Discord integration for automated notifications.",
  "imageUrl": "/protoml.png",
  "techStack": ["Python",  "arXiv API", "Groq API", "Gemini API", "Sentence Transformers", "PDF Processing"],
  "githubUrl": "https://github.com/abdulmoiz248/ProtoML",
  "category": "ml"
}
,
  {
    title: "Predator-Prey Simulation",
    description: "Parallel Computing Project",
    fullDescription:
      "Built an interactive, parallelized ecosystem simulation using Python (backend) and TypeScript (frontend). Integrated real-time visualization, PDF report generation with dynamic graphs, and AI-powered summary using Gemini API.",
    imageUrl: "/pdc.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "Fast Api", "Multi Processing", "Socket.io"],
    githubUrl: "https://github.com/abdulmoiz248/Predator-Prey-Simulation",
    category: "web",
  },
  {
  title: "Insightify",
  description: "AI-powered GitHub activity analytics and insights platform",
  fullDescription:
    "An intelligent automated tracking system that monitors your GitHub coding activity daily and provides comprehensive analytics. It automatically fetches commits, calculates coding hours, tracks languages used, and generates AI-powered insights using Google Gemini. The platform delivers beautiful daily progress notifications via Discord and monthly comprehensive reports via email with auto-generated charts. Built with Python and GitHub Actions for complete automation, it helps developers understand their productivity patterns and maintain coding streaks.",
  imageUrl: "/insightify.png",
  techStack: ["Python", "GitHub Actions", "Gemini AI", "Discord API", "Matplotlib", "PyGithub"],
  githubUrl: "https://github.com/abdulmoiz248/Insightify",
  category: "automation",
},
{
  title: "Joblyst",
  description: "Automated AI-powered job hunting and resume matching for Pakistan",
  fullDescription:
    "Job Hunt Assistant is an intelligent automation tool that streamlines the job search process for Pakistani developers. It automatically scrapes multiple local career pages and LinkedIn to find relevant job opportunities based on your CV. The system matches job requirements with your resume, filters remote and location-based roles (e.g., Lahore or remote), and delivers daily curated job alerts directly to Discord. When required, it also generates tailored cover letters to speed up applications, enabling a low-effort, high-consistency job hunting workflow.",
  imageUrl: "/joblyst.png",
  techStack: [
    "Python",
    "BeautifulSoup",
  "Sentence Transformers",
  "Github Actions",
  ],
  githubUrl: "https://github.com/abdulmoiz248/Joblyst",
  category: "automation",
}
,
{
  title: "Rewise",
  description: "AI-powered smart revision bot for automated active recall from Notion notes",
  fullDescription:
    "Rewise is an intelligent revision automation system that transforms your Notion notes into interview-level MCQs using AI. It intelligently selects one note at a time using spaced repetition logic based on review history and confidence scores. The system generates 5–10 challenging, non-trivial MCQs, sends questions to Discord for distraction-free daily revision, and archives full questions with answers and explanations back into Notion. A live analytics dashboard tracks review frequency, overdue notes, confidence trends, and overall learning progress. Built for consistent, high-quality active recall without manual effort.",
  imageUrl: "/rewise.png",
  techStack: [
    "Python",
    "Notion API",
    "Google Gemini",
    "LangChain",
    "GitHub Actions",
  ],
  githubUrl: "https://github.com/abdulmoiz248/Rewise",
  category: "automation",
}
,
   {
    title: "Github-Agent",
    description: "AI Agents that generate and push readme files for my repos",
    fullDescription:
      "An intelligent AI-powered agent designed to analyze GitHub repositories and streamline project management. It automatically detects the tech stack and core functionality of any project, generates a detailed README.md file, and publishes it on GitHub. The agent simplifies documentation, ensures consistency across projects, and saves developers significant time.",
    imageUrl: "/agent.png",
    techStack: ["NextJs", "React", "TypeScript", "Gemini Api"],
    githubUrl: "https://github.com/abdulmoiz248/Github-Agent",
    category: "web",
  },
  {
    title: "LeetCode Solutions",
    description: "Solution of all my leetcode attempted questions",
    fullDescription:
      "LeetCode Solutions is a curated collection of my attempted problems on LeetCode, showcasing efficient solutions in Java, JavaScript, and Python.",
    imageUrl: "/leetcode.jpeg",
    techStack: ["Java", "JavaScript", "Python", "DSA"],
    githubUrl: "https://github.com/abdulmoiz248/LeetCode-Attempts",
    category: "dsa",
  },
  {
  "title": "GPTWrapped",
  "description": "ChatGPT Year in Review",
  "fullDescription": "GPT Wrapped is a Next.js application that analyzes your ChatGPT conversation history and generates a beautiful, shareable 'Wrapped' experience—similar to Spotify Wrapped. Upload your ChatGPT export and discover personalized insights including your usage personality type (Code Wizard, Creative Mind, Data Detective, etc.), longest usage streak, most active times and days, conversation depth, top discussion topics, and much more. The app features a beautiful gradient interface with swipeable slides, comprehensive analytics, and the ability to download and share your Wrapped as an image. Built for ChatGPT users who want to visualize and celebrate their AI journey throughout the year.",
  "imageUrl": "/gpt-wrapped.png",
  "techStack": ["Next.js", "TypeScript", "Tailwind CSS", "React", "html2canvas"],
  "githubUrl": "https://github.com/abdulmoiz248/Gpt-Wrap",
  "deployedUrl": "https://gpt-wrap.vercel.app/",
  "category": "web"
},
  {
    title: "Docgent",
    description: "Smart document generator for assignments, reports, and invoices",
    fullDescription:
      "Docgent is an AI-powered document generation assistant built to create professional Word documents like assignments, reports, and invoices.",
    imageUrl: "/docgent.png",
    techStack: ["Next.js", "TypeScript", "Gemini API", "Grok"],
    githubUrl: "https://github.com/abdulmoiz248/Docgent",
    category: "web",
  },
  {
    title: "NoteMind",
    description: "RAG-powered intelligent note assistant",
    fullDescription:
      "NoteMind is a smart note assistant built using Retrieval-Augmented Generation (RAG).",
    imageUrl: "/notemind.png",
    techStack: ["Python", "FastAPI", "LangChain", "FAISS", "OCR", "Gemini"],
    githubUrl: "https://github.com/abdulmoiz248/NoteMind",
    category: "web",
  },
  {
  
  title: "Updates Bot",
  description: "AI-Powered Discord Update Automation",
  fullDescription:
    "Updates Bot is a Discord automation tool I built to streamline daily internship updates. Instead of manually formatting messages, you can drop your raw update and the bot leverages Gemini AI to craft a perfectly formatted post. Additionally, it stores your GitHub access token securely and automatically reads your daily git commit messages at 7 AM, sending them as updates to the designated Discord channel. Currently deployed on Vercel, the bot is built for efficiency, automation, and stress-free daily reporting.",
  imageUrl: "/updates-bot.png",
  techStack: ["Next.js", "Vercel", "Gemini AI", "Supabase", "TypeScript"],
  githubUrl: "https://github.com/abdulmoiz248/updates-bot",
  deployedUrl: "https://updates-bot.vercel.app/",
  category: "ai"
},

  {
    title: "Twiiter Clone",
    description: "DSA Semester Project implementing various data structures",
    fullDescription:
      "User IDs via linked list, tweets via queue, notifications via stack, file handling for persistence.",
    imageUrl: "/twiiter.png",
    techStack: ["Java", "JavaFx"],
    githubUrl: "https://github.com/abdulmoiz248/Twitter-clone?tab=readme-ov-file#twitter-clone-project",
    category: "dsa",
  },
  {
    title: "FOOBER",
    description: "Your Food, Your Way, Your Ride!!",
    fullDescription:
      "Integrated food ordering with rider pickup to dine-in experience.",
    imageUrl: "/Foober.jpeg",
    techStack: ["Java", "Javafx", "DSA", "OOP"],
    githubUrl: "https://github.com/abdulmoiz248/FOOBER",
    category: "web",
  },
  {
    title: "GPT Emailer Extension",
    description: "A Chrome Extension that generates and send emails using chatgpt website",
    fullDescription:
      "Generate and send context-aware emails via Gmail using ChatGPT.",
    imageUrl: "/gpt-email.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "Nodemailer"],
    githubUrl: "https://github.com/abdulmoiz248/Gpt-Emailer-Extension",
    category: "web",
  },
  {
    title: "Nexa Link",
    description: "A Chatting App",
    fullDescription:
      "Real-time messaging and group chats.",
    imageUrl: "/nexalink.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "NestJs", "Socket.io"],
    githubUrl: "https://github.com/abdulmoiz248/NexaLink-Frontend",
    category: "web",
  },
  {
    title: "Finance Flow Pro",
    description: "A vibe coded full-stack personal finance app with dashboards, invoices & goal tracking",
    fullDescription:
      "Dashboards, summaries, invoice gen, and goals with dark/light modes.",
    imageUrl: "/finance.png",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Vercel AI SDK", "MongoDB"],
    githubUrl: "https://github.com/abdulmoiz248/Finance-Flow-Pro",
    category: "web",
  },
  {
    title: "Broken Bone Detection",
    description: "ML-based X-ray bone fracture classification system",
    fullDescription:
      "Deep learning on labeled X-rays with metrics.",
    imageUrl: "/broken-bone.png",
    techStack: ["Python", "TensorFlow", "OpenCV", "Matplotlib"],
    githubUrl: "https://github.com/abdulmoiz248/Broken-Bone-Detection",
    category: "ml",
  },
  {
    title: "PDF Quiz App",
    description: "Ask MCQs from your own PDFs and get instant answers",
    fullDescription:
      "Frontend in Next.js, backend in Python using document QA.",
    imageUrl: "/quiz-app.png",
    techStack: ["Next.js", "Tailwind", "Python", "HuggingFace"],
    githubUrl: "https://github.com/abdulmoiz248/Quiz-App",
    category: "web",
  },
  {
    title: "COMSATS CGPA Calculator",
    description: "A GPA/CGPA calculator tailored for COMSATS students",
    fullDescription:
      "CGPA/GPA tools with progress bars and responsive UI.",
    imageUrl: "/cgpa-calculator.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/abdulmoiz248/COMSATS-CGPA-Calculator",
    deployedUrl: "https://abdulmoiz248.github.io/COMSATS-CGPA-Calculator/",
    category: "web",
  },
  {
    title: "E-Commerce System (MS SQL Project)",
    description: "Full-featured e-commerce DBMS project with inventory, orders, payments & analytics",
    fullDescription:
      "Relational backend with BI features.",
    imageUrl: "/e-com-sql.png",
    techStack: ["MS SQL", "Lucide Chart"],
    githubUrl: "https://github.com/abdulmoiz248/MS-SQL-Project",
    category: "db",
  },
  {
    title: "BakeBot",
    description: "AI-powered baking assistant built with Langchain & React",
    fullDescription:
      "Chat-driven baking assistant with React frontend.",
    imageUrl: "/bake-bot.png",
    techStack: ["React", "Express.js", "Langchain", "JavaScript"],
    githubUrl: "https://github.com/abdulmoiz248/Bake-Bot",
    category: "web",
  },
  {
    title: "Sudoku Solver with GUI",
    description: "Interactive Sudoku solver with JavaFX",
    fullDescription:
      "Solver, generator, and playable UI.",
    imageUrl: "/sudoku.png",
    techStack: ["Java", "JavaFX"],
    githubUrl: "https://github.com/abdulmoiz248/Sudoku",
    category: "web",
  },
  {
    title: "AI Tic Tac Toe",
    description: "AI-powered Tic Tac Toe game using Gemini API",
    fullDescription:
      "Web game with smart AI opponent.",
    imageUrl: "/tic.png",
    techStack: ["JavaScript", "HTML", "CSS", "Gemini API"],
    githubUrl: "https://github.com/abdulmoiz248/Tick-Tac-Toe?tab=readme-ov-file#tic-tac-toe-game-with-gemini-api",
    category: "web",
  },
]