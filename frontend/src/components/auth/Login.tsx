import React, { useState } from "react";
import Input from "../Input";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowpassword] = useState<boolean>(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-[500px] w-[500px] bg-slate-900 rounded-xl">
        <div className=" flex justify-center h-28 items-center">
          <strong className="text-white text-3xl">LOGIN</strong>
        </div>
        <form onSubmit={submitHandler}>
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
              <strong className="text-white">Log In</strong>
            </button>
          </div>
          <div className="mt-9 flex justify-center ">
            <div className="flex justify-start">
              <span className="text-white font-semibold">
                Doesn't have an account ?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 text-sm underline hover:text-blue-400"
                >
                  click here to signup
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
