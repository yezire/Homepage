import { Jura } from 'next/font/google';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const jura = Jura({subsets:['latin']})

export default function SelectingBox({
    className,
    children,
    as: Tag = "h1",
  }: {
    className?: string;
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
  }){
    return(
      <div className="relative border-white/60 border-dotted w-fit h-auto border mt-8 mb-4">
        <div className="absolute w-2 h-2 border-white/80 border rounded-sm -left-1 -top-1 bg-newsblue"/>
        <div className="absolute w-2 h-2 border-white/80 border rounded-sm left-1/2 -top-1 bg-newsblue -translate-x-1/2"/>
        <div className="absolute w-2 h-2 border-white/80 border rounded-sm -right-1 -top-1 bg-newsblue"/>
        <div className="absolute w-2 h-2 border-white/80 border rounded-sm -left-1 -bottom-1 bg-newsblue"/>
        <div className="absolute w-2 h-2 border-white/80 border rounded-sm left-1/2 -bottom-1 bg-newsblue -translate-x-1/2"/>
        <div className="absolute w-2 h-2 border-white/80 border rounded-sm -right-1 -bottom-1 bg-newsblue"/>
        <Tag className={twMerge(jura.className, "m-2")}>{children}</Tag>
        </div>
    );
  }
