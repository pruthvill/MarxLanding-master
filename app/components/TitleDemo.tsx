import type { NextPage } from "next";
import { memo } from "react";
import Image from "next/image";

const TitleDemo: NextPage = memo(() => {
  return (
    <section className="w-full flex flex-col items-center justify-center  text-center text-black font-poppins">
      <div className="flex flex-col items-center justify-start gap-8 max-w-full ">
        <div className="flex flex-col items-center justify-start  max-w-full gap-8">
          <h1 className="m-0 text-inherit tracking-[-0.04em] leading-[6rem] font-bold font-inherit text-[60px]">
            One Place for all your
            <br />
            Social Boookmarks
          </h1>
          <div className="flex flex-col items-center justify-center text-left text-blue">
            <div className="flex flex-row items-center justify-center gap-1 md:flex-wrap">
              <button className="cursor-pointer py-3 px-6 bg-gradient-to-br from-[#0047ff] to-[#0022ff] rounded-3xl flex items-center justify-center whitespace-nowrap">
                <b className="text-white text-base tracking-[-0.02em] leading-6 font-poppins">
                  Sign Up
                </b>
              </button>
              <div className="rounded-80xl flex items-center justify-center py-2 px-6 gap-2">
                <b className="tracking-[-0.02em] leading-6 min-w-[6.25rem]">
                  How it works
                </b>
                <Image
                  src="/icon.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-80xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start  ">
          <Image
            src="/Home.png"
            alt=""
            width={1000}
            height={773}
            className=" rounded-3xs object-cover"
          />
        </div>
      </div>
    </section>
  );
});

TitleDemo.displayName = "TitleDemo";
export default TitleDemo;
