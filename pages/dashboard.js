import Head from "next/head";
import React from "react";
import DoctorLayout from "layout/Doctor";
import { Col, Row } from "@components/CustomComponents";
import { Button, Card } from "react-daisyui";
import { BsPeopleFill } from "react-icons/bs";
import { FaUserMd, FaClinicMedical } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { useSession } from "next-auth/react";
import Coins from "./coin/coins";
import { useRouter } from "next/router";

function Dashboard() {
  /***************************************************************************************/
  //States
  /***************************************************************************************/
  const [userObj, setUserObj] = React.useState({});

  /***************************************************************************************/
  //Var
  /***************************************************************************************/
  const router = useRouter();
  const { data: session, status } = useSession();

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/
  function renderTitle(title, value) {
    return (
      <h1>
        <span className="font-bold">{title}:</span> {value}
      </h1>
    );
  }

  React.useEffect(() => {
    if (session) {
      setUserObj(session.user);
    }
  }, [session]);

  return (
    <div className="grid grid-cols-2 gap-3">
      <Card className="col-span-1">
        <Card.Body className="flex items-center flex-col">
          <img
            src={userObj.image}
            alt="image"
            referrerpolicy="no-referrer"
            className="h-40 rounded-3xl"
          />
          {renderTitle("Name", userObj.name)}
          {renderTitle("Email", userObj.email)}
        </Card.Body>
      </Card>
      <Card className="col-span-1">
        <Card.Body className="flex items-center flex-col">
          <Coins />
          <Button
            className="w-full bg-green-500 hover:bg-green-600"
            onClick={(e) => {
              router.push("/coin/stripe");
            }}
          >
            Get More Coins!
          </Button>
          <Button
            className="w-full bg-blue-500 hover:bg-blue-600"
            onClick={(e) => {
              router.push("/coin/market");
            }}
          >
            Go To The Market!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

Dashboard.layout = DoctorLayout;

export default Dashboard;
