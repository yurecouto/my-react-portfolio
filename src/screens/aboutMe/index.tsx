import React from "react";
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";

import { useWindowSize } from "../../hooks/window";
import { selectTheme } from "../../providers/slices/theme.slice";

import { IconDefault } from "../../components/texts/IconDefault";
import { TextDefault } from "../../components/texts/TextDefault";
import { TitleDefault } from "../../components/texts/TitleDefault";
import { TitlePage } from "../../components/texts/TitlePage";

import styles from "./styles.module.css";

function AboutMe () {
  const { height, width } = useWindowSize();
  const { t } = useTranslation();
  const theme = useSelector(selectTheme);

  return (
    <>
      <div
        id="section-about-me"
        className={styles.about_me_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          height: width > 960 ? `${height}px` : "auto",
          borderBottom: `1px solid ${theme.COLORS.PAGE_SEPARATOR}`
        }}
      >
        <div className={styles.about_me_title}>
          <TitlePage text={`${t("AboutMe")}:`} />
        </div>

        <div className={styles.about_me_sub_container}>
          <div className={styles.about_me_sub_container_text}>
            <TitleDefault text={`${t("HiMyNameIs")} Yure.`}/>
            <TextDefault text={`${t("AboutMeText")}`}/>
          </div>

          <div
            className={styles.about_me_main_line}
            style={{ borderColor: theme.COLORS.PAGE_SEPARATOR }}
          />

          <div className={styles.about_me_sub_container_info}>
            <div className={styles.about_me_info_row_container}>
              <div className={styles.about_me_info_row}>
                <div className={styles.about_me_info_row_key}>
                  <TextDefault text={`${t("Name")}:`}/>
                </div>
                <div className={styles.about_me_info_row_key}>
                  <TextDefault text="Yure Barbosa Couto"/>
                </div>
              </div>

              <div
                className={styles.about_me_info_row_line}
                style={{ borderColor: theme.COLORS.PAGE_SEPARATOR }}
              />

              <div className={styles.about_me_info_row}>
                <div className={styles.about_me_info_row_key}>
                  <TextDefault text={`${t("Email")}:`}/>
                </div>
                <div className={styles.about_me_info_row_key}>
                  <TextDefault text="yure.couto@outlook.com"/>
                </div>
              </div>

              <div
                className={styles.about_me_info_row_line}
                style={{ borderColor: theme.COLORS.PAGE_SEPARATOR }}
              />

              <div className={styles.about_me_info_row}>
                <div className={styles.about_me_info_row_key}>
                  <TextDefault text={`${t("BasedIn")}:`}/>
                </div>
                <div className={styles.about_me_info_row_key}>
                  <TextDefault text="Luziânia, Goiás, Brasil"/>
                </div>
              </div>

              <div
                className={styles.about_me_info_row_line}
                style={{ borderColor: theme.COLORS.PAGE_SEPARATOR }}
              />
            </div>

            <div
              className={styles.about_me_info_download}
              style={{ backgroundColor: theme.COLORS.TEXT_HIGHLIGHT}}
            >
              <TextDefault text={`${t("DownloadCV")}`}/>
              <IconDefault icon="ic:round-download" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
