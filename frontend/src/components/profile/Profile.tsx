import { UserOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import React, { useState } from "react";
import { PiStudentFill } from "react-icons/pi";
import AddPost from "../post/AddPost";

const Profile: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center text-white">
      <div className="flex items-center mt-2 h-[300px] w-[900px] bg-slate-800  min-h-[112px] rounded-xl overflow-y-auto">
        <div className="w-[650px] h-[250px]">
          <div className="flex justify-center items-center h-[100px] w-[100px] rounded-[50%] bg-fuchsia-300">
            {/* <img
              src="https://imgs.search.brave.com/dgO7sabkwsYHUqtoFvL574uvdvutidbNtmj8t1ZdgJ0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM2L2Mx/L2M1LzM2YzFjNTQx/MmIxOGEzNWNjY2U0/ZmU1NDRhNGQ3ZmQ0/LmpwZw"
              alt="hiiii"
            /> */}
            <UserOutlined style={{ fontSize: "50px" }} />
          </div>
          <div className="w-inherit m-2">
            <span className="font-mono text-xl">name</span>
            <br />
            <span className="text-sm">@username</span>
            <p className="text-slate-400">CEO at Rapport</p>
            <p>bio goes here </p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[350px] h-[250px] bg-slate-400 text-black m-5 rounded-xl">
          <Typography.Title>
            <div className="text-black text-3xl text-center">Intro</div>
          </Typography.Title>
          <div className="m-3">
            <PiStudentFill />
            <Typography.Text>
              <strong className="text-xl">Education</strong>
            </Typography.Text>
            <ul>
              <li>
                <label> school :</label>{" "}
                <span className="font-semibold">JPHS</span>
              </li>
              <li>
                <label> degree :</label>{" "}
                <span className="font-semibold">BEIT</span>
              </li>
              <li>
                <label> field :</label>{" "}
                <span className="font-semibold">Science and Tech</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-2 h-[500px] w-[900px] bg-slate-800  min-h-[112px] rounded-3xl overflow-y-auto">
        {open && <AddPost open={open} setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default Profile;
