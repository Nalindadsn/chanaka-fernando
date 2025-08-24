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
import { User } from "lucide-react";

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
  <div className=" border-4 border-yellow-700 bg-yellow-600 rounded-full  p-6 mb-2">
    <User className="h-12 w-12 text-black"/>
  </div>
  
                  {/* <Image
                    src="/gold-medal.png"
                    alt="img"
                    width={192}
                    height={324}
                    className=" relative z-10 w-[80px] "
                  /> */}
                </div>
                <div className="text-sm font-semibold">
                  <h2 className="text-2xl">Mr Bandara Dissanayaka.</h2>
                  <h2 className="text-sm ">Excecutive Chef</h2><hr/>
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
