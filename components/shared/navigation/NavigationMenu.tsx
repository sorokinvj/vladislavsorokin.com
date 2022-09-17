import React from "react";
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
    isOpenInNewTab: true,
  },
  {
    title: "Bio",
    url: "/posts/bio",
    isDisabled: true,
  },
];

export const NavigationMenu = () => {
  return (
    <ul className="w-full flex items-center justify-around md:w-auto md:justify-end">
      {MENU.map((item) => (
        <NavigationItem item={item} key={item.url} />
      ))}
    </ul>
  );
};
