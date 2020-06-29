import React from "react";

const Card = (props) => {
  const { id, name, email } = props;
  return (
    //dib?
    //br3 border 3
    //pa3 padding 3
    //ma2 margin 2
    //grow animation
    //bw2 ?
    //tc text centered
    <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2 tc">
      <img alt="robo-card" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default Card;
