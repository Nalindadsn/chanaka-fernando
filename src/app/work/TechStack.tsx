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
} from "@tabler/icons-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

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
          name: "Express",
          icon: <IconServer className="text-neutral-800 dark:text-white" />,
        },
        { name: "Prisma", icon: <IconDatabase className="text-[#2D3748]" /> },
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
          name: "Framer Motion",
          icon: <IconBrandFramer className="text-[#0055FF]" />,
        },
        { name: "Redux", icon: <IconBrandRedux className="text-[#764ABC]" /> },
        { name: "React Query", icon: <IconApi className="text-[#FF4154]" /> },
        { name: "Zustand", icon: <IconBrain className="text-[#FFB800]" /> },
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
        { name: "Figma", icon: <IconBrandFigma className="text-[#F24E1E]" /> },
        {
          name: "Docker",
          icon: <IconBrandDocker className="text-[#2496ED]" />,
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
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {techCategories.map((category, index) => (
            <CardContainer key={index} className="w-full">
              <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
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
