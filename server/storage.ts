import { users, mentions, alerts, type User, type InsertUser, type Mention, type InsertMention, type Alert, type InsertAlert } from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Mention methods
  getMentions(userId: number, keyword?: string, platform?: string): Promise<Mention[]>;
  createMention(mention: InsertMention): Promise<Mention>;
  getMentionStats(userId: number, keyword?: string): Promise<{
    total: number;
    positive: number;
    neutral: number;
    negative: number;
    totalReach: number;
  }>;
  
  // Alert methods
  getAlerts(userId: number): Promise<Alert[]>;
  createAlert(alert: InsertAlert): Promise<Alert>;
  updateAlert(id: number, updates: Partial<InsertAlert>): Promise<Alert>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private mentions: Map<number, Mention>;
  private alerts: Map<number, Alert>;
  private currentUserId: number;
  private currentMentionId: number;
  private currentAlertId: number;

  constructor() {
    this.users = new Map();
    this.mentions = new Map();
    this.alerts = new Map();
    this.currentUserId = 1;
    this.currentMentionId = 1;
    this.currentAlertId = 1;
    
    // Initialize with demo user
    this.initializeDemoData();
  }

  private initializeDemoData() {
    // Create demo user
    const demoUser: User = {
      id: 1,
      username: "demo",
      email: "demo@sociapulse.com",
      password: "demo123",
      createdAt: new Date(),
    };
    this.users.set(1, demoUser);
    this.currentUserId = 2;

    // Create demo mentions for oncology keyword
    const demoMentions: Mention[] = [
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

    demoMentions.forEach(mention => {
      this.mentions.set(mention.id, mention);
    });
    this.currentMentionId = 6;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }

  async getMentions(userId: number, keyword?: string, platform?: string): Promise<Mention[]> {
    let results = Array.from(this.mentions.values()).filter(mention => mention.userId === userId);
    
    if (keyword) {
      results = results.filter(mention => 
        mention.keyword.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    
    if (platform) {
      results = results.filter(mention => mention.platform === platform);
    }
    
    return results.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createMention(insertMention: InsertMention): Promise<Mention> {
    const id = this.currentMentionId++;
    const mention: Mention = {
      ...insertMention,
      id,
      authorAvatar: insertMention.authorAvatar || null,
      reach: insertMention.reach || null,
      engagement: insertMention.engagement || null,
      createdAt: new Date(),
    };
    this.mentions.set(id, mention);
    return mention;
  }

  async getMentionStats(userId: number, keyword?: string): Promise<{
    total: number;
    positive: number;
    neutral: number;
    negative: number;
    totalReach: number;
  }> {
    const mentions = await this.getMentions(userId, keyword);
    
    return {
      total: mentions.length,
      positive: mentions.filter(m => m.sentiment === 'positive').length,
      neutral: mentions.filter(m => m.sentiment === 'neutral').length,
      negative: mentions.filter(m => m.sentiment === 'negative').length,
      totalReach: mentions.reduce((sum, m) => sum + (m.reach || 0), 0),
    };
  }

  async getAlerts(userId: number): Promise<Alert[]> {
    return Array.from(this.alerts.values()).filter(alert => alert.userId === userId);
  }

  async createAlert(insertAlert: InsertAlert): Promise<Alert> {
    const id = this.currentAlertId++;
    const alert: Alert = {
      ...insertAlert,
      id,
      isActive: insertAlert.isActive ?? true,
      createdAt: new Date(),
    };
    this.alerts.set(id, alert);
    return alert;
  }

  async updateAlert(id: number, updates: Partial<InsertAlert>): Promise<Alert> {
    const alert = this.alerts.get(id);
    if (!alert) {
      throw new Error('Alert not found');
    }
    
    const updatedAlert = { ...alert, ...updates };
    this.alerts.set(id, updatedAlert);
    return updatedAlert;
  }
}

export const storage = new MemStorage();
