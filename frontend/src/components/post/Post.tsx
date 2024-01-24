import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import AddPost from "./AddPost";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import { getAllPosts } from "../../redux/actions/postActions";

const Post: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { posts } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div className="flex flex-col items-center justify- h-full">
      <div className="flex justify-center items-center w-[500px] min-h-[112px] bg-slate-800 rounded-3xl overflow-y-auto">
        <div className="pr-2">
          <Avatar size={"large"} className="white" icon={<UserOutlined />} />
        </div>
        <div
          className="bg-white h-9 w-[350px] flex justify-start items-center rounded-xl hover:cursor-pointer hover:bg-zinc-200"
          onClick={() => setOpen(true)}
        >
          <span className="text-lg px-2">What's on you mind ?</span>
        </div>
      </div>
      {open && <AddPost open={open} setOpen={setOpen} />}
      {Array.isArray(posts) && posts?.length === 0 ? (
        <div className="flex items-center justify- h-full">
          <div className="text-white">No Posts available</div>
        </div>
      ) : (
        posts?.map((post) => (
          <PostItem
            postId={post._id}
            key={post._id}
            user={post?.user}
            title={post?.title}
            likes={post?.likes}
            comments={post?.comments}
          />
        ))
      )}
    </div>
  );
};

export default Post;
