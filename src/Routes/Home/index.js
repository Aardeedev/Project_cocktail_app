import { Image } from "../../Component/Image";
import { H1 } from "../../Component/H1";
import landImage from "./land_image.png";

export function Home() {
  const landText = `Fancy a drink? We got it! Make yourself at home and find out a drink recipe.`;

  return (
    <div>
      <Image
        src={landImage}
        alt={"in drink we trust"}
        width={800}
        height={500}
      />
      <H1 text={landText} />
    </div>
  );
}
