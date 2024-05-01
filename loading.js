import React from "react";
import Image from "next/image";
import { Loading as Loader } from "react-daisyui";

function Loading() {
  return (
    <div
      style={{ backgroundColor: "#F2F8FC" }}
      className=" flex h-screen w-full items-center"
    >
      <div className="m-auto flex-col items-center text-center font-semibold">
        <Loader variant="spinner" className="mb-5" size="lg" />

        <div className="m-auto flex w-fit text-2xl font-semibold max-sm:text-base">
          <span>Loading contents ...</span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
