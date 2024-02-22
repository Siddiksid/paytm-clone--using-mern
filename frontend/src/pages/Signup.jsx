import { useState } from "react";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { Subheading } from "../components/Subheading";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 flex justify-center h-screen">
      <div className="flex flex-col justify-center ">
        <div className="bg-white rounded-lg w-80 h-max p-2 px-4 text-center">
          <Heading label={"Sign Up"} />
          <Subheading label={"Enter your information to create an account"} />
          <Inputbox
            label={"First Name"}
            placeholder="John"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Inputbox
            label={"Last Name"}
            placeholder={"Doe"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <Inputbox
            label={"Email"}
            placeholder={"xxx@gmail.com"}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Inputbox
            label={"Password"}
            placeholder={"2345456"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            label={"Sign Up"}
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  username,
                  firstName,
                  lastName,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}
          />
          <BottomWarning
            label={"Sign in"}
            to={"/signin"}
            text={"Already have an account"}
          />
        </div>
      </div>
    </div>
  );
};
