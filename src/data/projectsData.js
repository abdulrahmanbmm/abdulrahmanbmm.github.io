export const projectsData = [
  {
    id: "miclynics-telemedicine",
    title: "MiClynics - Comprehensive Telemedicine",
    category: ["mobile", "cloud", "realtime"],
    role: "Senior Software Engineer (Lead Architect)",
    company: "MiClynics Innovation",
    timeline: "Jan 2025 – Present",
    tagline: "AI-powered telemedicine platform redefining healthcare access with secure real-time video, audio, and chat consultations globally.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.anonymous.miclynicsmobile&hl=en_US",
    appStoreUrl: "https://apps.apple.com/us/app/miclynics/id6786291971",
    liveUrl: "https://play.google.com/store/apps/details?id=com.anonymous.miclynicsmobile&hl=en_US",
    impactMetrics: [
      { label: "Consultation Latency", value: "<150ms" },
      { label: "Platforms Live", value: "iOS & Android" },
      { label: "Availability", value: "24/7 Global" },
      { label: "Compliance", value: "Encrypted EMR" }
    ],
    summary: "MiClynics is a cutting-edge telemedicine platform redefining the future of healthcare. Designed to be fast, accessible, and patient-focused, it brings quality medical care directly to screens worldwide. Powered by AI assistants and real-time communications, the platform connects patients with licensed doctors across borders via encrypted video, audio, and chat sessions alongside digital prescription workflows.",
    challenges: [
      "Ensuring low-latency, uninterrupted video/audio consultation across variable mobile network conditions in developing and international regions.",
      "Designing HIPAA/NDPR-compliant electronic medical records (EMR) and digital prescription workflows with immutable audit trails.",
      "Orchestrating simultaneous cross-platform mobile release cycles for both Google Play Store and Apple App Store."
    ],
    architecture: [
      "Backend: Laravel RESTful micro-APIs with MySQL relational schemas, queue workers for asynchronous notifications and PDF prescription generation.",
      "Real-Time: WebSockets (Laravel Echo) and WebRTC / Agora SDK for peer-to-peer and relayed high-fidelity audio/video sessions.",
      "Mobile Frontend: React Native with TypeScript and Tailwind CSS, featuring smooth offline state caching and responsive call controls.",
      "DevOps & Security: Automated GitHub Actions CI/CD to DigitalOcean droplets with Nginx reverse proxy and SSL encryption."
    ],
    stack: ["React Native", "TypeScript", "Tailwind CSS", "Laravel", "MySQL", "WebSockets", "WebRTC", "Agora SDK", "DigitalOcean", "Google Play", "Apple App Store"],
    accentColor: "#10b981",
    featured: true
  },
  {
    id: "valpulse-mobile-suite",
    title: "Valpulse Mobile Application & Marketplace",
    category: ["mobile", "cloud", "fintech"],
    role: "Senior Software Engineer & Mobile Lead",
    company: "Valpulse Services & Miclynics Innovation",
    timeline: "Jan 2026 – Present",
    tagline: "Premier digital products marketplace and mobile application ecosystem satisfying the knowledge impulses of users with affiliate rewards.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.abdulrhmn.valpulsemobile&hl=en_US&pli=1",
    liveUrl: "https://valpulse.com/",
    impactMetrics: [
      { label: "Play Store Status", value: "Live & Active" },
      { label: "Crash-Free Rate", value: "99.4%" },
      { label: "Affiliate Engine", value: "Automated Payouts" },
      { label: "App Architecture", value: "React Native + Cloud" }
    ],
    summary: "Valpulse is a digital products marketplace providing the knowledge necessary to turn dreams and goals into reality. Architected a cross-platform mobile application and web marketplace enabling users to acquire high-income digital skills and participate in an affiliate ecosystem with automated commission payouts.",
    challenges: [
      "Navigating stringent Google Play Console privacy, permissions, and 14-day open testing track compliance for production release.",
      "Designing a high-throughput digital product checkout and instant affiliate commission distribution pipeline.",
      "Optimizing mobile bundle sizes and ensuring fast initial load on diverse Android mobile devices."
    ],
    architecture: [
      "Mobile Engineering: React Native with modular native bridging, secure keystore signing, and proguard code shrinking.",
      "Cloud & Web: Laravel and PHP backend with RESTful APIs, MySQL database partitioning, and real-time webhook handlers.",
      "Distribution: Automated Google Play Console deployment tracks with staged rollouts and crash analytics."
    ],
    stack: ["React Native", "Android Play Console", "Laravel", "PHP", "MySQL", "Cloud Infrastructure", "RESTful APIs", "Payment Webhooks"],
    accentColor: "#3b82f6",
    featured: true
  },
  {
    id: "davinci-circle-hub",
    title: "Da Vinci Circle University",
    category: ["cloud", "mobile"],
    role: "Full-Stack Architect & Founder",
    company: "Da Vinci Circle",
    timeline: "Feb 2026 – Present",
    tagline: "Revolutionary mastermind e-learning ecosystem featuring Hollywood-grade video masterclasses and full-stack AI curriculum.",
    liveUrl: "https://davincicircle.com",
    impactMetrics: [
      { label: "Pillars", value: "3 Core Tracks" },
      { label: "Curriculum", value: "Full-Stack + AI" },
      { label: "Video Engine", value: "Adaptive Bitrate" },
      { label: "Frontend", value: "React + Tailwind" }
    ],
    summary: "Da Vinci Circle University is an innovative entrepreneurial ecosystem inspired by the power of mastermind alliances. Built on three foundational pillars designed to eliminate the gap between learning and earning, the platform features Hollywood-grade video masterclasses, interactive coding exercises, and a comprehensive AI curriculum.",
    challenges: [
      "Delivering high-definition video masterclasses reliably across mobile and bandwidth-limited connections without buffering.",
      "Creating an interactive learning journey that merges video streaming, code sandboxes, and student progress metrics."
    ],
    architecture: [
      "Frontend: React with Tailwind CSS, custom HTML5 video controller with adaptive quality switching and client-side playback caching.",
      "Backend: Scalable RESTful API with role-based access control (RBAC), multi-tenant student analytics, and automated course completion certificates."
    ],
    stack: ["React", "Tailwind CSS", "Node.js", "Laravel", "REST APIs", "Video Streaming", "MySQL", "Cloudinary"],
    accentColor: "#8b5cf6",
    featured: true
  },
  {
    id: "madrasa-hausa",
    title: "Madrasa Hausa - Structured E-Learning",
    category: ["cloud"],
    role: "Lead Full-Stack Engineer",
    company: "Madrasa Hausa",
    timeline: "Dec 2025 – Feb 2026",
    tagline: "Premier e-learning platform bridging the digital skills gap in Northern Nigeria with high-quality bilingual video courses.",
    liveUrl: "https://madrasahausa.com/",
    impactMetrics: [
      { label: "Live Domain", value: "madrasahausa.com" },
      { label: "Languages", value: "Hausa & English" },
      { label: "Video Delivery", value: "Zero Buffering CDN" },
      { label: "Onboarding", value: "Automated Workflows" }
    ],
    summary: "Madrasa Hausa is the premier e-learning platform designed to bridge the digital skills gap in Northern Nigeria. Engineered the end-to-end web application delivering high-quality, accessible video courses in Hausa and English, empowering youth and professionals to master high-value digital skills.",
    challenges: [
      "Delivering smooth video streaming experiences in regions with fluctuating mobile data bandwidth.",
      "Building an intuitive, accessible bilingual user interface suited for diverse technical literacy levels."
    ],
    architecture: [
      "Backend: Laravel framework with optimized video streaming routes, tenant isolation, and user progress tracking.",
      "Frontend & Media: Responsive web interface with localized controls and CDN-cached video assets."
    ],
    stack: ["Laravel", "PHP", "Web Development", "Video Streaming", "MySQL", "Tailwind CSS"],
    accentColor: "#f59e0b",
    featured: true
  },
  {
    id: "payonaire-marketplace",
    title: "Payonaire - Digital Products Marketplace",
    category: ["fintech", "cloud"],
    role: "Lead Full-Stack Developer",
    company: "Payonaire",
    timeline: "Dec 2024 – Apr 2025",
    tagline: "Dynamic marketplace connecting digital creators and customers with multi-currency checkouts and automated wealth tools.",
    liveUrl: "https://payonaire.com/",
    impactMetrics: [
      { label: "Live Domain", value: "payonaire.com" },
      { label: "Creator Tools", value: "Instant Storefronts" },
      { label: "Payment Flows", value: "Multi-Gateway" },
      { label: "Settlement", value: "Automated Splits" }
    ],
    summary: "Payonaire is a high-growth digital products marketplace providing solutions to creators and customers to amplify visibility and create wealth digitally. Built the full-stack architecture supporting problem-solving digital products, financial advisory assets, and automated merchant payouts.",
    challenges: [
      "Engineering a reliable multi-gateway payment checkout with automated reconciliation and fraud prevention.",
      "Empowering non-technical digital creators to upload, protect, and monetize digital products instantly."
    ],
    architecture: [
      "Backend: PHP & Laravel high-concurrency API layer with secure download URL generation and anti-piracy token validation.",
      "FinTech Layer: Webhook listeners with signature verification and automated split settlement to merchant balances."
    ],
    stack: ["PHP", "Laravel", "Full-Stack Development", "FinTech Gateways", "MySQL", "Webhook Architecture"],
    accentColor: "#06b6d4",
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
      "Normalizing varying API response payloads and event structures across 6 different payment providers.",
      "Guaranteeing instant, accurate sub-account splitting and affiliate payouts with automated balance verification."
    ],
    architecture: [
      "Idempotency Guard: Distributed lock and event deduplication tables preventing race conditions and double credit.",
      "Webhook Pipeline: Signature verification, secure asynchronous queue workers, and automatic retry with exponential backoff.",
      "Multi-Currency Settlement: Dynamic routing to the optimal gateway based on currency, issuer bank, and transaction fee efficiency."
    ],
    stack: ["Node.js", "Laravel", "Paystack", "Flutterwave", "Stripe", "Monnify", "Squad", "Redis", "MySQL", "Webhooks"],
    accentColor: "#ec4899",
    featured: false
  },
  {
    id: "sells-rocket",
    title: "Sells Rocket & Automated Sales Funnels",
    category: ["cloud", "fintech"],
    role: "Software Engineer",
    company: "Sells Rocket",
    timeline: "Jul 2022 – Sep 2023",
    tagline: "Digital marketplace backend services, automated sales funnels, and high-conversion affiliate checkout pipelines.",
    impactMetrics: [
      { label: "Query Speedup", value: "40% Faster" },
      { label: "Funnels Built", value: "Multi-Tier" },
      { label: "Architecture", value: "Microservices" }
    ],
    summary: "Contributed to core backend services, database optimization, and high-converting automated sales funnels for a digital marketplace. Optimized database query performance and streamlined affiliate commission payouts.",
    challenges: [
      "Refactoring legacy relational database queries to support rapid traffic spikes during sales campaigns.",
      "Ensuring seamless integration between marketing landing pages, cart sessions, and payment gateways."
    ],
    architecture: [
      "Modular PHP and Laravel microservices with redis caching and optimized indexing.",
      "Automated webhook listeners triggering customer access and email notifications upon payment confirmation."
    ],
    stack: ["PHP", "Laravel", "Node.js", "MySQL", "Microservices", "Sales Funnels", "Webhooks"],
    accentColor: "#14b8a6",
    featured: false
  }
];
