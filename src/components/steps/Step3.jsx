
import PropTypes from "prop-types";

function Step3({ formData, setFormData,validationMessages }) {
  
  const handleLevelExp = (e) => {
    setFormData({ ...formData, levelExp: e.target.value });
  };

  const handleSkills = (e) => {
    const { value, checked } = e.target;
  
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        cloudSkillsInterest: [...prevData.cloudSkillsInterest, value] 
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        cloudSkillsInterest: prevData.cloudSkillsInterest.filter((skill) => skill !== value) 
      }));
    }
  };
  

  return (
    <div className="step-animation flex flex-col min-[320px]:gap-y-3 min-[780px]:gap-y-5 min-[980px]:gap-y-2 min-[980px]:w-[450px] min-[980px]:step-animation  ">
      <h3 className="mt-5  min-[320px]:text-base min-[320px]:text-purple1  min-[980px]:text-lg min-[980px]:text-white">What is your level of experience with AWS or cloud technologies?</h3>
      <div className="flex flex-col ml-2 min-[320px]:gap-y-2 min-[320px]:text-gray-label min-[320px]:text-xs min-[780px]:gap-y-3 min-[980px]:text-sm min-[980px]:text-white min-[980px]:gap-y-1 min-[980px]:font-extralight">

       <div className="flex items-center gap-1">
       <input
       className="cursor-pointer radio"
          id="beginner"
          type="radio"
          name="level"
          value="Beginner"
          checked={formData.levelExp === "Beginner"}
          onChange={handleLevelExp}
        />
        <label className="cursor-pointer" htmlFor="beginner">Beginner</label>
       </div>

      
        <div className="flex items-center gap-1">
        <input
        className="cursor-pointer radio"
          id="intermediate"
          type="radio"
          name="level"
          value="Intermediate"
          checked={formData.levelExp === "Intermediate"}
          onChange={handleLevelExp}
        />
        <label className="cursor-pointer" htmlFor="intermediate">Intermediate</label>
        </div>

      
        <div className="flex items-center gap-1">
        <input
        className="cursor-pointer radio"
          id="advanced"
          type="radio"
          name="level"
          value="Advanced"
          checked={formData.levelExp === "Advanced"}
          onChange={handleLevelExp}
        />
        <label className="cursor-pointer" htmlFor="advanced">Advanced</label>


        </div>
      </div>
      {validationMessages.levelExp && <span className={`${formData.levelExp.trim()==="" ? "flex" : "hidden"}`}>{validationMessages.levelExp}</span>}

      <h3 className="  min-[320px]:text-base min-[320px]:text-purple1 min-[980px]:text-lg min-[980px]:text-white">What cloud-related skills are you most interested in?</h3>
      <div className="flex flex-col ml-2 min-[320px]:gap-y-2 min-[320px]:text-gray-label min-[320px]:text-xs min-[780px]:gap-y-3 min-[980px]:text-sm min-[980px]:text-white min-[980px]:gap-y-1 min-[980px]:font-extralight">
      
      <div className="flex items-center gap-1">
      
        <input
        className="checkbox"
          id="skill1"
          type="checkbox"
          name="cloud skills of interest"
          value="Machine Learning"
          onChange={handleSkills}
          checked={formData.cloudSkillsInterest.includes("Machine Learning")}
        />
        <label className="cursor-pointer" htmlFor="skill1">Machine Learning</label>
      </div>

      <div className="flex items-center gap-1">
      
        <input
        className="cursor-pointer checkbox"
          id="skill2"
          type="checkbox"
          name="cloud skills of interest"
          value="Data Analytics"
          onChange={handleSkills}
          checked={formData.cloudSkillsInterest.includes("Data Analytics")}
        />
        <label className="cursor-pointer" htmlFor="skill2">Data Analytics</label>
      </div>

      
        <div className="flex items-center gap-1">
        <input
        className="cursor-pointer checkbox"
          id="skill3"
          type="checkbox"
          name="cloud skills of interest"
          value="DevOps"
          onChange={handleSkills}
          checked={formData.cloudSkillsInterest.includes("DevOps")}
        />
        <label className="cursor-pointer" htmlFor="skill3">DevOps</label>
        </div>

      
        <div className="flex items-center gap-1">
        <input
        className="cursor-pointer checkbox"
          id="skill4"
          type="checkbox"
          name="cloud skills of interest"
          value="Cloud Architecture"
          onChange={handleSkills}
          checked={formData.cloudSkillsInterest.includes("Cloud Architecture")}
        />
       <label className="cursor-pointer" htmlFor="skill4"> Cloud Architecture</label>
        </div>

      
        <div className="flex items-center gap-1">
        <input
        className="cursor-pointer checkbox"
          id="skill5"
          type="checkbox"
          name="cloud skills of interest"
          value="Networking & Security"
          onChange={handleSkills}
          checked={formData.cloudSkillsInterest.includes("Networking & Security")}
        />
       <label className="cursor-pointer" htmlFor="skill5">Networking & Security</label>

        </div>

      
        <div className="flex items-center gap-1">
        <input
        className="cursor-pointer checkbox"
          id="skill6"
          type="checkbox"
          name="cloud skills of interest"
          value="Severless Technologies"
          onChange={handleSkills}
          checked={formData.cloudSkillsInterest.includes("Severless Technologies")}
        />
        <label className="cursor-pointer" htmlFor="skill6">Severless Technologies</label>

        </div>

      
        <div className="flex items-center gap-1">
        <input
        className="cursor-pointer checkbox"
          id="skill7"
          type="checkbox"
          name="cloud skills of interest"
          value="AI/ML"
          onChange={handleSkills}
          checked={formData.cloudSkillsInterest.includes("AI/ML")}
        />
        <label className="cursor-pointer" htmlFor="skill7">AI/ML</label>
        </div>

      
        <div className="flex items-center gap-1">
        <input
        className="cursor-pointer checkbox"
          id="skill8"
          type="checkbox"
          name="cloud skills of interest"
          value="Fullstack Web Development"
          onChange={handleSkills}
          checked={formData.cloudSkillsInterest.includes("Fullstack Web Development")}
        />
        <label className="cursor-pointer" htmlFor="skill8">Fullstack Web Development</label>
        </div>
      

      
        <div className="flex items-center gap-1">
        <input
        className="cursor-pointer checkbox"
          id="skill9"
          type="checkbox"
          name="cloud skills of interest"
          value="Other"
          onChange={handleSkills}
          checked={formData.cloudSkillsInterest.includes("Other")}
        />
        <label className="cursor-pointer" htmlFor="skill9">Other...</label>
        </div>
      
      </div>
      {validationMessages.cloudSkillsInterest && <span className={`${formData.cloudSkillsInterest.length===0 ? "flex" : "hidden"}`}>{validationMessages.cloudSkillsInterest}</span>}
    </div>
  );
}

Step3.propTypes = {
  formData: PropTypes.shape({
    levelExp: PropTypes.string.isRequired,
    cloudSkillsInterest: PropTypes.arrayOf(PropTypes.string).isRequired
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

export default Step3;
