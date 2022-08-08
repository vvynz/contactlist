import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import "./App.css";

import ReadOnlyRow from "./Components/ReadOnlyRow";
import EditableRow from "./Components/EditableRow";

function App() {
  const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem("contacts")) || []);
  const [editContactID, setEditContactID] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    number: "",
    email: "",
  });
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    number: "",
    email: "",
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    const newData = { ...formData };
    newData[fieldName] = fieldValue;

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

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactID(contact.id);

    // create a new obj of form values before we save to state
    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      number: contact.number,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    // create a new obj with the updated values before saving to state
    const updFormData = { ...editFormData };
    updFormData[fieldName] = fieldValue;
    setEditFormData(updFormData);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    // create a new object based on the new form values during editing
    const editedContact = {
      id: editContactID,
      fullName: editFormData.fullName,
      address: editFormData.address,
      number: editFormData.number,
      email: editFormData.email,
    };

    // create a copy of the contacts array so we don't mutate the state
    const newContacts = [...contacts];

    // find the index of the current row being edited
    const index = contacts.findIndex((contact) => contact.id === editContactID);
    // update the array at the given row
    newContacts[index] = editedContact;

    // update the setContacts with the updated array of newContacts
    setContacts(newContacts);
    setEditContactID(null);
  };

  const handleCancelClick = () => {
    setEditContactID(null);
  };

  const deleteContact = (contactID) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactID);

    //remove the item of the array
    newContacts.splice(index, 1);

    // set the new edited array into state.
    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <>
                {editContactID === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    deleteContact={deleteContact}
                  />
                )}
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
