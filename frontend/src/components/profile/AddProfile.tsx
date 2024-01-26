import React, { useState } from "react";
import { Input, Modal, Typography } from "antd";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { addProfile } from "../../redux/actions/profileActions";

interface FormState {
  name: string;
  bio?: string;
  profilePic?: string;
  socialMedia?: {
    LinkedIn?: string;
    Facebook?: string;
    Instagram?: string;
    Github?: string;
  };
  skills?: string[];
}

const AddProfile = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (arg: boolean) => void;
}) => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    bio: "",
    profilePic: "",
    socialMedia: {
      LinkedIn: "",
      Facebook: "",
      Instagram: "",
      Github: "",
    },
    skills: [],
  });

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSocialMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [name]: value,
      },
    }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      skills: value.split(",").map((skill) => skill.trim()),
    }));
  };

  const postHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addProfile(formData));
    setOpen(false);
  };

  return (
    <>
      <Modal
        title={
          <Typography.Title className="text-center bg-slate-50 rounded-2xl">
            Create profile
          </Typography.Title>
        }
        open={open}
        closable
        closeIcon
        onCancel={() => setOpen(false)}
        footer={[]}
      >
        <form onSubmit={postHandler}>
          <Input
            type="text"
            name="name"
            placeholder="enter full name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="bio"
            placeholder="bio goes here...."
            value={formData.bio}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="profilePic"
            placeholder="enter profile picture URL"
            value={formData.profilePic}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="LinkedIn"
            placeholder="enter LinkedIn URL"
            value={formData.socialMedia?.LinkedIn}
            onChange={handleSocialMediaChange}
          />
          <Input
            type="text"
            name="Facebook"
            placeholder="enter Facebook URL"
            value={formData.socialMedia?.Facebook}
            onChange={handleSocialMediaChange}
          />
          <Input
            type="text"
            name="Instagram"
            placeholder="enter Instagram URL"
            value={formData.socialMedia?.Instagram}
            onChange={handleSocialMediaChange}
          />
          <Input
            type="text"
            name="Github"
            placeholder="enter Github URL"
            value={formData.socialMedia?.Github}
            onChange={handleSocialMediaChange}
          />
          <Input
            type="text"
            name="skills"
            placeholder="enter skills (comma-separated)"
            value={formData.skills?.join(",")}
            onChange={handleSkillsChange}
          />
          <br />
          <br />
          <div className="flex justify-center mt-12">
            <button
              className={`bg-blue-600 rounded-xl border-none h-10 w-[55%] hover:bg-blue-400`}
            >
              <strong className="text-white">ADD</strong>
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddProfile;
