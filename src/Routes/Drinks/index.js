import Paragraph from "../../Component/Paragraph";
import H1 from "../../Component/H1";
import { useState, useEffect } from "react";
import Input from "../../Component/Input";
import css from "./index.module.css";

export function Drinks() {
  const [input, setInput] = useState();
  function getInputText(e) {
    setInput(e.target.value);
  }

  const [text, setText] = useState();
  function handleEnter(e) {
    if (e.keyCode === 13) {
      setText(input);
    }
  }
  /* 
  const ingredients = undefined;

  function sortIngredients(data) {
    let ingredient = undefined;
    for (let i = 0; i < 16; i++) {
      ingredient = data.strIngredient + i;
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    console.log(`thi is array ingredients:` + ingredients);
  } */

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
      );
      const data = await response.json();
      console.log(`this is your data from api: ${data.drinks[0].strDrink}`);
      setData(data.drinks[0]);
      /*       sortIngredients(data);
      console.log(`thi is array ingredients:`, ingredients); */
    }
    getData();
  }, [text]);

  return (
    <div>
      <Input
        inputClassName={css.searchInput}
        onChange={getInputText}
        onKeyUp={handleEnter}
      />
      <H1 text={data.strDrink} />
      <Paragraph text={data.strAlcoholic} />
      <Paragraph text={data.strGlass} />
      <Paragraph text={data.strInstructions} />
      <Paragraph text={data.strIngredient1} />
      <Paragraph text={data.strIngredient2} />
      <Paragraph text={data.strIngredient3} />
      <Paragraph text={data.strIngredient4} />
      <Paragraph text={data.strIngredient5} />
      <Paragraph text={data.strIngredient6} />
      <Paragraph text={data.strIngredient7} />
      <Paragraph text={data.strIngredient8} />
      <Paragraph text={data.strIngredient9} />
      <Paragraph text={data.strIngredient10} />
    </div>
  );
}
