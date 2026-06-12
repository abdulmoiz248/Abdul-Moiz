export interface ScreenshotItem {
  id: string
  img: string
  label: string
  description: string
  category: string
  height: number // Heights for masonry layout
}

export const hygieiaIntro = {
  logo: '/fyp/screenshots/logo.png',
  poster: '/fyp/HYGIEIA POSTER FYP.png',
  problem: 'Today\'s healthcare systems face major challenges: massive delays in treatment, lack of timely guidance, and long travel or waiting times. Fragmentation among diagnostics, fitness apps, and appointment services leaves patients overwhelmed, often skipping or delaying crucial primary and preventive care.',
  solution: 'Hygieia is a unified, patient-centric digital healthcare ecosystem. It brings professional consultations, active fitness monitoring, lab reporting, and advanced AI-powered diagnostics right to the user\'s fingertips. By combining 10 microservices, patients receive holistic, timely care in a single application.',
  aim: 'To connect patients and healthcare professionals while providing advanced AI assistance, early disease detection, and proactive health tracking.',
}

export const hygieiaStats = [
  { value: '10', label: 'Microservices', desc: 'Docker orchestrated services communicating via RabbitMQ & TCP' },
  { value: '5', label: 'User Roles', desc: 'Dashboards for Patient, Doctor, Nutritionist, Pathologist, & Admin' },
  { value: '4', label: 'AI Engines', desc: 'LangGraph Chatbot, FAISS Search, Skin & Dental Image Classifiers' },
  { value: '3', label: 'Databases', desc: 'Supabase (PostgreSQL), MongoDB (Documents), and Redis (Queues)' },
]

export const hygieiaTechStack = [
  { name: 'Next.js', category: 'Frontend', desc: 'Responsive and sleek React-based client web platform' },
  { name: 'NestJS', category: 'Backend', desc: 'Structured Node.js gateway and microservices layer' },
  { name: 'FastAPI', category: 'AI Services', desc: 'High-performance Python APIs for deep learning inference' },
  { name: 'RabbitMQ', category: 'Messaging', desc: 'Asynchronous event broker for inter-service communication' },
  { name: 'Redis', category: 'Caching & Queuing', desc: 'Powers BullMQ background jobs and reminder schedules' },
  { name: 'MongoDB', category: 'Data Store', desc: 'Flexible storage for patient chat logs and session state' },
  { name: 'Supabase', category: 'Data Store', desc: 'PostgreSQL storage for application records, users, and transactions' },
  { name: 'Docker', category: 'DevOps', desc: 'Containerized deployment for reproducible builds and scaling' },
  { name: 'LangGraph', category: 'AI Agent', desc: 'Orchestrates the stateful, multi-agent patient chatbot' },
  { name: 'Groq', category: 'LLM Inference', desc: 'Ultra-fast Llama-3 inference provider for recommendations and RAG' },
  { name: 'FAISS', category: 'Vector DB', desc: 'Performs semantic search over CV documents' },
  { name: 'PyTorch', category: 'Deep Learning', desc: 'Runs skin acne & dental anomaly classification models' },
]

export const hygieiaFeatures = [
  {
    title: 'AI Health Companion',
    description: 'LangGraph-powered stateful assistant integrated with Groq LLM. It has context of patient records, prescriptions, and appointments. Can book slots or recommend doctors directly through conversation.',
    icon: '🤖',
    tech: 'LangGraph + Groq + MongoDB'
  },
  {
    title: 'Acne & Skin Analysis',
    description: 'Uses an EfficientNet-B3 model trained on extensive datasets. Classifies skin issues into blackheads, whiteheads, pustules, cysts, and papules, providing instant digital screening.',
    icon: '🔬',
    tech: 'PyTorch + FastAPI + EffNet'
  },
  {
    title: 'Dental Image Analyzer',
    description: 'Deep learning classifier that inspects dental photos to identify healthy teeth, caries (cavities), and impacted teeth, helping patients detect dental issues early.',
    icon: '🦷',
    tech: 'PyTorch + ResNet + FastAPI'
  },
  {
    title: 'Interactive Timeline',
    description: 'A responsive public page mapping the historical evolution of healthcare from ancient Greece (the goddess Hygieia) to medieval medicine and AI-powered remote care.',
    icon: '⏳',
    tech: 'Next.js + Tailwind CSS'
  },
  {
    title: 'Fitbit Integration',
    description: 'Real-time activity syncing using Fitbit OAuth. Captures step counts, water intake, sleep quality, and active calories to compute daily personalized health metrics.',
    icon: '⌚',
    tech: 'Fitbit API + NestJS Auth'
  },
  {
    title: 'Semantic CV Matcher',
    description: 'Recruitment screening service using sentence transformers. Automatically indexes applicant CVs and performs FAISS vector search for semantic candidate discovery.',
    icon: '🔍',
    tech: 'FAISS + SentenceTransformers'
  },
]

export const screenshotCategories = [
  { id: 'all', title: 'All Screenshots', icon: '✨' },
  { id: 'patient', title: 'Patient', icon: '🏥' },
  { id: 'doctor', title: 'Doctor', icon: '👨‍⚕️' },
  { id: 'nutritionist', title: 'Nutritionist', icon: '🥗' },
  { id: 'pathologist', title: 'Pathologist', icon: '🧪' },
  { id: 'admin', title: 'Admin', icon: '⚙️' },
  { id: 'public', title: 'Public Pages', icon: '🌐' },
]

export const screenshots: ScreenshotItem[] = [
  // Patient Portal
  {
    id: 'pat-dash',
    img: '/fyp/screenshots/patient/patient dashboard.png',
    label: 'Patient Dashboard',
    description: 'Interactive telemetry displaying daily steps, sleep, water intake, and customized medical advice.',
    category: 'patient',
    height: 900,
  },
  {
    id: 'pat-chat',
    img: '/fyp/screenshots/patient/patient chatbot.png',
    label: 'AI Health Assistant',
    description: 'LangGraph chatbot resolving complex queries and recommending clinicians based on patient records.',
    category: 'patient',
    height: 750,
  },
  {
    id: 'pat-diag',
    img: '/fyp/screenshots/patient/ai diagnosis.png',
    label: 'AI Diagnostic Suite',
    description: 'Vision models providing skin acne grading and dental caries classification.',
    category: 'patient',
    height: 700,
  },
  {
    id: 'pat-fitness',
    img: '/fyp/screenshots/patient/patient fitness.png',
    label: 'Fitbit Fitness Center',
    description: 'Visual tracking of daily water intake, step targets, calories burned, and sleep quality.',
    category: 'patient',
    height: 850,
  },
  {
    id: 'pat-med',
    img: '/fyp/screenshots/patient/medicine tracker.png',
    label: 'Medicine Adherence Tracker',
    description: 'Smart prescription schedule displaying upcoming pill reminders and daily compliance charts.',
    category: 'patient',
    height: 720,
  },
  {
    id: 'pat-booking',
    img: '/fyp/screenshots/patient/patient appointment booking.png',
    label: 'Appointment Scheduler',
    description: 'Clean booking panel allowing time slot selection and consultant filtering.',
    category: 'patient',
    height: 600,
  },
  {
    id: 'pat-records',
    img: '/fyp/screenshots/patient/patient medical records.png',
    label: 'Electronic Health Records',
    description: 'Unified repository for lab test outcomes, doctor prescriptions, and medical files.',
    category: 'patient',
    height: 650,
  },
  {
    id: 'pat-journal',
    img: '/fyp/screenshots/patient/patient jornal.png',
    label: 'Personal Health Journal',
    description: 'Daily symptom logger helping patients keep a structured diary of their symptoms.',
    category: 'patient',
    height: 620,
  },
  {
    id: 'pat-doc-select',
    img: '/fyp/screenshots/patient/doctor selection for appointment.png',
    label: 'Doctor Directory Search',
    description: 'Search filter showing qualified doctors available for telemedicine bookings.',
    category: 'patient',
    height: 580,
  },

  // Doctor Portal
  {
    id: 'doc-dash',
    img: '/fyp/screenshots/doctor/doctor dashboard.png',
    label: 'Doctor Analytics Dashboard',
    description: 'Professional suite summarizing patient growth, appointment analytics, and weekly calendars.',
    category: 'doctor',
    height: 850,
  },
  {
    id: 'doc-appt',
    img: '/fyp/screenshots/doctor/doctor appointment.png',
    label: 'Consultation Queue Manager',
    description: 'Comprehensive table for clinical workflow, allowing cancellations and completed statuses.',
    category: 'doctor',
    height: 720,
  },
  {
    id: 'doc-prescription',
    img: '/fyp/screenshots/doctor/doctor prescriptions.png',
    label: 'Prescription Generator',
    description: 'Digital console for composing precise dosages and therapy durations for patient portals.',
    category: 'doctor',
    height: 700,
  },
  {
    id: 'doc-blogs',
    img: '/fyp/screenshots/doctor/doctor blogs.png',
    label: 'Clinical Blog Composer',
    description: 'Healthcare blog editor for medical professionals to share informative guidelines.',
    category: 'doctor',
    height: 640,
  },

  // Nutritionist Portal
  {
    id: 'nut-dash',
    img: '/fyp/screenshots/nutrtionist/nut dashboard.png',
    label: 'Nutritionist Dashboard',
    description: 'Client overview displaying daily appointments, calorie logs, and diet plan updates.',
    category: 'nutritionist',
    height: 800,
  },
  {
    id: 'nut-diet',
    img: '/fyp/screenshots/nutrtionist/nut diet plan.png',
    label: 'Personalized Diet Planner',
    description: 'Clinical meal builder specifying protein, carb, and fat distributions per client.',
    category: 'nutritionist',
    height: 740,
  },
  {
    id: 'nut-profile',
    img: '/fyp/screenshots/nutrtionist/nut profile.png',
    label: 'Nutritionist Profile Panel',
    description: 'Specialist bio page illustrating qualifications, fee details, and clinic hours.',
    category: 'nutritionist',
    height: 600,
  },

  // Pathologist Portal
  {
    id: 'path-dash',
    img: '/fyp/screenshots/patholgoist/pathologist dashboard.png',
    label: 'Pathologist Lab Console',
    description: 'Overview showing current test queues, pending tests, and upload progress.',
    category: 'pathologist',
    height: 820,
  },
  {
    id: 'path-tests',
    img: '/fyp/screenshots/patholgoist/pathologist lab test list.png',
    label: 'Laboratory Test Pipeline',
    description: 'System database managing incoming blood tests, chemistry, and image reports.',
    category: 'pathologist',
    height: 700,
  },

  // Admin Portal
  {
    id: 'adm-dash',
    img: '/fyp/screenshots/admin/admin dashboard.png',
    label: 'Admin Control Center',
    description: 'Core platform statistics indicating user registrations, worker activity, and system shortcuts.',
    category: 'admin',
    height: 900,
  },
  {
    id: 'adm-blogs',
    img: '/fyp/screenshots/admin/admin blogs.png',
    label: 'Blog Moderator',
    description: 'Approval pipeline for content posted by doctors and pathologists.',
    category: 'admin',
    height: 680,
  },
  {
    id: 'adm-news',
    img: '/fyp/screenshots/admin/admin newsletter.png',
    label: 'Newsletter Dispatcher',
    description: 'Admin mail automation dashboard for creating and dispatching community updates.',
    category: 'admin',
    height: 620,
  },
  {
    id: 'adm-cvs',
    img: '/fyp/screenshots/admin/cvs.png',
    label: 'AI Candidate Screener',
    description: 'Recruitment board with FAISS vector search showing semantic matches for applicant resumes.',
    category: 'admin',
    height: 700,
  },

  // Public & Content
  {
    id: 'pub-timeline',
    img: '/fyp/screenshots/landing page/landing page timeline.png',
    label: 'Hygieia Healthcare Timeline',
    description: 'Historical path charting patient-centric progress from Greek mythology to AI.',
    category: 'public',
    height: 780,
  },
  {
    id: 'pub-blogs',
    img: '/fyp/screenshots/blogs/blogs.png',
    label: 'Medical Articles Catalog',
    description: 'Public blog feed sharing trusted medical guidelines written by licensed specialists.',
    category: 'public',
    height: 650,
  },
  {
    id: 'pub-tests',
    img: '/fyp/screenshots/lab tests/lab testss.png',
    label: 'Public Diagnostics Store',
    description: 'Public page offering diagnostic lab tests with quick booking options.',
    category: 'public',
    height: 690,
  },
  {
    id: 'pub-join',
    img: '/fyp/screenshots/join us/join-us.png',
    label: 'Professional Recruitment Page',
    description: 'Recruitment portal for clinicians wishing to practice on Hygieia.',
    category: 'public',
    height: 610,
  },
]

export const systemArchitecture = {
  src: '/fyp/system-design/image.png',
  label: 'Hygieia Microservices Architecture',
  description: 'A distributed system of 10 microservices, utilizing API Gateway routing, RabbitMQ communication, Redis queues, and hybrid Supabase + MongoDB data management.',
}
