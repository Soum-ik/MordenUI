import styles from "./style";

import { Navbar } from "./components";

const App = () => (
  <div className=" w-full overflow-hidden bg-primary">


    <div className={` bg-primary ${styles.paddingX} ${styles.paddingY}  `}>
      <div class={` bg-primary ${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>


    <div class={` bg-primary ${styles.flexStart}`}>
      <div class={` bg-primary ${styles.boxWidth}`}>hero</div>
    </div>
    <div class={` bg-primary ${styles.paddingX} ${styles.paddingY}`}>
      <div class={` bg-primary ${styles.boxWidth}`}>all</div>
    </div>
  </div>
);
export default App;
