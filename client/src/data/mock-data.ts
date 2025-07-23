import type { Mention } from "@shared/schema";

export const mockMentions: Mention[] = [
  {
    id: 1,
    userId: 1,
    keyword: "oncology",
    platform: "twitter",
    content: "Exciting developments in #oncology research this year! The new immunotherapy treatments are showing remarkable results in clinical trials. 🧬 #CancerResearch #Medicine",
    author: "Dr. Sarah Chen",
    authorHandle: "@drsarahchen",
    authorAvatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
    sentiment: "positive",
    reach: 1250,
    engagement: 168,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    id: 2,
    userId: 1,
    keyword: "oncology",
    platform: "twitter",
    content: "Our latest #oncology symposium brought together leading experts to discuss breakthrough treatments. The future of cancer care looks brighter than ever! 🌟 #Innovation",
    author: "Cancer Research Institute",
    authorHandle: "@cancer_research",
    authorAvatar: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
    sentiment: "positive",
    reach: 2890,
    engagement: 321,
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
  },
  {
    id: 3,
    userId: 1,
    keyword: "oncology",
    platform: "twitter",
    content: "Breaking: FDA approves new #oncology drug for rare cancer types. Clinical trials showed 60% response rate in patients. Read more about this development... 📰",
    author: "MedNews Today",
    authorHandle: "@mednews_today",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
    sentiment: "neutral",
    reach: 3450,
    engagement: 245,
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
  },
  {
    id: 4,
    userId: 1,
    keyword: "oncology",
    platform: "twitter",
    content: "Grateful for the advances in #oncology care that give families hope. Every breakthrough brings us closer to a world without cancer. 💙 #NeverGiveUp",
    author: "Hope Foundation",
    authorHandle: "@hope_foundation",
    authorAvatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
    sentiment: "positive",
    reach: 1890,
    engagement: 770,
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
  },
  {
    id: 5,
    userId: 1,
    keyword: "oncology",
    platform: "twitter",
    content: "Proud to announce our partnership with leading #oncology centers to accelerate drug development. Together, we're making the impossible possible. 🔬 #Partnership",
    author: "PharmaInnovations",
    authorHandle: "@pharma_innov",
    authorAvatar: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40",
    sentiment: "positive",
    reach: 1670,
    engagement: 223,
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
  },
];

export const mockStats = {
  total: 1247,
  positive: 973,
  neutral: 187,
  negative: 87,
  totalReach: 2100000,
};
