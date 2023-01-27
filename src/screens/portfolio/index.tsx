import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useWindowSize } from "../../hooks/window";
import { selectTheme } from "../../providers/slices/theme.slice";

import DetailsCard from "../../components/cards/DetailsCard";
import PortfolioCard from "../../components/cards/PortfolioCard";
import { TitlePage } from "../../components/texts/TitlePage";

import Project from "../../interfaces/Project";

import styles from "./styles.module.css";

import dash from "../../static/simple_dashed.png"
import FilterButton from "../../components/buttons/FilterButton";

const projects: Project[] = [
  {
    image: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1127977/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png",
    title: "Node API Rest",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    subDescription: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    skills: ["Node", "TypeScript", "Express", "JWT", "MongoDB", "BCrypt", "SOLID"],
    type: "backend"
  },
  {
    image: "https://therichpost.com/wp-content/uploads/2022/02/Angular-14-Responsive-Admin-Dashboard-Template-Free.png",
    title: "Admin Client React",
    description: "t labore et dolore magna aliqua.t labore et dolore magna aliqua.t labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    subDescription: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    skills: ["Node", "TypeScript", "React", "Redux", "RefreshToken", "Chart.js", "Flexbox"],
    type: "frontend"
  },
  {
    image: "https://apiko.com/blog/content/images/2020/04/pasted-image-0--1-.jpg",
    title: "IOT Management App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    subDescription: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    skills: ["React Native", "TypeScript", "Axios", "JWT", "Context API", "RefreshToken", "Flexbox"],
    type: "mobile"
  },
  {
    image: "https://www.browserstack.com/blog/content/images/2020/08/API-Blog-Hero-banner-@2x.png",
    title: "Golang API Rest",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    subDescription: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    skills: ["Golang", "Mux", "MariaDB", "JWT", "SOLID"],
    type: "backend"
  },
  {
    image: "https://i.pinimg.com/736x/60/38/e9/6038e9e53f35da8b730f9f757d032a3f.jpg",
    title: "Admin Client React vol 02",
    description: "t labore et dolore magna aliqua.t labore et dolore magna aliqua.t labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    subDescription: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    skills: ["Node", "TypeScript", "React", "Redux", "RefreshToken", "Chart.js", "Flexbox"],
    type: "frontend"
  },
  {
    image: "https://agiletech.vn/wp-content/uploads/2020/09/%E1%BA%A2nh-ch%E1%BB%A5p-M%C3%A0n-h%C3%ACnh-2020-09-15-l%C3%BAc-11.26.16.png",
    title: "Calculator App",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    subDescription: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    skills: ["React Native", "TypeScript", "Axios", "JWT", "Context API", "RefreshToken", "Flexbox"],
    type: "mobile"
  },
];

function Portfolio () {
  const { t } = useTranslation();
  const { height, width } = useWindowSize();
  const theme = useSelector(selectTheme);

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
          backgroundImage: `url(${dash})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
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

              <div className={styles.portfolio_card_container}>
                {filteredProjects.map(project => (
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
