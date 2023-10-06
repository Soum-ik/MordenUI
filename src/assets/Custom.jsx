import React from "react";
import Button from "../components/Button";
import styles, { layout } from "../style/style";

export const Custom = ({ title, brTitle, paragraph, Button}) => {
  return (
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        {title}
        <span className=" hidden sm:block">{brTitle}</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>{paragraph}</p>
      {Button && <Button style={"mt-7"} />}
    </div>
  );
};
