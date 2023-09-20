import { wwd1, wwd2 } from "../../../assets/assets";
import Button from "../../../common/Button";
import { styles } from "../../../styles/styles";

const WhatWeDo = () => {
   return (
      <div
         id="WhatWeDo"
         className="text-center wrapper mb-[150px] justify-center md:text-start md:justify-start"
      >
         <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mb-[100px]">
            <div>
               <img
                  className="rounded-[40px] w-full h-full object-cover"
                  src={wwd1}
                  alt=""
               />
            </div>
            <div>
               <div className={`${styles.h3}`}>
                  Well-Equipped Studio Set Up for both Video and Photo
                  Production
               </div>
               <div className={`${styles.p}`}>
                  We have current equipment to facilitate studio productions
               </div>
               <Button className="bg-dark text-light  md:mx-0 mx-auto">
                  View Pricing
               </Button>
            </div>
         </div>

         <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <div className="md:order-2">
               <img
                  className="rounded-[40px] w-full h-full object-cover"
                  src={wwd2}
                  alt=""
               />
            </div>
            <div className="">
               <div className={`${styles.h3}`}>
                  Over 10 Years of Experience in Video Production
               </div>
               <div className={`${styles.p}`}>
                  We have experienced cinematographers with current equipment
                  and tools to produce awesome footage
               </div>
               <Button className="mx-auto bg-dark text-light md:mx-0">
                  Read More
               </Button>
            </div>
         </div>
      </div>
   );
};

export default WhatWeDo;
