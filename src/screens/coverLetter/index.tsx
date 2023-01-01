import React from "react";
import { Icon } from '@iconify/react';

import styles from "./styles.module.css";

// import keyboard from "../../static/keyboard.jpg"
import avatar from "../../static/avatar.png"

import { TextDefault } from "../../components/texts/TextDefault";
import { TitleDefault } from "../../components/texts/TitleDefault";
import { PageContainer } from "../../components/containers/PageContainer";

const CoverLetter = () => {
  return (
    // <PageContainer backgroundImage={`url(${keyboard})`}>
    <PageContainer>
      <div className={styles.cover_letter_container}>
        <div className={styles.cover_letter_row}>
          <div className={styles.image_container}>
            <img
              src={avatar}
              className={styles.image_avatar}
              alt=''
            />
            <div className={styles.image_avatar_title}>
              <div className={styles.image_avatar_icon_container}>
                <div className={styles.image_avatar_icon}>
                  <a href="https://docs.iconify.design/icon-components/react/">
                    <Icon
                      className={styles.image_avatar_icon_style}
                      icon="logos:linkedin-icon"
                      style={{ borderRadius: "16%"}}
                    />
                  </a>
                </div>
                <div className={styles.image_avatar_icon}>
                  <a href="https://docs.iconify.design/icon-components/react/">
                    <Icon
                      className={styles.image_avatar_icon_style}
                      icon="codicon:github"
                      style={{ borderRadius: "100%", color: "white", backgroundColor: "transparent"}}
                    />
                  </a>
                </div>
                <div className={styles.image_avatar_icon}>
                  <a href="https://docs.iconify.design/icon-components/react/">
                    <Icon
                      className={styles.image_avatar_icon_style}
                      icon="simple-icons:freelancer"
                      style={{ backgroundColor: "transparent", color: "#0093D0"}}

                    />
                  </a>
                </div>
                <div className={styles.image_avatar_icon}>
                  <a href="https://docs.iconify.design/icon-components/react/">
                    <Icon
                      className={styles.image_avatar_icon_style}
                      icon="tabler:brand-upwork"
                      style={{ backgroundColor: "transparent", color: "#6FDA44"}}

                    />
                  </a>
                </div>
                <div className={styles.image_avatar_icon}>
                  <a href="https://docs.iconify.design/icon-components/react/">
                    <Icon
                      className={styles.image_avatar_icon_style}
                      icon="logos:twitter"
                      style={{ backgroundColor: "transparent"}}

                    />
                  </a>
                </div>
              </div>
              <TitleDefault
                text="Full Stack"
              />
              <TitleDefault
                text="Web Developer"
              />
            </div>
          </div>
          <div className={styles.about_container}>
            <TextDefault
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est sed orci bibendum iaculis. In tempus purus eget nunc feugiat, vitae ullamcorper eros feugiat. Vivamus nisl ipsum, efficitur ac placerat vel, porta ut massa. Curabitur ut lacus facilisis, ultrices quam et, placerat tortor. Donec elementum mattis odio sit amet semper. Vestibulum cursus volutpat ligula, vel condimentum risus mattis sed. In hac habitasse platea dictumst. Integer elementum magna in tortor blandit elementum. Donec in sodales lacus. Maecenas nibh ligula, porta vitae maximus ut, faucibus vitae ipsum. Sed sit amet mi nibh. Nunc bibendum, lacus a elementum accumsan, nulla dui pulvinar lectus, vel egestas purus turpis in odio. Praesent nec libero at libero consequat elementum. Mauris purus urna, mattis vitae ante sodales, egestas placerat magna. Aenean hendrerit augue sit amet ante cursus tempor. Curabitur mauris mauris, aliquam id metus sed, ultricies feugiat libero. Mauris purus urna, mattis vitae ante sodales, egestas placerat magna. Aenean hendrerit augue sit amet ante cursus tempor. Curabitur mauris mauris, aliquam id metus sed, ultricies feugiat libero."
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default CoverLetter;
