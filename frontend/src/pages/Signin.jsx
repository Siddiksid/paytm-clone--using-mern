import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";
import { Inputbox } from "../components/Inputbox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

const Signin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-slate-400 flex justify-center h-screen ">
      <div className="flex flex-col justify-center">
        <div className="h-max w-80 bg-white rounded-lg px-4 py-2 text-center">
          <Heading label={"Sign In"} />
          <Subheading label={"Enter your credentials to access your account"} />
          <Inputbox
            label={"Email"}
            placeholder={"xxx@gmail.com"}
            onChange={(e) => setUserName(e / EventTarget.value)}
          />
          <Inputbox
            label={"Password"}
            placeholder={"123456"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button label={"Signin"} />
          <BottomWarning
            text={"Don't have an account?"}
            to={"/signup"}
            label={"Sign Up"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
