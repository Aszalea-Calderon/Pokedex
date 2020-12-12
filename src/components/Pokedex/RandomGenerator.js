import React from "react";

const RandomGenerator = (props) => {
  const generateRandom = () => {
    const random = Math.ceil(Math.random() * 898);
    console.log(random);
    props.fireRandom(random);
  };
  return (
    <div>
      <div className="power-button"></div>
      <button className="random-button" onClick={generateRandom}>
        Random Pokemon
      </button>
    </div>
  );
};

export default RandomGenerator;
