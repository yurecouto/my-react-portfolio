import React, { ReactNode } from "react";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
}

function PageContainer({
  children,
  backgroundImage,
  backgroundColor,
  }: InputProps) {

  return (
    <div
      className={styles.page_container}
      style={{
        backgroundImage: backgroundImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed"
      }}
    >
      <div className={styles.page_sub_container}>
        {children}
      </div>
    </div>
  )
};

export { PageContainer };
