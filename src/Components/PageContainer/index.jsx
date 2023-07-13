import React from "react";

const PageContainer = (props) => {
  const { className, children } = props;
  const classes =
    "min-h-screen max-w-[1280px] mx-auto bg-[#fff] py-4 px-12 relative " +
    className;
  return <div className={classes}>{children}</div>;
};

export default PageContainer;
