import { ContactForm } from "@/app/(dark-layout)/contact-us/contact_form";
import Image from "next/image";
import { customLoader } from "@/app/(default-layout)/api";

export default function ContactPage() {
  return (
    <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 flex flex-col items-center">
      <div className="m-10 lg:flex flex-row lg:items-center gap-10">
        <div className="max-w-2xl lg:max-w-none lg:w-1/2">
          <ToriiGateImage />
        </div>

        <div className="flex flex-col justify-center lg:max-w-xl lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

const imageLoader = async () => {
  const imageLoader = await fetch(
    "https://cdn.contentful.com" +
      `/spaces/${process.env.CONTENTFUL_SPACE_ID}` +
      "/environments/master/" +
      "assets/2F65LaOWKoSvPC8DI5sFAC" +
      `?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  ).then((res) => res.json());

  return `https:${imageLoader?.fields?.file?.url}`;
};

export async function ToriiGateImage() {
  const imageUrl = await imageLoader();

  return (
    <div>
      <Image
        className="rounded-xl"
        loader={customLoader}
        src={`${imageUrl}`}
        alt="Cloud network"
        width={2048}
        height={512}
      />
    </div>
  );
}
