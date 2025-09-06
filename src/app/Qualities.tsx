import React from "react";
import {
  IconBrain,
  IconCapsuleHorizontalFilled,
  IconChefHat,
  IconCode,
  IconDatabase,
  IconPalette,
  IconToolsKitchen2,
} from "@tabler/icons-react";
import { CardGlow } from "@/components/ui/card-glow";
import { cn } from "@/lib/utils";
import Image from "next/image";
function Qualities() {
  const bentoItems = [
    {
      title: "Global Ambassador Representative, United Kingdom | Entrepreneur | Head Counselor | Executive Chef",
      description:
        <div className="flex justify-between items-center">
          <ul>
            <li className="flex gap-2 items-center"><IconCapsuleHorizontalFilled className="h-5 w-8 text-neutral-800" /> MOTIVATOR </li>
            <li className="flex gap-2 items-center"><IconCapsuleHorizontalFilled className="h-5 w-8 text-neutral-800" />  CONSULTANT</li>
            <li className="flex gap-2 items-center"><IconCapsuleHorizontalFilled className="h-5 w-8 text-neutral-800" />   MENTOR</li>
            <li className="flex gap-2 items-center"><IconCapsuleHorizontalFilled className="h-5 w-8 text-neutral-800" />  VISIONARY CHEF</li>
          </ul>
          <div>
            <IconToolsKitchen2 className="h-12 w-12 text-yellow-600" />
          </div>
        </div>,
      header: "Main Focus",
      className: "md:col-span-2",
      icon: <IconChefHat className="h-8 w-8 text-neutral-500" />,
    },
    {
      title: "2",
      description: "Bringing ideas to life with clean, efficient code",
      header: "Approach",
      icon: <IconPalette className="h-8 w-8 text-neutral-500" />,
    },
    
    
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  items-center relative">
        {bentoItems.map((item, i) => (
          <div
            key={i}
            className={cn("group relative col-span-1", item.className,i==0&& "m-5  overflow-hidden" )}
          >
            
              {item.title=="2"?<div className="text-right relative flex justify-end items-end overflow-hidden border-t-8  border-yellow-600">
                <div className="md:hidden flex">
<div className="overflow-hidden min-w-[200px] absolute bottom-0 left-0 mr-[40%] z-[10] text-shadow-md bg-[rgba(0,0,0,.8)] p-3  "><span className="text-yellow-500 text-5xl">{`“`}</span>I care about my clients, and I enjoy the
challenge of meeting their expectations. It{`’`}s
my responsibility to meet their needs and to
deliver the best of the best. As more people
are health conscious these days, my clients
are looking for healthy meals with fresh
ingredients no matter what time of the day.
Classic dishes can be tweaked, and I can
introduce creative ideas to design specialist
dishes.<br/><span className="text-yellow-500 text-5xl">{`”`}</span></div>
                </div>
                <Image
                              src="/chanaka-fernando-header.png"
                              alt="img"
                              width={410}
                              height={609}
                              className="scale-110 relative  w-[400px] z-1"
                            /></div>:<CardGlow><div className="flex flex-col justify-between min-h-[200px]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <p className="text-sm text-neutral-800 dark:text-neutral-500">
                      {item.header}
                    </p>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-neutral-200 mb-2">
                    {item.title=="2"?"img":item.title}
                  </h3>
                  <div className="text-neutral-800 dark:text-neutral-400">
                    {item.description}
                  </div>
                </div>
              </div></CardGlow>}
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Qualities;
