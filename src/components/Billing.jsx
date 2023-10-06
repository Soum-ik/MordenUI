import { google, apple, bill } from "../assets";
import { layout } from "../style/style";
import { Custom } from "./Custom";
import DowloadButton from "./Download";

const data = {
  title: "Easily control your",
  subTitle: "billing & invoicing. ",
  paragraph:
    "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.",
};

const Billing = () => (
  <section className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <div className=" absolute -left-1/2 top-0 white__gradient z-30 w-[50%] h-[50%] rounded-full"></div>
      <div className=" absolute -left-1/2 bottom-0 pink__gradient z-20 w-[50%] h-[50%] rounded-full"></div>
      <img src={bill} alt="" />
    </div>
    <Custom title={data.title} brTitle={data.subTitle} paragraph={data.paragraph} dButton={DowloadButton} />
  </section>
);
export default Billing;
