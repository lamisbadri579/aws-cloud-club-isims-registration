import { useState,useEffect,useRef } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import awsLogo from "../assets/aws-logo/AWS_logo.svg";
import facebook from "../assets/social-media-icons/icons8-facebook-100.png";
import instagram from "../assets/social-media-icons/skill-icons_instagram.png";
import linkedIn from "../assets/social-media-icons/icons8-linkedin-100.png";
import meetup from "../assets/social-media-icons/icons8-meetup-100.png";
import arrowMobile from "../assets/back-arrows/arrow-prev-mobile.svg";
import Carousel from "./Carousel"
import Spinner from "../components/Spinner"
import emailjs from '@emailjs/browser';
import img1 from '../assets/carousel/img1.jpg'
import img2 from '../assets/carousel/img2.png'
import img3 from '../assets/carousel/img3.jpg'
import img4 from '../assets/carousel/img4.jpg'
import img5 from '../assets/carousel/img5.jpg'
//import img6 from '../assets/carousel/img6.jpg'

function Form() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    field: "",
    yearOfStudy: "",
    levelExp: "",
    cloudSkillsInterest: [],
    participationPlans: [],
    participationFee: false,
  });
  

  const displayForm = () => {
    switch (step) {
      case 0:
        return <Step1 formData={formData} setFormData={setFormData} validationMessages={errors} />;
      case 1:
        return <Step2 formData={formData} setFormData={setFormData} validationMessages={errors} />;
      case 2:
        return <Step3 formData={formData} setFormData={setFormData} validationMessages={errors} />;
      case 3:
        return <Step4 formData={formData} setFormData={setFormData} validationMessages={errors} />;
     
    }
  };

  const submitButton = () => {
    return step === 3 ? "Register" : "Next";
  };

 const nameTest = /^[A-Za-z\s]+$/;
 const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

 const [errors,setErrors]=useState({});

//---------step1 validation---------
const validateStep1=()=>{
  let newErrors={};
  //first name validation 
  if(formData.firstName.trim() === ""){newErrors.firstName="Please enter your first name"}
  else if(!nameTest.test(formData.firstName)){newErrors.firstName="Only letters and spaces allowed"}
  //last name validation
  if(formData.lastName.trim() === ""){newErrors.lastName="Please enter your last name"}
  else if(!nameTest.test(formData.lastName)){newErrors.lastName="Only letters and spaces allowed"}
  //email validation
  if(formData.email.trim() === ""){newErrors.email="Please enter your email address"}
  else if(!emailTest.test(formData.email)){newErrors.email="Invalid email address"}
  //phone validation
  if(formData.phone.trim() === ""){newErrors.phone="Please enter your phone number"}
  else if(formData.phone.length != 8 || !["2", "3", "4", "5", "7", "9"].includes(formData.phone[0]) || isNaN(Number(formData.phone)))
    {newErrors.phone="Invalid phone number"}
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
}

//---------step2 validation---------
const validateStep2=()=>{
  let newErrors={};
  //university validation
  if (formData.university.trim() === "") {
    newErrors.university = "Please select a university";
  } else if (formData.university === "Other") {
    newErrors.university = "Please enter your university name";
  }
  //field validation
  if( formData.field.trim() === ""){newErrors.field="Please enter your field of study"}
  //year of study validation
  if( formData.yearOfStudy.trim() === ""){newErrors.yearOfStudy="Please select your year of study"}
  else if(formData.yearOfStudy==="Other"){
    newErrors.yearOfStudy="Please enter your year of study"
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
}

//---------step3 validation---------
const validateStep3=()=>{
  let newErrors={};
  //level experience validation
  if(formData.levelExp.trim()===""){newErrors.levelExp="Please indicate your experience level"}
  // cloud interest skills validation
  if(formData.cloudSkillsInterest.length === 0){newErrors.cloudSkillsInterest="Please pick at least one cloud skill"}
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
}

//---------step4 validation---------
const validateStep4=()=>{
  let newErrors={};
  //participation plans validation
  if(formData.participationPlans.length === 0){newErrors.participationPlans="Please pick at least one plan option"}
  //participation fee agreement validation
  if(formData.participationFee===false){newErrors.participationFee="Confirm your agreement to proceed"}
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
}



  const handleNext = () => {
    let isValid = false;
    if (step === 0) {isValid=validateStep1()}
    if (step === 1) {isValid=validateStep2()}
    if (step === 2) {isValid=validateStep3()}
    if (step === 3) {isValid=validateStep4()} 
    if(isValid){setStep(step+1)}
  };

  const [loading,setLoading]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbw2eT8V0VK_EWPNozQ2pbCeD8WjbkMRKozJindRydKJZVcPn0ZT7Pu2lcsMA2dFwgDB/exec";
  
    if (step > 3 && validateStep1() && validateStep2() && validateStep3() && validateStep4()) {
      setLoading(true);
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Content type header for URL-encoded data
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
  
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            university: "",
            otherUniversity: "",
            field: "",
            yearOfStudy: "",
            levelExp: "",
            cloudSkillsInterest: [],
            participationPlans: [],
            participationFee: false,
          });
  
          
          setTimeout(() => {
            setLoading(false);
          }, 5000);
  
          setStep(0);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
  



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
  
  const imageList = [
    { link: img1 },
    { link: img2 },
    { link: img3 },
    {link:img4},
    {link:img5},
    //{link:img6}
    
  ];

//send email 
   const form = useRef();
   const sendEmail = (e) => {
     e.preventDefault();
     if(step>3 && validateStep1() && validateStep2() && validateStep3() && validateStep4()){
       emailjs.send(
        'service_gbz92w7',
        'template_ibbjuul',
       {
            email: formData.email,
            firstName:formData.firstName
         },
         'I9cOv9kVr4eM7-RJt'
     )
     .then((result) => console.log('SUCCESS!', result))
     .catch((error) => console.error('FAILED...', error));
     }
  };

  
  
  
  return (
   
     <div> {loading ? <Spinner/> :(
      
      <div>
      {windowSize.width >= 320 && windowSize.width < 980 ?(
        <div className="flex  min-[320px]:flex-col  overflow-x-hidden ">
        <div className="min-[320px]:p-2">
          <img
            className="min-[320px]:w-10 sm:w-14"
            src={awsLogo}
            alt="aws-logo"
          />
        </div>
        <div className=" flex  flex-col items-center justify-center gap-y-8">
          <div className="flex flex-wrap text-center justify-center">
            <p className="text-white min-[320px]:w-3/4 min-[320px]:text-xs min-[480px]:text-sm sm:text-base min-[780px]:w-[100%] min-[980px]:text-lg">
              <span className="text-orange  min-[320px]:text-xs min-[480px]:text-sm sm:text-base min-[980px]:text-lg">ISIMS</span> : Higher Institute of
              Computer Science and Multimedia of Sfax
            </p>
          </div>
  
          <div className=" flex flex-col min-[320px]:w-[90%]  min-[350px]:w-[85%]  min-[380px]:w-[80%]  min-[420px]:w-[75%] min-[460px]:w-[70%] min-[520px]:w-[65%] min-[980px]:w-[80%]">
            <form ref={form} onSubmit={(e) => { handleSubmit(e); sendEmail(e);}}>
              <div className="flex items-center">
  
                
  
              <div className="form w-full  ">
                <div className="flex flex-col">
                  <div className={`p-1 bg-bg-color cursor-pointer  justify-center items-center w-14 h-7 rounded hover:bg-gradient-to-r hover:bg-violet-950 hover:to-violet-950 ${step===0? "hidden":"flex"}`}
                  onClick={() => setStep((currentStep) => currentStep - 1)}
                  disabled={step === 0}
                >
                  {" "}
                  <img className={`h-4`} src={arrowMobile} alt="back" />{" "}
                </div>
                <div>{displayForm()}</div>
  
                </div>
                <button
                  className={`w-full  min-[320px]:text-sm  min-[320px]:h-10 sm:text-base rounded mt-5 font-jua  tracking-widest ${submitButton() === "Register" ? "min-[320px]:bg-orange hover:bg-gradient-to-br hover:from-[#EA8B01]  hover:to-[#EA8B01] min-[320px]:text-purple1" : " min-[320px]:bg-bg-color hover:bg-gradient-to-r hover:bg-violet-950 hover:to-violet-950  min-[320px]:text-white"} min-[780px]:h-12 `}
                  onClick={handleNext}
                >
                  {submitButton()}
                </button>
              </div>
  
              </div>
            </form>
  
            <div className="mt-4 mb-20">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-white min-[320px]:text-sm sm:font-semibold sm:text-base tracking-wider">
                  Visit us :
                </p>
                <div className="flex items-center gap-2">
                  <a href="https://www.facebook.com/profile.php?id=61558406757136" target="_blank">
                    <img src={facebook} alt="facebook" className="h-6 w-6 socialmedia" />
                  </a>
                  <a href="https://www.instagram.com/awscc_isims?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                    <img src={instagram} alt="instagram" className="h-6 w-6 socialmedia" />
                  </a>
                  <a href="https://www.linkedin.com/company/aws-club-cloud-isims/" target="_blank">
                    <img src={linkedIn} alt="linkedIn" className="h-6 w-6 socialmedia" />
                  </a>
                  <a href="https://www.meetup.com/aws-cloud-club-in-tunisia/" target="_blank">
                    <img src={meetup} alt="meetup" className="h-6 w-6 socialmedia" />
                  </a>
                </div>
              </div>
  
              <div className="flex items-center gap-2 ">
                <p className="text-white min-[320px]:text-sm sm:font-semibold sm:text-base tracking-wider">
                  Contact us :
                </p>
                <a
                  className="text-orange underline underline-offset-2 text-xs font-normal"
                  href="mailto:awscloudclubisims@gmail.com"
                >
                  awscloudclubisims@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      ):(
        
        <div className={`flex items-center justify-center h-screen min-[980px]:gap-3`}>
            <div className="min-[320px]:overflow-hidden max-[979px]:hidden max-[979px]:overflow-hidden min-[980px]:flex-1 ">
            <Carousel imgs={imageList}/>
            </div>
  
            
            
           <div className="flex flex-col min-[980px]:flex-1">
  
           <form ref={form} onSubmit={(e) => { handleSubmit(e); sendEmail(e);}} >
              
  
              <div className="form relative ">
                <div className="flex flex-col">
                  <div className={`${step===0? "hidden":"flex"} p-1 bg-orange cursor-pointer  justify-center items-center w-16 h-8 rounded hover:bg-gradient-to-br hover:from-[#EA8B01]  hover:to-[#EA8B01]`}
                  onClick={() => setStep((currentStep) => currentStep - 1)}
                  disabled={step === 0}
                >
                  {" "}
                  <img className="h-5" src={arrowMobile} alt="back" />{" "}
                </div>
                <div>{displayForm()}</div>
  
                </div>
                <button
                  className={`z-10 w-full min-[980px]:h-10 min-[980px]:text-lg  min-[980px]:bg-orange  rounded min-[980px]:mt-3  font-jua text-white tracking-widest hover:bg-gradient-to-br hover:from-[#EA8B01]  hover:to-[#EA8B01] ${submitButton() === "Register" ? "min-[980px]:text-purple1" : ""} `}
                  onClick={handleNext}
                >
                  {submitButton()}
                </button>
              </div>
  
              
            </form>
  
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-white min-[320px]:text-sm sm:font-semibold sm:text-base tracking-wider">
                  Visit us :
                </p>
                <div className="flex items-center gap-2">
                  <a  href="https://www.facebook.com/profile.php?id=61558406757136" target="_blank">
                    <img src={facebook} alt="facebook" className="h-6 w-6 socialmedia" />
                  </a>
                  <a href="https://www.instagram.com/awscc_isims?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                    <img src={instagram} alt="instagram" className="h-6 w-6 socialmedia" />
                  </a>
                  <a href="https://www.linkedin.com/company/aws-club-cloud-isims/" target="_blank">
                    <img src={linkedIn} alt="linkedIn" className="h-6 w-6 socialmedia" />
                  </a>
                  <a href="https://www.meetup.com/aws-cloud-club-in-tunisia/" target="_blank">
                    <img src={meetup} alt="meetup" className="h-6 w-6 socialmedia" />
                  </a>
                </div>
              </div>
  
              <div className="flex items-center gap-2 ">
                <p className="text-white min-[320px]:text-sm sm:font-semibold sm:text-base tracking-wider">
                  Contact us :
                </p>
                <a
                  className="text-orange underline underline-offset-2 text-xs font-normal"
                  href="mailto:awscloudclubisims@gmail.com"
                >
                   awscloudclubisims@gmail.com
                </a>
              </div>
            </div>
  
           </div>
            
            
            
        </div>
  
      )}
        
     </div>
     )}



     </div>
    
  );
}

export default Form;
