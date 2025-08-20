import { Dot, GitBranchIcon, PauseCircle, Video, VideoIcon } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className=" mx-auto py-20 px-5 flex flex-col gap-16 w-full md:w-7xl p-5">
    <div className="title p-2 flex justify-center font-semibold bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent text-3xl md:text-7xl">
      <h1>Projects & Technology</h1>
    </div>

    <div className="title p-2 flex justify-center font-semibold bg-gradient-to-r from-stone-800 to-amber-50 bg-clip-text text-transparent text-3xl">
      <h1>Unity Games</h1>
    </div>

    <div className="card1 flex flex-col gap-10 items-center justify-between ">
      <div className="">
        <iframe className=" w-full md:w-[560px]  md:h-[315px]"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/BNr6aN7q0FE?si=jcJ6ZkP01dJQ_rAL"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex flex-col gap-2 ">
        <div className="heading flex flex-col">
          <h2
            className="bg-gradient-to-r from-purple-500
           to-purple-100 bg-clip-text  text-transparent text-3xl font-semibold flex justify-center"
           >
            Vimpare Dairy
          </h2>
          <div className="para">
            <p className="text-neutral-200 line-clamp-6 ">
              <span
                className="bg-gradient-to-r from-purple-500
           to-purple-100 bg-clip-text  text-transparent text-2xl md:text-3xl font-semibold "
              >
                Description :{" "}
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              labore laudantium! Eius repellendus eveniet aliquid id ipsum
              consequatur, eligendi harum ducimus soluta aspernatur suscipit
              tempora voluptatum esse consectetur. In ipsam recusandae eos
              vitae, earum maiores maxime, laudantium eum labore harum veniam
              quos tempora. Illum nam dicta pariatur libero at obcaecati!
            </p>
          </div>
        </div>

        <div className="l1 flex  justify-center flex-col md:flex-row gap-10">
         
          <div className="l1  ">
            <h1
              className="bg-gradient-to-r from-purple-500 to-purple-50 bg-clip-text text-transparent text-2xl border border-l-2 border-b-blue-600 font-semibold mb-2  gap-2
                               hover:scale-110 hover:font-bold duration-150"
            >
              Tech & tool
            </h1>

            <ul className=" flex flex-col gap-1 font-semibold">
              <li
                className="bg-gradient-to-r from-purple-500 to-yellow-50 bg-clip-text text-transparent
                inline-flex  gap-2 font-semibold
                               hover:scale-110 hover:font-bold duration-150"
              >
                <Dot color="yellow " /> Unity
              </li>
              <li
                className="bg-gradient-to-r from-purple-500 to-purple-50 bg-clip-text text-transparent
                inline-flex  gap-2 font-semibold
                               hover:scale-110 hover:font-bold duration-150"
              >
                <Dot color="yellow" /> C #
              </li>
              <li
                className="bg-gradient-to-r from-purple-500 to-purple-50 bg-clip-text text-transparent
                inline-flex  gap-2 font-semibold
                               hover:scale-110 hover:font-bold duration-150"
              >
                <Dot color="yellow" /> json
              </li>
              <li
                className="bg-gradient-to-r from-purple-500 to-yellow-50 bg-clip-text text-transparent
                inline-flex  gap-2 font-semibold
                               hover:scale-110 hover:font-bold duration-150"
              >
                <Dot color="yellow" /> Mobile
              </li>
            </ul>
          </div>


          <div className="l2  ">
            <h1
              className="bg-gradient-to-r from-purple-500 to-purple-50 bg-clip-text text-transparent text-2xl border border-l-2 border-b-blue-600 font-semibold mb-2  gap-2 
                               hover:scale-110 hover:font-bold duration-150 "
            >
              Design pattern
            </h1>

            <ul className=" flex flex-col gap-1 font-semibold">
              <li
                className="bg-gradient-to-r from-purple-500 to-yellow-50 bg-clip-text text-transparent
                inline-flex  gap-2 font-semibold
                               hover:scale-110 hover:font-bold duration-150"
              >
                <Dot color="yellow" /> MVP
              </li>
              <li
                className="bg-gradient-to-r from-purple-500 to-purple-50 bg-clip-text text-transparent
                inline-flex  gap-2 font-semibold
                               hover:scale-110 hover:font-bold duration-150"
              >
                <Dot color="yellow" /> Observer
              </li>
              <li
                className="bg-gradient-to-r from-purple-500 to-purple-50 bg-clip-text text-transparent
                inline-flex  gap-2 font-semibold
                               hover:scale-110 hover:font-bold duration-150 "
              >
                <Dot color="yellow" /> Singleton
              </li>
              <li
                className="bg-gradient-to-r from-purple-500 to-yellow-50 bg-clip-text text-transparent
                inline-flex gap-2 font-semibold
                               hover:scale-110 hover:font-bold duration-150"
              >
                <Dot color="yellow " /> StateMachine
              </li>
            </ul>
          </div>

          <div className="l3  links ">
            <h1
              className="bg-gradient-to-r from-purple-500 to-purple-50 bg-clip-text text-transparent text-2xl border border-l-2 border-b-blue-600 font-semibold mb-2   gap-2 
                               hover:scale-110 hover:font-bold duration-150"
            >
              Links
            </h1>

            <ul className=" flex flex-col gap-1 font-semibold">
              <li className=" inline-flex">
                <Dot color="yellow" />
                <Link
                  className="inline-flex gap-2 text-green-400 font-semibold
                               hover:scale-110 hover:font-bold duration-150"
                  href="/"
                >
                  GITHUB <GitBranchIcon color="green" />
                </Link>
              </li>

              <li className=" inline-flex">
                <Dot color="yellow" />{" "}
                <Link
                  className="inline-flex gap-2 text-green-400 font-semibold
                               hover:scale-110 hover:font-bold duration-150"
                  href="/"
                >
                  Vedio <VideoIcon color="green" />
                </Link>
              </li>

              <li className=" inline-flex">
                <Dot color="yellow" />
                <Link
                  className="inline-flex gap-2 text-green-400 font-semibold
                               hover:scale-110 hover:font-bold duration-150"
                  href="/"
                >
                  Play <PauseCircle color="Red" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="title p-2 flex justify-center font-semibold bg-gradient-to-r from-green-600 to-amber-50 bg-clip-text text-transparent text-6xl">
      <h1> Game Design</h1>
    </div>
  </div>
  )
}

export default Projects
