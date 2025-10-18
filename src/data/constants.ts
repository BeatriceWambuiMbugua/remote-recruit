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
  