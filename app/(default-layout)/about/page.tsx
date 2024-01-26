import Image from "next/image";
import { localImageLoader } from "@/app/(default-layout)/about/localImageLoader";
import syedProfilePic from "../../../public/syed-profile-pic.jpg";
import khalidProfilePic from "../../../public/khalid-profile-pic.jpg";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AboutPage() {
  return (
    <div className="mt-10 flex flex-col items-center">
      {/* Tagline */}
      <h1 className="text-center text-3xl italic">
        "Finding the right person is half the battle."
      </h1>

      {/* Founder Card */}
      <div className="mt-10 mx-10 border-2 rounded-2xl border-black drop-shadow-lg lg:max-w-4xl">
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-10">
          <Image
            className="drop-shadow-lg"
            loader={localImageLoader}
            src={khalidProfilePic}
            alt={
              "Khalid's profile picture. An olive skinned, young man with glasses."
            }
            unoptimized
          />
          <div>
            <h1 className="text-2xl font-bold">Founder</h1>
            <div id="Logos" className="flex flex-row gap-3">
              <p>Amazon</p>
              <p>Appfolio</p>
              <p>Technica</p>
            </div>
            <ScrollArea className="h-[300px] text-wrap pt-4">
              Khalid Ali is a software engineer with a Bachelors in Computer
              Science and a Minor in Business from the University of
              Illinois-Urbana Champaign. With a dynamic career spanning three
              years at some of the most influential companies in the tech
              sector, Khalid has been at the forefront of innovation, bringing a
              wealth of knowledge and a unique blend of technical and business
              acumen to the table. <br />
              <br /> Armed with a solid foundation in computer science and a
              keen understanding of business dynamics, Khalid decided to channel
              their passion for AWS into Yukai Technologies, a forward-thinking
              consulting firm specializing in AWS solutions. As the Founder and
              CEO, Khalid is committed to leveraging their extensive experience
              to help businesses navigate the cloud landscape, optimize their
              infrastructure, and achieve unprecedented success in the digital
              realm.
            </ScrollArea>
          </div>
        </div>
      </div>

      {/* Senior Advisor Card */}
      <div className="mt-10 mx-10 border-2 rounded-2xl border-black drop-shadow-lg lg:max-w-4xl">
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-10">
          <Image
            className="drop-shadow-xl"
            loader={localImageLoader}
            src={syedProfilePic}
            alt={
              "Syed's profile picture. An olive skinned, older man with glasses."
            }
            height={415}
            unoptimized
          />
          <div>
            <h1 className="text-2xl font-bold">Senior Advisor</h1>
            <div id="Logos" className="flex flex-row gap-3">
              <p>Neustar</p>
              <p>Airside Mobile</p>
              <p>SajTech</p>
            </div>
            <ScrollArea className="h-[300px] text-wrap pt-4">
              Syed Wasim Ali is a technologist with 28 years of experience
              conducting research, designing, and developing solutions in data
              communication, telecommunication, and identity management. He
              brings experience working with the business and product
              organizations to uncover new sources of revenue for the
              organization and deliver value to the customers. <br />
              <br /> Most recently, Syed served as a VP of Engineering at
              Airside Mobile/Onfido, where he helped build the US Engineering
              team from the ground up and built a high-performing engineering
              team. Currently, Syed is a CTO at SAJ Technology where he leads
              the firm’s technology strategy and operations.
              <br />
              <br /> At Yukai Technologies, Syed lends his technical expertise
              to our company's projects and serves as an advisor for our future
              initiatives with clients.
            </ScrollArea>
          </div>
        </div>
      </div>

      <div className="mt-10" />
    </div>
  );
}
