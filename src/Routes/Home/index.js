import Image from "../../Component/Image";
import H1 from "../../Component/H1";
import landImage from "./land_image.png";
import Button from "../../Component/Button";
import css from "./index.module.css";
import { useNavigate } from "react-router";

export function Home() {
  const landText = `Fancy a drink? We got it! Find out a drink recipe.`;
  const btnText = `search a drink`;

  let navigate = useNavigate();

  return (
    <div className={css.container}>
      <Image
        src={landImage}
        alt={"in drink we trust"}
        className={css.landPageImage}
      />
      <H1 text={landText} h1ClassName={css.landPageH1} />
      <Button
        text={btnText}
        className={css.homeButton}
        onClick={() => navigate("/drink")}
      />
    </div>
  );
}
