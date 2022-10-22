import React from "react";
import "./App.css";

import personData from "./person.json";

import Header from "./components/Header/index";
import Bio from "./components/Bio/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div className="App">
      <Header options={["Home", "Feed", "Personal account", "Log out"]} />
      <Bio
        name={personData.name}
        biography={personData.biography}
        contacts={personData.contacts}
      />
      <Footer
        socials={["instagram", "twitter", "facebook"]}
        services={["New Feature", "About", "Downloads"]}
      />
    </div>
  );
}

export default App;
