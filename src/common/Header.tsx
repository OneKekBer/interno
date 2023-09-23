import { Link } from "react-router-dom";
import { logo } from "../assets/assets";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles/styles";

const menuVars = {
   initial: {
      opacity: 0,
   },

   animate: {
      opacity: 1,
      transition: {
         duration: 1,
         staggerChildren: 0.35,
      },
   },

   exit: {
      opacity: 0,
      transition: {
         duration: 0.5, // Adjust the exit animation duration as needed
      },
   },
};

const navVars = {
   initial: {
      opacity: 0,
      // y: 50,
   },

   animate: {
      opacity: 1,
      // y: 0,
      transition: {
         duration: 0.5,
      },
   },

   exit: {
      opacity: 0,
      transition: {
         duration: 0.5, // Adjust the exit animation duration as needed
      },
   },
};

const links = [
   { title: "Home", link: "/" },
   { title: "About Us", link: "/about" },
   { title: "Services", link: "/services" },
   { title: "Project", link: "/project" },
   { title: "Blog", link: "/blog" },
   { title: "Contact", link: "/contact" },
];

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const handleMenuOpen = () => {
      setIsOpen((prev) => !prev);
   };
   return (
      <AnimatePresence>
         {isOpen && ( // Render the motion component conditionally
            <motion.div
               key="menu" // Make sure to specify a unique key
               variants={menuVars}
               initial="initial"
               animate="animate"
               exit="exit"
               className="flex z-10 menu md:hidden flex-col items-center justify-center overflow-hidden bg-white fixed inset-0 w-full h-[70vh] "
            >
               {" "}
               {links.map((nav, index) => {
                  return (
                     <motion.a
                        className={`text-black hover:text-opacity-60 duration-200 ${styles.h4} overflow-hidden`}
                        variants={navVars}
                        key={index}
                        href={nav.link}
                     >
                        {" "}
                        {nav.title}
                     </motion.a>
                  );
               })}
            </motion.div>
         )}
         <div className="mb-0 wrapper ">
            <div className="flex justify-between items-center">
               <Link to="/" className="flex items-center gap-2">
                  <img className="h-9 w-9" src={logo} alt="" />

                  <div className="font-serif text-[50px]">Interno</div>
               </Link>
               <div className="hidden md:flex justify-center gap-5">
                  {links.map((link, i) => {
                     return (
                        <Link key={i} to={link.link}>
                           {link.title}
                        </Link>
                     );
                  })}
               </div>
               <div
                  className="flex md:hidden z-20 cursor-pointer hover:text-slate-400 duration-300"
                  onClick={handleMenuOpen}
               >
                  menu
               </div>
            </div>
         </div>
      </AnimatePresence>
   );
};

export default Header;
