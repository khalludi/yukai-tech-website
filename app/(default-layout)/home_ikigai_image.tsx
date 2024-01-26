import Image from "next/image";
import { customLoader } from "@/app/(default-layout)/api";

const imageLoader = async () => {
  const imageLoader = await fetch(
    "https://cdn.contentful.com" +
      `/spaces/${process.env.CONTENTFUL_SPACE_ID}` +
      "/environments/master/" +
      "assets/Am4DWKcBAlcS76fSrOLFS" +
      `?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  ).then((res) => res.json());

  return `https:${imageLoader?.fields?.file?.url}`;
};

export default async function HomeIkigaiImage() {
  const imageUrl = await imageLoader();

  return (
    <Image
      className="rounded-xl bg-cover"
      loader={customLoader}
      src={`${imageUrl}`}
      alt="Abstract network image"
      width={2000}
      height={512}
    />
  );
}
