import { face, inst, link, logo, twitter } from "../assets/assets";
import { styles } from "../styles/styles";

const Footer = () => {
   return (
      <div className="wrapper flex text-[22px] flex-wrap gap-10 font-jost justify-center md:justify-between">
         <ul className="flex flex-col max-w-[200px]">
            <li className="flex items-center gap-4">
               <img src={logo} className="h-9 w-9" alt="" />
               <div className={`${styles.h4}`}>Interno</div>
            </li>
            <li>
               It is a long established fact that a reader will be distracted
               lookings.
            </li>
            <li className="flex justify-between">
               <img
                  className="hover:bg-slate-300 duration-300 p-2 rounded-full object-contain object-center w-9 h-9 "
                  src={link}
                  alt=""
               />
               <img
                  className="hover:bg-slate-300 duration-300 p-2 rounded-full object-contain object-center w-9 h-9 "
                  src={twitter}
                  alt=""
               />
               <img
                  className="hover:bg-slate-300 duration-300 p-2 rounded-full object-contain object-center w-9 h-9 "
                  src={face}
                  alt=""
               />
               <img
                  className="hover:bg-slate-300 duration-300 p-2 rounded-full object-contain object-center w-9 h-9 "
                  src={inst}
                  alt=""
               />
            </li>
         </ul>
         <ul>
            <li>Pages</li>
            <li>About Us</li>
            <li>Our Projects</li>
            <li>Our Team</li>
            <li>Contact Us</li>
            <li>Services</li>
         </ul>
         <ul>
            <li>Services</li>
            <li>Kitchen</li>
            <li>Living Area</li>
            <li>Bathroom</li>
            <li>Dinning Hall</li>
            <li>Bedroom</li>
         </ul>
         <ul>
            <li>Contact</li>
            <li>
               55 East Birchwood Ave.
               <br /> Brooklyn, New York 11201
            </li>
            <li>contact@interno.com</li>
            <li>(123) 456 - 7890</li>
         </ul>
      </div>
   );
};

export default Footer;
