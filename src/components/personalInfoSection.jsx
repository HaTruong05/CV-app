export default function PersonalInfo({ name, email, number, onChange }) {
  return (
    <fieldset>
      <legend>Personal Information</legend>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={onChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={onChange} />
      </label>
      <label>
        Phone number:
        <input type="number" name="number" value={number} onChange={onChange} />
      </label>
    </fieldset>
  );
}
