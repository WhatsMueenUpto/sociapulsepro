import { db } from "./db";
import { users, mentions, alerts } from "../shared/schema";

export async function seedDatabase() {
  console.log("Seeding database with demo data...");

  // Create demo user
  const [demoUser] = await db
    .insert(users)
    .values({
      username: "demo",
      email: "demo@sociapulse.com",
      password: "demo123",
    })
    .onConflictDoNothing()
    .returning();

  const userId = demoUser?.id || 1;

  // Create comprehensive demo mentions for multiple keywords and platforms
  const demoMentions = [
    // Oncology mentions
    {
      userId,
      keyword: "oncology",
      platform: "twitter",
      content: "Exciting developments in #oncology research this year! The new immunotherapy treatments are showing remarkable results in clinical trials. 🧬 #CancerResearch #Medicine",
      author: "Dr. Sarah Chen",
      authorHandle: "@drsarahchen",
      authorAvatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 1250,
      engagement: 168,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    },
    {
      userId,
      keyword: "oncology",
      platform: "linkedin",
      content: "Our latest #oncology symposium brought together leading experts to discuss breakthrough treatments. The future of cancer care looks brighter than ever! 🌟 #Innovation",
      author: "Cancer Research Institute",
      authorHandle: "@cancer_research",
      authorAvatar: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 2890,
      engagement: 321,
      createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    },
    // Healthcare mentions
    {
      userId,
      keyword: "healthcare",
      platform: "twitter",
      content: "Breaking: FDA approves new #healthcare technology for remote patient monitoring. This will revolutionize how we deliver care! 📱 #HealthTech",
      author: "MedNews Today",
      authorHandle: "@mednews_today",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 3450,
      engagement: 245,
      createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    },
    {
      userId,
      keyword: "healthcare",
      platform: "linkedin",
      content: "The future of #healthcare is digital. AI-powered diagnostics are improving accuracy by 40% while reducing costs. Incredible innovation! #DigitalHealth",
      author: "HealthTech Innovation",
      authorHandle: "@healthtech_innov",
      authorAvatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 1890,
      engagement: 770,
      createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
    },
    // Medical device mentions
    {
      userId,
      keyword: "medical device",
      platform: "twitter",
      content: "Our new #medicaldevice just received CE marking! Proud to bring this life-saving technology to patients across Europe. 🏥 #Innovation #MedTech",
      author: "MedDevice Corp",
      authorHandle: "@meddevice_corp",
      authorAvatar: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 1670,
      engagement: 223,
      createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
    },
    {
      userId,
      keyword: "medical device",
      platform: "instagram",
      content: "Behind the scenes at our #medicaldevice manufacturing facility. Every component is precision-engineered for patient safety. #QualityFirst",
      author: "PrecisionMed",
      authorHandle: "@precisionmed_official",
      authorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "neutral" as const,
      reach: 980,
      engagement: 145,
      createdAt: new Date(Date.now() - 18 * 60 * 60 * 1000),
    },
    // Telemedicine mentions
    {
      userId,
      keyword: "telemedicine",
      platform: "linkedin",
      content: "#Telemedicine adoption has increased by 300% this year! Virtual consultations are making healthcare more accessible than ever before. 💻 #DigitalHealth",
      author: "Digital Health Today",
      authorHandle: "@digitalhealth_today",
      authorAvatar: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 2340,
      engagement: 412,
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    },
    {
      userId,
      keyword: "telemedicine",
      platform: "twitter",
      content: "Rural patients now have access to specialists through our #telemedicine platform. Breaking down geographical barriers to healthcare! 🌍 #AccessForAll",
      author: "Rural Health Connect",
      authorHandle: "@ruralhealth_connect",
      authorAvatar: "https://images.unsplash.com/photo-1477313372947-d68a2467e2b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 1560,
      engagement: 298,
      createdAt: new Date(Date.now() - 30 * 60 * 60 * 1000),
    },
    // Clinical trial mentions
    {
      userId,
      keyword: "clinical trial",
      platform: "twitter",
      content: "Enrolling now: Phase III #clinicaltrial for breakthrough Alzheimer's treatment. Could this be the game-changer we've been waiting for? 🧠 #AlzheimersResearch",
      author: "Neuro Research Lab",
      authorHandle: "@neuro_research",
      authorAvatar: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 1890,
      engagement: 267,
      createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000),
    },
    {
      userId,
      keyword: "clinical trial",
      platform: "linkedin",
      content: "Our #clinicaltrial results exceeded expectations! 85% efficacy rate with minimal side effects. Preparing for regulatory submission. #MedicalBreakthrough",
      author: "BioPharma Solutions",
      authorHandle: "@biopharma_solutions",
      authorAvatar: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 2780,
      engagement: 456,
      createdAt: new Date(Date.now() - 42 * 60 * 60 * 1000),
    },
    // Pharmaceuticals mentions
    {
      userId,
      keyword: "pharmaceuticals",
      platform: "facebook",
      content: "The #pharmaceuticals industry is investing $200B in R&D this year. Innovation in drug development continues to accelerate! 💊 #PharmaNews",
      author: "Pharma Weekly",
      authorHandle: "@pharma_weekly",
      authorAvatar: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "neutral" as const,
      reach: 3200,
      engagement: 189,
      createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
    },
    {
      userId,
      keyword: "pharmaceuticals",
      platform: "twitter",
      content: "Sustainable #pharmaceuticals manufacturing is the future. Our new green chemistry processes reduce waste by 70%! 🌱 #SustainablePharma",
      author: "EcoPharma Initiative",
      authorHandle: "@ecopharma_init",
      authorAvatar: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 1450,
      engagement: 234,
      createdAt: new Date(Date.now() - 54 * 60 * 60 * 1000),
    },
    // Biotech mentions
    {
      userId,
      keyword: "biotech",
      platform: "linkedin",
      content: "Gene therapy breakthrough: #biotech company successfully treats rare genetic disease in landmark study. The future of personalized medicine is here! 🧬",
      author: "GeneTech Innovations",
      authorHandle: "@genetech_innov",
      authorAvatar: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 2890,
      engagement: 567,
      createdAt: new Date(Date.now() - 60 * 60 * 60 * 1000),
    },
    {
      userId,
      keyword: "biotech",
      platform: "twitter",
      content: "Exciting times in #biotech! CRISPR technology is opening new possibilities for treating genetic disorders. Science fiction becoming reality! ⚗️",
      author: "BioTech Today",
      authorHandle: "@biotech_today",
      authorAvatar: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 1678,
      engagement: 289,
      createdAt: new Date(Date.now() - 66 * 60 * 60 * 1000),
    },
    // AI in healthcare mentions
    {
      userId,
      keyword: "AI healthcare",
      platform: "youtube",
      content: "How #AI is revolutionizing #healthcare: From diagnostic imaging to drug discovery, artificial intelligence is transforming medicine! 🤖 #HealthTech",
      author: "HealthAI Channel",
      authorHandle: "@healthai_channel",
      authorAvatar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 4500,
      engagement: 890,
      createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000),
    },
    // Negative sentiment examples
    {
      userId,
      keyword: "healthcare",
      platform: "twitter",
      content: "Another #healthcare data breach reported this week. When will companies take patient privacy seriously? This is unacceptable! 😠 #HealthcarePrivacy",
      author: "Patient Rights Advocate",
      authorHandle: "@patient_rights",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "negative" as const,
      reach: 2100,
      engagement: 478,
      createdAt: new Date(Date.now() - 78 * 60 * 60 * 1000),
    },
    {
      userId,
      keyword: "pharmaceuticals",
      platform: "twitter",
      content: "Concerned about rising #pharmaceuticals costs. Life-saving medications should be accessible to everyone, not just the wealthy. #HealthEquity",
      author: "Healthcare Equity Now",
      authorHandle: "@healthequity_now",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "negative" as const,
      reach: 1890,
      engagement: 234,
      createdAt: new Date(Date.now() - 84 * 60 * 60 * 1000),
    },
    // Additional diverse mentions
    {
      userId,
      keyword: "precision medicine",
      platform: "instagram",
      content: "The era of #precisionmedicine is here! Tailored treatments based on individual genetics are improving outcomes. 🎯 #PersonalizedCare",
      author: "Precision Health Lab",
      authorHandle: "@precisionhealth_lab",
      authorAvatar: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 1340,
      engagement: 178,
      createdAt: new Date(Date.now() - 90 * 60 * 60 * 1000),
    },
    {
      userId,
      keyword: "mental health",
      platform: "linkedin",
      content: "#MentalHealth awareness is crucial in healthcare. Digital therapy platforms are making psychological support more accessible. 🧠💙 #MentalWellness",
      author: "MindHealth Solutions",
      authorHandle: "@mindhealth_solutions",
      authorAvatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 2560,
      engagement: 445,
      createdAt: new Date(Date.now() - 96 * 60 * 60 * 1000),
    },
    {
      userId,
      keyword: "digital health",
      platform: "facebook",
      content: "#DigitalHealth solutions saved healthcare systems $30B last year through improved efficiency and reduced readmissions. Technology transforms care! 📱",
      author: "Digital Health Review",
      authorHandle: "@digitalhealth_review",
      authorAvatar: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
      sentiment: "positive" as const,
      reach: 3780,
      engagement: 567,
      createdAt: new Date(Date.now() - 102 * 60 * 60 * 1000),
    }
  ];

  // Insert mentions in batches to avoid conflicts
  for (const mention of demoMentions) {
    try {
      await db.insert(mentions).values(mention).onConflictDoNothing();
    } catch (error) {
      console.log(`Skipping existing mention: ${mention.content.slice(0, 50)}...`);
    }
  }

  // Create demo alerts
  const demoAlerts = [
    {
      userId,
      keyword: "oncology breakthrough",
      platforms: ["twitter", "linkedin"],
      isActive: true,
    },
    {
      userId,
      keyword: "FDA approval",
      platforms: ["twitter", "facebook", "linkedin"],
      isActive: true,
    },
    {
      userId,
      keyword: "clinical trial results",
      platforms: ["linkedin", "twitter"],
      isActive: false,
    }
  ];

  for (const alert of demoAlerts) {
    try {
      await db.insert(alerts).values(alert).onConflictDoNothing();
    } catch (error) {
      console.log(`Skipping existing alert: ${alert.keyword}`);
    }
  }

  export async function seedDatabase() {
  console.log("Seeding database with demo data...");
  try {
    // Create demo user
    const [demoUser] = await db
      .insert(users)
      .values({
        username: "demo",
        email: "demo@sociapulse.com",
        password: "demo123",
      })
      .onConflictDoNothing()
      .returning();

    const userId = demoUser?.id || 1;

    // Create comprehensive demo mentions for multiple keywords and platforms
    const demoMentions = [
      // ... (your existing demoMentions array content) ...
    ];

    // Insert mentions in batches to avoid conflicts
    for (const mention of demoMentions) {
      try {
        await db.insert(mentions).values(mention).onConflictDoNothing();
      } catch (error) {
        console.log(`Skipping existing mention: ${mention.content.slice(0, 50)}...`);
      }
    }

    // Create demo alerts
    const demoAlerts = [
      // ... (your existing demoAlerts array content) ...
    ];

    for (const alert of demoAlerts) {
      try {
        await db.insert(alerts).values(alert).onConflictDoNothing();
      } catch (error) {
        console.log(`Skipping existing alert: ${alert.keyword}`);
      }
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

}