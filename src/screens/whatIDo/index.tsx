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
          height: `${height}px`,
        }}
      >
        <div className={styles.what_i_do_title}>
          <TitlePage text="What i do:" />
        </div>

        <div className={styles.what_i_do_sub_container}>
          <WhatIDoCard/>
          <WhatIDoCard/>
          <WhatIDoCard/>
          <WhatIDoCard/>
        </div>
      </div>
    </>
  );
};

export default WhatIDo;
