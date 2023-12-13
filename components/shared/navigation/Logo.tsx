import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" passHref>
      <a className="no-underline font-normal text-2xl leading-none md:text-5xl font-title -tracking-3 w-full text-center md:text-left">
        Vladislav Sorokin
      </a>
    </Link>
  );
};
