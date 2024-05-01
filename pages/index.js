// basic imports
import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

// custom library imports for page
import CONST from "@constants/constant";

// external libraries imports
import toast, { Toaster } from "react-hot-toast";
import Login from "./auth/login";
import { useSession } from "next-auth/react";

export default function Home() {
  /***************************************************************************************/
  //States
  /***************************************************************************************/

  /***************************************************************************************/
  //Var
  /***************************************************************************************/
  const router = useRouter();
  const { data: session, status } = useSession();

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/

  React.useEffect(() => {
    if (session) {
      var userData = localStorage.getItem(session.user.email);

      // API CALL Placeholder
      // httpPost(
      //   "/api/coins/getCoins",
      //   {
      //     email: session.user.email,
      //   },
      // coinCB.bind(this),
      // );

      if (!userData) {
        userData = { coins: 0 };
        localStorage.setItem(session.user.email, JSON.stringify(userData));
      }
      router.push("/dashboard");
    }
  }, [session]);

  return (
    <>
      <Login />
    </>
  );
}
