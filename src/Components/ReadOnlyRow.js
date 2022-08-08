export default function ReadOnlyRow({
  contact,
  handleEditClick,
  deleteContact,
}) {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.number}</td>
      <td>{contact.email}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, contact)}>
          Edit
        </button>
        <button type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
