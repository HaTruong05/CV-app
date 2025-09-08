import { useState } from "react";
import PersonalInfo from "./personalInfoSection";
import PersonalInfoDisplay from "./personalInfoDisplay";
import EducationInfo from "./eduSection";
import EducationInfoDisplay from "./eduSectionDisplay";

export default function Cv() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [editing, setEditing] = useState(true);

  const fieldSetters = {
    name: setName,
    email: setEmail,
    number: setNumber,
    schoolName: setSchoolName,
    degree: setDegree,
    startDate: setStartDate,
    endDate: setEndDate,
  };

  function handleChange(e) {
    const setter = fieldSetters[e.target.name];
    setter(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEditing(false);
  }

  return editing ? (
    <form onSubmit={handleSubmit}>
      <PersonalInfo
        name={name}
        email={email}
        number={number}
        onChange={handleChange}
      ></PersonalInfo>
      <EducationInfo
        schoolName={schoolName}
        degree={degree}
        startDate={startDate}
        endDate={endDate}
        onChange={handleChange}
      ></EducationInfo>
      <button>Submit</button>
    </form>
  ) : (
    <div>
      <PersonalInfoDisplay
        name={name}
        email={email}
        number={number}
      ></PersonalInfoDisplay>
      <EducationInfoDisplay
        schoolName={schoolName}
        degree={degree}
        startDate={startDate}
        endDate={endDate}
      ></EducationInfoDisplay>
      <button onClick={() => setEditing(true)}>Edit</button>
    </div>
  );
}
