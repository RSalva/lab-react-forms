import { useState } from "react";


function AddStudent({ handleAddStudent }) {
  const [fullName, setFullName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  

  const handleGraduated = () => {
    setGraduated(!graduated);
  }

  const handleFullName = (event) => {
    setFullName(event.target.value);
  }

  const handeImageUrl = (event) => {
    setImageUrl(event.target.value);
  }

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleProgram = (event) => {
    setProgram(event.target.value);
  }

  const handleGraduationYear = (event) => {
    setGraduationYear(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const student = {
      "fullName": fullName,
      "email": email,
      "phone": phoneNumber,
      "program": program,
      "image": imageUrl,
      "graduationYear": graduationYear,
      "graduated": graduated
    };
    handleAddStudent(student);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
          <span>Add a Student</span>
          <div>
            <label>
              Full Name
              <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={handleFullName} />
            </label>

            <label>
              Profile Image
              <input name="image" type="url" placeholder="Profile Image" value={imageUrl} onChange={handeImageUrl} />
            </label>

            <label>
              Phone
              <input name="phone" type="tel" placeholder="Phone" value={phoneNumber} onChange={handlePhoneNumber} />
            </label>

            <label>
              Email
              <input name="email" type="email" placeholder="Email" value={email} onChange={handleEmail} />
            </label>
          </div>

          <div>
            <label>
              Program
              <select name="program" value={program} onChange={handleProgram}>
                <option value="">-- None --</option>
                <option value="Web Dev">Web Dev</option>
                <option value="UXUI">UXUI</option>
                <option value="Data">Data</option>
              </select>
            </label>

            <label>
              Graduation Year
              <input
                name="graduationYear"
                type="number"
                placeholder="Graduation Year"
                minLength={4}
                maxLength={4}
                min={2023}
                max={2030}
                value={graduationYear}
                onChange={handleGraduationYear}
              />
            </label>

            <label>
              Graduated
              <input name="graduated" type="checkbox" checked={graduated} onChange={handleGraduated} />
            </label>

            <button type="submit">Add Student</button>
          </div>

        </form>
    </>
  )
}

export default AddStudent;