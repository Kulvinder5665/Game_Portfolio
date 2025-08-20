import { Dot, GitBranchIcon, PauseCircle, VideoIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import { projectData } from "@/lib/data";

const Projects = () => {
  return (
    <div className="mx-auto py-20 px-5 flex flex-col gap-16 w-full md:w-7xl">
      <div className="title p-2 flex justify-center font-semibold bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent text-3xl md:text-7xl">
        <h1>Projects & Technology</h1>
      </div>

      {projectData.map((project) => (
        <div
          key={project.id}
          className="card1 flex flex-col gap-10 items-center justify-between"
        >
          <div>
            <iframe
              className="w-full md:w-[560px] md:h-[315px]"
              src={project.videoSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col gap-2">
            <div className="heading flex flex-col">
              <h2
                className="bg-gradient-to-r from-purple-500 to-purple-100 bg-clip-text text-transparent text-3xl font-semibold flex justify-center"
              >
                {project.title}
              </h2>
              <div className="para">
                <p className="text-neutral-200 line-clamp-6">
                  <span
                    className="bg-gradient-to-r from-purple-500 to-purple-100 bg-clip-text text-transparent text-2xl md:text-3xl font-semibold"
                  >
                    Description :{" "}
                  </span>
                  {project.description}
                </p>
              </div>
            </div>

            <div className="l1 flex justify-center flex-col md:flex-row gap-10">

              <div className="l1">
                <h1
                  className="bg-gradient-to-r from-purple-500 to-purple-50 bg-clip-text text-transparent text-2xl border border-l-2 border-b-blue-600 font-semibold mb-2 gap-2
                                 hover:scale-110 hover:font-bold duration-150"
                >
                  Tech & Tools
                </h1>

                <ul className="flex flex-col gap-1 font-semibold">
                  {project.techAndTools.map((tool, index) => (
                    <li
                      key={index}
                      className="bg-gradient-to-r from-purple-500 to-yellow-50 bg-clip-text text-transparent inline-flex gap-2 font-semibold hover:scale-110 hover:font-bold duration-150"
                    >
                      <Dot color="yellow" /> {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="l2">
                <h1
                  className="bg-gradient-to-r from-purple-500 to-purple-50 bg-clip-text text-transparent text-2xl border border-l-2 border-b-blue-600 font-semibold mb-2 gap-2 hover:scale-110 hover:font-bold duration-150"
                >
                  Design Patterns
                </h1>

                <ul className="flex flex-col gap-1 font-semibold">
                  {project.designPatterns.map((pattern, index) => (
                    <li
                      key={index}
                      className="bg-gradient-to-r from-purple-500 to-yellow-50 bg-clip-text text-transparent inline-flex gap-2 font-semibold hover:scale-110 hover:font-bold duration-150"
                    >
                      <Dot color="yellow" /> {pattern}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="l3 links">
                <h1
                  className="bg-gradient-to-r from-purple-500 to-purple-50 bg-clip-text text-transparent text-2xl border border-l-2 border-b-blue-600 font-semibold mb-2 gap-2 hover:scale-110 hover:font-bold duration-150"
                >
                  Links
                </h1>

                <ul className="flex flex-col gap-1 font-semibold">
                  {project.links.map((link) => (
                    <li key={link.id} className="inline-flex">
                      <Dot color="yellow" />
                      <Link
                        href={link.url}
                        className="inline-flex gap-2 text-green-400 font-semibold hover:scale-110 hover:font-bold duration-150"
                      >
                        {link.label}
                        {link.label === "GitHub" && (
                          <GitBranchIcon color="green" />
                        )}
                        {link.label === "Video" && <VideoIcon color="green" />}
                        {link.label === "Play" && (
                          <PauseCircle color="red" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="title p-2 flex justify-center font-semibold bg-gradient-to-r from-green-600 to-amber-50 bg-clip-text text-transparent text-6xl">
        <h1>Game Design</h1>
      </div>
    </div>
  );
};

export default Projects;
