import { Schema, model } from "mongoose";

interface IProfile {
  user: Schema.Types.ObjectId;
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

const profileSchema: Schema<IProfile> = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  skills: [String],
  education: [
    {
      school: String,
      degree: String,
      fieldOfStudy: String,
      graduationDate: Date,
    },
  ],
  workExperience: [
    {
      company: String,
      position: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  socialMedia: {
    LinkedIn: String,
    Facebook: String,
    Instagram: String,
    Github: String,
  },
});

export const Profile = model<IProfile>("Profile", profileSchema);
