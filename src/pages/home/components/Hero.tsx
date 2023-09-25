import { hero } from "../../../assets/assets";
import { styles } from "../../../styles/styles";
import Button from "../../../common/Button";

const Hero = () => {
   return (
      <div className="relative">
         {/* <div className="w-[300px] h-[300px] bg-gradient-to-tr from-light to-brown rounded-full bg-opacity-20 absolute top-0 left-0"></div> */}

         <div className="wrapper">
            <div className="relative">
               <img
                  className="rounded-[70px] w-full h-[80vh] object-cover object-center"
                  src={hero}
                  alt=""
               />
               <div className="absolute top-[20%] left-[5%]">
                  <h2 className={`${styles.h2}`}>
                     Let Your Home
                     <br /> Be Unique
                  </h2>
                  <p className={`${styles.p} mb-[10%]`}>
                     There are many variations of the passages
                     <br /> of lorem Ipsum fromavailable, majority.
                  </p>
                  <Button className="bg-dark text-white">Get Started</Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
