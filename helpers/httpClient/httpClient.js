let uri = process.env.NEXT_PUBLIC_REST_API_URL;

//DEBUG:
if (process.env.NODE_ENV == "development") {
  uri = "http://localhost:8080";
}

const postObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT",
    "Access-Control-Allow-Headers": "Content-Type",
  },
  body: {},
};

if (!uri) {
  throw new Error(
    "Please define the NEXT_PUBLIC_REST_API_URL environment variable",
  );
}

export async function httpPost(apiPath, params, callback) {
  var userObject = JSON.parse(localStorage.getItem("userObject"));
  if (userObject) {
    var token = userObject.token; //getCookie("token")
    params.token = token;
  }
  const newPostObj = { ...postObj, body: JSON.stringify(params) };

  await fetch(uri + apiPath, newPostObj)
    .then(function (res) {
      return res.json(); //need to return this json() then only it will go to the next .then
    })
    .then((json) => {
      callback(json);
    })
    .catch(function (error) {
      callback(error);
    });
}

export async function httpPostReqFile(apiPath, params, callback) {
  var userObject = JSON.parse(localStorage.getItem("userObject"));
  if (userObject) {
    var token = userObject.token; //getCookie("token")
    params.token = token;
  }
  const newPostObj = { ...postObj, body: JSON.stringify(params) };
  const response = await fetch(uri + apiPath, newPostObj);
  const reader = response.body.getReader();
  const type = response.headers.get("Content-Type");
  let decoder = new TextDecoder("utf-8");
  var d = "";
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    d = d + decoder.decode(value);
  }
  callback(d, type);
}

export async function httpPostForm(apiPath, formData, callback) {
  var userObject = JSON.parse(localStorage.getItem("userObject"));
  if (userObject) {
    var token = userObject.token; //getCookie("token")
    formData.append("token", token);
  }
  const newPostObj = { ...postObj, body: formData };
  delete newPostObj.headers;
  await fetch(uri + apiPath, newPostObj)
    .then(function (res) {
      return res.json(); //need to return this json() then only it will go to the next .then
    })
    .then((json) => {
      callback(json);
    })
    .catch(function (error) {
      callback(error);
    });
}

export function getURI() {
  return uri;
}
