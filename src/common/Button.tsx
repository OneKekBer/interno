import React, { ReactNode, MouseEvent, CSSProperties } from "react";
import { arrow } from "../assets/assets";

interface Props {
   children: ReactNode;
   className?: string;
   style?: CSSProperties; // Use React.CSSProperties for style
   onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const Button: React.FC<Props> = ({ children, className, onClick, style }) => {
   return (
      <div
         style={style || {}}
         onClick={onClick}
         className={`cursor-pointer w-[220px] gap-3 h-[75px] rounded-[18px] flex justify-center hover:opacity-40 duration-300 items-center  ${
            className || ""
         } `}
      >
         {children}
         <img src={arrow} alt="" />
      </div>
   );
};

export default Button;
