import React from "react";
import { Aleo } from "next/font/google";
import { twMerge } from "tailwind-merge";

// Font files can be colocated inside of `app`
const aleo = Aleo({subsets:['latin']});

export const Heading = ({
  className,
  children,
  as: Tag = "h1",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) => {
  return (
    <Tag
      className={twMerge(
        aleo.className,
        "text-base md:text-xl lg:text-4xl font-semibold",
        className
      )}
    >
      {children}
    </Tag>
  );
};