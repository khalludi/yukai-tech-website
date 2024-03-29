import Image from "next/image";
import { customLoader } from "@/app/(default-layout)/api";

const imageLoader = async () => {
  const imageLoader = await fetch(
    "https://cdn.contentful.com" +
      `/spaces/${process.env.CONTENTFUL_SPACE_ID}` +
      "/environments/master/" +
      "assets/5QR5Dsru5NRfrTWsbBQ8UH" +
      `?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  ).then((res) => res.json());

  return `https:${imageLoader?.fields?.file?.url}`;
};

export async function HeroComponent() {
  const imageUrl = await imageLoader();

  return <ClientComponent imageUrl={imageUrl} />;
}

export function ClientComponent({ imageUrl }: { imageUrl: string }) {
  return (
    <Image
      className="rounded-xl"
      loader={customLoader}
      src={`${imageUrl}`}
      alt="Cloud network"
      width={2000}
      height={512}
    />
  );
}
