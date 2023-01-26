import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import WhatIDoCard from "../../components/cards/WhatIDoCard";
import { TitlePage } from "../../components/texts/TitlePage";
import { useWindowSize } from "../../hooks/window";
import { selectTheme } from "../../providers/slices/theme.slice";

import styles from "./styles.module.css";

import developer from "../../static/teste.png"

function WhatIDo () {
  const { t } = useTranslation();
  const { height, width } = useWindowSize();
  const theme = useSelector(selectTheme);

  return (
    <>
      <div
        id="section-what-i-do"
        className={styles.what_i_do_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          minHeight: height,
          height: "auto",
          backgroundImage: `url(${developer})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderBottom: `1px solid ${theme.COLORS.PAGE_SEPARATOR}`
        }}
      >
        <div className={styles.what_i_do_title}>
          <TitlePage text={`${t("WhatIDo")}:`} />
        </div>

        <div className={styles.what_i_do_sub_container}>
          <WhatIDoCard
            icon="ic:baseline-miscellaneous-services"
            title={`${t("APIRestDevelopment")}`}
            text={`${t("APIRestDevelopmentDescription")}`}
          />
          <WhatIDoCard
            icon="mdi:monitor-cellphone"
            title={`${t("FrontEndDevelopment")}`}
            text={`${t("FrontEndDevelopmentDescription")}`}
          />
          <WhatIDoCard
            icon="ic:outline-cloud"
            title={`${t("CloudArchitecture")}`}
            text={`${t("CloudArchitectureDescription")}`}
          />
          <WhatIDoCard
            icon="lucide:database"
            title={`${t("DatabaseManagement")}`}
            text={`${t("DatabaseManagementDescription")}`}
          />
          <WhatIDoCard
            icon="clarity:blocks-group-line"
            title={`${t("ScalableMicroservices")}`}
            text={`${t("ScalableMicroservicesDescription")}`}
          />
          <WhatIDoCard
            icon="fluent:shield-lock-28-regular"
            title={`${t("SecureApplications")}`}
            text={`${t("SecureApplicationsDescription")}`}
          />
        </div>
      </div>
    </>
  );
};

export default WhatIDo;
