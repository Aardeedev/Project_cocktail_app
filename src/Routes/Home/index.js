import { Image } from "../../Component/Image";
import { H1 } from "../../Component/H1";
import landImage from "./land_image.png";
import css from "./index.module.css";
export function Home() {
  const landText = `Fancy a drink? We got it! Make yourself at home and find out a drink recipe.`;

  return (
    <div className={css.container}>
      <Image
        src={landImage}
        alt={"in drink we trust"}
        /*        width={400}
        height={300} */
        className={css.imageLandPage}
      />
      <H1 text={landText} className={css.h1LandPage} />
    </div>
  );
}
