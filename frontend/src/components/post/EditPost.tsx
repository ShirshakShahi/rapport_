import React, { useState } from "react";
import { Input, Modal, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { updatePost } from "../../redux/actions/postActions";

const EditPost = ({
  postId,
  open,
  setOpen,
}: {
  postId: string;
  open: boolean;
  setOpen: (arg: boolean) => void;
}) => {
  const [postContent, setPostcontent] = useState<string>("");
  const [postTitle, setPosttitle] = useState<string>("");

  const dispatch = useAppDispatch();

  const isPostButtonDisabled = postContent.trim() === "";

  const postHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updatePost(postId, postTitle, postContent));
    setPostcontent("");
    setPosttitle("");
    setOpen(false);
  };

  return (
    <>
      <Modal
        title={
          <Typography.Title className="text-center bg-slate-50 rounded-2xl">
            Edit post
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
              <strong className="text-white">EDIT</strong>
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditPost;
