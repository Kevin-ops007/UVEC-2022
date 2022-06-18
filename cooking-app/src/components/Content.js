import React from "react";
import Grocery from "./Grocery";
import Home from "./Home";
import { usePage } from "./util/usePages";

function Content() {
  const pageContext = usePage();
  const page = pageContext.page;
  const clickHandler = () => {
    pageContext.setPage("generate");
  };
  return (
    <>
      <div>Content</div>
      {page === "grocery" ? <Grocery /> : <Home />}
      <button onClick={clickHandler}>Generate</button>
    </>
  );
}

export default Content;
