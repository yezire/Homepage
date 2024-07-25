import React from "react";

export default function HyperLink({label, link}:{label:String, link:String}){
    return (
        <a className="inline-flex bg-[length:100%_2px] group pl-1 font-bold text-white/70 no-underline border-b-0 bg-gradient-to-b from-white  to-white bg-[0_100%] bg-no-repeat duration-800 transition-[background-size,color] hover:bg-[length:100%_100%] hover:text-black" href={link.toString()}>{label}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right inline self-center text-accent-light group-hover:text-black"> <path d="M7 7h10v10"></path> <path d="M7 17 17 7"></path> </svg>
        </a>
    );
}