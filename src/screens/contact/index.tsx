import React from "react";
import ContactCard from "../../components/cards/ContactCard";
import { TitlePage } from "../../components/texts/TitlePage";
import { useWindowSize } from "../../hooks/window";

import styles from "./styles.module.css";

function Contact () {
  const {height, width} = useWindowSize();

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
          <TitlePage text="Reach me in:"/>
        </div>

        <div className={styles.contact_sub_container}>
          <ContactCard name="Linkedin" icon="mdi:linkedin"/>
          <ContactCard name="Github" icon="uim:github-alt"/>
          <ContactCard name="Gmail" icon="mdi:gmail"/>
          <ContactCard name="Outlook" icon="file-icons:microsoft-outlook"/>
          <ContactCard name="WhatsApp" icon="ic:baseline-whatsapp"/>

        </div>
      </div>
    </>
  );
};

export default Contact;
