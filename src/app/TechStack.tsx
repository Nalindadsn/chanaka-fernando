import React from "react";
import {
  IconBrain,
  IconCode,
  IconDatabase,
  IconPalette,
  IconSchool,
  IconBriefcase,
  IconRocket,
  IconTrophy,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandFramer,
  IconBrandGit,
  IconTools,
  IconDeviceDesktop,
  IconBrandVscode,
  IconApi,
  IconDeviceLaptop,
  IconBrandCpp,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandMantine,
  IconBrandRadixUi,
  IconBrandReact,
  IconBrandGithub,
  IconBrandMongodb,
  IconBrandJavascript,
  IconBrandNodejs,
  IconServer,
  IconBrandRedux,
  IconBrandFigma,
  IconBrandDocker,
  IconBrandPhp,
  IconBrandPython,
  IconBrandAws,
} from "@tabler/icons-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

function TechStack() {
  const techCategories = [
    {
      title: "Languages",
      description: "Core programming languages I work with",
      items: [
        {
          name: "JavaScript",
          icon: <IconBrandJavascript className="text-[#F7DF1E]" />,
        },
        {
          name: "TypeScript",
          icon: <IconBrandTypescript className="text-[#3178C6]" />,
        },
        { name: "HTML5", icon: <IconBrandHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <IconBrandCss3 className="text-[#1572B6]" /> },
        { name: "C++", icon: <IconBrandCpp className="text-[#00599C]" /> },
        { name: "PHP", icon: <IconBrandPhp className="text-[#00599C]" /> },
        {
          name: "JAVA",
          icon: (
            <>
              {" "}
              <Image
                src="/java.png"
                alt="java"
                width={20}
                height={20}
                className="w-8 h-8"
              />
            </>
          ),
        },
        {
          name: "Python",
          icon: <IconBrandPython className="text-[#00599C]" />,
        },
      ],
    },
    {
      title: "Frameworks",
      description: "Modern frameworks for building scalable applications",
      items: [
        { name: "React", icon: <IconBrandReact className="text-[#61DAFB]" /> },
        {
          name: "Next.js",
          icon: (
            <IconBrandNextjs className="text-neutral-800 dark:text-white" />
          ),
        },
        {
          name: "Node.js",
          icon: <IconBrandNodejs className="text-[#339933]" />,
        },
        {
          name: "Nest.js",
          icon: (
            <>
              {" "}
              <Image
                src="/nestjs.png"
                alt="nestjs"
                width={20}
                height={20}
                className="w-8 h-8"
              />
            </>
          ),
        },
        {
          name: "Spring boot",
          icon: (
            <>
              <Image
                src="/spring-boot.png"
                alt="springboot"
                width={20}
                height={20}
                className="w-8 h-8"
              />
            </>
          ),
        },
        {
          name: "Express",
          icon: <IconServer className="text-neutral-800 dark:text-white" />,
        },
        { name: "Prisma", icon: <IconDatabase className="text-[#2D3748]" /> },
        // { name: "Springboot", icon: <IconBrand className="text-[#2D3748]" /> },
      ],
    },
    {
      title: "Libraries",
      description: "Essential libraries and UI components",
      items: [
        {
          name: "Tailwind CSS",
          icon: <IconBrandTailwind className="text-[#06B6D4]" />,
        },

        {
          name: "Shadcn UI",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-6 w-6"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              ></line>
              <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              ></line>
            </svg>
          ),
        },

        {
          name: "Framer Motion",
          icon: <IconBrandFramer className="text-[#0055FF]" />,
        },
        { name: "Redux", icon: <IconBrandRedux className="text-[#764ABC]" /> },
        { name: "React Query", icon: <IconApi className="text-[#FF4154]" /> },
        { name: "Zustand", icon: <IconBrain className="text-[#FFB800]" /> },
        {
          name: "NextAuth",
          icon: (
            <svg
              width="20"
              height="25"
              viewBox="0 0 210 232"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M208.687 31.859L30.0947 167.73C8.16388 127.966 0.567559 79.9975 0 51.2275V33.6181C0 31.0567 2.7788 29.5628 4.16851 29.1356C33.5617 20.2778 93.2465 2.30524 96.8378 1.28069C100.429 0.256138 103.464 0 104.534 0H104.631C105.7 0 108.735 0.256138 112.327 1.28069C115.918 2.30524 175.603 20.2778 204.996 29.1356C206.03 29.4533 207.832 30.3613 208.687 31.859Z"
                fill="url(#paint0_linear_128_61)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.0938 167.952L208.686 32.0815C208.981 32.5983 209.164 33.1842 209.164 33.8406V51.45C208.202 100.223 187.038 204.172 110.081 229.786C109.013 230.213 106.49 231.067 104.951 231.067H104.212C102.673 231.067 100.15 230.213 99.0814 229.786C67.5193 219.281 45.3415 195.6 30.0938 167.952Z"
                fill="url(#paint1_linear_128_61)"
              />
              <path
                d="M111.74 1.28325C108.147 0.25665 105.11 0 104.04 0L103.719 231.305H104.361C105.901 231.305 108.425 230.45 109.494 230.022C186.489 204.357 207.663 100.2 208.625 51.3299V33.6853C208.625 31.1188 205.845 29.6216 204.454 29.1939C175.047 20.3181 115.333 2.30985 111.74 1.28325Z"
                fill="url(#paint2_linear_128_61)"
                fillOpacity="0.21"
              />
              <ellipse
                cx="104.905"
                cy="114.209"
                rx="47.801"
                ry="47.4802"
                fill="#E3E2FA"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M96.2435 124.475C92.6077 124.796 83.4111 123.192 78.9197 119.342C74.0971 115.208 71.541 109.718 71.541 101.697C71.541 91.7469 80.5239 81.1654 93.0355 81.4861C104.919 81.7907 112.934 88.4894 114.53 99.1307C115.363 104.684 114.514 107.353 113.854 109.426C113.752 109.749 113.654 110.057 113.568 110.359C113.247 111.429 112.798 113.76 113.568 114.53C114.337 115.3 126.079 126.614 131.854 132.174C132.388 132.816 133.458 134.42 133.458 135.703V141.799C133.458 142.761 133.201 143.082 132.175 143.082H119.342C118.594 142.975 117.096 142.248 117.096 140.195C117.096 138.006 116.863 137.684 116.396 137.039C116.316 136.928 116.228 136.807 116.134 136.666C115.492 135.703 114.209 135.703 112.926 135.703C111.643 135.703 110.68 135.382 110.039 134.741C109.397 134.099 109.397 133.137 109.718 131.854C110.039 130.57 109.718 129.287 109.076 128.966C108.974 128.915 108.856 128.848 108.723 128.772C108.019 128.372 106.896 127.734 105.547 128.004C103.943 128.325 101.697 128.004 100.414 126.721C99.131 125.437 97.5267 124.401 96.2435 124.475ZM87.5814 100.094C90.2391 100.094 92.3936 97.9393 92.3936 95.2816C92.3936 92.6239 90.2391 90.4694 87.5814 90.4694C84.9237 90.4694 82.7692 92.6239 82.7692 95.2816C82.7692 97.9393 84.9237 100.094 87.5814 100.094Z"
                fill="url(#paint3_linear_128_61)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_128_61"
                  x1="19.5695"
                  y1="96.5644"
                  x2="97.5269"
                  y2="15.0782"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#45FFC8" />
                  <stop offset="1" stopColor="#1DBBF1" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_128_61"
                  x1="73.7856"
                  y1="143.724"
                  x2="170.671"
                  y2="190.884"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D14AE8" />
                  <stop offset="0.552228" stopColor="#B628E3" />
                  <stop offset="1" stopColor="#8315FD" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_128_61"
                  x1="155.914"
                  y1="21.8152"
                  x2="155.914"
                  y2="182.542"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#20ABF5" />
                  <stop offset="0.398093" stopColor="#2A8CC3" />
                  <stop offset="1" stopColor="#A104DC" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_128_61"
                  x1="90.1481"
                  y1="99.4517"
                  x2="129.287"
                  y2="138.912"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FE5B01" />
                  <stop offset="1" stopColor="#FFB200" />
                </linearGradient>
              </defs>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Tools",
      description: "Development and productivity tools",
      items: [
        { name: "Git", icon: <IconBrandGit className="text-[#F05032]" /> },
        {
          name: "VS Code",
          icon: <IconBrandVscode className="text-[#007ACC]" />,
        },
        {
          name: "Intellij IDEA",
          icon: (
            <>
              <Image
                src="/intellij.png"
                alt="intellij"
                width={20}
                height={20}
                className="w-8 h-8"
              />
            </>
          ),
        },
        { name: "Figma", icon: <IconBrandFigma className="text-[#F24E1E]" /> },
        {
          name: "Docker",
          icon: <IconBrandDocker className="text-[#2496ED]" />,
        },
        {
          name: "Kubernetes",
          icon: (
            <>
              <Image
                src="/kubernetes.png"
                alt="kubernetes"
                width={20}
                height={20}
                className="w-8 h-8"
              />
            </>
          ),
        },
        {
          name: "Aws",
          icon: <IconBrandAws className="text-[#FF9900]" />,
        },
        { name: "Postman", icon: <IconApi className="text-[#FF6C37]" /> },
      ],
    },
  ];
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
            Tech Stack
          </h2>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            Technologies and tools I work with
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {techCategories.map((category, index) => (
            <CardContainer key={index} className="w-full py-0">
              <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-neutral-800 dark:text-neutral-200"
                >
                  {category.title}
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-600 dark:text-neutral-400 text-sm max-w-sm mt-2"
                >
                  {category.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex flex-col items-center p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <div className="w-8 h-8 mb-2">{item.icon}</div>
                        <span className="text-sm text-neutral-700 dark:text-neutral-300 text-center">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TechStack;
