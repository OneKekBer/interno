import HWW from "./components/HWW";
import Plans from "./components/Plans";
import Title from "../../common/Title";
import { servtitle } from "../../assets/assets";
import Join from "../../common/Join";

const Services = () => {
   return (
      <div>
         <Title text="Home / Services" title="Services" img={servtitle} />
         <Plans />
         <HWW />
         <Join />
      </div>
   );
};

export default Services;
