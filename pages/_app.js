import React, { useEffect, useState } from "react";
import "@styles/globals.css";
import { useRouter } from "next/router";
import Loading from "loading";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [loading, setLoading] = useState(false);

  const Layout = Component.layout || (({ children }) => <>{children}</>);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
      setLoading(true);
      return;
    };

    const handleRouteComplete = (url, { shallow }) => {
      console.log("you have finished going to the new page");
      setLoading(false);
      return;
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete); // If the component is unmounted, unsubscribe

    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <SessionProvider session={session}>
      <div className="z-0">
        <div className="absolute z-[3]">
          <div id="meetingSDKElement" className="" />
        </div>
        <Layout>{!loading ? <Component {...pageProps} /> : <Loading />}</Layout>
      </div>
      <Toaster />
    </SessionProvider>
  );
}
