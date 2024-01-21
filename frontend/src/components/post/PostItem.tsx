import { Dropdown, Typography } from "antd";
import React, { useEffect } from "react";

const items: { label: string | React.ReactNode; key: string }[] = [
  {
    label: "edit",
    key: "edit",
  },
  {
    label: "delete",
    key: "delete",
  },
];

interface PostProps {
  user: {
    _id?: string;
    username: string;
  };
  title: string;
  likes?: { user: string }[];
  comments?: {
    user: string;
    text?: string;
  }[];
}

const PostItem: React.FC<PostProps> = ({ user, title, likes, comments }) => {
  return (
    <div className="bg-slate-900 w-[500px] h-[200px] rounded-3xl flex flex-col justify-around mt-4 ">
      <div className="text-black flex justify-between items-center rounded-t-lg h-9">
        <div className="w-3/4 text-white ml-2">
          {/* {user} */}
          <div className="font-sans">FullName</div>
          <div className="text-sm">@{user?.username}</div>
        </div>

        <div className="flex justify-center w-1/4 text-white">
          <Dropdown menu={{ items }}>
            <div style={{ rotate: "90deg" }}>&hellip;</div>
          </Dropdown>
        </div>
      </div>
      <div className="h-12">
        <Typography.Title className="text-center">
          <span className="text-white">{title}</span>
        </Typography.Title>
      </div>
      <div className="text-white h-8 flex  ">
        <div className="w-1/2 text-center rounded-bl-lg hover:bg-slate-800 hover:cursor-pointer">
          upvotes ({likes?.length})
        </div>
        <div className="w-1/2 text-center rounded-br-lg  hover:bg-slate-800 hover:cursor-pointer">
          replies ({comments?.length})
        </div>
      </div>
    </div>
  );
};

export default PostItem;
