import { UserOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { PiStudentFill } from "react-icons/pi";
import AddPost from "../post/AddPost";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import PostItem from "../post/PostItem";
import AboutProfile from "./AboutProfile";
import AddProfile from "./AddProfile";
import { getMyProfile } from "../../redux/actions/profileActions";

const Profile: React.FC = () => {
  const { posts } = useAppSelector((state) => state.post);
  const [open, setOpen] = useState(false);
  const [showPost, setShowPost] = useState<boolean>(true);
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [addprofile, setAddprofile] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { userProfile } = useAppSelector((state) => state.profile);

  useEffect(() => {
    // Check if user.id exists and then fetch the profile
    dispatch(getMyProfile());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-white">
      <div className="flex items-center mt-2 h-[300px] w-[900px] bg-slate-800 rounded-xl overflow-y-auto">
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
      <div className="mt-2 w-[700px] bg-slate-800  min-h-[50px] rounded-lg overflow-y-auto m-1">
        <ul className="flex justify-evenly items-center h-[50px]">
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              setShowPost(true);
              setOpen(false);
              setShowAbout(false);
            }}
          >
            Posts
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => {
              setShowAbout(true);
              setShowPost(false);
              setOpen(false);
            }}
          >
            About
          </li>
          <li className="hover:cursor-pointer" onClick={() => setOpen(true)}>
            Add Post
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => setAddprofile(true)}
          >
            Create Profile
          </li>
          <li className="hover:cursor-pointer">Update Profile</li>
        </ul>
      </div>
      {showPost && (
        <>
          {posts?.map((post) => (
            <PostItem
              postId={post._id}
              key={post._id}
              user={post?.user}
              title={post?.title}
              likes={post?.likes}
              comments={post?.comments}
            />
          ))}
        </>
      )}
      {showAbout && <AboutProfile />}

      {open && <AddPost open={open} setOpen={setOpen} />}
      {addprofile && <AddProfile open={addprofile} setOpen={setAddprofile} />}
    </div>
  );
};

export default Profile;
