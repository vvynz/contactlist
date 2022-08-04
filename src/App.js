import React, { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    number: "",
    email: ""
  });

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
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address..."
        />
        <input
          type="text"
          name="number"
          required="required"
          placeholder="Enter phone number..."
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter email..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
