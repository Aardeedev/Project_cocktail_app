import Paragraph from "../../Component/Paragraph";
import H1 from "../../Component/H1";
import { useState, useEffect } from "react";
import Input from "../../Component/Input";
import css from "./index.module.css";

export function Drinks() {
  const placeHolder = `type here and find a drink recipe`;

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
      console.log(`this is your data from api: ${data.drinks[0].strDrink}`);
      setData(data.drinks[0]);
    }
    getData();
  }, [text]);

  return (
    <div>
      <Input
        placeholder={placeHolder}
        divClassName={css.divInput}
        inputClassName={css.searchInput}
        onChange={getInputText}
        onKeyUp={handleEnter}
      />
      <div className={css.recipe}>
        <H1 text={data.strDrink} h1ClassName={css} />

        <Paragraph text={data.strIngredient1} />
        <Paragraph text={data.strIngredient2} />
        <Paragraph text={data.strIngredient3} />
        <Paragraph text={data.strIngredient4} />
        <Paragraph text={data.strIngredient5} />

        <Paragraph text={data.strInstructions} />
      </div>
    </div>
  );
}
