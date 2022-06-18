import React, { useState } from "react";
import Grocery from "./Grocery";
import Home from "./Home";
import { usePage } from "./util/usePages";
import RecipeList from "./RecipeList";

function Content() {
  const pageContext = usePage();
  const page = pageContext.page;
  const clickHandler = () => {
    if (page === "RecipeList") {
      pageContext.setPage("grocery");
    } else {
      pageContext.setPage("RecipeList");
    }
  };

  return (
    <>
      <div>Content</div>
      {page === "grocery" ? <Grocery /> : <RecipeList />}
      {page === "grocery" ? (
        <button onClick={clickHandler}>Generate</button>
      ) : (
        <button onClick={clickHandler}>list</button>
      )}
    </>
  );
}

export default Content;
