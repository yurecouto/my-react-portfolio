import React, { useEffect, useState } from "react";
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

import api from "../../services/api";

function Portfolio () {
  const { t } = useTranslation();
  const { height, width } = useWindowSize();
  const theme = useSelector(selectTheme);
  const localTheme = localStorage.getItem("THEME");

  const dashDark = "https://raw.githubusercontent.com/yurecouto/my-portfolio-files/master/static/images/app/dashDark.png"
  const dashLight = "https://raw.githubusercontent.com/yurecouto/my-portfolio-files/master/static/images/app/dashLight.png"

  const [openDetails, setOpenDetails] = useState<boolean>();
  const [spotLightProject, setSpotLightProject] = useState<Project>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)

  useEffect(() => {
    const fetch = async () => {
      const response = await api.get(`project/showall`);
      setFilteredProjects(response.data.reverse());
      setProjects(response.data.reverse())
    }

    fetch()
  }, [])

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
