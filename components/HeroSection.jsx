import { ChevronRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section id="HeroSection">
      <div className="flex  gap-24 flex-col md:flex-row h-auto md:h-screen justify-between items-center w-full md:w-7xl mx-auto p-5">
        <div className="left flex flex-col gap-5  w-full md:w-1/2 ">
          <div className="heading flex flex-col gap-2">
            <h2 className="text-5xl text-gray-400">Hello i'am</h2> 
            <h2 className="text-amber-300 font-bold text-6xl">Kulvinder</h2> 
            <h3 className="text-white text-3xl">Game Developer & Designer</h3>
          </div>

          <div className="para text-neutral-300 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              animi aliquid harum impedit ex inventore nisi ratione itaque 
              doloremque praesentium?
            </p>
          </div>

          <div className="btn flex gap-5">
            <Link
              className="px-4 py-2 rounded-md bg-amber-300 font-semibold text-black inline-flex items-center gap-2"
              href={"/Blog"}
            >
              Read Blogs <ChevronRight size={16} />
            </Link>
            <Link
              className="px-4 py-2 rounded-md text-white font-semibold inline-flex items-center gap-2"
              href={"/Kulvinder_Resume.pdf"} download
            >
              Resume <Download size={16}/>
            </Link>
          </div>
        </div>
        <div className="right  w-full md:w-1/2">
          <Image className=" rounded-2xl " src={'/kulvinder.webp'} width={500} height={500} alt="heroImage" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
