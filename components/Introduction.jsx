import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check, MailIcon, Star, Youtube } from "lucide-react";
const Introduction = () => {
  return (
    <section id="Introduction">
      <div className="flex  gap-24 flex-col md:flex-row h-auto md:h-screen justify-between items-center w-full md:w-7xl mx-auto p-5">
        <div className="left text-white md:w-1/2">
          <div className="heading">
            <h2 className="text-neutral-300">Overview</h2>
            <h1 className="text-5xl pt-4">
              Professional &{" "}
              <span className="text-amber-300 ">Quick Solutions</span> For Your
              Games{" "}
            </h1>
          </div>
          <div className="para text-neutral-300 py-8">
            <p>
              We offer fast and professional website solutions that are
              customized to your needs. From design to launch, we make sure your
              website is high quality and ready quickly to help you build a
              strong online presence.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-28 pb-12 gap-4">
              <div className="left flex flex-col gap-4">
                <h3 className=" flex items-center gap-2"> <Check size={20} color="yellow"/> Multi-Platform</h3>
                <h3 className=" flex items-center gap-2"> <Check size={20} color="yellow"/>Sound & Music</h3>
              </div>
              <div className="right flex flex-col gap-4">
                <h3 className=" flex items-center gap-2"> <Check size={20} color="yellow"/> Scalable</h3>
                <h3 className=" flex items-center gap-2"> <Check size={20} color="yellow"/> Responsive </h3>
              </div>
          </div>

          <div className="Contactinfo  flex flex-col gap-5 border px-8 py-5 bg-neutral-900 border-neutral-700 rounded-2xl">
            <div className=" flex items-center gap-5">
              <div className="p-3 rounded-full bg-amber-300">
              <MailIcon size={16} className="text-neutral-950" />
              </div>
              <div className="flex flex-col">
               <h2 className="text-neutral-400">Email</h2>
               <button className="emial text-lg font-semibold">kulvinderthakur@gmail.com</button>
               </div>
            </div>
                
            <div className=" flex items-center gap-5">
              <div className="p-3 rounded-full bg-amber-300">
              <Youtube size={16} className="text-neutral-950" />
              </div>
              <div className="flex flex-col">
               <h2 className="text-neutral-400">Youtube</h2>
               <button className="emial text-lg font-semibold">See you on my YouTube</button>
               </div>
            </div>
          </div>
        </div>
        <div className="right relative w-full md:w-1/2">
          <Image
            className=" rounded-2xl "
            src={"/kulvinder.webp"}
            width={550}
            height={550}
            alt="heroImage"
          />
          <div className="absolute bottom-48 -left-20">
            <div className="text-neutral-950 bg-white p-1.5 font-semibold rounded-full inline-flex items-center gap-3">
            <Image className="rounded-full" src={'/globe.svg'} width={30} height={30} alt="kulvinder"/>Experienced Devloper<ArrowUpRight />
            </div>
          </div>
          <div className="absolute bottom-28 -left-24">
            <div className="text-neutral-950 bg-white p-1.5 font-semibold rounded-full inline-flex items-center gap-3">
              <Image className="rounded-full" src={'/kulvinder.webp'} width={30} height={30} alt="kulvinder"/>Kulvinder Singh<ArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
