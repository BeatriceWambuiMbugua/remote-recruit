import { Facebook, Instagram, Linkedin, MessageSquareMore, Music2, Twitter } from "lucide-react";

export const premiumPlanFeatures = [
    { id: 1, text: "Up to 25 active job posts" },
    { id: 2, text: "Premium Placement & Visibility" },
    { id: 3, text: "Messaging anyone, unlimited" },
    { id: 4, text: "Unlimited invites" },
    { id: 5, text: "View all applicants" },
    { id: 6, text: "Unlimited invites to jobseekers" },
  ];
  


export interface Skill {
    id: number;
    name: string;
    isMore?: boolean; // flag for "+12"
  }
  
  export const developerSkills: Skill[] = [
    { id: 1, name: "Python Dev" },
    { id: 2, name: "Javascript" },
    { id: 3, name: "Front End" },
    { id: 4, name: "Back End" },
    { id: 5, name: "IOS Development" },
    { id: 6, name: "+12", isMore: true },
  ];
  
  export const socialMediaData = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
      style: {
        background:
          "linear-gradient(135deg, rgba(235, 237, 255, 0.15) 0%, rgba(173, 184, 255, 0.15) 100%)",
        color: "#FFFFFF",
      },
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      style: {
        background:
          "linear-gradient(135deg, rgba(235, 237, 255, 0.15) 0%, rgba(173, 184, 255, 0.15) 100%)",
        color: "#FFFFFF",
      },
    },
    {
      name: "Snapchat",
      icon: MessageSquareMore,
      url: "#",
      style: {
        background:
          "linear-gradient(135deg, rgba(235, 237, 255, 0.15) 0%, rgba(173, 184, 255, 0.15) 100%)",
        color: "#FFFFFF",
      },
    },
    {
      name: "TikTok",
      icon: Music2, // lucide-react doesn't have TikTok icon; using Music2 as a symbolic replacement
      url: "#",
      style: {
        background:
          "linear-gradient(135deg, rgba(235, 237, 255, 0.15) 0%, rgba(173, 184, 255, 0.15) 100%)",
        color: "#FFFFFF",
      },
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "#",
      style: {
        background:
          "linear-gradient(135deg, rgba(235, 237, 255, 0.15) 0%, rgba(173, 184, 255, 0.15) 100%)",
        color: "#FFFFFF",
      },
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      style: {
        background:
          "linear-gradient(135deg, rgba(235, 237, 255, 0.15) 0%, rgba(173, 184, 255, 0.15) 100%)",
        color: "#FFFFFF",
      },
    },
  ];
  
  export const pricingData = [
    {
      planName: "Free",
      price: "",
      period: "Basic",
      features: [
        {
          text: "1 Active Job",
          available: true,
        },
        {
          text: "Basic List Placement",
          available: true,
        },
        {
          text: "Unlimited Job Applicants",
          available: false, // ❌ greyed out
        },
        {
          text: "Invite Anyone to Apply to Your Jobs",
          available: false, // ❌ greyed out
        },
      ],
    },
    {
      planName: "Premium",
      price: "$79.99",
      period: "per month",
      features: [
        {
          text: "Unlimited Job Posts",
          available: true,
        },
        {
          text: "Instant Job Post Approval",
          available: true,
        },
        {
          text: "Premium List Placement",
          available: true,
        },
        {
          text: "Unlimited Job Applicants",
          available: true,
        },
      ],
    },
  ];
  
  
  export const faqData = [
    {
      question: "Do I have to sign a long-term contract?",
      answer:
        "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
    },
    {
      question: "Can I pay for a whole year?",
      answer:
        "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
    },
    {
      question: "What if I need help?",
      answer:
        "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
    },
    {
      question: "View more questions",
      answer: "", // This can be empty if clicking opens a modal or expands more FAQs
      isViewMore: true, // optional flag to handle special behavior
    },
  ];
  