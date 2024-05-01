import Head from "next/head";
import React from "react";
import DoctorLayout from "layout/Doctor";
import { Col, Row } from "@components/CustomComponents";
import { Button, Card } from "react-daisyui";
import { BsPeopleFill } from "react-icons/bs";
import { FaUserMd, FaClinicMedical } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { useSession } from "next-auth/react";
import Coins from "./coins";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

function Stripe() {
  /***************************************************************************************/
  //States
  /***************************************************************************************/
  const [coins, setCoins] = React.useState(0);
  const [updateReady, setUpdateReady] = React.useState(false);

  /***************************************************************************************/
  //Var
  /***************************************************************************************/
  const router = useRouter();
  const { data: session } = useSession();
  //   const addCoinSelection = [10, 20, 50, 100, 500, 1000];
  const addCoinSelection = [
    {
      text: "Vegetables",
      value: 10,
    },
    {
      text: "Meat",
      value: 20,
    },
    {
      text: "Chair",
      value: 50,
    },
    {
      text: "Table",
      value: 100,
    },
    {
      text: "Expensive Dinner",
      value: 500,
    },
    {
      text: "Electronics",
      value: 1000,
    },
  ];

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/
  function renderAddCoinButtons() {
    return addCoinSelection.map((item, index) => {
      return (
        <Button
          className="w-full bg-blue-500 hover:bg-blue-600"
          key={`add-money-button-${index}`}
          onClick={(e) => {
            spendCoins(item);
          }}
        >
          Purchase {item.text}!{" "}
          <span className="text-xs">({item.value} Coins)</span>
        </Button>
      );
    });
  }

  function spendCoins(item) {
    // API CALL Placeholder
    // httpPost(
    //   "/api/coins/spendCoins",
    //   {
    //     email: session.user.email,
    //     spend: item.value,
    //   },
    // coinCB.bind(this),
    // );

    var newCoinAmount = coins - item.value;
    if (newCoinAmount < 0) {
      toast(
        "Unable to purchase " +
          item.text +
          "!\nNeed " +
          -newCoinAmount +
          " more coins"
      );
      return;
    }

    updateCoins(session.user.email, newCoinAmount);
    setCoins(newCoinAmount);
  }

  React.useEffect(() => {
    if (session && session.user) {
      var userData = JSON.parse(localStorage.getItem(session.user.email));
      if (!userData || !userData.coins) {
        setCoins(0);
      } else {
        setCoins(userData.coins);
      }
    }
  }, [session, coins]);

  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="col-span-1">
        <Card.Body className="flex justify-center items-center flex-col">
          <Coins passedCoins={coins} />
        </Card.Body>
      </Card>
      <Card className="col-span-1">
        <Card.Body className="flex items-center flex-col">
          {renderAddCoinButtons()}
        </Card.Body>
      </Card>
      <Button
        className="col-span-2 bg-red-500 hover:bg-red-600"
        onClick={(e) => {
          router.push("/dashboard");
        }}
      >
        Back To Dashboard
      </Button>
    </div>
  );
}

Stripe.layout = DoctorLayout;

export default Stripe;
