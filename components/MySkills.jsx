import { ChevronRight } from "lucide-react";
import React from "react";
// import React from "react";
import Link from "next/link";
import Image from "next/image";
import { skills } from "@/lib/data";

const MySkills = () => {
  return (
    <section id="Skills">
      <div className="flex  gap-24 flex-col md:flex-row h-auto md:h-screen justify-between items-center w-full md:w-7xl mx-auto p-5">
        <div className="left flex flex-col gap-10 text-white md:w-130">
          <h2 className="text-neutral-30 text-gray-500  text-2xl">My Skills</h2>
          <h1 className=" text-5xl">
            Let’s Explore Popular
            <span className="text-amber-300"> Skills & Experience </span>
          </h1>

          <div className="para text-gray-500">
            Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium
            doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo
            inventore veritatis
          </div>

          <div className="btn text-black flex gap-5 ">
            <Link
              className=" px-4 py-2 rounded-md font-semibold inline-flex items-center  bg-amber-300"
              href={"/"}
            >
              Learn More <ChevronRight size={16} />
            </Link>
          </div>
        </div>
        <div className="right text-white font-semibold flex flex-col gap-20 ">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
          {
            skills.map((skill) => (
              <div key={skill.id}
              className="item1 min-w-32 p-2  bg-neutral-800 rounded-lg transition-all
             hover:bg-amber-400 hover:scale-110  hover:border-4 border-amber-900 duration-300 
            flex flex-col gap-2"
            >
              <div className="flex justify-center">
                <Image
                  src={skill.image}
                  width={70}
                  height={70}
                  alt={skill.name}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-center">{skill.name}</h1>
                <button
                  className="px-4 py-1 bg-neutral-950 inline-flex transition-all
                justify-center rounded-md hover:bg-amber-600 hover:scale-105 duration-300"
                >
                  {skill.percentage}
                </button>
              </div>
            </div>
            ))
          }
        </div>

          </div>
        </div>
      
    </section>
  );
};

export default MySkills;
