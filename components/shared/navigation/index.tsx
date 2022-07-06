import React from "react";
import { Logo } from "./Logo";
import { NavigationItem } from "./NavigationItem";

const MENU = [
  {
    title: "Blog",
    url: "/",
  },
  {
    title: "CV",
    url: "/assets/files/Vladislav_Sorokin_CV.pdf",
    isDownloadable: true,
  },
  {
    title: "Bio",
    url: "/posts/bio",
    isDisabled: true,
  },
];

export const Navigation = () => {
  return (
    <header className="col-start-1 col-end-4 md:col-end-9">
      <nav className="flex flex-wrap items-center justify-between md:flex-nowrap">
        <Logo />
        <ul className="w-full flex items-center justify-around mt-2 md:w-auto md:justify-end">
          {MENU.map((item) => (
            <NavigationItem item={item} key={item.url} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
