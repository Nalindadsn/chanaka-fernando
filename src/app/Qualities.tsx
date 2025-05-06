import React from "react";
import {
  IconBrain,
  IconCode,
  IconDatabase,
  IconPalette,
} from "@tabler/icons-react";
import { CardGlow } from "@/components/ui/card-glow";
import { cn } from "@/lib/utils";
function Qualities() {
  const bentoItems = [
    {
      title: "Tech Enthusiast",
      description:
        "Passionate about modern web technologies and innovative solutions",
      header: "Main Focus",
      className: "md:col-span-2",
      icon: <IconCode className="h-8 w-8 text-neutral-500" />,
    },
    {
      title: "Creative Development",
      description: "Bringing ideas to life with clean, efficient code",
      header: "Approach",
      icon: <IconPalette className="h-8 w-8 text-neutral-500" />,
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices",
      header: "Philosophy",
      icon: <IconBrain className="h-8 w-8 text-neutral-500" />,
    },
    {
      title: "Full Stack Focus",
      description: "From frontend finesse to backend robustness",
      header: "Expertise",
      className: "md:col-span-2",
      icon: <IconDatabase className="h-8 w-8 text-neutral-500" />,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 relative">
        {bentoItems.map((item, i) => (
          <div
            key={i}
            className={cn("group relative col-span-1", item.className)}
          >
            <CardGlow>
              <div className="flex flex-col justify-between min-h-[200px]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <p className="text-sm text-neutral-600 dark:text-neutral-500">
                      {item.header}
                    </p>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </CardGlow>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Qualities;
