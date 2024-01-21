import React, { useState } from "react";
import { Input, Modal, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { addPost } from "../../redux/actions/postActions";

const AddPost = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (arg: boolean) => void;
}) => {
  const [postContent, setPostcontent] = useState<string>("");
  const [postTitle, setPosttitle] = useState<string>("");

  const dispatch = useAppDispatch();

  const isPostButtonDisabled = postContent.trim() === "";

  const postHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPost(postTitle, postContent));
    setPostcontent("");
    setPosttitle("");
  };

  return (
    <>
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
    </>
  );
};

export default AddPost;
