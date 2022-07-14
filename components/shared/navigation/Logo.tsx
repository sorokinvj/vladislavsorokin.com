import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" passHref>
      <a className="no-underline text-[40px] md:text-[52px] font-title -tracking-3 w-full text-center md:text-left">
        Vladislav Sorokin
      </a>
    </Link>
  );
};
