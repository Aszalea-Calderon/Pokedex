import React from "react";

const PhotoScreen = (props) => {
  return (
    <div>
      <section id="screen" className="screen">
        <img
          className="image"
          src={props.url ?? props.backup}
          alt={props.url ? "primary" : "backup"}
        />
      </section>
    </div>
  );
};

export default PhotoScreen;
