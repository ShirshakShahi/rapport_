import React, { useState } from "react";
import Input from "../Input";
import { Link } from "react-router-dom";
import { SignupInput, signupSchema } from "../../validator/signup";
import { message } from "antd";

const Signup: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowpassword] = useState<boolean>(false);

  message.config({
    duration: 1,
  });

  const formData: SignupInput = {
    username,
    email,
    password,
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const isValidate = signupSchema.safeParse(formData);

    if (isValidate.success) {
      console.log(isValidate.data);
      setUsername("");
      setEmail("");
      setPassword("");
    } else {
      isValidate.error.errors.forEach((error) => {
        const errMsg = error.message;
        message.error(errMsg);
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="h-[500px] w-[500px] bg-slate-900 rounded-xl">
        <div className=" flex justify-center h-28 items-center">
          <strong className="text-white text-3xl">SIGNUP</strong>
        </div>
        <form onSubmit={submitHandler}>
          <div className="flex justify-center items-center h-[50px]">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center  h-[50px]">
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center h-[50px]">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>{" "}
          <span
            className="flex justify-center text-white hover:cursor-pointer"
            onClick={() => setShowpassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </span>
          <div className="flex justify-center mt-12">
            <button className=" bg-blue-600 rounded-xl border-none h-10 w-[55%] hover:bg-blue-400">
              <strong className="text-white">Sign Up</strong>
            </button>
          </div>
          <div className="mt-9 flex justify-center ">
            <div className="flex justify-start">
              <span className="text-white font-semibold">
                Already have an account ?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 text-sm underline hover:text-blue-400"
                >
                  click here to login
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
