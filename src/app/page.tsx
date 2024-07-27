import { Azeret_Mono, Jockey_One } from "next/font/google";
import { twMerge } from "tailwind-merge";
import SelectingBox from "./components/SelectingBox";
import NewsLine from "./components/NewsLine";
import HyperLink from "./components/HyperLink";
import Image from "next/image";

const azeret_mono = Azeret_Mono({ weight: ["200","400"], subsets: ['latin'] });
const jockey = Jockey_One({ weight: "400", subsets: ['latin'] });
import React from 'react';


export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <Image src="/sisterbear.jpg" alt="sisterbear" width={10000000} height={150} />
      <div className="flex min-h-screen flex-col p-12 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col my-auto w-1/3 min-w-max md:ml-2 md:mr-5">
            <div className="my-3 mr-auto">
              <Image src="/selfie.jpg" alt="Selfie" width={250} height={250} />
            </div>
            <div className={twMerge("bg-newsblue text-textyellow w-fit px-1 text-2xl", jockey.className)}>Zhirui Ye</div>
            <div className={twMerge("bg-myorange text-textyellow w-fit px-1 mt-1 text-2xl leading-none text-nowrap", jockey.className)}>Westlake University</div>
            <div className={twMerge("bg-newsblue text-textyellow w-fit px-1 mt-1 text-sm font-light", azeret_mono.className)}>E1-319A 📍Yungu </div>
            <div className={twMerge("bg-newsblue text-textyellow w-fit px-1 mt-1 text-sm", azeret_mono.className)}>Email:yezhirui@westlake.edu.cn</div>
          </div>
          <div className="mx-4 mt-4 md:mx-8 md:mt-0 w-auto">
            <div className={twMerge(azeret_mono.className, "mx-auto text-textyellow  font-light text-sm leading-loose")}>
              <p className="my-2">Hi, I am Zhirui Ye.👋</p>
              <p className="my-2">I am a first-year CS PhD student jointly trained by Westlake University and Zhejiang University advised by Professor Jianyang Zeng.</p>
              <p className="my-2">My research interests are focused on AI for Life Sciences, particularly in relation to proteins.</p>
              <p className="my-2">I love building cool things. Feel free to leave me an email if we&apos;re sharing the same interests!</p>
              <p>You can also find me at Yuque, Linkedin, and Github.</p>
            </div>
          </div>

        </div>
        <SelectingBox>
          <div className="text-textyellow font-light text-4xl">NEWS</div>
        </SelectingBox>

        <NewsLine date="2024.07.26" content="My new portfolio website is launched!" />
        <NewsLine date="2024.07.06" content="I received my bachelor's degree from Tianjin University." />

      </div>
    </main>
  );
}
