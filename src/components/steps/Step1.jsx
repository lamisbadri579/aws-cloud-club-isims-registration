import PropTypes from "prop-types";
import cloud from "../../assets/aws-logo/cloud.svg"
import { useState,useEffect } from "react";
function Step1({formData,setFormData,validationMessages}) {

  const nameTest = /^[A-Za-z\s]+$/;
  const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


  const [windowSize, setWindowSize] = useState({width: window.innerWidth});

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({width: window.innerWidth});
    };

    
    window.addEventListener("resize", handleResize);
    
   
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  

  return (

    <div>{windowSize.width >= 320 && windowSize.width < 980 ?(
      <div>

      <div className="flex flex-col items-center gap-y-2">
      <img src={cloud} alt="cloud" className="min-[320px]:h-16 min-[320px]:w-16 sm:w-24 sm:h-20"/>
      <p className="text-orange font-jua min-[320px]:text-base sm:text-xl">JOIN US !</p>
      <p className=" font-bold min-[320px]:text-base min-[320px]:mb-4 sm:text-xl">Register for membership</p>
      </div>
      
      
      
      <p className="text-orange mb-4 text-xs font-semibold">all fields are required</p>
      
      {validationMessages.firstName  && <span className={`${formData.firstName.trim() === "" || !nameTest.test(formData.firstName) ? "flex" : "hidden"}`}>{validationMessages.firstName}</span>}
      <input className="input min-[320px]:mb-4 placeholder:text-xs min-[320px]:text-xs pl-2 min-[780px]:mb-6" type="text"  value={formData.firstName} name="first-name" placeholder="First name" autoComplete="on" onChange={(e)=>setFormData({...formData,firstName:e.target.value})} />
      
      {validationMessages.lastName  && <span className={`${formData.lastName.trim() === "" || !nameTest.test(formData.lastName) ? "flex" : "hidden"}`}>{validationMessages.lastName}</span>}
      <input className="input min-[320px]:mb-4 placeholder:text-xs pl-2 min-[320px]:text-xs min-[780px]:mb-6" type="text"  value={formData.lastName} name="last-name" placeholder="Last name"  onChange={(e)=>setFormData({...formData,lastName:e.target.value})} />
      
      {validationMessages.email && <span className={`${formData.email.trim() === "" || !emailTest.test(formData.email) ? "flex" : "hidden"}`}>{validationMessages.email}</span>}
      <input className="input min-[320px]:mb-4 placeholder:text-xs pl-2 min-[320px]:text-xs min-[780px]:mb-6" type="email"  value={formData.email} name="email" placeholder="Email address" autoComplete="email" onChange={(e)=>setFormData({...formData,email:e.target.value})} />
      
      {validationMessages.phone && <span className={`${formData.phone.trim() === "" || formData.phone.length != 8 || !["2", "3", "4", "5", "7", "9"].includes(formData.phone[0]) || isNaN(Number(formData.phone)) ? "flex" : "hidden"}`}>{validationMessages.phone}</span>}
      <input className="input placeholder:text-xs pl-2 min-[320px]:text-xs min-[780px]:mb-3" type="text" value={formData.phone} name="phone" placeholder="Phone number" autoComplete="on"  onChange={(e)=>setFormData({...formData,phone:e.target.value})} />
      
      
      
      
      
      
    </div>

    ):(

      <div className=" flex flex-col ">

      <div className="flex flex-col  gap-y-2">
      
      <p className=" font-bold min-[980px]:text-5xl min-[980px]:text-white min-[980px]:font-semibold min-[980px]:mt-5 min-[980px]:mb-5 min-[1318px]:w-96 2xl:w-full 2xl:text-6xl">Register for membership</p>
      </div>
      
      
      
      <p className="text-orange mb-4 text-base font-medium xl:mb-6">all fields are required</p>
      
      {validationMessages.firstName  && <span className={`${formData.firstName.trim() === "" || !nameTest.test(formData.firstName) ? "flex" : "hidden"}`}>{validationMessages.firstName}</span>}
      <input  className="input min-[980px]:mb-4 xl:mb-6" type="text"  value={formData.firstName} name="first-name" placeholder="First name" autoComplete="on" onChange={(e)=>setFormData({...formData,firstName:e.target.value})} />
      
      {validationMessages.lastName  && <span className={`${formData.lastName.trim() === "" || !nameTest.test(formData.lastName) ? "flex" : "hidden"}`}>{validationMessages.lastName}</span>}
      <input className="input min-[980px]:mb-4 xl:mb-6" type="text"  value={formData.lastName} name="last-name" placeholder="Last name"  onChange={(e)=>setFormData({...formData,lastName:e.target.value})} />
      
      {validationMessages.email && <span className={`${formData.email.trim() === "" || !emailTest.test(formData.email) ? "flex" : "hidden"}`}>{validationMessages.email}</span>}
      <input className="input min-[980px]:mb-4 xl:mb-6 " type="email"  value={formData.email} name="email" placeholder="Email address" autoComplete="email" onChange={(e)=>setFormData({...formData,email:e.target.value})} />
     
      {validationMessages.phone && <span className={`${formData.phone.trim() === "" || formData.phone.length != 8 || !["2", "3", "4", "5", "7", "9"].includes(formData.phone[0]) || isNaN(Number(formData.phone)) ? "flex" : "hidden"}`}>{validationMessages.phone}</span>}
      <input className="input min-[980px]:mb-1 xl:mb-3 " type="text"   value={formData.phone} name="phone" placeholder="Phone number" autoComplete="on"  onChange={(e)=>setFormData({...formData,phone:e.target.value})} />
      
      
      
      
    </div>

    )}</div>
    
    
  )
}

Step1.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    
  }).isRequired,

    setFormData: PropTypes.func.isRequired,

    validationMessages: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    university: PropTypes.string,
    field: PropTypes.string,
    yearOfStudy: PropTypes.string,
    levelExp: PropTypes.string,
    cloudSkillsInterest: PropTypes.string,
    participationPlans: PropTypes.string,
    participationFee: PropTypes.string,
  }).isRequired,
    
};

export default Step1