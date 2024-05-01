// basic imports
import React from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

// custom library imports for page
import { httpPost } from "@helpers/httpClient/httpClient";
import { onResponse } from "@helpers/httpClient/onResponse";
import { validateEmail, validatePassword } from "@helpers/validator";
import CONST from "@constants/constant";
import { signIn } from "next-auth/react";

// external libraries imports
import {
  Button,
  ButtonGroup,
  Card,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Modal,
  Progress,
  Checkbox,
} from "react-daisyui";
import toast, { Toaster } from "react-hot-toast";

// misc imports

function Login(props) {
  /***************************************************************************************/
  //States
  /***************************************************************************************/

  /***************************************************************************************/
  //Var
  /***************************************************************************************/
  const router = useRouter();

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/
  function handleGoogleButton() {
    signIn("google");
  }

  React.useEffect(() => {}, []);

  return (
    <>
      <div className="h-screen bg-opacity-20 bg-loginBG bg-cover bg-center bg-no-repeat">
        <div className="relative flex h-screen w-full items-center bg-gray-400 bg-opacity-70">
          \
          <div className="m-auto h-fit w-[32rem] overflow-y-auto rounded-3xl bg-white p-12 text-center shadow-xl max-xl:w-[25rem] max-xl:p-8">
            <div className="mb-7 text-3xl font-bold">
              <span>Grab</span>
              <span className="text-blue-600">Interview</span>
            </div>

            <div className="flex justify-center">
              <Button
                className="w-full justify-center py-2 border border-gray-300 flex gap-2 rounded-lg bg-white text-black font-normal text-lg"
                onClick={handleGoogleButton}
              >
                <img
                  className="w-7 h-7"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Login with Google</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
