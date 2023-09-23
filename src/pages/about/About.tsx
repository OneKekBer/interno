import { abouttitle } from '../../assets/assets';
import Title from "../../common/Title";

import Form from "./components/Form";
import Opinion from "./components/Opinion";
import WhatWeDo from "./components/WhatWeDo";

const About = () => {
   return (
      <div>
         <Title text="Home / About Us" title="About Us" img={abouttitle} />

         <WhatWeDo />
         <Opinion />
         <Form />
      </div>
   );
};

export default About;
