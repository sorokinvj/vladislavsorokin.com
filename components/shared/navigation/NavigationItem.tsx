import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

type NavigationLink = {
  title: string;
  url: string;
  isDisabled?: boolean;
  isDownloadable?: boolean;
  isOpenInNewTab?: boolean;
};

interface Props {
  item: NavigationLink;
}

export const NavigationItem: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  const isActive = router.pathname === item.url;

  if (item?.isDisabled) {
    return (
      <p className="text-disabled md:mr-14 md:text-[23px]">{item.title}</p>
    );
  }

  return (
    <Link href={item.url} download={item?.isDownloadable} passHref>
      <a
        target={item?.isOpenInNewTab ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={
          isActive
            ? "md:mr-14 md:text-[23px] cursor-pointer no-underline text-yellow"
            : "md:mr-14 md:text-[23px] cursor-pointer no-underline hover:underline hover:decoration-yellow hover:underline-offset-4"
        }
      >
        {item.title}
      </a>
    </Link>
  );
};
