import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

type ImageTextLayoutProps = {
  imageSrc: string | StaticImageData;
  header: string;
  paragraph: string | ReactNode;
  imagePosition: "left" | "right";
};

const ImageTextLayout = ({
  imageSrc,
  header,
  paragraph,
  imagePosition,
}: ImageTextLayoutProps) => {
  return (
    <section className="mb-10 relative">
      <div className="relative lg:flex">
        {imagePosition === "left" && (
          <div className="w-full lg:w-2/6 bg-[#F7F7F7] flex-shrink-0">
            <div
              className={`h-[400px] lg:h-[400px] w-full max-w-full bg-cover bg-center ${imagePosition === "left" ? "clip-path-custom" : ""}`}
              style={{
                backgroundImage: `url(${typeof imageSrc === "string" ? imageSrc : imageSrc.src})`,
              }}
            >
              {/* Any content or overlay */}
              <div className="bg-opacity-50 absolute inset-0 z-1"></div>
            </div>
          </div>
        )}
        <div
          className={`w-full lg:w-4/6 flex items-center justify-center ${imagePosition === "left" ? "order-first" : "order-last"}`}
        >
          <div className="w-full bg-[#F7F7F7] p-10">
            <div className="text-white p-6 max-w-4xl mx-auto">
              <h2 className="mb-6 text-2xl font-extrabold text-customeprimary">
                {header}
              </h2>
              <p className="mb-6 leading-5 tracking-wide text-sm text-left text-black dark:text-neutral-300">
                {paragraph}
              </p>
            </div>
          </div>
        </div>
        {imagePosition === "right" && (
          <div className="w-full lg:w-2/6 bg-[#F7F7F7] flex-shrink-0">
            <div
              className={`h-[400px] lg:h-[400px] w-full max-w-full bg-cover bg-center ${imagePosition === "right" ? "clip-path-custom2" : ""}`}
              style={{
                backgroundImage: `url(${typeof imageSrc === "string" ? imageSrc : imageSrc.src})`,
              }}
            >
              {/* Any content or overlay */}
              <div className="bg-opacity-50 absolute inset-0 z-1"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageTextLayout;
