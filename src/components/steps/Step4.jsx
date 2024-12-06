import PropTypes from "prop-types";

function Step4({ formData, setFormData,validationMessages }) {
    
    const handlePlans=(e)=>{
        const {value,checked}=e.target;
        if(checked){
            setFormData((prevData)=>({...prevData,participationPlans:[...prevData.participationPlans,value]}))
        }
        else{
            setFormData((prevData)=>({...prevData,participationPlans:prevData.participationPlans.filter((skill)=>skill!==value)}))
        }
    }

    const handleParticipationFee = (e) => {
        setFormData({...formData, participationFee: e.target.checked })

    };


  return (
    <div className="step-animation flex flex-col min-[320px]:gap-y-3 min-[780px]:gap-y-5 min-[940px]:w-[520px] min-[980px]:gap-y-3 min-[980px]:w-[450px] min-[980px]:step-animation min-[1100px]:w-[500px] min-[1250px]:w-[530px]">
      <h3 className="mt-5  min-[320px]:text-base min-[320px]:text-purple1  min-[980px]:text-white min-[980px]:text-lg">How do you plan to participe in AWS Cloud Club activities ?</h3>
      
      <div className="flex flex-col ml-2 min-[320px]:gap-y-2 min-[320px]:text-gray-label min-[320px]:text-xs min-[780px]:gap-y-3 min-[980px]:text-white min-[980px]:text-sm min-[980px]:font-extralight ">
      
        <div className="flex items-center gap-1">
        <input
        className="cursor-pointer checkbox"
            id="plan1" 
            type="checkbox" 
            name="plans for participation" 
            value="Hands-on-projects"
            onChange={handlePlans}
            checked={formData.participationPlans.includes("Hands-on-projects")}
        />
        <label className="cursor-pointer" htmlFor="plan1">Hands-on-projects</label>
      
        </div>

     
        <div className="flex items-center gap-1">
        <input 
        className="cursor-pointer checkbox"
            id="plan2"
            type="checkbox" 
            name="plans for participation" 
            value="Attending workshops"
            onChange={handlePlans}
            checked={formData.participationPlans.includes("Attending workshops")}
        />
         <label className="cursor-pointer" htmlFor="plan2">Attending workshops</label>
        </div>

      
        <div className="flex items-center gap-1">
        <input
        className="cursor-pointer checkbox" 
            id="plan3"
            type="checkbox" 
            name="plans for participation" 
            value="Building a portfolio"
            onChange={handlePlans}
            checked={formData.participationPlans.includes("Building a portfolio")}
        />
        <label className="cursor-pointer" htmlFor="plan3">Building a portfolio</label>
        </div>
      

      
       <div className="flex items-center gap-1">
       <input
       className="cursor-pointer checkbox"
             id="plan4" 
             type="checkbox" 
             name="plans for participation" 
             value="Gaining AWS certifications"
             onChange={handlePlans}
             checked={formData.participationPlans.includes("Gaining AWS certifications")}
        />
        <label className="cursor-pointer" htmlFor="plan4">Gaining AWS certifications</label>
       </div>
      

      
       <div className="flex items-center gap-1">
       <input 
       className="cursor-pointer checkbox"
             id="plan5"
             type="checkbox" 
             name="plans for participation" 
             value="Networking with peers"
             onChange={handlePlans}
             checked={formData.participationPlans.includes("Networking with peers")}
        />
       <label className="cursor-pointer" htmlFor="plan5">Networking with peers</label>
       </div>
      
        <div className=" flex items-center gap-1">
        <input
        
             className="place-self-start cursor-pointer checkbox min-[980px]:mt-[3px]"
             id="plan6" 
             type="checkbox" 
             name="plans for participation" 
             value="Career-building activities (e.g.,resume workdshops)"
             onChange={handlePlans}
             checked={formData.participationPlans.includes("Career-building activities (e.g.,resume workdshops)")}
        />
        <label className="cursor-pointer w-[90%]" htmlFor="plan6">Career-building activities (e.g.,resume workdshops)</label>
        </div>
      
      </div>
      {validationMessages.participationPlans && <span className={`${formData.participationPlans.length===0 ? "flex" : "hidden"}`}>{validationMessages.participationPlans}</span>}

      <h3 className=" min-[320px]:text-base min-[320px]:text-purple1  min-[980px]:text-white min-[980px]:text-lg">Participation fee</h3>
      <p className="min-[320px]:text-xs   min-[980px]:text-white min-[980px]:text-sm min-[980px]:font-light">
        The participation fee for joining the club is 10 DT. This amount helps
        us organize events and provide better services to our members.
      </p>
      
      <div className="flex items-center gap-1">
        <input 
        
            className="place-self-start cursor-pointer checkbox min-[320px]:mt-[1px] min-[980px]:mt-[3px]"
            id="agree"
            type="checkbox" 
            name="Agreement to the participation fee"
            value={formData.participationFee}
            onChange={handleParticipationFee}
            checked={formData.participationFee===true}
         />
              <label  htmlFor="agree" className="cursor-pointer min-[320px]:text-gray-label min-[320px]:text-xs min-[980px]:text-white min-[980px]:text-sm min-[980px]:font-extralight">I agree to pay the <span className="font-semibold text-orange">10 DT</span> participation fee.
              </label>
      </div>
      {validationMessages.participationFee && <span className={`${formData.participationFee===false ? "flex" : "hidden"}`}>{validationMessages.participationFee}</span>}

      
    </div>
  );
}
Step4.propTypes={
    formData:PropTypes.shape(
       { participationPlans:PropTypes.arrayOf(PropTypes.string).isRequired,
        participationFee:PropTypes.bool.isRequired
       }
    ).isRequired,

    setFormData:PropTypes.func.isRequired,

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

}
export default Step4;
