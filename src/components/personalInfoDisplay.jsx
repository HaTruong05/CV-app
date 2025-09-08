export default function PersonalInfoDisplay({ name, email, number }) {
  return (
    <div>
      <h1>Personal Information</h1>

      <h2>
        <b>Name:</b> {name}
      </h2>
      <h2>
        <b>Email:</b> {email}
      </h2>
      <h2>
        <b>Number:</b> {number}
      </h2>
    </div>
  );
}
