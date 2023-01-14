import React from "react";
import WhatIDoCard from "../../components/cards/WhatIDoCard";
import { TitlePage } from "../../components/texts/TitlePage";
import { useWindowSize } from "../../hooks/window";

import styles from "./styles.module.css";

function WhatIDo () {
  const {height, width} = useWindowSize();

  return (
    <>
      <div
        id="section-what-i-do"
        className={styles.what_i_do_container}
        style={{
          width: width > 960 ? `${width - 260}px` : `${width}px`,
          minHeight: height,
          height: "auto",
        }}
      >
        <div className={styles.what_i_do_title}>
          <TitlePage text="What i do:" />
        </div>

        <div className={styles.what_i_do_sub_container}>
          <WhatIDoCard icon="ic:baseline-miscellaneous-services"/>
          <WhatIDoCard icon="mdi:monitor-cellphone"/>
          <WhatIDoCard icon="ic:outline-cloud"/>
          <WhatIDoCard icon="lucide:database"/>
          <WhatIDoCard icon="clarity:blocks-group-line"/>
          <WhatIDoCard icon="fluent:shield-lock-28-regular"/>
        </div>
      </div>
    </>
  );
};

export default WhatIDo;
