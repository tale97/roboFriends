import React from "react";

const Card = () => {
  return (
    //dib?
    //br3 border 3
    //pa3 padding 3
    //ma2 margin 2
    //grow animation
    //bw2 ?
    <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2">
      <img alt="robo-card" src="https://robohash.org/johndoe?size=200x200" />
      <div>
        <h2>Jane Doe</h2>
        <p>Jane Doe is a cantankerous robot</p>
      </div>
    </div>
  );
};

export default Card;
