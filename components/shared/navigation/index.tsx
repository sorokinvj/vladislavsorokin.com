import React from "react";
import { Logo } from "./Logo";
import { NavigationMenu } from "./NavigationMenu";

export const Navigation = () => {
  return (
    <header className="mt-8 md:mt-12">
      <nav className="flex flex-wrap items-center justify-between md:flex-nowrap">
        <Logo />
        <NavigationMenu />
      </nav>
    </header>
  );
};
