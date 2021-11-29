import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Recipes = (props) => {
  console.log(props);
  const [recipeOne, setRecipeOne] = React.useState("");
  const [recipeTwo, setRecipeTwo] = React.useState("");
  const [recipeThree, setRecipeThree] = React.useState("");
  React.useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${props.location.state.allMyResults.replace(
          "%20",
          " "
        )}&app_id=b56e8775&app_key=5a2823f8dcc1d90519c0184dc8d86d4f`
      )
      .then((info) => {
        console.log("This is our info:", info.data.hits);
        setRecipeOne(info.data.hits[0].recipe);
        setRecipeTwo(info.data.hits[1].recipe);
        setRecipeThree(info.data.hits[2].recipe);
      })
      .catch((err) => {
        console.log("Error:", err.message);
      });
  });
  console.log(recipeOne);

  return (
    <div>
      <header>
        <Link to="/">Take me back to the info page</Link>
      </header>
      <h1>This is my API recipe integration page</h1>
      <h2> Your results were {props.location.state.allMyResults} </h2>
      <ul>
        <li>{recipeOne.label}</li>
        <img src={recipeOne.image} alt={recipeOne.label} />
        <li> Total Time: {recipeOne.totalTime} Min</li>
        <li> Servings:{recipeOne.yield} </li>
        <li>
          <a target="blank" href={recipeOne.url}>
            Find This Recipe Here!
          </a>
        </li>
      </ul>

      <ul>
        <li>{recipeTwo.label}</li>
        <img src={recipeTwo.image} alt={recipeTwo.label} />
        <li> Total Time: {recipeTwo.totalTime} Min</li>
        <li> Servings:{recipeTwo.yield} </li>
        <li>
          <a target="blank" href={recipeTwo.url}>
            Find This Recipe Here!
          </a>
        </li>
      </ul>

      <ul>
        <li>{recipeThree.label}</li>
        <img src={recipeThree.image} alt={recipeThree.label} />
        <li> Total Time: {recipeThree.totalTime} Min</li>
        <li> Servings:{recipeThree.yield} </li>
        <li>
          <a target="blank" href={recipeThree.url}>
            Find This Recipe Here!
          </a>
        </li>
      </ul>

      <Link to="/Recipes">
        <button>I want to try again</button>
      </Link>
    </div>
  );
};

export default Recipes;
