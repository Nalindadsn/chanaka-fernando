"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Star, User } from "lucide-react";
import { IconStarFilled } from "@tabler/icons-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
const testiminials=[
  {
    name:"Anna P",
    position:"Cooking Class Participant",
    image:"/testiminial/1.jpg",
    rating:5,
    feedback:"Chef Chanaka made the cooking lecture both fun and educational. The way complex techniques were explained in simple steps kept everyone engaged. I left not only with new skills but also with the confidence to try them at home. Truly inspiring!"
  },
  {
    name:"David Smith ",
    position:"Corporate Event Client",
    image:"/testiminial/2.jpg",
    rating:5,
    feedback:"Working with 3Flavours Jet Catering was an absolute pleasure. From the planning stage to the final service, everything was handled with professionalism and care. The food was outstanding—fresh, flavorful, and beautifully presented. Our guests couldn’t stop talking about the experience. Truly a first-class catering service!"
  },
  {
    name:"Williams ",
    position:"Jet Catering",
    image:"/testiminial/3.jpg",
    rating:5,
    feedback:"Chef Chanaka Fernando is an exceptional Executive Chef and Consultant. His expertise in menu development, kitchen management, and culinary innovation has transformed our dining experience. Beyond his remarkable cooking skills, his ability to guide teams, share knowledge, and bring out the best in others truly sets him apart. Working with him has been an inspiring and rewarding journey."
  },
]
  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {testiminials.map((post,index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number text-center">
                <div className="">
<div className="w-full flex justify-center">
  {
    post?.image ?
    <Image
                    src={post?.image}
                    alt="testiminial"
                    width={100}
                    height={100}
                    className=" relative z-10 w-[80px]  h-[80px] rounded-full border-4 border-white shadow-lg mb-3"
                  />:<div className=" border-4 border-yellow-700 bg-white rounded-full  p-3 mb-2">
    <User className="h-12 w-12 text-black"/>
  </div>
  }
  
  
                </div>
                <div className="text-sm font-normal  text-neutral-300 ">
                  <div className="flex w-full justify-center">
                    <IconStarFilled className="text-yellow-400 w-4 h-4"/>
                    <IconStarFilled className="text-yellow-400 w-4 h-4"/>
                    <IconStarFilled className="text-yellow-400 w-4 h-4"/>
                    <IconStarFilled className="text-yellow-400 w-4 h-4"/>
                    <IconStarFilled className="text-yellow-400 w-4 h-4"/>
                  </div>
                  <h2 className="text-2xl">{post?.name}</h2>
                  <h2 className="text-sm underline ">{post?.position}</h2>
                  <p>
                    {post?.feedback}
                  </p>
                </div>
                </div>
                
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
