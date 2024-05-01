import { httpPost } from "@helpers/httpClient/httpClient";
import CONST from "@constants/constant";
import { badWords } from "@constants/badWords";
import Router from "next/router";
import toast from "react-hot-toast";

/************************************************************************************/
// CONST
/************************************************************************************/

/************************************************************************************/
// FUNCTIONS
/************************************************************************************/

export function checkSession(layoutType) {
  try {
    var userObject = JSON.parse(localStorage.getItem("userObject"));
    var email = userObject.email;
    var token = userObject.token;
  } catch (e) {
    console.log("Session Invalid");
    Router.push("/auth/login");
    return;
  }

  httpPost(
    "/api/auth/session",
    {
      email: email,
      token: token,
    },
    doCheckingCB.bind(this)
  );

  function doCheckingCB(jsonObj) {
    if (jsonObj.success === true) {
      // Check for permission to access the page
      if (
        jsonObj.data.roles &&
        jsonObj.data.roles.length &&
        !jsonObj.data.roles.includes(CONST[layoutType])
      ) {
        try {
          console.log("Page Access Permission Denied");
          Router.push("/auth/login");
        } catch (e) {}
      }
      localStorage.setItem("userObject", JSON.stringify(jsonObj.data));
    } else {
      try {
        Router.push("/auth/login");
      } catch (e) {}
    }
  }
}

export function checkPatientSession(layoutType) {
  console.log("patient check session");
  try {
    var userObject = JSON.parse(localStorage.getItem("userObject"));
    var ic = userObject.ic; //getCookie("email");
    var token = userObject.token; //getCookie("token");
  } catch (e) {
    console.log("Session Invalid");
    Router.push("/auth/login");
    return;
  }

  httpPost(
    "/api/mobile/auth/session",
    {
      ic: ic,
      token: token,
    },
    doCheckingCB.bind(this)
  );

  function doCheckingCB(jsonObj) {
    if (jsonObj.success === true) {
      // Check for permission to access the page
      if (layoutType && layoutType !== "") {
        if (
          jsonObj.data.roles &&
          jsonObj.data.roles.length &&
          !jsonObj.data.roles.includes(CONST[layoutType])
        ) {
          try {
            console.log("Page Access Permission Denied");
            Router.push("/auth/login");
          } catch (e) {}
        }
      }
      localStorage.setItem("userObject", JSON.stringify(jsonObj.data));
    } else {
      try {
        Router.push("/auth/login");
      } catch (e) {}
    }
  }
}

export function getSixDigitRandom() {
  return Math.random().toString().substring(2, 8);
}

export function htmlDecode(input) {
  if (input.includes("&lt;")) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  } else {
    return input;
  }
}

export function checkServiceValue(services, service, module) {
  if (!services || !service || !module) return false;

  var serviceI = services.findIndex((x) => x.service === service);
  if (serviceI === -1) return false;
  if (!services[serviceI].modules) return false;

  var moduleI = services[serviceI].modules.findIndex((x) => x === module);
  if (moduleI === -1) return false;

  return true;
}

export function prettyDate(time) {
  if (!time) {
    return "-";
  }

  var date = new Date(
      Number(time.toString().replace(/-/g, "/").replace(/[TZ]/g, " "))
    ),
    diff = (new Date().getTime() - date.getTime()) / 1000,
    day_diff = Math.floor(diff / 86400);

  if (isNaN(day_diff) || day_diff < 0) return;

  return (
    (day_diff == 0 &&
      ((diff < 60 && "just now") ||
        (diff < 120 && "1 minute ago") ||
        (diff < 3600 && Math.floor(diff / 60) + " minutes ago") ||
        (diff < 7200 && "1 hour ago") ||
        (diff < 86400 && Math.floor(diff / 3600) + " hours ago"))) ||
    (day_diff == 1 && "Yesterday") ||
    (day_diff < 7 && day_diff + " days ago") ||
    Math.ceil(day_diff / 7) + " weeks ago"
  );
}

export function moderateContent(content) {
  const lowerContent = content
    .replace(/<[^>]*>/g, "")
    .toLowerCase()
    .split(/\s+/);
  console.log("split", lowerContent);

  for (const word of badWords) {
    if (lowerContent.includes(word)) {
      console.log("Inappropriate word", word);
      return true;
    }
  }

  return false;
}

export function getYoutubeVideoId(link) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = link.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

export async function copyToClipboard(text) {
  try {
    const permissions = await navigator.permissions.query({
      name: "clipboard-write",
    });
    if (permissions.state === "granted" || permissions.state === "prompt") {
      await navigator.clipboard.writeText(text);
      toast("Text Copied to Clipboard!");
    } else {
      throw new Error(
        "Can't access the clipboard. Check your browser permissions."
      );
    }
  } catch (error) {
    toast("Error copying to clipboard:", error);
  }
}

export function updateCoins(email, coins) {
  // API CALL Placeholder
  // httpPost(
  //   "/api/coins/spendCoins",
  //   {
  //     email: session.user.email,
  //     spend: item.value,
  //   },
  // coinCB.bind(this),
  // );

  var userData = { coins: coins };
  localStorage.setItem(email, JSON.stringify(userData));
}
