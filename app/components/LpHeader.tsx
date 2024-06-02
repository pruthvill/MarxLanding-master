"use client";
import type { NextPage } from "next";
import { memo, useRef } from "react";
import Image from "next/image";

const LpHeader: NextPage = memo(() => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="w-full flex flex-col justify-between  pr-36 pl-6 box-border max-w-full text-left text-base text-black font-poppins sm:flex-row sm:items-center">
      <div className="flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap sm:flex-1">
        <Image
          className="relative"
          src="/logo.svg"
          alt=""
          width={50}
          height={1}
        />
        <div className="w-full flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full sm:w-52 sm:flex-row sm:items-center">
          <div className="w-full flex flex-row items-start justify-between gap-8 mq450:flex-wrap sm:flex-row">
            <div
              onClick={() => handleScroll(featuresRef)}
              className="flex flex-col items-start justify-start pt-3 px-4 pb-3 cursor-pointer hover:text-[#0047ff]"
            >
              <b className="relative tracking-tighter leading-6 inline-block min-w-35">
                Features
              </b>
            </div>
            <div
              onClick={() => handleScroll(pricingRef)}
              className="flex flex-col items-start justify-start pt-3 px-4 pb-3 cursor-pointer hover:text-[#0047ff]"
            >
              <b className="relative tracking-tighter leading-6 inline-block min-w-35">
                Pricing
              </b>
            </div>
            <button className="cursor-pointer py-3 px-6 bg-gradient-to-br from-[#0047ff] to-[#0022ff] rounded-3xl flex items-center justify-center whitespace-nowrap">
                <b className="text-white text-base tracking-[-0.02em] leading-6 font-poppins">
                  Sign In
                </b>
              </button>
          </div>
        </div>
      </div>
    </header>
  );
});

LpHeader.displayName = "LpHeader";
export default LpHeader;
