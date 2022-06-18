import React from "react";
import { Link } from "react-router-dom";
import { possibleItems } from "./util/possibleItems";
import { useState } from "react";
import GroceryList from "./GroceryList"
import RecipeList from "./RecipeList";

function Grocery() {
  // get a list from firebase
  let listItem = "";
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(0);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const clickHandler2 = () => {
    setFlag(1);
  }
  const clickHandler = async (e) => {
    e.preventDefault();
    try {
      if (possibleItems.includes(input.toLowerCase())) {
        listItem = input;
        localStorage.setItem("ingredients", listItem);
        // get data from locsl dtorsgr

        // spprnd input to the list

        // add the list back to the local storage
      }
    } catch (error) {
      console.log("Input:", error);
    }
  };
  const removeItem = (item) => {
    listItem = "";
    localStorage.setItem("ingredients", listItem);

  };

  return (
    <>
      <h5>Grocery List</h5>
      <form>
        <div class="input-group mb-3" style={{ width: '20%', margin: 'auto' }}>
          <input
            type="text"
            class="form-control"
            list="ingredient-list"
            placeholder="Add Item"
            onChange={inputHandler}
          />
          <datalist id="ingredient-list">
            {possibleItems.map((item) => (
              <option key={item} value={item} />
            ))}
          </datalist>
          <button type="submit" onClick={clickHandler}
            class="btn btn-outline-success">
            "✓"
          </button>
        </div>


      </form>
      <div className="Container">
        <div key={listItem}>
          <div>{listItem}</div>
          <button
            type="submit"
            class="btn btn-outline-danger"
            key={listItem}
            onClick={() => {
              removeItem(listItem);
            }}
          >
            ❌
          </button>
        </div>
      </div>
      <button type="button" class="btn btn-outline-primary" onClick={clickHandler2}>Generate Recipes</button>
      {flag == 1 ? <RecipeList groceryList={listItem} /> : null}
    </>
  );
}

export default Grocery;
