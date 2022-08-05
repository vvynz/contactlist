export default function ReadOnlyRow({ contact, handleEditClick }) {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.number}</td>
      <td>{contact.email}</td>
    </tr>
  );
}
