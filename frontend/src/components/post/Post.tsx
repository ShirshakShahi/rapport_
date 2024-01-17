import { UserOutlined } from "@ant-design/icons";
import { Avatar, Input, Modal, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import PostItem from "./PostItem";

const Post: React.FC = () => {
  const [postContent, setPostcontent] = useState<string>("");
  const [postTitle, setPosttitle] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const isPostButtonDisabled = postContent.trim() === "";

  const postHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPostcontent("");
  };

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
      <Modal
        title={
          <Typography.Title className="text-center bg-slate-50 rounded-2xl">
            Create post
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
            placeholder="Enter title"
            value={postTitle}
            onChange={(e) => setPosttitle(e.target.value)}
          />
          <br />
          <br />
          <TextArea
            placeholder="What's on your mind"
            value={postContent}
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={(e) => {
              setPostcontent(e.target.value);
            }}
          />
          <div className="flex justify-center mt-12">
            <button
              className={`bg-blue-600 rounded-xl border-none h-10 w-[55%] hover:bg-blue-400 ${
                isPostButtonDisabled ? "cursor-not-allowed bg-gray-400" : ""
              }`}
              disabled={isPostButtonDisabled}
            >
              <strong className="text-white">POST</strong>
            </button>
          </div>
        </form>
      </Modal>
      <PostItem />
      <PostItem />
    </div>
  );
};

export default Post;
