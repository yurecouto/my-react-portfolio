import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

import dark from "../../../themes/dark.theme";
import light from "../../../themes/light.theme";

function SwitchTheme() {
  const dispatch = useDispatch();
  // const theme = useSelector(selectTheme);
  const localTheme = localStorage.getItem("THEME");
  const [nightMode, setNightMode] = useState<boolean>(localTheme === "dark");

  const handleChangeTheme = async () => {
    if (localTheme === "light") {
      setNightMode(true)
    } else {
      setNightMode(false)
    }
  }

  useEffect(() => {
    if (nightMode) {
      dispatch(setTheme(dark))
      localStorage.setItem("THEME", "dark")
    } else {
      dispatch(setTheme(light))
      localStorage.setItem("THEME", "light")
    }
  }, [dispatch, nightMode])

  return (
    <div className={styles.switch_container}>
      <input
        className={styles.input_switch}
        type="checkbox"
        id="switch"
        checked={nightMode}
        onChange={handleChangeTheme}
      />
      <label
        className={styles.label_switch}
        htmlFor="switch"
      >
        <Icon
          icon="ph:moon-fill"
          className={styles.switch_icon_moon}
        />
        <Icon
          icon="ph:sun-fill"
          className={styles.switch_icon_sun}
        />
      </label>
    </div>
  )
};

export { SwitchTheme };
