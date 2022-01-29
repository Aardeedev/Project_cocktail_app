import "./App.css";
import { Display } from "../../Display";
import { Button } from "../Button";
import { useState, useEffect } from "react";

function App() {
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
      <Display data={data.strDrink} />
      <Button />
    </div>
  );
}

export default App;
