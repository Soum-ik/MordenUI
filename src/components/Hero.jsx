import { discount, star, robot, logo } from "../assets/index";
import styles from "../style/style";
import GetStart from "./GetStart";

const Hero = () => (
  <section
    id="home"
    className={` flex md:flex-row flex-col  ${styles.paddingY}
    `}
  >
    <div
      className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className=" flex-row flex items-center py-[6px] px-4 bg-discount-gradient rounded-lg mb-2 space-x-1">
        <img src={discount} alt="" className="w-[32xp] h-[32px] border-none" />
        <p className=" text-white/30">
          {" "}
          <span className="text-white">20%</span> DISCOUNT FOR{" "}
          <span className="text-white">1 MONTH</span> ACCOUNT
        </p>
      </div>

      <div className=" text-white flex flex-row justify-between items-center w-full ">
        <h1 className=" flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px]  ladding-[75px]">
          The Next <br className=" sm:block hidden" />
          <span className=" text-gradient">Generation</span>
          <br className=" sm:block hidden" />
        </h1>
        <div className=" ss:flex hidden md:mr-4 mr-0">
          <GetStart />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Payment Method.
      </h1>
      <p
        className={`${styles.paragraph} max-w-[470px] mt-5 
      `}
      >
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`${styles.flexCenter} flex flex-1 relative md:my-0 my-10`}>
      <img src={robot} className=" w-full h-full z-50 relative" alt="" />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={` ss:hidden ${styles.flexCenter}`}>
      <GetStart />
    </div>
  </section>
);

export default Hero;
