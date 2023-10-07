import React from "react";
import styles from "../style/style";
import { arrowUp } from "../assets/index";

const GetStart = () => {
  return (
    <div
      className={`${styles.flexCenter} cursor-pointer bg-blue-gradient p-[2px] w-[140px] rounded-full h-[140px] select-text`}
    >
      <div
        className={`${styles.flexCenter} w-full h-full rounded-full bg-primary
          `}
      >
        <a href="https://github.com/Soum-ik/result_Finder-" target="__blank">
          <div className=" justify-center space-x-1 text-gradient select-none">
            <div className=" flex flex-1 items-center justify-center space-x-1 text-gradient ">
              <p className="  font-poppins text-[18px] font-medium ">Get</p>

              <img src={arrowUp} alt="" />
            </div>
            <h1 className=" font-poppins font-medium text-[20px]">Started</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default GetStart;
