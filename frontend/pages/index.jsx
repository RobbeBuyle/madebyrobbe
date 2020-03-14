import React from "react";
import Categorybar from "../components/CategoryBar";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Home page</h1>
          <Categorybar />
        </div>
      </div>
    </div>
  );
};

export default Home;
