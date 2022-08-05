import React, { useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";

import ReadOnlyRow from "./Components/ReadOnlyRow";
import EditableRow from "./Components/EditableRow";

function App() {
  const [contacts, setContacts] = useState([]);
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
    // console.log(newData);
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: formData.fullName,
      address: formData.address,
      number: formData.number,
      email: formData.email,
    };

    // create new contacts array before mutating state
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  // console.log(contacts)

  return (
    <div className="app-container">
      <form>
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
            {contacts.map((contact) => (
              <>
                <EditableRow />
                <ReadOnlyRow contact={contact} />
              </>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
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
