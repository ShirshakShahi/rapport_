import { Dropdown, MenuProps, Typography } from "antd";
import React, { useState } from "react";
import { deletePost } from "../../redux/actions/postActions";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import EditPost from "./EditPost";

interface PostProps {
  postId: string;
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

const items: MenuProps["items"] = [
  {
    label: "edit",
    key: "edit",
  },
  {
    label: "delete",
    key: "delete",
  },
];

const PostItem: React.FC<PostProps> = ({
  postId,
  user,
  title,
  likes,
  comments,
}) => {
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onClick: MenuProps["onClick"] = ({ key }) => {
    key === "delete" ? dispatch(deletePost(postId)) : setEditOpen(true);
  };

  return (
    <div className="bg-slate-900 w-[500px] h-[200px] rounded-3xl flex flex-col justify-around mt-4 ">
      <div className="text-black flex justify-between items-center rounded-t-lg h-9">
        <div className="w-3/4 text-white ml-2">
          {/* {user} */}
          <div className="font-sans">FullName</div>
          <div className="text-sm">@{user?.username}</div>
        </div>

        <div className="flex justify-center w-1/4 text-white">
          <Dropdown menu={{ items, onClick }}>
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
      {editOpen && (
        <EditPost open={editOpen} setOpen={setEditOpen} postId={postId} />
      )}
    </div>
  );
};

export default PostItem;
