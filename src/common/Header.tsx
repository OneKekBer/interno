import React from "react";
import { logo } from "../assets/assets";

const Header = () => {
   return (
      <div className="mb-0 wrapper ">
         <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
               <img className="h-9 w-9" src={logo} alt="" />

               <div className="font-serif text-[50px]">Interno</div>
            </div>
            <div className="flex justify-center gap-5">
               <div className="cursor-pointer">Home</div>
               <div className="cursor-pointer">Pages</div>
               <div className="cursor-pointer">Services</div>
               <div className="cursor-pointer">Project</div>
               <div className="cursor-pointer">Blog</div>
               <div className="cursor-pointer">Contact</div>
               <div className="cursor-pointer">Search</div>
            </div>
         </div>
      </div>
   );
};

export default Header;
