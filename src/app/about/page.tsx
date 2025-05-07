import { Timeline } from "@/components/ui/timeline";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  IconBriefcase,
  IconRocket,
  IconSchool,
  IconTrophy,
} from "@tabler/icons-react";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  const journey = [
    {
      year: "2016",
      title: "Started Coding Journey",
      description:
        "Discovered my passion for web development and began learning the fundamentals of HTML, CSS, and JavaScript.",
      icon: <IconSchool className="w-6 h-6" />,
    },
    {
      year: "2017",
      title: "First Professional Project",
      description:
        "Completed my first professional web development project using React and Node.js.",
      icon: <IconBriefcase className="w-6 h-6" />,
    },
    {
      year: "2018",
      title: "First Professional Project",
      description:
        "Completed my first professional web development project using React and Node.js.",
      icon: <IconBriefcase className="w-6 h-6" />,
    },
    {
      year: "2019",
      title: "First Professional Project",
      description:
        "Completed my first professional web development project using React and Node.js.",
      icon: <IconBriefcase className="w-6 h-6" />,
    },
    {
      year: "2020",
      title: "First Professional Project",
      description:
        "Completed my first professional web development project using React and Node.js.",
      icon: <IconBriefcase className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "First Professional Project",
      description:
        "Completed my first professional web development project using React and Node.js.",
      icon: <IconBriefcase className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "Expanded Tech Stack",
      description:
        "Mastered Next.js, TypeScript, and modern web development practices. Started contributing to open source.",
      icon: <IconRocket className="w-6 h-6" />,
    },
    {
      year: "2023",
      title: "Advanced Projects",
      description:
        "Led development of complex web applications. Focused on performance optimization and scalability.",
      icon: <IconTrophy className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Advanced Projects",
      description:
        "Led development of complex web applications. Focused on performance optimization and scalability.",
      icon: <IconTrophy className="w-6 h-6" />,
    },
    {
      year: "2025",
      title: "Advanced Projects",
      description:
        "Led development of complex web applications. Focused on performance optimization and scalability.",
      icon: <IconTrophy className="w-6 h-6" />,
    },
  ];
  return (
    <div>
      <section className="bg-gray-900 text-white relative pt-14 overflow-x-hidden">
        <div className="grid max-w-screen-xl px-4 pt-0 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              My Works
            </h1>
            <div className="bg-orange-500 p-1  w-[100px]"></div>
            <div className="flex gap-1 mt-2">
              <Link
                href="/"
                className="text-white inline-flex items-center gap-2 items-center justify-center px-0 sm:px-5 py-3 mr-3 text-base font-medium text-center dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                <ArrowLeft />
                Home
              </Link>
              <Link
                href="/contact"
                className="text-white z-100 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="relative lg:mt-0 lg:col-span-5 lg:flex mt-10">
            <div className="right-0 absolute -bottom-10 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              <div className="absolute -bottom-0 -left-15 z-100">
                {" "}
                <span className="text-sm text-sm">Nalinda Dissanayaka</span>
                <div className="bg-orange-500 px-2  whitespace-nowrap text-sm text-white rounded-full">
                  Full Stack Developer
                </div>
              </div>

              <Image
                src="/nalinda-dissanayaka.png"
                alt="img"
                width={200}
                height={200}
                className="scale-110 relative z-10 w-[200px] "
              />
            </div>
          </div>
        </div>
      </section>
      {/* Journey Section */}
      <section className="relative px-4 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <TracingBeam>
            <h2
              className="text-3xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent 
              bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400"
            >
              My Journey
            </h2>

            {/* <TracingBeam className="px-6"> */}
            <div className="max-w-2xl mx-auto">
              <Timeline items={journey} />
            </div>
            {/* </TracingBeam> */}
          </TracingBeam>
        </div>
      </section>
    </div>
  );
}

export default page;
