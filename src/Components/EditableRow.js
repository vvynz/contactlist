export default function EditableRow() {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..."
        />
      </td>
      <td>
        <input
          type="text"
          name="number"
          required="required"
          placeholder="Enter a phone number..."
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter email..."
        />
      </td>
    </tr>
  );
}
