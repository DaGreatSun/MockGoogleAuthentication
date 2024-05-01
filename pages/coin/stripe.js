import React from "react";
import DoctorLayout from "layout/Doctor";
import { Button, Card } from "react-daisyui";
import { useSession } from "next-auth/react";
import Coins from "./coins";
import { useRouter } from "next/router";
import { updateCoins } from "@helpers/utils";

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
  const addCoinSelection = [10, 20, 50, 100, 500, 1000];

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/
  function renderAddCoinButtons() {
    return addCoinSelection.map((amount, index) => {
      return (
        <Button
          className="w-full bg-green-500 hover:bg-green-600"
          key={`add-money-button-${index}`}
          onClick={(e) => {
            addCoins(amount);
          }}
        >
          Purchase {amount} Coins!
        </Button>
      );
    });
  }

  function addCoins(amount) {
    // API CALL Placeholder
    // httpPost(
    //   "/api/coins/spendCoins",
    //   {
    //     email: session.user.email,
    //     add: amount,
    //   },
    //   coinCB.bind(this),
    // );

    var newCoinAmount = coins + amount;
    setCoins(newCoinAmount);
    updateCoins(session.user.email, newCoinAmount);
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
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
        className="col-span-1 lg:col-span-2 bg-red-500 hover:bg-red-600"
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
