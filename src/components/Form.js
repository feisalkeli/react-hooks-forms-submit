import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (firstName.length > 0) {
      const formData = {
        firstName: firstName,
        lastName: lastName,
      };
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
    } else {
      setErrors(["First name is required"]);
    }
  }
  const listOfSubmissions = submittedData.map(data, (index) => {
    return (
      <div key={index}>
        {data.firstName}
        {data.lastName}
      </div>
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
