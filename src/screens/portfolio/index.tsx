import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useWindowSize } from "../../hooks/window";
import { selectTheme } from "../../providers/slices/theme.slice";

import DetailsCard from "../../components/cards/DetailsCard";
import PortfolioCard from "../../components/cards/PortfolioCard";
import { TextDefault } from "../../components/texts/TextDefault";
import { TitlePage } from "../../components/texts/TitlePage";

import Project from "../../interfaces/Project";

import styles from "./styles.module.css";

function Portfolio () {
  const { t } = useTranslation();
  const { height, width } = useWindowSize();
  const theme = useSelector(selectTheme);

  const [openDetails, setOpenDetails] = useState<boolean>();
  const [spotLightProject, setSpotLightProject] = useState<Project>();

  const projects: Project[] = [
    {
      image: "https://rafaelcruz.azurewebsites.net/wp-content/uploads/2020/02/apis-logo.jpg",
      title: "Node API Rest",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      subDescription: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      skills: ["Node", "TypeScript", "Express", "JWT", "MongoDB", "BCrypt", "SOLID"]
    },
    {
      image: "https://rafaelcruz.azurewebsites.net/wp-content/uploads/2020/02/apis-logo.jpg",
      title: "TESTE TESTE TESTE",
      description: "t labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      subDescription: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      skills: ["Node", "TypeScript"]
    },
  ];

  const handleOpenDetails = async (project: Project) => {
    setSpotLightProject(project)
    setOpenDetails(true)
  };

  const handleCloseDetails = async () => {
    setOpenDetails(false)
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
          {openDetails && spotLightProject
          ? (
            <DetailsCard
              project={spotLightProject}
              onClick={handleCloseDetails}
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
                    onClick={() => handleOpenDetails(project)}
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
