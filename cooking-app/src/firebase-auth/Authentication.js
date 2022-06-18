import "./App.css";
import { signInWithGoogle } from "./Firebase";
import { PageContextProvider } from "../components/util/usePages";
import Content from "../components/Content";
import Grocery from "../components/Grocery";
import Home from "../components/Home";

function Authentication() {
  return (
    <div>
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />

      <PageContextProvider>
        <Content />
      </PageContextProvider>
    </div>
  );
}

export default Authentication;
