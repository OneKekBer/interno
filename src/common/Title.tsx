import { styles } from "../styles/styles";

const Title = ({
   img,
   title,
   text,
}: {
   img: string;
   title: string;
   text: string;
}) => {
   const divStyle = {
      backgroundImage: `url(${img})`,
   };

   return (
      <div
         className="w-full min-h-[30vh] bg-center bg-cover mb-[200px] flex justify-center items-end"
         style={divStyle}
      >
         <div className="bg-white flex flex-col justify-center items-center w-3/2 py-2 px-[10%] rounded-t-[20px] h-1/2">
            <div className={`${styles.h3}`}>{title}</div>
            <div className={`${styles.p}`}>{text}</div>
         </div>
      </div>
   );
};

export default Title;
