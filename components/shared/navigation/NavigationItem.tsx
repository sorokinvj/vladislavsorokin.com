import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

type NavigationLink = {
  title: string;
  url: string;
  isDisabled?: boolean;
  isDownloadable?: boolean;
};

interface Props {
  item: NavigationLink;
}

export const NavigationItem: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  const isActive = router.pathname === item.url;
  console.log(isActive, router.pathname, item.url);
  if (item?.isDisabled) {
    return <p className="text-disabled md:mr-14">{item.title}</p>;
  }
  return (
    <Link href={item.url} download={item?.isDownloadable} passHref>
      <span className={isActive ? "text-primary md:mr-14" : "md:mr-14"}>
        {item.title}
      </span>
    </Link>
  );
};
