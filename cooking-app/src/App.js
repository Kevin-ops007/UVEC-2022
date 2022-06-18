import logo from "./logo.svg";
import "./App.css";
import Authentication from "./firebase-auth/Authentication";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Authentication />
      {localStorage.getItem("name") === "Someone" ? <Content /> : true}
    </div>
  );
}

export default App;
