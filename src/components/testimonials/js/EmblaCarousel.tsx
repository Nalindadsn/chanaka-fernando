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

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number text-center">
                <div className="">
<div className="w-full flex justify-center">
  {
    index===0 ?
    <Image
                    src="/testiminial1.jpg"
                    alt="img"
                    width={100}
                    height={100}
                    className=" relative z-10 w-[80px]  h-[80px] rounded-full border-4 border-white shadow-lg mb-3"
                  />:<div className=" border-4 border-yellow-700 bg-white rounded-full  p-3 mb-2">
    <User className="h-12 w-12 text-black"/>
  </div>
  }
  
  
                  {/* <Image
                    src="/gold-medal.png"
                    alt="img"
                    width={192}
                    height={324}
                    className=" relative z-10 w-[80px] "
                  /> */}
                </div>
                <div className="text-sm font-normal  text-neutral-300 ">
                  <div className="flex w-full justify-center">
                    <IconStarFilled className="text-yellow-400 w-4 h-4"/>
                    <IconStarFilled className="text-yellow-400 w-4 h-4"/>
                    <IconStarFilled className="text-yellow-400 w-4 h-4"/>
                    <IconStarFilled className="text-yellow-400 w-4 h-4"/>
                    <IconStarFilled className="text-yellow-400 w-4 h-4"/>
                  </div>
                  <h2 className="text-2xl">Mr Bandara Dissanayaka.</h2>
                  <h2 className="text-sm underline ">Excecutive Chef</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, adipisci molestiae ducimus fugiat omnis veritatis
                  quo, non dignissimos fugit dolor rem et! Culpa sunt facere
                  distinctio id quae commodi. Iure!
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
