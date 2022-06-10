import { ReactNode, FunctionComponent } from "react";
import cn from "classnames";

type Props = {
  children?: ReactNode | ReactNode[];
  className?: string;
};

const Container: FunctionComponent<Props> = ({ children, className }) => {
  return <div className={cn("container mx-auto", className)}>{children}</div>;
};

export default Container;
