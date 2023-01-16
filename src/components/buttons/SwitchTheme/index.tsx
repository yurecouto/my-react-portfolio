import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

function SwitchTheme() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const localTheme = localStorage.getItem("THEME")
  const [nightMode, setNightMode] = useState<boolean>(localTheme === "dark");

  return (
    <div className={styles.switch_container}>
      <input className={styles.input_switch} type="checkbox" id="switch" />
      <label className={styles.label_switch} htmlFor="switch"/>
    </div>
  )
};

export { SwitchTheme };
