export const projectsData = [
  {
    id: "miclynics-telemedicine",
    title: "MiClynics Telemedicine Platform",
    category: ["mobile", "cloud", "realtime"],
    role: "Senior Software Engineer (Lead Architect)",
    company: "MiClynics Innovation",
    timeline: "2025 – Present",
    tagline: "Full-scale telehealth ecosystem enabling real-time audio/video consultations, electronic prescriptions, and provider analytics.",
    impactMetrics: [
      { label: "Consultation Latency", value: "<150ms" },
      { label: "Platform Uptime", value: "99.9%" },
      { label: "Deployment Cycle", value: "Zero Downtime CI/CD" },
      { label: "App Client", value: "React Native + TS" }
    ],
    summary: "Architected a comprehensive telemedicine platform connecting licensed medical practitioners with patients through high-definition encrypted audio/video channels, digital prescription flows, dynamic lab investigation tracking, and automated doctor earnings disbursement.",
    challenges: [
      "Ensuring low-latency, stutter-free video consultation across variable mobile network conditions in developing regions.",
      "Designing HIPAA/NDPR-compliant electronic medical records (EMR) and digital prescription workflows with immutable audit logging.",
      "Zero-downtime automated deployment pipelines on DigitalOcean droplets with Nginx reverse proxy and SSL security."
    ],
    architecture: [
      "Backend: Laravel RESTful micro-APIs with MySQL relational schemas, queue workers for asynchronous notifications and PDF prescription generation.",
      "Real-Time: WebSockets (Laravel Echo / Pusher protocol) and WebRTC / Agora SDK for peer-to-peer and relayed high-fidelity audio/video sessions.",
      "Mobile Frontend: React Native with TypeScript and Tailwind CSS, featuring smooth offline state caching and responsive call controls.",
      "DevOps: GitHub Actions automating testing, SSH deployment, database migrations, and Nginx proxy reload on DigitalOcean."
    ],
    stack: ["React Native", "TypeScript", "Tailwind CSS", "Laravel", "MySQL", "WebSockets", "WebRTC", "Agora SDK", "DigitalOcean", "GitHub Actions", "Nginx"],
    accentColor: "#10b981",
    featured: true
  },
  {
    id: "fintech-checkout-core",
    title: "Multi-Gateway FinTech Core & Webhook Engine",
    category: ["fintech", "cloud"],
    role: "Lead Full-Stack Architect",
    company: "Freelance & Enterprise Clients",
    timeline: "2021 – Present",
    tagline: "High-throughput payment orchestration layer processing multi-currency checkouts and automated affiliate split settlements.",
    impactMetrics: [
      { label: "Gateways Integrated", value: "6+" },
      { label: "Webhook Reliability", value: "99.98%" },
      { label: "Payout Latency", value: "Instant" },
      { label: "Currencies", value: "NGN, USD, GHS, KES" }
    ],
    summary: "Engineered a unified payment orchestration engine abstracting multiple FinTech providers (Paystack, Flutterwave, Stripe, Monnify, Squad, Zainpay) behind an idempotent, resilient API layer with automated webhook reconciliation and instant affiliate commission payouts.",
    challenges: [
      "Preventing duplicate transactions caused by sporadic network retries and asynchronous webhook delivery.",
      "Normalizing wildly varying API response payloads and event structures across 6 different payment providers.",
      "Guaranteeing instant, accurate sub-account splitting and affiliate payouts with automated balance verification."
    ],
    architecture: [
      "Idempotency Guard: Distributed lock and event deduplication tables preventing race conditions and double credit.",
      "Webhook Pipeline: Signature verification, secure asynchronous queue workers, and automatic retry with exponential backoff.",
      "Multi-Currency Settlement: Dynamic routing to the optimal gateway based on currency, issuer bank, and transaction fee efficiency."
    ],
    stack: ["Node.js", "Laravel", "Paystack", "Flutterwave", "Stripe", "Monnify", "Squad", "Redis", "MySQL", "Webhooks"],
    accentColor: "#06b6d4",
    featured: true
  },
  {
    id: "davinci-circle-hub",
    title: "Da Vinci Circle & E-Learning Ecosystem",
    category: ["cloud", "mobile"],
    role: "Full-Stack Architect & Founder",
    company: "Da Vinci Circle",
    timeline: "2022 – Present",
    tagline: "University marketing hub and e-learning platform with custom video playback and full-stack AI coding curriculum.",
    impactMetrics: [
      { label: "Course Modules", value: "50+ Modules" },
      { label: "Student Completion", value: "+38%" },
      { label: "Curriculum", value: "Full-Stack + AI" },
      { label: "Frontend", value: "React + Tailwind" }
    ],
    summary: "Built an immersive university marketing and interactive e-learning platform featuring progressive video streaming, dynamic student engagement trackers, coding lab exercises, and AI curriculum paths.",
    challenges: [
      "Optimizing heavy video streaming for students on mobile and bandwidth-constrained connections.",
      "Building an intuitive, high-engagement curriculum interface with real-time progress saving and interactive quizzes."
    ],
    architecture: [
      "Frontend: React with Tailwind CSS, custom video playback controller with bandwidth adaptation and playback state caching.",
      "Backend: Scalable REST API with role-based access control (RBAC), multi-tenant student analytics, and automated course completion certificates."
    ],
    stack: ["React", "Tailwind CSS", "Node.js", "REST APIs", "Video Streaming", "MySQL", "Cloudinary"],
    accentColor: "#8b5cf6",
    featured: true
  },
  {
    id: "valpulse-mobile-suite",
    title: "Valpulse Mobile Suite & Cloud Infrastructure",
    category: ["mobile", "cloud"],
    role: "Senior Software Engineer",
    company: "Valpulse Services",
    timeline: "2023",
    tagline: "Production React Native mobile release lifecycles, Android manifest security tuning, and cloud routing infrastructure.",
    impactMetrics: [
      { label: "Play Store Approval", value: "100%" },
      { label: "Crash-Free Sessions", value: "99.4%" },
      { label: "Deployment Track", value: "Internal & Open Beta" },
      { label: "App Size Reduction", value: "-30%" }
    ],
    summary: "Led mobile engineering and release management for enterprise business applications. Handled permission scoping, cryptographic keystore configurations, target SDK migrations, and Google Play Console compliance.",
    challenges: [
      "Navigating stringent Google Play Console privacy and background permission policy audits.",
      "Resolving complex cloud routing bottlenecks and optimizing mobile API payload sizes."
    ],
    architecture: [
      "Mobile Architecture: React Native with modular native bridging, proguard rules, bundle split optimizations.",
      "Cloud Infrastructure: High-availability routing, API gateway configuration, and automated crash reporting."
    ],
    stack: ["React Native", "Android SDK", "Google Play Console", "Cloud Infrastructure", "RESTful APIs"],
    accentColor: "#3b82f6",
    featured: true
  },
  {
    id: "madrasa-hausa-northpreneur",
    title: "Madrasa Hausa & Northpreneur Hub",
    category: ["cloud"],
    role: "Lead Full-Stack Consultant",
    company: "Community Impact Platforms",
    timeline: "2020 – 2024",
    tagline: "Digital education and entrepreneurship platforms with multi-tenant API routing and automated onboarding workflows.",
    impactMetrics: [
      { label: "Active Learners", value: "15,000+" },
      { label: "Multi-Tenant", value: "Isolated Workspaces" },
      { label: "Onboarding Flow", value: "Automated SMS/Email" }
    ],
    summary: "Engineered scalable digital education and entrepreneurship hubs tailored for regional growth, offering localized media streaming, automated student enrollment pipelines, and dynamic analytics.",
    challenges: [
      "Delivering seamless video content across high-latency cellular networks.",
      "Designing multi-tenant database partitioning ensuring tenant isolation with minimal server overhead."
    ],
    architecture: [
      "Multi-tenant API architecture with tenant-scoped database connections.",
      "Optimized media delivery CDN integration and automated onboarding triggers."
    ],
    stack: ["Laravel", "PHP", "React", "MySQL", "Multi-Tenant Routing", "Video CDN"],
    accentColor: "#f59e0b",
    featured: false
  }
];
