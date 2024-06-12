import React from "react";
import Notes from "./Notes";
import "../Css/Home.css";

const Home = () => {
  return (
    <div className="home-container container my-5">
      <div className="notes-section">
        <Notes />
      </div>
    </div>
  );
};

export default Home;
