import { ChangeEvent, FormEvent, useState } from "react";
import { styles } from "../../../styles/styles";
import Button from "../../../common/Button";

const Form = () => {
   const [data, setData] = useState({
      name: "",
      email: "",
      text: "",
   });
   const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
      e.preventDefault();
      setData({
         name: "",
         email: "",
         text: "",
      });
      alert("thanks for email");
   };
   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   return (
      <div>
         <div className="wrapper">
            <div className={`${styles.h3} text-center`}>
               Creative project?
               <br /> Let's have a productive talk.
            </div>
            <form
               action=""
               className="grid gap-10 max-w-[800px] mx-auto grid-cols-2"
            >
               <input
                  className="text-black w-full  col-span-2 sm:col-span-1 bg-transparent  border-b-black border-b-2 py-5"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                  placeholder="Name"
                  id=""
               />
               <input
                  className="text-black w-full  col-span-2 sm:col-span-1 bg-transparent  border-b-black border-b-2 py-5"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={data.email}
                  id=""
               />
               <input
                  className="text-black w-full min-h-[200px] align-text-top col-span-2 bg-transparent  border-b-black border-b-2 py-5"
                  type="text"
                  placeholder="Hello Iam Intrested in.."
                  name="text"
                  onChange={handleChange}
                  value={data.text}
                  id=""
               />
               <Button
                  onClick={handleSubmit}
                  className="bg-dark mx-auto col-span-2 text-light"
               >
                  Send Now
               </Button>
            </form>
         </div>
      </div>
   );
};

export default Form;
