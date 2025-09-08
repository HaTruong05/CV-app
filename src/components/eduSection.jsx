export default function EducationInfo({
  schoolName,
  degree,
  startDate,
  endDate,
  onChange,
}) {
  return (
    <fieldset>
      <legend>Education</legend>
      <label>
        School Name:
        <input
          type="text"
          name="schoolName"
          value={schoolName}
          onChange={onChange}
        />
      </label>
      <label>
        Degree:
        <input type="text" name="degree" value={degree} onChange={onChange} />
      </label>
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={onChange}
        />
      </label>
      <label>
        End Date:
        <input type="date" name="endDate" value={endDate} onChange={onChange} />
      </label>
    </fieldset>
  );
}
