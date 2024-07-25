import { Azeret_Mono, Jockey_One } from "next/font/google";
import { twMerge } from "tailwind-merge";
import SelectingBox from "./components/SelectingBox";
import NewsLine from "./components/NewsLine";
import HyperLink from "./components/HyperLink";

const azeret_mono = Azeret_Mono({weight:"200",subsets:['latin']});
const jockey = Jockey_One({weight:"400", subsets:['latin']});
import React from 'react';

const DiagonalSquare = ({ size = 100, color = 'white' }) => {
    return (
        <svg width={3*size} height={size}>
            <rect
                x={0}
                y={0}
                width={size}
                height={size}
                fill="none"
                stroke={color}
                strokeWidth={1}
            />
            <line
                x1={0}
                y1={0}
                x2={size}
                y2={size}
                stroke={color}
                strokeWidth={1}
            />
            <line
                x1={0}
                y1={size}
                x2={size}
                y2={0}
                stroke={color}
                strokeWidth={1}
            />
           <rect x={size} y={0} width="45" height="20" fill="white" />
           <rect x={size} y={size/3} width="25" height="20" fill="white" />
           <rect x={size} y={size*2/3} width="80" height="20" fill="white" />
        </svg>
    );
};


export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="w-full h-fit">
        <div className="mt-8 md:m-14 md:mb-0 flex flex-row">
          <div className="hidden md:block">
                <DiagonalSquare size={60}/>
          </div>
                <div className="flex flex-row items-center w-fit mx-auto md:mr-0 md:ml-auto">
                  <h1 className={twMerge(azeret_mono.className,"text-white")}>v1.0/Zijie_Personal_Website</h1>
                </div>
        </div>
      </div>
      <div className="flex min-h-screen flex-col p-12 max-w-4xl">
      {/*<div className="hidden md:block w-1/6 border-white border-dotted border border-l-0 border-b-0  h-12 mr-auto"></div>
      <div className="hidden md:block w-5/6">
        <div className="relative border-t border-dotted w-10 left-full -translate-x-1/2"></div>
      </div> */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col my-auto w-1/3 min-w-max md:ml-2 md:mr-5">
          <div className="my-5 w-40 h-40 bg-white ml-8 mr-auto"></div>
          <div className={twMerge("bg-black text-white w-fit px-1 text-2xl", jockey.className)}>Zijie Zhao</div>
          <div className={twMerge("bg-white text-black w-fit px-1 mt-1 text-xl leading-none text-nowrap", jockey.className)}>University of Pennsylvania</div>
          <div className={twMerge("bg-black text-white/50 w-fit px-1 mt-1 text-sm font-light", azeret_mono.className)}>Office:TBA</div>
          <div className={twMerge("bg-black text-white/50 w-fit px-1 text-sm", azeret_mono.className)}>Email:bytez@seas.upenn.edu</div>
        </div>
        <div className="mx-4 md:mx-8 w-auto">
          <div className={twMerge(azeret_mono.className,"mx-auto text-white/50  font-light text-sm leading-relax")}>
          <p className="my-2">I am a first-year CIS PhD student at University of Pennsylvania, advised by Professor Ryan Marcus.</p>
          <p className="my-2">Previously, I received my bachelor’s degree in CS from Tianjin University.</p>
          <p className="my-2">My research interet includes machine programming and applying ML algorithms to build self-evolvable software systems(especially databases).</p>
          <p className="my-2">Feel free to leave me an email if we share the same interests!</p>
          <p>Please also check my <HyperLink label="Linkedin" link="Linkedin.com"/>, <HyperLink label="Github" link="https://github.com"/>, and <HyperLink label="X.com" link="https://x.com"/></p>
          </div>
        </div>

      </div>
      <SelectingBox>
        <div className="text-white/90 font-light text-4xl">NEWS</div>
      </SelectingBox>

      <NewsLine date="2024.06.24" content="I received my Bachelor's From TJU!"/>
      <NewsLine date="2024.06.24" content="Our Paper Got Received By XXX"/>
      <NewsLine date="2024.06.24" content="HelloWorld"/>

      </div>
    </main>
  );
}
