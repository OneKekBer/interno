import { styles } from "../../../styles/styles";
import {
   ava1,
   ava2,
   ava3,
   comp1,
   comp2,
   comp3,
   comp4,
   comp5,
} from "../../../assets/assets";

const customers = [
   { name: "Nattasha Mith", location: "Sydney, USA", img: ava1 },
   { name: "Raymond Galario", location: "Sydney, Australia", img: ava2 },
   { name: "Benny Roll", location: "Sydney, New York", img: ava3 },
];

const Opinion = () => {
   return (
      <div className="">
         <div className="wrapper bg-light rounded-[70px] w-full py-[80px] px-[20px]">
            <div className={`${styles.h3} text-center`}>
               What the People Thinks About Us
            </div>
            <div className="flex items-center justify-center md:flex-row flex-col gap-2 md:justify-between">
               {customers.map((cust, index) => {
                  return (
                     <div
                        key={index}
                        className="box  text-center md:text-start bg-white px-[37px] py-[50px] rounded-[30px] w-[90%] md:max-w-[400px] flex flex-col"
                     >
                        <div className="flex flex-col md:flex-row mb-6 gap-2">
                           <div>
                              <img
                                 className="rounded-full md:mx-0 mx-auto h-20 w-20 object-contain "
                                 src={cust.img}
                                 alt=""
                              />
                           </div>
                           <div className="flex flex-col">
                              <div className={`${styles.h5}`}>{cust.name}</div>
                              <div>{cust.location}</div>
                           </div>
                        </div>
                        <div>
                           Lorem Ipsum is simply dummy text of the typesetting
                           industry. Ipsum has been.
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
         <div className="flex wrapper sm:flex-row flex-col gap-20 sm:gap-0 justify-center sm:justify-between ">
            <img className="aspect-video max-h-[100px]" src={comp1} alt="" />
            <img className="aspect-video max-h-[100px]" src={comp2} alt="" />
            <img className="aspect-video max-h-[100px]" src={comp3} alt="" />
            <img className="aspect-video max-h-[100px]" src={comp4} alt="" />
            <img className="aspect-video max-h-[100px]" src={comp5} alt="" />
         </div>
      </div>
   );
};

export default Opinion;
