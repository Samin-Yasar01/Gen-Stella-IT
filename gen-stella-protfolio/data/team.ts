/**
 * Team Data
 * 
 * Team members information
 * TODO: Add team member details, roles, images, social links
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  // {
  //   id: "1",
  //   name: "Member Name",
  //   role: "Role Title",
  //   bio: "Bio description",
  //   image: "/images/team/member.jpg",
  //   email: "email@example.com",
  //   social: {
  //     linkedin: "https://linkedin.com/in/...",
  //   },
  // },
];
