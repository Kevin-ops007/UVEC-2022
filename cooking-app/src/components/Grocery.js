import React from "react";
import { Link } from "react-router-dom";
import { possibleItems } from "./util/possibleItems";
import { useState } from "react";

function Grocery() {
  // get a list from firebase
  let listItem = ["fish", "egg", "pork", "beef"];
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    try {
      if (possibleItems.includes(input.toLowerCase())) {
        console.log(input);
      }
    } catch (error) {
      console.log("Input:", error);
    }
  };
  const removeItem = (item) => {
    console.log(item);
  };

  return (
    <>
      <div>Grocery List</div>
      <form>
        <input
          type="text"
          list="ingredient-list"
          placeholder="Add Item"
          onChange={inputHandler}
        />
        <datalist id="ingredient-list">
          {possibleItems.map((item) => (
            <option key={item} value={item} />
          ))}
        </datalist>
        <button type="submit" onClick={clickHandler}>
          "✓"
        </button>
      </form>
      <div className="Container">
        {listItem.map((item) => (
          <div key={item}>
            <div>{item}</div>
            <button
              key={item}
              onClick={() => {
                removeItem(item);
              }}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Grocery;
