import { google, apple, bill } from "../assets";
import styles, { layout } from "../style/style";

const Billing = () => (
  <section className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <div className=" absolute -left-1/2 top-0 white__gradient z-0 w-[50%] h-[50%] rounded-full"></div>
      <div className=" absolute -left-1/2 bottom-0 pink__gradient z-2 w-[50%] h-[50%] rounded-full"></div>
      <img src={bill} alt="" />
    </div>
    <div>
      <h1></h1>
    </div>
  </section>
);
export default Billing;
