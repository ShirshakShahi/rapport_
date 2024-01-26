import { Typography } from "antd";
import { FC } from "react";

// interface AboutProps {
//   skills: string[];
//   education?: {
//     school: string;
//     degree: string;
//     fieldOfStudy: string;
//     graduationDate?: Date;
//   }[];
//   workExperience?: {
//     company: string;
//     position: string;
//     startDate?: Date;
//     endDate?: Date;
//   }[];
//   socialMedia?: {
//     LinkedIn?: string;
//     Facebook?: string;
//     Instagram?: string;
//     Github?: string;
//   };
// }

const AboutProfile: FC = () => {
  return (
    <div className="flex flex-col justify-evenly bg-slate-800 h-[370px] w-[900px] rounded-lg">
      <div className="text-white text-3xl">About</div>
      <div className="bg-slate-100 m-1 rounded-xl">
        <Typography.Text className="pl-2">
          <strong className="text-xl">Skills 🚀: </strong>
        </Typography.Text>
        <p className="inline text-black">React, ExpressJs, NodeJs, C++</p>
      </div>

      <div className="bg-slate-100 text-black m-1 rounded-xl">
        <div>
          <strong className="text-lg">Work Experience : </strong>
        </div>
        <ul>
          <li>
            <label> company :</label>{" "}
            <span className="font-semibold">company</span>
          </li>
          <li>
            <label> position :</label>{" "}
            <span className="font-semibold">position</span>
          </li>
          <li>
            <label> start date :</label>{" "}
            <span className="font-semibold">dateeeeeee</span>
          </li>
          <li>
            <label> end date :</label>{" "}
            <span className="font-semibold">dateeeeeeeee</span>
          </li>
        </ul>
      </div>
      <div className="bg-slate-100 text-black m-1 rounded-xl">
        <strong className="text-lg">socials :</strong>
        <a href={"LinkedIn"} target="_blank">
          LinkedIn,{" "}
        </a>
        <a href={"Facebook"} target="_blank">
          Facebook,{" "}
        </a>
        <a href={"Instagram"} target="_blank">
          Instagram,{" "}
        </a>
        <a href={"Github"} target="_blank">
          Github
        </a>
      </div>
    </div>
  );
};

export default AboutProfile;
