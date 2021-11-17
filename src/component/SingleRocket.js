import React from 'react';

const Rocket = (prop) => {
  const { rocket } = prop;
  const { name, flickr_images: flickrImages, description } = rocket;

  return (
    <li>
      <div>
        <img src={flickrImages} alt="rocket-img" width="250" height="160" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default Rocket;

Rocket.defaultProps = {
  reserved: false,
};
