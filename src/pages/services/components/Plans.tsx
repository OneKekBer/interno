import { styles } from "../../../styles/styles";

const plans = [
   {
      title: "Project Plan",
      desc: "There are many variations of the passages of lorem Ipsum from available, majority.",
   },
   {
      title: "Interior Work",
      desc: "There are many variations of the passages of lorem Ipsum from available, majority.",
   },
   {
      title: "Retail Design",
      desc: "There are many variations of the passages of lorem Ipsum from available, majority.",
   },
   {
      title: "2d/3d Art Work",
      desc: "There are many variations of the passages of lorem Ipsum from available, majority.",
   },
   {
      title: "Interior Work",
      desc: "There are many variations of the passages of lorem Ipsum from available, majority.",
   },
   {
      title: "Decoration Work",
      desc: "There are many variations of the passages of lorem Ipsum from available, majority.",
   },
];

const Plans = () => {
   return (
      <div className="wrapper my-[200px]">
         <div className="grid gap-10 md:grid-cols-3  sm:grid-cols-2 grid-cols-1">
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
