"use client";

import { ReactNode } from "react";

export interface ServiceCardProps {
  heading: string;
  body: ReactNode;
}

export default function ServiceCard(props: ServiceCardProps) {
  const { heading, body } = props;

  return (
    <div
      className="border-black rounded-xl p-7 break-inside-avoid-column"
      style={{
        borderWidth: "1.5px",
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
    >
      <h3 className="text-xl font-bold pb-3">{heading}</h3>
      {body}
    </div>
  );
}
