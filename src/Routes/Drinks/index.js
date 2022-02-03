import Paragraph from "../../Component/Paragraph";
import H1 from "../../Component/H1";
import H2 from "../../Component/H2";
import DisplayRecipe from "../../Component/DisplayRecipe";
import { useState, useEffect } from "react";
import Input from "../../Component/Input";
import css from "./index.module.css";

export function Drinks() {
  const inputText = `type here and find a drink recipe`;
  let ingredientsTitle = "";
  let measuresTitle = "";

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

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
      );
      const data = await response.json();
      setData(data.drinks[0]);
      console.log(data.drinks[0]);
    }
    getData();
  }, [text]);

  if (data)
    return (
      <div>
        <Input
          placeholder={inputText}
          divClassName={css.divInput}
          inputClassName={css.searchInput}
          onChange={getInputText}
          onKeyUp={handleEnter}
        />
        <div className={css.recipeContainer}>
          <H1 text={data.strDrink} h1ClassName={css} />
          <div className={css.recipeIngAndMeas}>
            <div className={css.recipeMeasure}>
              <H2 text={measuresTitle} />
              <Paragraph text={data.strMeasure1} />
              <Paragraph text={data.strMeasure2} />
              <Paragraph text={data.strMeasure3} />
              <Paragraph text={data.strMeasure4} />
              <Paragraph text={data.strMeasure5} />
              <Paragraph text={data.strMeasure6} />
              <Paragraph text={data.strMeasure7} />
              <Paragraph text={data.strMeasure8} />
            </div>

            <div className={css.recipeIngredients}>
              <H2 text={ingredientsTitle} />
              <Paragraph text={data.strIngredient1} />
              <Paragraph text={data.strIngredient2} />
              <Paragraph text={data.strIngredient3} />
              <Paragraph text={data.strIngredient4} />
              <Paragraph text={data.strIngredient5} />
              <Paragraph text={data.strIngredient6} />
              <Paragraph text={data.strIngredient7} />
              <Paragraph text={data.strIngredient8} />
            </div>
          </div>
          <div className={css.recipeInstructions}>
            <Paragraph text={data.strInstructions} />
          </div>
        </div>
      </div>
    );
}
