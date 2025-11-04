// Lightweight project showcase data. Replace placeholders with real work.
export const projects = [
  {
    slug: "Ballerina",
    title: "Ballerina Firestore",
    client: "nalaka/firestore",
    category: "Ballerina connector",
    year: "2025",
    summary:
      "A Ballerina connector for Google Cloud Firestore with complete CRUD, advanced querying, batch operations and automatic authentication.",
    tags: ["Ballerina", "Firestore", "Connector", "Database"],
    media: "/Assets/3.jpg",
    aspect: "aspect-[16/7]",
    desc:
      "A Ballerina connector for Google Cloud Firestore with complete CRUD operations, advanced querying, automatic token management, and type-safe conversions between Ballerina and Firestore types.",
    desc2:
      "Production-ready connector exposing create/read/update/delete, advanced filters, batch operations and pagination. Includes comprehensive error handling and token caching for smooth authentication.",
    role: "Author / Maintainer",
    collab: [],
    github: "https://central.ballerina.io/nalaka/firestore/1.1.0",
    downlod: "https://central.ballerina.io/nalaka/firestore/1.1.0",
    feature_video: [],
    technology: [
      "Ballerina",
    ],
    context: [
      "Overview: Complete CRUD operations (create, read, update, delete) with support for auto-generated and custom IDs.",
      "Advanced Querying: filters, sorting, pagination and operators (>, >=, <, <=, !=, ==, in, not-in, array-contains).",
      "Batch Operations: execute up to 500 operations per batch for efficient bulk changes.",
      "Auto Authentication: automatic token management and renewal using service account credentials.",
      "Type Safety: automatic conversion between Ballerina types and Firestore representations (strings, numbers, booleans, arrays, nested objects, null).",
      "Production Ready: comprehensive error handling and a test suite (43 passing tests)."
    ],
  },
  {
    slug: "spendwise",
    title: "SpendWise",
    client: "spendwise",
    category: "financial management app",
    year: "Present",
    summary:
      "Expense tracking, collaborative budgeting and simple saving goals — lightweight mobile-first finance for pairs and small groups.",
    tags: ["Finance", "Mobile", "Collaboration"],
    media: "/Assets/spendwise.png",
    aspect: "aspect-[16/9]",
    desc:
      "SpendWise is an expense tracking app designed to make money management simple. Track your expenses, set budgets, collaborate with a partner, and plan savings or events – all in one place.",
    desc2:
      "Built as a mobile-first experience (React Native / Expo), SpendWise focuses on easy transaction entry, shared accounts for pairs, budgeting, and lightweight trip/event planning. The initial release focuses on core flows; collaboration and debt visibility are first-class features.",
    role: "Full Stack Engineer",
    collab: ["Muditha Lakmali"] ,
    technology: [
      "React Native / Expo (TypeScript)",
      "Node.js",
      "Express",
      "MongoDB (Mongoose)",
      "Google OAuth",
      "JWT"
    ],
    github: "https://github.com/NalakaDineshSamarasingha/SpendWise-frontend",
    downlod:
      "https://github.com/NalakaDineshSamarasingha/SpendWise-frontend/releases/tag/v1.0.1",
    feature_video: [
      {
        src: "/Assets/spendwise/Home.mp4",
        title: "Smart Dashboard",
        description: "Dashboard overview with real-time expense tracking",
      },
      {
        src: "/Assets/spendwise/Budget.mp4",
        title: "Budgeting Feature",
        description: "Easily create and manage budgets to track your spending habits",
      }
    ],
    context: [
      "Key flows: Google Login, add & track transactions, spending insights, budget creation, and pair collaboration for shared accounts.",
      "Feature status: Google Login , Add & Track Transactions , Spending Insights , Budget Creation , Collaborate with One User.",
      "Tech: frontend in React Native / Expo (TypeScript), backend Node.js + Express, MongoDB with Mongoose, deployed to Render. Authentication via Google OAuth with JWT-based sessions.",
    ],
  },
  {
    slug: "KimbulaGO",
    title: "KimbulaGO",
    client: "KimbulaGO",
    category: "Tool for Bakery",
    year: "ongoing",
    summary:
      "Designed and developed a mobile application to digitize Sri Lanka’s Chun Pan (mobile bakery) culture — ongoing (not yet fully developed).",
    tags: ["Mobile", "Maps", "Payments"],
    media: "/Assets/kimbula.mp4",
    aspect: "aspect-[3/4]",
    desc:
      "A mobile app to digitize Sri Lanka’s Chun Pan (mobile bakery) culture. Customers can track nearby Chun Pan vehicles in real-time, mark their needs on a map, and make cashless payments. The driver app provides demand heatmaps and order insights to optimise routes and improve timeliness.",
    desc2:
      "Status: ongoing — core ideas and UI/UX flows are designed but the full implementation is not complete. No further technical details available at this time.",
    role: "Engineer",
    collab: [""],
    github: "/",
    downlod: "/",
    context: [
      "Customer features: real-time vehicle tracking, map-based requests, cashless payments via PayHere.",
      "Driver features: demand heatmaps, order insights and route optimisation to improve delivery timeliness.",
      "Status: ongoing — project design and architecture defined; development not yet completed.",
    ],
    technology: [
      "React Native",
      "Spring Boot",
      "Google Maps APIs",
      "PayHere (payments)"
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
    category: "Farm-to-market trading platform",
    year: "2025",
    summary:
      "Goviya — Farm-to-Market Trading Platform (University of Moratuwa, IS 3920 Individual Project, 2025). Mobile solution connecting farmers and merchants to ensure fair pricing, secure payments and transparent trade.",
    tags: ["Marketplace", "Mobile", "Agri"],
    media: "/Assets/goviya.png",
    color: "#d52d3a",
    aspect: "aspect-[4/3]",
    desc:
      "A mobile-based solution that directly connects farmers and merchants, eliminating middlemen to ensure fair pricing, secure payments, and transparent trade.",
    desc2:
      "University of Moratuwa — IS 3920 Individual Project (2025). The app supports farmer registration, bidding and order processing, secure payments, calling/chat, ratings, and an admin dashboard for market insights.",
    role: " Engineer",
    collab: [],
    github: "/",
    downlod: "/",
    feature_video: [],
    context: [
      "Farmer Registration: farmers create profiles and list harvests with details, images, and minimum prices.",
      "Bidding & Order Processing: merchants place bids on listed harvests or post demands for farmers to bid on.",
      "Payment Processing: secure payments via PayHere API and manual payment slip uploads.",
      "Calling & Chat: in-app messaging and calling for negotiations and coordination.",
      "Rating & Reviews: users rate each other on reliability, quality and service.",
      "Admin Dashboard: manage disputes, monitor market data and generate seasonal insights.",
      "Benefits: fair pricing for farmers, reliable sourcing for merchants, transparent & efficient supply chain, real-time market insights."
    ],
    technology: [
      "React Native",
      "FastAPI",
      "MongoDB",
      "PayHere API",
      "Google Maps API"
    ],
  },
  {
    slug: "fitsixes",
    title: "Fit Sixes",
    client: "Fit Sixes",
    category: "Event website",
    year: "2025",
    summary:
      "Official website for the University of Moratuwa's largest annual sports event — handles team registration and organizer workflows.",
    tags: ["Events", "Sports", "Registration"],
    media: "/Assets/fitsixes/Main.png",
    aspect: "aspect-[16/9]",
    color: "#0b74de",
    desc:
      "Contributed to the development of the official Fit Sixes event website (fitsixes.com) which handled the full team registration process for participants and organizers.",
    desc2:
      "Implemented robust team registration flows, file uploads and automated document generation for streamlined event administration. Built admin features for verification, approvals and real-time monitoring of registrations.",
    role: "Full Stack Engineer",
    collab: ["Dhanajaya", "Sulakshi", "Garuka"],
    github: "/",
    downlod: "https://www.fitsixes.com/",
    feature_video: [],
    context: [
      "Team registration: implemented team sign-up with server-side and client-side validation to ensure data integrity.",
      "Document uploads: secure handling and verification of required team files.",
      "Automated PDFs: generation of invoices and team cards to streamline event documentation and check-in.",
      "Admin panel: features for reviewing/verifying teams, approving documents, and monitoring registration progress in real time.",
    ],
    technology: [
      "NextJs",
      "Firebase",
      "Supabase"
    ],
    url: "https://www.fitsixes.com/"
  },
  {
    slug: "kairo-holdings",
    title: "Kairo Holdings Website",
    client: "Kairo Holdings",
    category: "Company website",
    year: "2025",
    summary:
      "Freelance website for Kairo Holdings showcasing workforce solutions, ethical staffing and company profile — live.",
    tags: ["Corporate", "Website", "NextJs"],
    media: "/Assets/kairo/Main.png",
    aspect: "aspect-[16/9]",
    color: "#0f172a",
    desc:
      "Designed and developed a responsive company website for Kairo Holdings to highlight their business profile, workforce solutions and ethical staffing services. Focused on clear structure, dark-themed aesthetics and brand consistency.",
    desc2:
      "Contribution: implemented Home, About Us and Contact Us pages, handled team registration/lead capture flows, and deployed the site on Vercel with a custom domain configured via Spaceship. The site is optimised for performance and accessibility.",
    role: "Full Stack Engineer",
    collab: ["Muditha Lakmali"],
    github: "/",
    downlod: "https://kairoholdings.com/",
    feature_video: [],
    context: [
      "Implemented Home, About Us and Contact Us pages with strong brand consistency and dark-themed aesthetics.",
      "Handled responsive layouts, accessibility improvements and performance optimizations.",
      "Deployment: deployed on Vercel with a custom domain configured via Spaceship.",
      "Focus: clear information architecture to improve trust and visibility for business users."
    ],
    technology: [
      "NextJs",
      "Vercel"
    ]
  },
];
