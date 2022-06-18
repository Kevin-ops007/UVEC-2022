import React, { useState } from "react";
import Axios from "axios";
import Recipe from "./Recipe";

const RecipeList = () => {
    const [recipes, setRecipe] = useState([]);

    const App_Key = "0d2b945a74744199b3f16fdff841bd25";
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${App_Key}&ingredients=apples,flour,sugar&number=5&limitLicense=true&ranking=1&ignorePantry=true`;

    const getData = async () => {
        const result = await Axios.get(url);
        console.log(result.data);
        console.log(result.data[0]);
        setRecipe(result.data);
        console.log(result);
    };

    return (
        <div className="App">
            <div className="recipes">
                {recipes !== [] && recipes.map((recipe) => <Recipe recipe={recipe} />)}
            </div>
        </div>
    );
};

export default RecipeList;
