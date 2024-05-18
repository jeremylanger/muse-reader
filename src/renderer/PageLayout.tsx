export { PageLayout };

import React, { ReactNode } from "react";
// import '../index.css'

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <React.StrictMode>
      <Navigation>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </Navigation>
      <Content>{children}</Content>
    </React.StrictMode>
  );
}

function Navigation({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        paddingBottom: 25,
        paddingTop: 5,
        fontSize: "1.2em",
        display: "flex",
        justifyContent: "center",
        gap: 25,
      }}
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
