import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ContactCard from "../../components/cards/ContactCard";
import { TitlePage } from "../../components/texts/TitlePage";
import { useWindowSize } from "../../hooks/window";
import { selectTheme } from "../../providers/slices/theme.slice";

import styles from "./styles.module.css";

function Contact () {
  const { t } = useTranslation();
  const { height, width } = useWindowSize();

  const theme = useSelector(selectTheme);

  return (
    <>
      <div
        id="section-contact"
        className={styles.contact_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          height: `${height}px`,
        }}
      >
        <div className={styles.contact_title}>
          <TitlePage text={`${t("Contact")}:`}/>
        </div>

        <div className={styles.contact_sub_container}>
          <ContactCard
            color={theme.COLORS.LINKEDIN}
            name="Linkedin"
            icon="mdi:linkedin"
            link="https://www.linkedin.com/in/yure-couto/"
          />
          <ContactCard
            color={theme.COLORS.GITHUB}
            name="Github"
            icon="uim:github-alt"
            link="https://github.com/yurecouto"
          />
          <ContactCard
            color={theme.COLORS.GMAIL}
            name="Gmail"
            icon="mdi:gmail"
            link="yurecouto.dev@gmail.com"
          />
          <ContactCard
            color={theme.COLORS.OUTLOOK}
            name="Outlook"
            icon="file-icons:microsoft-outlook"
          />
          <ContactCard
            color={theme.COLORS.WHATSAPP}
            name="WhatsApp"
            icon="ic:baseline-whatsapp"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
