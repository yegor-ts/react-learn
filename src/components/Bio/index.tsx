interface BioProps {
  name: string;
  biography: string;
  contacts: {
    phone: string;
    email: string;
  };
}

const Bio: React.FC<BioProps> = ({ name, biography, contacts }) => (
  <ol>
    <li>
      <b>Name:</b> {name}
    </li>
    <li>
      <b>Biography:</b> {biography}
    </li>
    <li>
      <b>Phone:</b> {contacts.phone}
    </li>
    <li>
      <b>Email:</b> {contacts.email}
    </li>
  </ol>
);

export default Bio;
