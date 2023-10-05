import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import styles from "./style/style";

const App = () => (
  <div className=" w-full overflow-hidden bg-primary">
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
    <div className={` bg-primary ${styles.paddingX} ${styles.paddingY}`}>
      <div className={` bg-primary ${styles.boxWidth}`}>
        <Status/>
      </div>
    </div>
  </div>
);
export default App;
