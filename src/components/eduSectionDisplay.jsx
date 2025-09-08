export default function EducationInfoDisplay({
  schoolName,
  degree,
  startDate,
  endDate,
}) {
  return (
    <div>
      <h1>Personal Information</h1>
      <h2>
        <b>School Name:</b> {schoolName}
      </h2>
      <h2>
        <b>Degree:</b> {degree}
      </h2>
      <h2>
        <b>Start date:</b> {startDate}
      </h2>
      <h2>
        <b>End date:</b> {endDate}
      </h2>
    </div>
  );
}
