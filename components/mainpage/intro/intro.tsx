import React from "react";
import Image from "next/image";
import introStyles from "./intro.module.css";
import cn from "classnames";
import { MainPage } from "types/mainPage";

interface Props {
  page: MainPage;
}

export const Intro: React.FC<Props> = ({ page }) => {
  return (
    <div className="col-span-3 grid-container items-center mb-20 md:col-span-8 md:items-start md:mt-20">
      <div className="col-span-3 mx-auto mb-10 md:m-0 md:col-span-2">
        <Image
          src={page.data.authorImage}
          priority
          alt="Photo of Vladislav Sorokin"
          width={156}
          height={156}
        />
      </div>
      <div
        className={cn(
          introStyles["intro"],
          "col-span-3 text-center mx-auto md:text-left md:col-span-5 md:m-0"
        )}
        dangerouslySetInnerHTML={{ __html: page.intro }}
      />
    </div>
  );
};
