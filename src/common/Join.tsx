import { styles } from "../styles/styles";
import Button from "./Button";

const Join = () => {
   return (
      <div className="wrapper">
         <div className="bg-dark p-5 min-h-[40vh] rounded-[60px] text-white py-[80px] flex flex-col items-center justify-center text-center">
            <div className={`${styles.h3}`}>Wanna join the interno?</div>
            <div className={`${styles.p} mb-[40px]`}>
               It is a long established fact will be distracted.
            </div>
            <Button className="bg-brown mx-auto ">Contact With Us</Button>
         </div>
      </div>
   );
};

export default Join;
