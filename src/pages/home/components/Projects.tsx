import { next, proj1, proj2, proj3, proj4 } from "../../../assets/assets";
import { styles } from "../../../styles/styles";

const proj = [proj1, proj2, proj3, proj4];

const Projects = () => {
   return (
      <div className="wrapper">
         <div className="grid grid-cols-1 md:grid-cols-2 content-center self-center place-items-center gap-10">
            {proj.map((proj, i) => {
               return (
                  <div key={i} className="max-w-[500px] ">
                     <div className="">
                        <img
                           src={proj}
                           className="object-cover w-full h-full rounded-[60px]"
                           alt=""
                        />
                        <div className="flex justify-between items-center">
                           <div className="flex flex-col justify-center">
                              <div className={`${styles.h5}`}>
                                 Modern Kitchen
                              </div>
                              <div className={`${styles.p}`}>
                                 Decor / Artchitecture
                              </div>
                           </div>
                           <img
                              src={next}
                              className="object-contain cursor-pointer"
                              alt=""
                           />
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Projects;
