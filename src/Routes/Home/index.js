import { Image } from "../../Component/Image";
import { H1 } from "../../Component/H1";
import { Input } from "../../Component/Input";
import landImage from "./land_image.png";
import css from "./index.module.css";
export function Home() {
  const landText = `Fancy a drink? We got it! Make yourself at home and find out a drink recipe.`;

  return (
    <div className={css.container}>
      <Image
        src={landImage}
        alt={"in drink we trust"}
        className={css.landPageImage}
      />
      <H1 text={landText} className={css.landPageH1} />
      <Input />
    </div>
  );
}
