// Lightweight project showcase data. Replace placeholders with real work.
export const projects = [
  {
    slug: "Ballerina",
    title: "Ballerina Firestore",
    client: "Ballerina Firestore",
    category: "Ballerina connector",
    year: "2025",
    summary:
      "Community & media surface experiments. Brand / interaction + internal creator tooling.",
    tags: ["Media", "Community"],
    media: "/Assets/3.jpg",
    aspect: "aspect-[16/7]",
    locked: true,
    desc: "For the past two years, I’ve struggled with managing my personal finances effectively. Each month, I faced budget shortages, and while I tried several financial management apps, none of them fully matched my requirements.",
    desc2:
      "This challenge inspired me to start building my own finance management application. My goal is to not just solve my own problem but also address the gaps I noticed in existing solutions",
    role: "Full Stack Engineer",
    collab: [""],
    github: "https://github.com/NalakaDineshSamarasingha/SpendWise-frontend",
    downlod:
      "https://github.com/NalakaDineshSamarasingha/SpendWise-frontend/releases/tag/v1.0.1",
    context: [
      "I started this project after facing recurring budget shortages for nearly two years. Despite trying several financial management apps, none aligned with my real needs — especially around collaboration and debt tracking.",
      "The app focuses on unique features such as collaboration, where two or more people can manage a single account, and debt management, giving clear visibility into both what I owe and what others owe me. It also includes trip planning, allowing groups to budget and split expenses efficiently, and saving goals with progress tracking. Alongside these, the app covers all the essential features like income and expense tracking, categorization, reminders, and reporting.",
      "During development, I explored challenges like ensuring real-time synchronization between multiple users, maintaining simplicity while handling complex cases, and implementing secure data sharing. Through prototyping, I refined debt ledger models, collaborative flows, and savings visualization. The result is an app tailored not just for individual finance but also for group-oriented financial scenarios, bridging a gap I found in existing solutions.",
    ],
  },
  {
    slug: "spendwise",
    title: "SpendWise",
    client: "spendwise",
    category: "financial management app",
    year: "Present",
    summary:
      "Lightweight dashboard & asset workflow primitives enabling faster content pipeline iteration.",
    tags: ["Tooling", "Dashboard"],
    media: "/Assets/spendwise.png",
    aspect: "aspect-[4/3]",
    desc: "For the past two years, I’ve struggled with managing my personal finances effectively. Each month, I faced budget shortages, and while I tried several financial management apps, none of them fully matched my requirements.",
    desc2:
      "This challenge inspired me to start building my own finance management application. My goal is to not just solve my own problem but also address the gaps I noticed in existing solutions",
    role: "Full Stack Engineer",
    collab: ["Muditha Lakmali"],
    technology: [
      "React Native",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Google O Auth",
      "Render.com",
    ],
    github: "https://github.com/NalakaDineshSamarasingha/SpendWise-frontend",
    downlod:
      "https://github.com/NalakaDineshSamarasingha/SpendWise-frontend/releases/tag/v1.0.1",
    feature_video: [
      {
        src: "/Assets/spendwise_das.mp4",
        title: "Smart Dashboard",
        description: "Dashboard overview with real-time expense tracking",
      },
    ],
    context: [
      "I started this project after facing recurring budget shortages for nearly two years. Despite trying several financial management apps, none aligned with my real needs — especially around collaboration and debt tracking.",
      "The app focuses on unique features such as collaboration, where two or more people can manage a single account, and debt management, giving clear visibility into both what I owe and what others owe me. It also includes trip planning, allowing groups to budget and split expenses efficiently, and saving goals with progress tracking.",
      "During development, I explored challenges like ensuring real-time synchronization between multiple users, maintaining simplicity while handling complex cases, and implementing secure data sharing. Through prototyping, I refined debt ledger models, collaborative flows, and savings visualization.",
    ],
  },
  {
    slug: "KimbulaGO",
    title: "KimbulaGO",
    client: "KimbulaGO",
    category: "Tool for Bakery",
    year: "2025",
    summary:
      "Explorations in natural language + visual grounding flows for rapid information recall.",
    tags: ["AI", "Search"],
    media: "/Assets/kimbula.mp4",
    aspect: "aspect-[3/4]",
    desc: "For the past two years, I’ve struggled with managing my personal finances effectively. Each month, I faced budget shortages, and while I tried several financial management apps, none of them fully matched my requirements.",
    desc2:
      "This challenge inspired me to start building my own finance management application. My goal is to not just solve my own problem but also address the gaps I noticed in existing solutions",
    role: "Full Stack Engineer",
    collab: [""],
    github: "https://github.com/NalakaDineshSamarasingha/SpendWise-frontend",
    downlod:
      "https://github.com/NalakaDineshSamarasingha/SpendWise-frontend/releases/tag/v1.0.1",
    context: [
      "I started this project after facing recurring budget shortages for nearly two years. Despite trying several financial management apps, none aligned with my real needs — especially around collaboration and debt tracking. This gap inspired me to design and develop my own solution that not only manages personal finance but also enables shared financial management.",
      "The app focuses on unique features such as collaboration, where two or more people can manage a single account, and debt management, giving clear visibility into both what I owe and what others owe me. It also includes trip planning, allowing groups to budget and split expenses efficiently, and saving goals with progress tracking. Alongside these, the app covers all the essential features like income and expense tracking, categorization, reminders, and reporting.",
      "During development, I explored challenges like ensuring real-time synchronization between multiple users, maintaining simplicity while handling complex cases, and implementing secure data sharing. Through prototyping, I refined debt ledger models, collaborative flows, and savings visualization. The result is an app tailored not just for individual finance but also for group-oriented financial scenarios, bridging a gap I found in existing solutions.",
    ],
  },
  {
    slug: "Carpool",
    title: "Carpool",
    client: "carpool",
    category: "Ride sharing app",
    year: "2024 - 2025",
    media: "/Assets/Project.mp4",
    aspect: "aspect-[16/9]",
    desc: "Organization-focused employee carpooling platform reducing commuting cost, parking congestion and emissions at WSO2 via structured, verified ride sharing.",
    desc2: "Cross-platform Flutter app (driver / passenger modes) + Ballerina services + Firebase (Firestore, Realtime DB, FCM) + Google Maps + Next.js admin console enabling oversight, payments & analytics.",
    role: "Lead Engineer (Ride / Booking APIs)",
    collab: [
      "Movindu",
      "Ayesha",
      "Kiyara",
      "Ashfa"
    ],
    github: "https://github.com/wso2-ballerina-carpooling-project",
    downlod: "https://github.com/wso2-ballerina-carpooling-project/mobile-app-frontend/releases/tag/V1.0.0",
    context: [
      "Problem: isolated single-occupancy commuting increased fuel cost, parking load & emissions; no internal coordination channel.",
      "Aim: deliver end-to-end secure carpooling system improving utilization & sustainability while preserving user convenience.",
      "Architecture: Flutter clients → Ballerina microservices (auth, rides, booking, payments) → Firebase (data + realtime location) + Maps; Next.js admin for approvals & reporting.",
      "Capabilities: ride posting w/ route constraints, booking seat validation, real-time driver tracking (WebSockets), push/email notifications, payment rate management, monthly reporting.",
      "Impact: establishes transport data layer; roadmap includes AI pairing, multilingual UX, offline sync & dynamic pricing engine."
    ],
    feature_video: [
      {
        src: "/Assets/carpool_login.mp4",
        title: "Easy SignUp and Login",
        description: "Users can register as either driver or passenger with company credentials.",
      },
      {
        src: "/Assets/carpool_ride_post.mp4",
        title: "Driver Can Post Ride Easily",
        description: "Drivers can post a ride by selecting start/end location and route.",
      },
      {
        src: "/Assets/carpool_map_selec.mp4",
        title: "Location Select",
        description: "Users can search location or can just select location on Map.",
      },
      {
        src: "/Assets/carpool_ride_book.mp4",
        title: "Passenger Ride Booking",
        description: "Passenger have fully freedom to select ride own.",
      },
      {
        src: "/Assets/carpool_location_share.mp4",
        title: "Live location share",
        description: "Driver live location share among all passengers associate with that ride when driver start the ride via websocket.",
      },
    ],
     technology: [
      "Flutter",
      "Ballerina",
      "NextJs",
      "Firebase",
      "Google Map",
      "Choreo",
    ],
  },
  {
    slug: "Goviya",
    title: "Goviya",
    client: "goviya",
    category: "bidding platform for farmers",
    year: "2024",
    summary:
      "Scaled community product surfaces & internal design system rollouts.",
    tags: ["Systems", "Brand"],
    media: "/Assets/goviya.png",
    color: "#d52d3a",
    aspect: "aspect-[4/3]",
    desc: "For the past two years, I’ve struggled with managing my personal finances effectively. Each month, I faced budget shortages, and while I tried several financial management apps, none of them fully matched my requirements.",
    desc2:
      "This challenge inspired me to start building my own finance management application. My goal is to not just solve my own problem but also address the gaps I noticed in existing solutions",
    role: "Full Stack Engineer",
    collab: [""],
    github: "https://github.com/NalakaDineshSamarasingha/SpendWise-frontend",
    downlod:
      "https://github.com/NalakaDineshSamarasingha/SpendWise-frontend/releases/tag/v1.0.1",
    context: [
      "I started this project after facing recurring budget shortages for nearly two years. Despite trying several financial management apps, none aligned with my real needs — especially around collaboration and debt tracking. This gap inspired me to design and develop my own solution that not only manages personal finance but also enables shared financial management.",
      "The app focuses on unique features such as collaboration, where two or more people can manage a single account, and debt management, giving clear visibility into both what I owe and what others owe me. It also includes trip planning, allowing groups to budget and split expenses efficiently, and saving goals with progress tracking. Alongside these, the app covers all the essential features like income and expense tracking, categorization, reminders, and reporting.",
      "During development, I explored challenges like ensuring real-time synchronization between multiple users, maintaining simplicity while handling complex cases, and implementing secure data sharing. Through prototyping, I refined debt ledger models, collaborative flows, and savings visualization. The result is an app tailored not just for individual finance but also for group-oriented financial scenarios, bridging a gap I found in existing solutions.",
    ],
  },
];
