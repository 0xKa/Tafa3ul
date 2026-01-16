export interface ProfileUser {
  id: string;
  username: string;
  email: string;
}

export interface Profile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  fullName: string;
  company: string | null;
  website: string | null;
  country: string | null;
  location: string | null;
  bio: string | null;
  social: SocialMedia;
  skills: Skill[];
  experiences: Experience[];
  educations: Education[];
  user: ProfileUser;
  createdAt: string;
  updatedAt: string;
}

export interface SocialMedia {
  youTube: string | null;
  twitter: string | null;
  facebook: string | null;
  linkedIn: string | null;
  instagram: string | null;
  gitHub: string | null;
  tikTok: string | null;
}

export interface Skill {
  id: string;
  skillId: string;
  skillName: string | null;
  yearsOfExperience: number | null;
}

export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string | null;
  isCurrentlyWorkingHere: boolean;
  description: string | null;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string | null;
  isCurrentlyStudyingHere: boolean;
  description: string | null;
}
