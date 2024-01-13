import { Profile } from "../models/profile.model";

const addProfile = async (req, res) => {
  try {
    const { name, bio, profilePic, skills, socialMedia } = req.body;

    const profileHas = {
      user: req.user,
      name,
      bio: bio ? bio : "",
      profilePic: profilePic ? profilePic : "",
      socialMedia: {
        LinkedIn: socialMedia.LinkedIn ?? "",
        Facebook: socialMedia.Facebook ?? "",
        Instagram: socialMedia.Instagram ?? "",
        Github: socialMedia.Github ?? "",
      },
      skills: [],
    };

    if (!Array.isArray(skills)) {
      profileHas.skills = skills.split(",");
    }

    const profile = await Profile.create(profileHas);

    res.status(200).json({ profile });
  } catch (err) {}
};

const getProfile = async (req, res) => {
  try {
    const { profileId } = req.params;

    const profile = await Profile.findById(profileId);
    if (!profile) {
      return res
        .status(404)
        .json({ msg: `No profile with id${profileId} found` });
    }

    if (!req.user.equals(profile.user)) {
      return res.status(401).json({ msg: `Authentication Error` });
    }

    res.status(200).json({ profile });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { profileId } = req.params;

    const profile = await Profile.findOne(profileId);
    if (!profile) {
      return res
        .status(404)
        .json({ msg: `No profile with id${profileId} found` });
    }

    if (!req.user.equals(profile.user)) {
      return res.status(401).json({ msg: `Authentication Error` });
    }

    profile.name = req.body.name || profile.name;
    profile.bio = req.body.bio || profile.bio;
    profile.profilePic = req.body.profilePic || profile.profilePic;
    profile.socialMedia = {
      LinkedIn: req.body.socialMedia?.LinkedIn || profile.socialMedia.LinkedIn,
      Facebook: req.body.socialMedia?.Facebook || profile.socialMedia.Facebook,
      Instagram:
        req.body.socialMedia?.Instagram || profile.socialMedia.Instagram,
      Github: req.body.socialMedia?.Github || profile.socialMedia.Github,
    };

    const updatedProfile = await profile.save();

    res.status(200).json({ updatedProfile });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateBio = async (req, res) => {
  try {
    const { bio } = req.body;
    const profile = await Profile.findOne({ user: req.user });

    if (!profile) {
      return res.status(404).json({ msg: "No Profile found" });
    }

    // Update the bio
    profile.bio = bio || profile.bio;

    // Save the updated profile
    const updatedProfile = await profile.save();

    res.status(200).json({ updatedProfile });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export { addProfile, getProfile, updateProfile, updateBio };
