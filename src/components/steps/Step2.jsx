import PropTypes from "prop-types";


function Step2({ formData, setFormData,validationMessages}) {

  
  const handleUniversity = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "other") {
      setFormData({ ...formData, university: "Other" });
    } else {
      setFormData({ ...formData, university: selectedValue });
      
    }
  };

  const handleOtherInputChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, university: value });
  };

  const handleField = (e) => {
    setFormData({ ...formData, field: e.target.value });
  };

  const handleYearOfStudy = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "Other") {
      setFormData({ ...formData, yearOfStudy: "Other" });
    } else {
      setFormData({ ...formData, yearOfStudy: selectedValue });
      
    }
  };

  const handleOtherYearInputChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, yearOfStudy: value });
  };



  return (
    <div className="step-animation min-[320px]:w-60 min-[540px]:w-72 min-[600px]:w-80 sm:w-[350px] min-[720px]:w-[380px] md:w-96 min-[820px]:w-[450px] min-[920px]:w-[520px] min-[980px]:w-[450px]  min-[1100px]:w-[500px] min-[1250px]:w-[530px]">
      <h3 className="mt-5 mb-4 min-[320px]:text-base min-[320px]:text-purple1 min-[980px]:text-lg min-[980px]:text-white min-[980px]:mb-2 min-[980px]:mt-3">
        Your current university
      </h3>
      <div className="flex flex-col ml-2 min-[320px]:gap-y-2 min-[320px]:text-gray-label min-[320px]:text-xs min-[780px]:gap-y-3 min-[980px]:text-sm min-[980px]:text-white min-[980px]:gap-y-1 min-[980px]:font-extralight">
        <div className="flex items-center gap-1">
          <input
          className="cursor-pointer radio"
            id="isims"
            type="radio"
            name="university"
            value="ISIMS"
            checked={formData.university === "ISIMS"}
            onChange={handleUniversity}
          />
          <label className="cursor-pointer" htmlFor="isims">ISIMS</label>
        </div>

        <div className="flex items-center gap-1">
          <input
          className="cursor-pointer radio"
            id="isgi"
            type="radio"
            name="university"
            value="ISGI"
            checked={formData.university === "ISGI"}
            onChange={handleUniversity}
          />
          <label className="cursor-pointer" htmlFor="isgi">ISGI</label>
        </div>

        <div className="flex items-center gap-1">
          <input
          className="cursor-pointer radio"
            id="enetcom"
            type="radio"
            name="university"
            value="Enetcom"
            checked={formData.university === "Enetcom"}
            onChange={handleUniversity}
          />
          <label className="cursor-pointer" htmlFor="enetcom">Enetcom</label>
        </div>

        <div className="flex  items-center gap-1 min-[320px]:mb-4 min-[980px]:mb-3">
          <input
          className="cursor-pointer radio"
            id="otherUni"
            type="radio"
            name="university"
            value="other"
            checked={formData.university === "Other" || !["ISIMS", "ISGI", "Enetcom",""].includes(formData.university)}
            onChange={handleUniversity}
            
          />
          <input
            value={formData.university !== "Other" && !["ISIMS", "ISGI", "Enetcom", ""].includes(formData.university) ? formData.university : ""}
            onChange={handleOtherInputChange}
            name="university"
            id="nameOtherUni"
            className={`w-[50%]  border-x-0 border-t-0 border-solid border-[1px] focus:outline-none min-[320px]:focus:border-x-0 min-[320px]:focus:border-t-0 placeholder:text-xs min-[320px]:border-purple2 focus:border-2 min-[320px]:focus:border-purple3  min-[980px]:border-gray-400 min-[980px]:focus:border-orange bg-transparent `}
            placeholder="Other..."
            type="text"
            disabled={["ISIMS","ISGI","Enetcom",""].includes(formData.university)}
          />
        </div>
        
      </div>
      {validationMessages.university && <span className={`${formData.university.trim()==="" || formData.university==="Other" ? "flex":"hidden"} -mt-2 mb-2`}>{validationMessages.university}</span>}

      

      <h3 className="mb-4 min-[320px]:text-base min-[320px]:text-purple1 min-[980px]:text-lg min-[980px]:text-white min-[980px]:mb-2">
        Major/Field of study
      </h3>
      <input
      
        className="min-[320px]:mb-4 input pl-2 placeholder:text-xs min-[320px]:text-xs min-[980px]:mb-3"
        name="field"
        type="text"
        placeholder="Short answer text"
        value={formData.field}
        onChange={handleField}
      />
      {validationMessages.field && <span className={`${formData.field.trim()==="" ? "flex" : "hidden"} -mt-2 mb-2`}>{validationMessages.field}</span>}
      <h3 className="mb-4 min-[320px]:text-base min-[320px]:text-purple1 min-[980px]:text-lg min-[980px]:text-white min-[980px]:mb-2">
        Year of study
      </h3>
      <div className="flex flex-col ml-2 min-[320px]:gap-y-2 min-[320px]:text-gray-label min-[320px]:text-xs min-[780px]:gap-y-3 min-[980px]:text-sm min-[980px]:text-white min-[980px]:gap-y-1 min-[980px]:font-extralight">
        <div className="flex items-center gap-1">
          <input
          className="cursor-pointer radio"
            id="1st"
            type="radio"
            name="year-of-study"
            value="1st year"
            onChange={handleYearOfStudy}
            checked={formData.yearOfStudy === "1st year"}
          />
          <label className="cursor-pointer" htmlFor="1st">1st year</label>
        </div>

        <div className="flex items-center gap-1">
          <input
          className="cursor-pointer radio"
            id="2nd"
            type="radio"
            name="year-of-study"
            value="2nd year"
            onChange={handleYearOfStudy}
            checked={formData.yearOfStudy === "2nd year"}
          />
          <label className="cursor-pointer" htmlFor="2nd">2nd year</label>
        </div>

        <div className="flex items-center gap-1">
          <input
          className="cursor-pointer radio"
            id="3rd"
            type="radio"
            name="year-of-study"
            value="3rd year"
            onChange={handleYearOfStudy}
            checked={formData.yearOfStudy === "3rd year"}
          />
          <label className="cursor-pointer" htmlFor="3rd">3rd year</label>
        </div>

        <div className="flex items-center gap-1">
          <input
          className="cursor-pointer radio"
            id="graduated"
            type="radio"
            name="year-of-study"
            value="Graduated"
            onChange={handleYearOfStudy}
            checked={formData.yearOfStudy === "Graduated"}
          />
          <label className="cursor-pointer" htmlFor="graduated">Graduated</label>
        </div>

        <div className="flex items-center gap-1 min-[320px]:mb-4 min-[980px]:mb-3">
          <input
          className="cursor-pointer radio"
            id="otherYear"
            type="radio"
            name="year-of-study"
            value="Other"
            onChange={handleYearOfStudy}
            checked={formData.yearOfStudy === "Other" || !["1st year", "2nd year", "3rd year", "Graduated",""].includes(formData.yearOfStudy)}
          />
          <input
          value={formData.yearOfStudy !== "Other" && !["1st year", "2nd year","3rd year", "Graduated", ""].includes(formData.yearOfStudy) ? formData.yearOfStudy : ""}
          onChange={handleOtherYearInputChange}
          name="yearOfStudy"
          id="nameOtherYear"
          className={`w-[50%] border-x-0 border-t-0 focus:outline-none min-[320px]:focus:border-x-0 min-[320px]:focus:border-t-0 border-solid border-[1px] placeholder:text-xs min-[320px]:border-purple2 min-[320px]:focus:border-purple3 focus:border-2  min-[980px]:border-gray-400 min-[980px]:focus:border-orange bg-transparent `}
          placeholder="Other..."
          type="text"
          disabled={["1st year","2nd year","3rd year","Graduated",""].includes(formData.yearOfStudy)}
        />
        </div>
      </div>
      {validationMessages.yearOfStudy && <span className={`${formData.yearOfStudy.trim()==="" || formData.yearOfStudy==="Other" ? "flex" : "hidden"} -mt-2 mb-2`}>{validationMessages.yearOfStudy}</span>}
      
        
      
    </div>
  );
}

Step2.propTypes = {
  formData: PropTypes.shape({
    university: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    yearOfStudy: PropTypes.string.isRequired,
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

export default Step2;
