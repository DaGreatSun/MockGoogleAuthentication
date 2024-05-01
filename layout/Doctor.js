import React from "react";
import Header from "@components/Header/Header";
import DoctorSidebar from "@components/Sidebar/DoctorSidebar";
import { checkSession } from "@helpers/utils";
import { Content } from "@components/CustomComponents";
import { loginIsRequired } from "@helpers/auth/session";

export default function DoctorLayout({ children }) {
  loginIsRequired();

  return (
    <div className=" flex h-screen w-full">
      <DoctorSidebar />
      <main className="w-full overflow-y-auto">
        <Header />
        <Content>{children}</Content>
      </main>
    </div>
  );
}
