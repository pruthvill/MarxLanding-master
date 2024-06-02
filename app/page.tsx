import Image from "next/image";
import TitleDemo from "./components/TitleDemo";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import LpHeader from "./components/LpHeader";

export default function Home() {
  return (
    <div className="w-full relative  bg-gradient-to-b from-[#f0f0f0]  to-[rgba(219,219,220,0.34)] box-border overflow-hidden flex flex-col items-center justify-center py-4 px-12 gap-24 leading-normal tracking-normal text-center text-sm text-neutral-900 font-body-small md:gap-6 lg:gap-12 lg:pl-6 lg:pr-6 lg:box-border">
    <LpHeader />
    <TitleDemo />
    <Features />
    <Pricing />
    <Footer />
  </div>
  );
}
