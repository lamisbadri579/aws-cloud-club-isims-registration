import { useState,useEffect } from "react";
import { IoIosCloudOutline } from "react-icons/io";


function Spinner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
   
    const showTimer = setTimeout(() => {
      setIsVisible(true); 
    }, 1000);

   
    return () => {
      clearTimeout(showTimer);
      
    };
  }, []);
  return (
    <div className=" h-screen flex flex-col items-center justify-center gap-y-3">
      <IoIosCloudOutline className="min-[320px]:text-[100px] min-[980px]:text-[150px] animate-color-change" />
      {isVisible &&  <p className="text-white min-[320px]:text-lg sm:text-2xl lg:text-3xl fade-in font-medium">Form Submitted Successfully !</p>}
     
      
       {isVisible && <p className="min-[320px]:text-lg sm:text-2xl lg:text-3xl font-medium font-jua text-orange fade-in">Please Check Your Email !</p>}
     
      
    </div>
  )
}

export default Spinner