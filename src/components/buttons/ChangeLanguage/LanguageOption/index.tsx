import React, { useState } from "react";
import { Icon } from "@iconify/react";

import styles from "../styles.module.css";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../../hooks/window";
import { selectTheme } from "../../../../providers/slices/theme.slice";
import { useSelector } from "react-redux";

interface Props {
  language: {
    code: string;
    icon: string;
    name: string;
  },
  first?: boolean;
  last?: boolean;
  onClick: (language: any) => void
}

function LanguageOption({
  language,
  first,
  last,
  onClick
  }: Props) {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const theme = useSelector(selectTheme);

  const [hover, setHover] = useState<boolean>();

  const handleMouseIn = () => {setHover(true);};
  const handleMouseOut = () => {setHover(false);};

  return (
    width > 960 ? (
      <div
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        className={styles.change_lang_option}
        style={{
          borderTopLeftRadius: first ? 8 : 0,
          borderTopRightRadius: first ? 8 : 0,
          borderEndEndRadius: last ? 8 : 0,
          borderEndStartRadius: last ? 8 : 0,
          backgroundColor: hover
            ? theme.COLORS.HEADER_BACKGROUND
            : theme.COLORS.HEADER_BACKGROUND_HOVER,
          borderBottom: last ? "none" : "1px solid",
          borderBottomColor: last ? "none" : theme.COLORS.PAGE_SEPARATOR,
        }}
        onClick={() => onClick(language)}
      >
        <p
          style={{color: theme.COLORS.TEXT_DEFAULT}}
          className={styles.change_lang_option_text}
        >
          {`${t(language?.name)}`}
        </p>
        <Icon className={styles.change_lang_option_icon} icon={language.icon}/>
      </div>
    ) : (
      <div
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        className={styles.change_lang_option}
        style={{
          borderTopLeftRadius: first ? 8 : 0,
          borderTopRightRadius: first ? 8 : 0,
          borderEndEndRadius: last ? 8 : 0,
          borderEndStartRadius: last ? 8 : 0,
          backgroundColor: hover
            ? theme.COLORS.HEADER_BACKGROUND_HOVER
            : theme.COLORS.HEADER_BACKGROUND,
          borderBottom: last ? "none" : "1px solid",
          borderBottomColor: last ? "none" : theme.COLORS.PAGE_SEPARATOR,
        }}
        onClick={() => onClick(language)}
      >
        <Icon className={styles.change_lang_option_icon} icon={language.icon}/>
      </div>
    )
  )
};

export { LanguageOption };
