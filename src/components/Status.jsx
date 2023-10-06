import React from "react";
import styles from "../style/style";
import { stats } from "../contents/static";

const Status = () => (
  <div className={`${styles.flexCenter} mb-6 ss:mb-20 flex-wrap flex-row`}>
    {stats.map((stat, index) => (
      <div key={stat.id} className=" flex flex-1 items-center justify-start gap-3">
        <h4 className="text-white font-poppins font-semibold xs:text-[40px] text-[25px] xs:leading-[43px] leading-[53px]">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3 line-clamp-1">
          {stat.title}
        </p>
        {/* <p cla/>ssName=" text-white ml-6 hidden xl:block">|</p> */}
      </div>
    ))}
  </div>
);

export default Status;
