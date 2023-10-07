import { quotes } from "../assets";

const FeedbackCard = ({ content, title, img, name }) => (
  <div
    id="client"
    className=" max-w-[470px] feedback-card flex flex-1 flex-col justify-between md:px-10 px-5  md:py-12 rounded-2xl space-y-5 py-10"
  >
    <img className="w-[40px] h-[40px]" src={quotes} alt="" />
    <p
      className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]`}
    >
      {content}
    </p>
    <div className=" flex  sm:flex-row  gap-5 items-center">
      <img
        src={img}
        className="w-[60px] h-[60px] object-contain border-none"
        alt=""
      />
      <div className="gap-4 py-2">
        <h4 className=" font-semibold font-poppins sm:text-xl text-lg text-white">
          {name}
        </h4>
        <h6 className=" font-medium font-poppins text-base  text-dimWhite">
          {title}
        </h6>
      </div>
    </div>
  </div>
);
export default FeedbackCard;
