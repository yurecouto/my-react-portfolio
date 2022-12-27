import React, { ReactNode } from "react";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
}

function MainContainer({
  children,
  }: InputProps) {

  return (
    <div className={styles.main_container}>
      {children}
    </div>
  )
};

export { MainContainer };
