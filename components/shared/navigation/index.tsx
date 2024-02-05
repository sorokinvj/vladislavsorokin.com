import React from "react";
import { Logo } from "./Logo";

export const Navigation = () => {
  return (
    <header className="mt-8 md:mt-10">
      <nav className="flex flex-wrap items-center justify-between md:flex-nowrap">
        <Logo />
      </nav>
    </header>
  );
};
