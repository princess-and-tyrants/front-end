import { ReactNode } from 'react';
import './layout.scss';

export const HeaderLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="header-layout">
      <div className="content">{children}</div>
    </div>
  );
};

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="page-layout">
      <div className="content">{children}</div>
    </div>
  );
};
export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout">
      <div className="content">{children}</div>
    </div>
  );
};
