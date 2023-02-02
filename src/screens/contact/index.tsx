import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useWindowSize } from "../../hooks/window";
import { selectTheme } from "../../providers/slices/theme.slice";

import ContactCard from "../../components/cards/ContactCard";
import { TitlePage } from "../../components/texts/TitlePage";

import styles from "./styles.module.css";
import Info from "../../interfaces/Info";

interface Props {
  info: Info | undefined;
}

function Contact({
  info
  }: Props) {
  const { t } = useTranslation();
  const { width, height } = useWindowSize();
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
            link={info?.linkedin}
          />
          <ContactCard
            color={theme.COLORS.GITHUB}
            name="Github"
            icon="uim:github-alt"
            link={info?.github}
          />
          <ContactCard
            color={theme.COLORS.GMAIL}
            name="Gmail"
            icon="mdi:gmail"
            text={info?.gmail}
          />
          <ContactCard
            color={theme.COLORS.OUTLOOK}
            name="Outlook"
            icon="file-icons:microsoft-outlook"
            text={info?.outlook}
          />
          <ContactCard
            color={theme.COLORS.WHATSAPP}
            name="WhatsApp"
            icon="ic:baseline-whatsapp"
            text={info?.number}
          />
          <ContactCard
            color={theme.COLORS.TELEGRAM}
            name="Telegram"
            icon="ic:baseline-telegram"
            text={info?.number}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
