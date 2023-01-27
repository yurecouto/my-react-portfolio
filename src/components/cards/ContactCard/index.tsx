import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { SubTitleCurriculum } from "../../texts/SubTitleCurriculum";

import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";
import { useTranslation } from "react-i18next";

interface Props {
  icon?: string;
  name?: string;
  color?: string;
  link?: string;
  email?: string;
}

function ContactCard({
  icon = "",
  name = "",
  color = "",
  link = "",
  email = ""
  }: Props) {
  const { t } = useTranslation();
  const theme = useSelector(selectTheme);

  const [hover, setHover] = useState<boolean>();
  const [click, setClick] = useState<boolean>();

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  useEffect(() => {
    if (click) {
      setTimeout(() => {
        setClick(false)
      }, 2500)
    }
  }, [click])

  const copyToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      setClick(true)
      return await navigator.clipboard.writeText(text);
    } else {
      setClick(true)
      return document.execCommand('copy', true, text);
    }
  };

  return (
    link !== "" && email === "" ? (
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className={styles.contact_card_link}
      >
        <div
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
          className={styles.contact_sub_container_row}
          style={{backgroundColor: theme.COLORS.CARD_BACKGROUND}}
        >
          <div className={styles.contact_sub_container_icon}>
            <Icon
              className={styles.contact_icon}
              style={{ color: hover ? color : theme.COLORS.TEXT_DEFAULT }}
              icon={icon}
            />
          </div>

          <div className={styles.contact_sub_container_title}>
            <SubTitleCurriculum hover={hover} text={name}/>
          </div>
        </div>
      </a>
    ) : (
      <div
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        className={styles.contact_sub_container_row}
        style={{backgroundColor: theme.COLORS.CARD_BACKGROUND}}
        onClick={() => copyToClipboard(email)}
      >
        <div className={styles.contact_sub_container_icon}>
          <Icon
            className={styles.contact_icon}
            style={{ color: hover ? color : theme.COLORS.TEXT_DEFAULT }}
            icon={icon}
          />
        </div>

        <div className={styles.contact_sub_container_title}>
          <SubTitleCurriculum hover={hover} text={
            click
              ? `${t("EmailCopiedtoClipboard")}!`
              : name
          }/>
        </div>
      </div>
    )
  )
}

export default ContactCard
