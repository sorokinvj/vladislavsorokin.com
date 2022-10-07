import React from "react";
import Image from "next/image";
import { MainPage } from "types/mainPage";

interface Props {
  page: MainPage;
}

export const Intro: React.FC<Props> = ({ page }) => {
  return (
    <div className="col-span-3 grid-container md:col-span-8">
      <h1 className="mb-8 md:mb-10 col-span-3 md:col-span-8">👋 Hi there!</h1>
      <div className="col-span-1 mx-auto md:col-span-2 order-1 md:order-2">
        <Image
          src={page.data.authorImage}
          priority
          alt="Photo of Vladislav Sorokin"
          width={156}
          height={156}
        />
      </div>
      <p className="h-min col-span-2 text-sans text-gray-700 text-[18px] leading-6 order-2 md:order-1">
        I am a professional software engineer, amateur artist, beginner chess
        player and just a curious person living in a beautiful
        Praia&nbsp;das&nbsp;Maçãs&nbsp;🇵🇹
      </p>
    </div>
  );
};
