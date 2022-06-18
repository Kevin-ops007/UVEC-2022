import React, { useState } from "react";
import Grocery from "./Grocery";
import Home from "./Home";
import { usePage } from "./util/usePages";
import RecipeList from "./RecipeList";

function Content() {
  const pageContext = usePage("");
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
      {page === "grocery" ? <Grocery /> : <RecipeList />}
      {page === "grocery" ? null : (
        <button type="button" class="btn btn-outline-secondary" onClick={clickHandler}>Go Back to Grocery List</button>
      )}
    </>
  );
}

export default Content;
