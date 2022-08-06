export default function EditableRow({ editFormData, handleEditFormChange, handleCancelClick }) {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          value={editFormData.fullName}
          required="required"
          placeholder="Enter a name..."
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          value={editFormData.address}
          required="required"
          placeholder="Enter an address..."
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="number"
          value={editFormData.number}
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          value={editFormData.email}
          required="required"
          placeholder="Enter email..."
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
      </td>
    </tr>
  );
}
