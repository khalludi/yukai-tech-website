import Link from "next/link";
import { Suspense } from "react";
import { ClientComponent, HeroComponent } from "@/app/hero_component";
import ServiceCard, { ServiceCardProps } from "@/ui/service_card";
import Image from "next/image";
import { customLoader } from "@/app/api";
import HomeNetworkImage from "@/app/home_network_image";

const serviceCards: ServiceCardProps[] = [
  {
    heading: "Cloud Architecture + Design",
    body: (
      <p>
        Leverage the full potential of AWS with our expert cloud architects.
        Design scalable, secure, and high-performance architectures tailored to
        your business requirements. Ensure optimal resource utilization for
        cost-effective cloud solutions.
      </p>
    ),
  },
  {
    heading: "Big Data and Analytics",
    body: (
      <p>
        Design scalable data pipelines, implement data lakes, and extract
        valuable insights. Optimize data storage, processing, and analytics for
        actionable business intelligence.
      </p>
    ),
  },
  {
    heading: "Security + Compliance",
    body: (
      <p>
        Protect your data and ensure compliance with industry standards.
        Implement robust security measures, including identity and access
        management, encryption, and threat detection. Stay ahead of security
        threats with our proactive approach to AWS security.
      </p>
    ),
  },
  {
    heading: "AWS Migration Services",
    body: (
      <p className="break-inside-avoid-column">
        Seamlessly transition your applications, data, and workloads to AWS.
        Minimize downtime and maximize efficiency with our proven migration
        strategies. Benefit from our experience in executing successful
        migrations across various industries.
      </p>
    ),
  },
  {
    heading: "Serverless Architecture",
    body: (
      <p>
        Embrace serverless computing for enhanced scalability and reduced
        operational overhead. Develop and deploy applications without managing
        servers, focusing on code and functionality. Optimize costs with a
        pay-as-you-go model.
      </p>
    ),
  },
  {
    heading: '"There are hardships and there are delights"',
    body: <p className="text-end">- Japanese Proverb</p>,
  },
];

export default async function Page() {
  return (
    <div className="mt-10">
      {/* Hero Section */}
      <div className="mt-10 flex flex-row items-center justify-center gap-10">
        <Suspense fallback={<div>Loading</div>}>
          <HeroComponent />
        </Suspense>
        <div className="flex flex-col gap-5" style={{ width: "40%" }}>
          <h1 className="text-3xl font-bold">AWS Simplified</h1>
          <h3 className="text-lg">
            At yukai, we focus on providing AWS expertise and technical
            consulting services. We believe that our customers should focus on
            providing a differentiated experience. Let us worry about moving
            your business to the cloud.
          </h3>
        </div>
      </div>

      {/* ikigai section */}
      <div className="flex flex-row bg-gray-300 ms-20 mt-10 p-10 rounded-l-xl gap-5">
        <div className="flex flex-col gap-2 w-1/2">
          <div>
            <h1 className="text-3xl font-bold leading-6">ikigai</h1>
            <h3 className="opacity-50">reason for being</h3>
          </div>
          <p>
            We understand the critical role that a robust AWS infrastructure
            plays in the success of your business. Our team brings a wealth of
            knowledge gained from successfully executing a wide range of AWS
            projects across diverse industries. We recognize that every business
            is unique. Our consulting services are tailored to your specific
            needs, ensuring that you get the most value from your AWS
            investment. Let's embark on a journey to transform your digital
            landscape together.
          </p>
        </div>
        <div>Placeholder Image</div>
      </div>

      {/* Services */}
      <div className="px-10 pt-10">
        <h1 className="text-3xl font-bold text-center pb-10">Services</h1>
        <div className="columns-3 gap-8 items-start space-y-8">
          {serviceCards.map((card) => (
            <ServiceCard
              key={card.heading}
              heading={card.heading}
              body={card.body}
            />
          ))}
        </div>
      </div>

      {/* Blog */}
      <div className="flex flex-row mx-10 mt-10 gap-6">
        <div className="flex flex-col w-2/3 gap-6">
          <ArticleBlock name={"Article 1"} />
          <ArticleBlock name={"Article 2"} />
          <ArticleBlock name={"Article 3"} />
        </div>

        <div>
          <h1 className="text-8xl font-extrabold">BLOG</h1>
          <h3 className="text-3xl font-bold">see more stories -{">"}</h3>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative overflow-hidden mt-10 p-10 bg-gray-200">
        <HomeNetworkImage />

        <div className="flex flex-col gap-10 z-20 relative">
          <div>
            <h1 className="font-extrabold text-5xl">Ready to get started?</h1>
            <p className="text-2xl mt-1">
              Schedule your free consultation today to elevate your cloud <br />
              experience.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="text-xl font-medium px-3 py-1 bg-black text-white rounded-lg max-w-fit"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ArticleBlock({ name }: { name: string }) {
  return (
    <div className="h-20 bg-gray-300 text-end flex items-end justify-end pb-2 pe-3 font-semibold">
      {name}
    </div>
  );
}
