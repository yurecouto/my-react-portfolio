import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import DetailsCard from "../../components/cards/DetailsCard";
import PortfolioCard from "../../components/cards/PortfolioCard";
import { TextDefault } from "../../components/texts/TextDefault";
import { TitlePage } from "../../components/texts/TitlePage";
import { useWindowSize } from "../../hooks/window";
import Project from "../../interfaces/project";
import { selectTheme } from "../../providers/slices/theme.slice";

import styles from "./styles.module.css";

function Portfolio () {
  const { t } = useTranslation();
  const { height, width } = useWindowSize();
  const theme = useSelector(selectTheme);

  const [openDetails, setOpenDetails] = useState<boolean>();

  const projects: Project[] = [
    {
      image: "https://rafaelcruz.azurewebsites.net/wp-content/uploads/2020/02/apis-logo.jpg",
      title: "Node API Rest",
      description: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      subDescription: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      skills: ["Node", "TypeScript", "Express", "JWT", "MongoDB"]
    },
  ];

  const handleOpenDetails = async () => {
    setOpenDetails(true)
  };

  return (
    <>
      <div
        id="section-portfolio"
        className={styles.portfolio_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          minHeight: height,
          height: "auto",
          borderBottom: `1px solid ${theme.COLORS.PAGE_SEPARATOR}`
        }}
      >
        <div className={styles.portfolio_container_title}>
          <TitlePage text={`${t("Portfolio")}:`}/>
        </div>

        <div className={styles.portfolio_sub_container}>
          {openDetails
          ? (
            <DetailsCard
              project={projects[0]}
            />
          )
          : (
            <>
              <div className={styles.portfolio_menu}>
                <div className={styles.portfolio_menu_items}>
                  <TextDefault text="All"/>
                  <TextDefault text="Back-End"/>
                  <TextDefault text="Front-End"/>
                  <TextDefault text="Mobile"/>
                </div>
              </div>

              <div className={styles.portfolio_card_container}>
                {projects.map(project => (
                  <PortfolioCard
                    project={project}
                    onClick={handleOpenDetails}
                  />
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
};

export default Portfolio;
