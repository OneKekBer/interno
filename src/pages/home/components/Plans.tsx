import { plans } from "../../../constants/constants";
import { styles } from "../../../styles/styles";

const Plans = () => {
   return (
      <div className="wrapper">
         <div className="flex flex-col sm:flex-row  justify-between gap-9 items-center">
            {plans.map((plans, index) => {
               return (
                  <div key={index} className="text-center">
                     <div className={`${styles.h5}`}>{plans.title}</div>
                     <div className={`${styles.p} mb-5`}>{plans.desc}</div>
                     <p className="">read more</p>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Plans;
