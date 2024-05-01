// basic imports
import React from "react";

// custom library imports for page
import { signIn, useSession } from "next-auth/react";

// misc imports

function Coins({ passedCoins }) {
  /***************************************************************************************/
  //States
  /***************************************************************************************/
  const [coins, setCoins] = React.useState(0);

  /***************************************************************************************/
  //Var
  /***************************************************************************************/
  const { data: session } = useSession();

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/
  React.useEffect(() => {
    if (session && session.user) {
      // API CALL Placeholder
      // httpPost(
      //   "/api/coins/getCoins",
      //   {
      //     email: session.user.email,
      //   },
      // coinCB.bind(this),
      // );

      var userData = JSON.parse(localStorage.getItem(session.user.email));
      if (!userData || !userData.coins) {
        setCoins(0);
      } else {
        setCoins(userData.coins);
      }
    }
  }, [session]);

  return (
    <>
      <img
        src={"/piggybank.avif"}
        alt="image"
        referrerpolicy="no-referrer"
        className="h-40 rounded-3xl object-contain"
      />
      <h1 className="text-2xl">{passedCoins ?? coins} Coins In The Bank!</h1>
    </>
  );
}

export default Coins;
