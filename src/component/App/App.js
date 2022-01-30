import "./App.css";
import { Display } from "../Display";
import { Button } from "../Button";
import { Image } from "../Image";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { H1 } from "../H1";

function App() {
  const landText = `Fancy a drink? We got it! Make yourself at home and find out a drink recipe.`;
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
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            ((<Image src={"../../landimage.png"} alt={"in drink we trust"} />),
            (<H1 text={landText} />))
          }
        />
        <Route
          path="randomdrinks"
          element={
            ((<Image src={"../../landimage.png"} alt={"in drink we trust"} />),
            (<Display data={data.strDrink} />),
            (<Button text={"get a cocktail"} />))
          }
        />
      </Routes>
    </div>
  );
}

export default App;
