import { Display } from "../../Component/Display";
import { Button } from "../../Component/Button";
import { useState, useEffect } from "react";
export function Drinks() {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    console.log(data.drinks);
    setData(data.drinks[0]);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Display data={data.strDrink} />,
      <Button text={"get a cocktail"} />
    </div>
  );
}
