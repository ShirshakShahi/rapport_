export interface ProfileReducerInterface {
  isLoading: boolean;
  userProfiles?: userProfile[];
  userProfile?: userProfile;
  error?: any;
}

interface userProfile {
  user: string;
  name: string;
  bio?: string;
  profilePic?: string;
  skills: string[];
  education?: {
    school: string;
    degree: string;
    fieldOfStudy: string;
    graduationDate?: Date;
  }[];
  workExperience?: {
    company: string;
    position: string;
    startDate?: Date;
    endDate?: Date;
  }[];
  socialMedia?: {
    LinkedIn?: string;
    Facebook?: string;
    Instagram?: string;
    Github?: string;
  };
}
