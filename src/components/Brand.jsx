import React from "react";
import styles, { layout } from "../style/style";
import { airbnb, binance, coinbase, dropbox } from "../assets";

const Brand = () => (
  <div
    className={`${layout.section} ${styles.paddingX}  flex-1 object-contain items-center xs:space-y-0 space-y-10 justify-between`}
  >
    <img className=" w-[190px] h-[38px]" src={airbnb} alt="" />
    <img className=" w-[190px] h-[38px]" src={binance} alt="" />
    <img className=" w-[190px] h-[38px]" src={coinbase} alt="" />
    <img className=" w-[190px] h-[38px]" src={dropbox} alt="" />
  </div>
);
export default Brand;
