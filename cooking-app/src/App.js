import logo from "./logo.svg";
import "./App.css";
import Grocery from "./components/Grocery";
import Home from "./components/Home";
import Content from "./components/Content";
import { PageContextProvider } from "./components/util/usePages";

function App() {
  return (
    <div className="App">
      <PageContextProvider>
        <Content />
      </PageContextProvider>
    </div>
  );
}

export default App;
