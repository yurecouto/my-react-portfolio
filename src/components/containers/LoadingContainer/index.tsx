import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface Props {
  children?: ReactNode;
}

function LoadingContainer({
  children,
  }: Props) {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.main_container}
      style={{backgroundColor: theme.COLORS.PAGE_BACKGROUND}}
    >
      {children}
    </div>
  )
};

export { LoadingContainer };
