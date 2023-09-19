import { Link } from "react-router-dom";
import { logo } from "../assets/assets";

const Header = () => {
   return (
      <div className="mb-0 wrapper ">
         <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
               <img className="h-9 w-9" src={logo} alt="" />

               <div className="font-serif text-[50px]">Interno</div>
            </div>
            <div className="hidden md:flex justify-center gap-5">
               <Link to="/" className="cursor-pointer">
                  Home
               </Link>
               <Link to="/" className="cursor-pointer">
                  Pages
               </Link>
               <Link to="/" className="cursor-pointer">
                  Services
               </Link>
               <Link to="/" className="cursor-pointer">
                  Project
               </Link>
               <div className="cursor-pointer">Blog</div>
               <div className="cursor-pointer">Contact</div>
               <div className="cursor-pointer">Search</div>
            </div>
            <div className="flex md:hidden">menu</div>
         </div>
      </div>
   );
};

export default Header;
