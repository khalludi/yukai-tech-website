"use client";

import { ReactNode, useState } from "react";

export interface ServiceCardProps {
  heading: string;
  body: ReactNode;
}

export default function ServiceCard(props: ServiceCardProps) {
  const { heading, body } = props;

  const [hover, setHover] = useState(false);

  return (
    <div
      className="rounded-xl break-inside-avoid-column"
      style={{
        borderWidth: "1.5px",
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        padding: "1.75rem",
        borderColor: hover ? "black" : "",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 className="text-xl font-bold" style={{ paddingBottom: "0.75rem" }}>
        {heading}
      </h3>
      {body}
    </div>
  );
}
