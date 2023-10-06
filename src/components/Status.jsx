import React from "react";
import styles from "../style/style";
import { stats } from "../contents/static";

const Status = () => (
  <div className={`${styles.flexCenter} mb-6 ss:mb-20 `}>
    {stats.map((stat, index) => (
      <div key={stat.id} className=" flex flex-1 items-center justify-center">
        <p className="text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[43px] leading-[53px]">
          {stat.value}
        </p>
        <h1 className="text-gradient font-poppins font-semibold xs:text-[20px] text-[30px] xs:leading-[43px] leading-[53px]">
          {stat.title}
        </h1>
        {/* <p className=" text-white ml-6 hidden xl:block">|</p> */}
      </div>
    ))}
  </div>
);

export default Status;
