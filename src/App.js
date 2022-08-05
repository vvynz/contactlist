import React, { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    number: "",
    email: "",
  });

  const handleFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    const newData = { ...formData };
    newData[fieldName] = fieldValue;
    console.log(newData);
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  const newContact = {
    id: 
    fullName: formData.fullName,
    address: formData.address,
    number: formData.number,
    email: formData.email
  }


  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kim Seokjin</td>
            <td>123 Gangnam St</td>
            <td>10-613-0709</td>
            <td>jinhit@hybe.com</td>
          </tr>
        </tbody>
      </table>
      <h2>Add New Contact</h2>
      <form>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter full name..."
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address..."
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="number"
          required="required"
          placeholder="Enter phone number..."
          onChange={handleFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter email..."
          onChange={handleFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
