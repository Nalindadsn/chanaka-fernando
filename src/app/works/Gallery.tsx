import Image from "next/image";
import React from "react";

function Gallery() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="/gallery/1.jpg"
              alt="gallery-photo"
              width={486}
              height={531}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="/gallery/2.jpg"
              alt="gallery-photo"
              width={486}
              height={531}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="/gallery/3.jpg"
              alt="gallery-photo"
              width={486}
              height={531}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="/gallery/4.jpg"
              alt="gallery-photo"
              width={486}
              height={531}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="/gallery/5.jpg"
              alt="gallery-photo"
              width={486}
              height={531}
            />
          </div>
          <div></div>
        </div>
        <div className="grid gap-4">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="grid gap-4">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
