import { styles } from "../../../styles/styles";
import {
   hww1,
   hww2,
   hww3,
   hww4,
   hwwicon1,
   hwwicon2,
   hwwicon3,
   hwwicon4,
} from "../../../assets/assets";

const vars = [
   {
      title: "Concept & Details",
      text: "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry. ",
      icon: hwwicon1,
      img: hww1,
   },
   {
      title: "Idea for Work",
      text: "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry. ",
      icon: hwwicon2,
      img: hww2,
   },
   {
      title: "Design",
      text: "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry. ",
      icon: hwwicon3,
      img: hww3,
   },
   {
      title: "Perfection",
      text: "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of theand typesetting indufstry. ",
      icon: hwwicon4,
      img: hww4,
   },
];

const HWW = () => {
   return (
      <div className="wrapper bg-light rounded-[80px] p-[100px]">
         <div className="text-center mb-10">
            <div className={`${styles.h3}`}>How We Work</div>
            <div className={`${styles.p}`}>
               It is a long established fact will be distracted.Lorem Ipsum is
               simply dummy text of the printing and typesetting industry.
            </div>
         </div>
         <div className="flex gap-10 gap-y-[100px] flex-col">
            {vars.map((i, index) => {
               return (
                  <div
                     className="hwwgrid grid gap-5 grid-cols-1 md:grid-cols-2"
                     key={index}
                  >
                     <img
                        src={i.img}
                        className="w-full h-full object-cover rounded-bl-[70%] rounded-tr-[30%]"
                        alt=""
                     />
                     <div className="flex flex-col justify-center gap-[40px]">
                        <div className="flex w-full items-center justify-between">
                           <img
                              className="h-[90px] w-[90px]"
                              src={i.icon}
                              alt=""
                           />
                           <div className={`${styles.h1} text-white`}>
                              0{index + 1}
                           </div>
                        </div>
                        <div>
                           <div className={`${styles.h4}`}>{i.title}</div>
                           <div className={`${styles.p}`}>{i.text}</div>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default HWW;
