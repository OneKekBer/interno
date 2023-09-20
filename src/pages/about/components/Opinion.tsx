import { op1, op2, op4 } from "../../../assets/assets";
import { styles } from "../../../styles/styles";

const Opinion = () => {
   return (
      <div className="bg-light w-full">
         <div className="wrapper p-5">
            <div className={`${styles.h3} text-center`}>
               What the People Thinks
               <br /> About Us
            </div>
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
               <div className="max-w-[300px] rounded-[20px] min-h-[60vh]">
                  <img
                     src={op1}
                     className="w-full h-full object-cover rounded-[20px]"
                     alt=""
                  />
               </div>

               <div className="max-w-[300px] rounded-[20px] min-h-[60vh]">
                  <img
                     src={op2}
                     className="w-full h-full object-cover rounded-[20px]"
                     alt=""
                  />
               </div>

               <div className="max-w-[300px] rounded-[20px] min-h-[60vh]">
                  <img
                     src={op4}
                     className="w-full h-full object-cover rounded-[20px]"
                     alt=""
                  />
               </div>
               <div className="max-w-[300px] rounded-[20px] min-h-[60vh]">
                  <img
                     src={op1}
                     className="w-full h-full object-cover rounded-[20px]"
                     alt=""
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Opinion;
