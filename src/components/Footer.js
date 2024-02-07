import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-[#F5F5F3]">
      <div className="max-w-container mx-auto border-t-[1px] group">
        <p className="text-titleFont mt-7 font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2024 | Best shopping | All Rights Reserved |
          <a href="" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Powered by Mostafa Rayhan
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;