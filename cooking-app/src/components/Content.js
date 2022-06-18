import React from "react";
import Grocery from "./Grocery";
import Home from "./Home";
import { usePage } from "./util/usePages";

function Content() {
  const page = usePage().page;
  console.log(page);
  return (
    <>
      <div>Content</div>
      {page === "grocery" ? <Grocery /> : <Home />}
    </>
  );
}

export default Content;
