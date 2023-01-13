import React from "react";
import { IconDefault } from "../../components/texts/IconDefault";
import { TextDefault } from "../../components/texts/TextDefault";
import { TitleDefault } from "../../components/texts/TitleDefault";
import { TitlePage } from "../../components/texts/TitlePage";
import { useWindowSize } from "../../hooks/window";

import styles from "./styles.module.css";

function AboutMe () {
  const {height, width} = useWindowSize();

  return (
    <>
      <div
        id="section-about-me"
        className={styles.about_me_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          height: width > 960 ? `${height}px` : "auto",
        }}
      >
        <div className={styles.about_me_title}>
          <TitlePage text="About me:" />
        </div>

        <div className={styles.about_me_sub_container}>
          <div className={styles.about_me_sub_container_text}>
            <TitleDefault text="Hi, my name is Yure."/>
            <TextDefault text="I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book. Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley."/>
          </div>

          <div className={styles.about_me_main_line}/>

          <div className={styles.about_me_sub_container_info}>
            <div className={styles.about_me_info_row_container}>
              <div className={styles.about_me_info_row}>
                <div className={styles.about_me_info_row_key}>
                  <TextDefault text="Name:"/>
                </div>
                <div className={styles.about_me_info_row_key}>
                  <TextDefault text="Yure Barbosa Couto"/>
                </div>
              </div>
              <div className={styles.about_me_info_row_line}/>

              <div className={styles.about_me_info_row}>
                <div className={styles.about_me_info_row_key}>
                  <TextDefault text="E-mail:"/>
                </div>
                <div className={styles.about_me_info_row_key}>
                  <TextDefault text="yure.couto@outlook.com"/>
                </div>
              </div>
              <div className={styles.about_me_info_row_line}/>

              <div className={styles.about_me_info_row}>
                <div className={styles.about_me_info_row_key}>
                  <TextDefault text="Based in:"/>
                </div>
                <div className={styles.about_me_info_row_key}>
                  <TextDefault text="Luziânia, Goiás, Brasil"/>
                </div>
              </div>
              <div className={styles.about_me_info_row_line}/>
            </div>

            <div className={styles.about_me_info_download}>
              <TextDefault text="Download my CV"/>
              <IconDefault icon="ic:round-download" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
