import { Custom } from "./Custom";
import Button from "./Button";
import styles, { layout } from "../style/style";
import { card } from "../assets";

const data = {
  title: " Find a better card deal ,",
  subTitle: "in few easy steps.",
  paraghrap:
    "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.",
};

const Card = () => (
  <section className={`${layout.section}`}>
    <Custom title={data.title} brTitle={data.subTitle} paragraph={data.paraghrap} Button={Button}/>
    <div className={`${layout.sectionImg}`}>
        <img src={card} alt="" />
    </div>
  </section>
);
export default Card;
