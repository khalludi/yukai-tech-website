import Image from "next/image";
import { customLoader } from "@/app/(default-layout)/api";

const imageLoader = async () => {
  const imageLoader = await fetch(
    "https://cdn.contentful.com" +
      `/spaces/${process.env.CONTENTFUL_SPACE_ID}` +
      "/environments/master/" +
      "assets/77B7gAqwCR5XCMnBULP5il" +
      `?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  ).then((res) => res.json());

  return `https:${imageLoader?.fields?.file?.url}`;
};

export default async function HomeNetworkImage() {
  const imageUrl = await imageLoader();

  return (
    <div
      className="absolute z-10 top-0 left-0 w-screen"
      style={{
        mixBlendMode: "lighten",
      }}
    >
      <Image
        className="rounded-xl bg-cover"
        loader={customLoader}
        src={`${imageUrl}`}
        alt="Abstract network image"
        width={2000}
        height={512}
      />
    </div>
  );
}
