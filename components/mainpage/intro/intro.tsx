import React from "react";
import Image from "next/image";

export const Intro: React.FC = () => {
  return (
    <div className="col-span-3 grid-container md:col-span-8">
      <h1 className="h-min mb-8 md:mb-10 col-span-3 md:col-span-8">
        👋 Hi there!
      </h1>
      <p className="h-min col-span-2 text-sans text-gray-700 text-[18px] leading-6 order-2 md:order-1 md:col-span-5">
        I am a professional software engineer, amateur artist, beginner chess
        player and just a curious person living in a beautiful
        Praia&nbsp;das&nbsp;Maçãs&nbsp;🇵🇹
      </p>
      <div className="col-span-1 mx-auto md:col-span-3 order-1 md:order-2 md:mt-[-77px]">
        <Image
          src="/assets/images/intro.png"
          priority
          alt="Photo of Vladislav Sorokin"
          width={156}
          height={156}
        />
      </div>
    </div>
  );
};
