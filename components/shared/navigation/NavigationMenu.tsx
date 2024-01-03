import React from "react";
import { NavigationItem } from "./NavigationItem";

const MENU = [
  {
    title: "Blog",
    url: "/",
  },
  {
    title: "CV",
    url: "/posts/cv-updated-2024",
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
    <ul className="w-full mt-4 md:mt-0 flex items-center justify-around md:w-auto md:justify-end">
      {MENU.map((item) => (
        <NavigationItem item={item} key={item.url} />
      ))}
    </ul>
  );
};
