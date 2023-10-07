import React from "react";
import styles, { layout } from "../style/style";
import GetStart from "./GetStart";
import Button from "./Button";

const Service = () => (
  <section
    className={`${layout.section} px-2 ${styles.marginY} relative  items-center justify-around rounded-2xl mb-6 backdrop-blur-xl bg-white/5`}
  >
    <div className=" absolute h-[30%] w-[40%] opacity-70 rotate-45 bottom-1 left-2 blue__gradient rounded-full border"></div>
    <div className=" absolute h-[30%] w-[40%] opacity-70 rotate-45 bottom-1 right-1 blue__gradient  rounded-full border"></div>
    <div className=" pb-8 xxxS:space-y-7">
      <h1 className={`${styles.heading2}`}>Let’s try our service now!</h1>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div>
      <Button style={"p-5"} />
    </div>
  </section>
);
export default Service;
