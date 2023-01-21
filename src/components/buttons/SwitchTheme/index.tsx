import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

function SwitchTheme() {
  // const dispatch = useDispatch();
  // const theme = useSelector(selectTheme);
  // const [nightMode, setNightMode] = useState<boolean>(localTheme === "dark");
  // const localTheme = localStorage.getItem("THEME")

  return (
    <div className={styles.switch_container}>
      <input
        className={styles.input_switch}
        type="checkbox"
        id="switch"
      />
      <label
        className={styles.label_switch}
        htmlFor="switch"
      >
        <Icon
          icon="ph:moon-fill"
          className={styles.switch_icons}
        />
        <Icon
          icon="ph:sun-fill"
          className={styles.switch_icons}
        />
      </label>
    </div>
  )
};

export { SwitchTheme };
