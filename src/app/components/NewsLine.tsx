import { Jura } from "next/font/google";
import React from "react";
import { twMerge } from "tailwind-merge";

const jura = Jura({subsets:['latin']});

export default function NewsLine(
    {
        className,
        date,
        content
    }:{
        className?:String,
        date: String,
        content:String
    }
){
    return (
        <div className="ml-8 mt-4 flex flex-row">
            <h1 className={twMerge(jura.className, "text-textyellow bg-myorange px-1 font-extralight")}>{date}</h1>
            <h1 className={twMerge(jura.className,"inline-block text-textyellow px-2 w-3/4 text-base leading-normal font-bold")}>{content}</h1>
        </div>
    );
}