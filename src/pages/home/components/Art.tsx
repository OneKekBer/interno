import { styles } from "../../../styles/styles";
import Button from "../../../common/Button";
import { art, phone } from "../../../assets/assets";

const Art = () => {
   return (
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2">
         <div className="text-center md:text-start ">
            <div className={`${styles.h2}`}>
               We Create The Art Of Stylish Living Stylishly
            </div>
            <div className={`${styles.p}`}>
               It is a long established fact that a reader will be distracted by
               the of readable content of a page when lookings at its layouts
               the points of using that it has a more-or-less normal.
            </div>
            <div className="flex my-2 justify-center md:justify-start gap-2">
               <img src={phone} alt="" />
               <div className="flex flex-col gap-1">
                  <div className="font-bold text-[24px]">012345678</div>
                  <div className={`${styles.p}`}>Call Us Anytime</div>
               </div>
            </div>
            <Button className="bg-dark mx-auto md:mx-0 text-white">
               Get Free Estimate
            </Button>
         </div>
         <div>
            <img
               className="rounded-tr-[160px] w-full h-full object-cover rounded-bl-[80px]"
               src={art}
               alt=""
            />
         </div>
      </div>
   );
};

export default Art;
