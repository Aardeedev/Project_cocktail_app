import Image from "../../Component/Image";
import H1 from "../../Component/H1";
import landImage from "./land_image.png";
import Button from "../../Component/Button";
import css from "./index.module.css";
import { useNavigate } from "react-router";

export function Home() {
  const landText = `Thirsty? We have hundreds and hundreds of delicious cocktail recipes from expert bartenders around the world. Make yourself at home and find out a new drink recipe.`;
  const btnText = `search a recipe`;

  let navigate = useNavigate();

  return (
    <div className={css.container}>
      <Image
        src={landImage}
        alt={"in drink we trust"}
        className={css.landPageImage}
      />
      <H1
        text={landText}
        h1ClassName={css.landPageH1}
        divH1ClassName={css.divH1}
      />
      <Button
        text={btnText}
        className={css.homeButton}
        onClick={() => navigate("/drink")}
      />
    </div>
  );
}
