import { ReactNode } from "react";
import "./layout.scss";

export const HeaderLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="header-layout">
      <div className="content">{children}</div>
    </div>
  );
};

export const PageLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`page-layout ${className}`}>
      <div className="content">{children}</div>
    </div>
  );
};
export const Layout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`layout ${className}`}>
      <div className="content">{children}</div>
    </div>
  );
};
