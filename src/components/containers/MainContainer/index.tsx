import React, { ReactNode } from "react";

import styles from "./styles.module.css";

interface Props {
  children?: ReactNode;
}

function MainContainer({
  children,
  }: Props) {

  return (
    <div className={styles.main_container}>
      {children}
    </div>
  )
};

export { MainContainer };
