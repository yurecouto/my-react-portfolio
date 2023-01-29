import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useWindowSize } from "../../hooks/window";
import { selectTheme } from "../../providers/slices/theme.slice";

import DetailsCard from "../../components/cards/DetailsCard";
import PortfolioCard from "../../components/cards/PortfolioCard";
import { TitlePage } from "../../components/texts/TitlePage";
import FilterButton from "../../components/buttons/FilterButton";

import Project from "../../interfaces/Project";

import styles from "./styles.module.css";

import dashDark from "../../static/dashDark.png"
import dashLight from "../../static/dashLight.png"

const projects: Project[] = [
  {
    image: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1127977/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png",
    title: {
      en_US: "titulo em ingles",
      es_ES: "titulo em espanhol",
      pt_BR: "titulo em portugues",
      et: "titulo em estoniano"
    },
    description: {
      en_US: "descricao em ingles",
      es_ES: "descricao em espanhol",
      pt_BR: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      et: "descricao em estoniano"
    },
    subDescription: {
      en_US: "descricao em ingles",
      es_ES: "descricao em espanhol",
      pt_BR: "descricao em portugues",
      et: "descricao em estoniano"
    },
    link: "https://wordcounter.net/character-count",
    skills: ["Node", "TypeScript", "Express", "JWT", "MongoDB", "BCrypt", "SOLID"],
    type: "backend"
  },
];

function Portfolio () {
  const { t } = useTranslation();
  const { height, width } = useWindowSize();
  const theme = useSelector(selectTheme);
  const localTheme = localStorage.getItem("THEME");

  const [openDetails, setOpenDetails] = useState<boolean>();
  const [spotLightProject, setSpotLightProject] = useState<Project>();
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)

  const handleOpenDetails = async (project: Project) => {
    setSpotLightProject(project)
    setOpenDetails(true)
  };

  const handleCloseDetails = async () => {
    setOpenDetails(false)
  };

  const handleFilter = async (filter:
    "backend" |
    "frontend" |
    "mobile" |
    "all") => {

    if (filter === "all") {
      setFilteredProjects([...projects])
    } else {
      setFilteredProjects(projects.filter((project) =>
        project.type === filter
      ));
    }
  }

  return (
    <>
      <div
        id="section-portfolio"
        className={styles.portfolio_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          minHeight: height,
          height: "auto",
          backgroundImage: localTheme === "dark"
            ? `url(${dashDark})`
            : `url(${dashLight})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          borderBottom: `1px solid ${theme.COLORS.PAGE_SEPARATOR}`
        }}
      >
        <div className={styles.portfolio_container_title}>
          <TitlePage text={`${t("Portfolio")}:`}/>
          <div className={styles.portfolio_menu}>
                <div className={styles.portfolio_menu_items}>
                  <FilterButton
                    text="All"
                    onClick={() => handleFilter("all")}
                  />

                  <FilterButton
                    text="Back-end"
                    onClick={() => handleFilter("backend")}
                  />

                  <FilterButton
                    text="Front-End"
                    onClick={() => handleFilter("frontend")}
                  />

                  <FilterButton
                    text="Mobile"
                    onClick={() => handleFilter("mobile")}
                  />
                </div>
              </div>
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
              <div className={styles.portfolio_card_container}>
                {filteredProjects.map((project, id) => (
                  <PortfolioCard
                    key={id}
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
