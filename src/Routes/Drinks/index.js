import { Display } from "../../Component/Display";
import { Button } from "../../Component/Button";
import { useState, useEffect } from "react";
import { Input } from "../../Component/Input";
import css from "./index.module.css";

export function Drinks() {
  const p = "hello";

  const [input, setInput] = useState();
  function getInputText(e) {
    setInput(e.target.value);
  }

  const [text, setText] = useState();
  function handleEnter(e) {
    if (e.keyCode === 13) {
      console.log(text);
      setText(input);
      localStorage.clear();
      localStorage.setItem("cocktail", text);
      console.log(localStorage.getItem("cocktail"));
      /* navigate("/drink"); */
    }
  }

  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
      );
      const data = await response.json();
      console.log(`this is your data from api: ${data.drinks[0].strDrink}`);
      setData(data);
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
      <Display text={p} />
    </div>
  );
}
