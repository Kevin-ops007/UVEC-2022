import "./App.css";
import { signInWithGoogle } from "./Firebase";
import { Badge } from "react-bootstrap";
import { useState } from "react"


function Authentication() {
  localStorage.setItem("name", "Someone");
  return (
    <div className="App">
      <h1 class="display-1"> Grocery to Recipe App</h1>
      <h2>
        Hi <Badge bg="primary">{localStorage.getItem("name")}</Badge>!
      </h2>
      {localStorage.getItem("name") === "Someone" ? <body>Please Login to access the App</body> : null}
      {localStorage.getItem("name") === "Someone" ?
        <button class="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button> : null}
      <img src={localStorage.getItem("profilePic")} />

    </div>
  );
}

export default Authentication;
