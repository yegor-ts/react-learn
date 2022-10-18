import React from "react";
import "./App.css";

import personData from "./person.json";

interface PersonProps {
  name: string;
  biography: string;
  contacts: {
    phone: string;
    email: string;
  };
}

const Person: React.FC<PersonProps> = ({ name, biography, contacts }) => (
  <ol>
    <li><b>Name:</b> {name}</li>
    <li><b>Biography:</b> {biography}</li>
    <li><b>Phone:</b> {contacts.phone}</li>
    <li><b>Email:</b> {contacts.email}</li>
  </ol>
);

function App() {
  return (
    <div className="App">
      <Person
        name={personData.name}
        biography={personData.biography}
        contacts={personData.contacts}
      />
    </div>
  );
}

export default App;
