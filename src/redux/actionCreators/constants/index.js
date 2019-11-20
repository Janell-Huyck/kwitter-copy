export const domain = "https://kwitter-api.herokuapp.com";
//export const domain = "http://localhost:3000";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE1NzQyMDQ3NjYsImV4cCI6MTU3NDI5MTE2Nn0.-M3OIkEzI3dj-SdS0HfMP0nFB8XcKac1F3MGE9u2LAA";

//the token hard-coded here is for user "test", password "test".  to authorize, un-comment the token above and the authorization below

export const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer " + token // here is where we need to add the token
};

export const handleJsonResponse = res => {
  if (res.ok) {
    //if the response is a status code of 200 - 299
    return res.json();
  }
  return res.json().then(result => {
    throw result;
  });
};
