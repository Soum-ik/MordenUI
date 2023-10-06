import React from "react";
import { features } from "../contents/static";
import styles, { layout } from "../style/style";
import Button from "./Button";

const Feature = ({ icon, title, content, index }) => (
  <div
    className={`text-white flex flex-row items-center rounded-xl  ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className={`${styles.flexCenter} w-[64px] h-[64px] `}>
      <img src={icon} className=" w-[50%] h-[50%] object-contain" alt="" />
    </div>
    <div className=" flex flex-1 flex-col ml-3">
      <h4 className=" font-poppins font-normal text-white text-[16px] leading-[30.8px] ">
        {title}
      </h4>
      <p
        className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]  `}
      >
        {content}
      </p>
    </div>
  </div>
);

const Busnicess = () => (
  <section id="bussines" className={layout.section}>
    {/* right side */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business,
        <span className=" hidden sm:block">we’ll handle the money.</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button style={"mt-7"} />
    </div>
    {/* right side */}
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <Feature key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);
export default Busnicess;
