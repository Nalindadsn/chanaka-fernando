import PageHeader from "@/components/PageHeader";
import { Timeline } from "@/components/ui/timeline";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  IconBriefcase,
  IconRocket,
  IconSchool,
  IconTrophy,
} from "@tabler/icons-react";
import { ArrowBigLeft, ArrowLeft, Info } from "lucide-react";
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
      title: "Completed First Application with Laravel",
      description:
        "Completed my first web development project using Laravel and MySQL.",
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
      title: "Complated spring boot project",
      description:
        "Completed my first professional backend project using Spring Boot.",
      icon: <IconTrophy className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Cloud Services",
      description:
        "Implemented cloud-based solutions for efficient deployment and management.",
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
      <PageHeader page="Who Am I" icon={<Info className='w-4 h-4 text-yellow-600'/>}/>
      {/* Journey Section */}
      <div className="w-full">
           
           <div className="max-w-3xl mx-auto flex justify-center w-full">
<div> <span className="text-yellow-500 text-5xl">{`“`}</span> I care about my clients, and I enjoy the challenge of meeting their expectations. It’s my responsibility to meet their needs and to deliver the best of the best. As more people are health conscious these days, my clients are looking for healthy meals with fresh ingredients no matter what time of the day. Classic dishes can be tweaked, and I can introduce creative ideas to design specialist dishes.
  <br />
              <span className="text-yellow-500 text-5xl float-right">{`”`}</span></div>
           </div>
          
      </div>

      <section className="relative px-4 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <TracingBeam>
            <h2
              className="text-3xl md:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent 
              bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400"
            >
             Who Am I
            </h2>

            {/* <TracingBeam className="px-6"> */}
            <div className="md:ml-0 ml-8">
              {/* <Timeline items={journey} /> */}
              <h2 className="text-2xl  font-semibold mb-5 text-yellow-100">
                {" "}
                CHANAKA FERNANDO | World-renowned Chef & Representative for
                United Kingdom & Sri Lanka is announced as an official
                AMBASSADOR OF TASTE FOR THE GLOBAL GASTRONOMY® GOLD MEDALLIST
                2025 for 5th consecutive year!
              </h2>
              <h3 className="text-xl  font-semibold  mb-5">
                CHANAKA FERNANDO | the MOTIVATOR , the CONSULTANT, the MENTOR …
                the VISIONARY CHEF
              </h3>
              Executive Chef & owner of "3 FLAVOURS" project in the UK, Chanaka
              Fernando is passionate and his cooking techniques are truly
              amazing! He started his carrier at very young age and settled in
              London where he studied at he Asian and Oriental School of
              catering in Hackney. He worked his way up the chef ladder by
              working under such celebrity chefs as Gordon Ramsey, Marcus
              Wareing, Mark Hix, Allan Williams, Lee Streeton and Sujan Sarkar.
              He was a former Executive Chef for the Buddha- Bar, London and
              till today he is devoted in mastering a great variety of cuisines
              like traditional and modern European (English, French,
              Mediterranean) and also Asian & fusion cuisine. ​​
              <br />
              <br />
              The Chef's mission goes along with the core values of Ambassadors
              of Taste for the Global Gastronomy® organization & guide, such us:
              "Achievement of a sustainable gastronomy","Cultural heritage
              preservation", "Environmental sustainability", "Humanitarian aid"
              and need for "Unity and peace" ​​
              <br />
              <br />
              This official award is considered as the top honor for Chefs and
              other entities connected with high-end gastronomy, in the world.
              ​​
              <br />
              <br />
              The global organization & guide AMBASSADORS OF TASTE FOR THE
              GLOBAL GASTRONOMY® certified & awarded Mr. CHANAKA FERNANDO with
              the honorary title of AMBASSADORS OF TASTE FOR THE GLOBAL
              GASTRONOMY® Gold Medal 2025 for his dedication in sustainable
              gastronomy and for his inspiring vision to promote local cuisines
              and transmit his knowledge to younger student-chefs. ​​
              <br />
              <br />
              <strong>
                The Ambassadors of Taste for the Global Gastronomy® organization{" "}
              </strong>{" "}
              & guide stands as an international, pioneering entity for
              Public-Private Cooperation that provides a unique, international
              and impartial platform for meaningful connection between key
              players of tourism and food commerce via establishing trust, and
              building initiatives for long-lasting partnerships and progress.
            </div>
            {/* </TracingBeam> */}
          </TracingBeam>
        </div>
      </section>
    </div>
  );
}

export default page;
