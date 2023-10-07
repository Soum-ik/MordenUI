import Billing from "./components/Billing";
import Brand from "./components/Brand";
import Busnicess from "./components/Busnicess";
import Card from "./components/Card";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Status from "./components/Status";
import styles from "./style/style";

const App = () => (
  <div className=" w-full overflow-hidden bg-primary scroll-smooth">
    <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={` bg-primary ${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={` bg-primary ${styles.flexStart}`}>
      <div className={` bg-primary ${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div
      className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={` bg-primary ${styles.boxWidth}`}>
        <Status />
        <Busnicess />
        <Billing />
        <Card />
        <Feedback />
        <Brand />
        <Service />
      </div>
    </div>
    <Footer />
  </div>
);
export default App;
