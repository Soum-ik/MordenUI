import React from "react";
import Button from "./Button";
import styles, { layout } from "../style/style";
import DowloadButton from "./Download";

export const Custom = ({ title, brTitle, paragraph, Button, dButton }) => {
  return (
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        {title}
        <span className=" hidden sm:block ">{brTitle}</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>{paragraph}</p>
      {Button && <Button style={"mt-7 "} />}
      {dButton && <DowloadButton />}
    </div>
  );
};
