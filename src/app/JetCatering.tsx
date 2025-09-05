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
function JetCatering() {
  const bentoItems = [
    {
      title:
        "Global Ambassador Representative, United Kingdom | Entrepreneur | Head Counselor | Executive Chef",
      description: (
        <div className="flex justify-between items-center">
          <ul>
            <li className="flex gap-2 items-center">
              <IconCapsuleHorizontalFilled className="h-5 w-8 text-neutral-800" />{" "}
              MOTIVATOR{" "}
            </li>
            <li className="flex gap-2 items-center">
              <IconCapsuleHorizontalFilled className="h-5 w-8 text-neutral-800" />{" "}
              CONSULTANT
            </li>
            <li className="flex gap-2 items-center">
              <IconCapsuleHorizontalFilled className="h-5 w-8 text-neutral-800" />{" "}
              MENTOR
            </li>
            <li className="flex gap-2 items-center">
              <IconCapsuleHorizontalFilled className="h-5 w-8 text-neutral-800" />{" "}
              VISIONARY CHEF
            </li>
          </ul>
          <div>
            <IconToolsKitchen2 className="h-12 w-12 text-yellow-600" />
          </div>
        </div>
      ),
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
    <div className="relative flex items-center">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam
        architecto adipisci quibusdam dolor totam ad deleniti aliquam quos?
        Accusantium laudantium nemo omnis nulla deleniti quasi quos voluptates
        consequuntur. Ullam!
      </div>
      <div className="">
        <Image
          src="/private-jet.png"
          alt="img"
          width={410}
          height={609}
          className=" relative z-10 w-[500px] w-full nax-h-[600px] max-w-[400px]"
        />
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate libero nostrum obcaecati omnis aspernatur velit dignissimos impedit modi architecto hic debitis repellat cum maxime, rem ut doloremque iste, sequi delectus!
      </div>
    </div>
  );
}

export default JetCatering;
