import React from 'react';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { reserveTicket, cancelTicket } from '../redux/rockets/rockets';

const Rocket = (prop) => {
  const { rocket } = prop;
  const {
    id, name, flickr_images: flickrImages, description, reserved,
  } = rocket;
  const dispatch = useDispatch();

  const handleReservation = () => {
    dispatch(reserveTicket(id));
  };
  const handleCancelReserv = () => {
    dispatch(cancelTicket(id));
  };
  return (
    <li>
      <div>
        <img src={flickrImages} alt="rocket-img" width="250" height="160" />
      </div>
      <div>
        <h3>{name}</h3>
        {reserved && (
        <div><Badge>Reserved</Badge></div>
        )}
        <p>{description}</p>
        {!reserved && (
          <Button type="button" onClick={handleReservation}>Reserve Rocket</Button>
        )}
        {reserved && (
        <Button type="button" onClick={handleCancelReserv}>Cancel Reservation</Button>
        )}
      </div>
    </li>
  );
};

export default Rocket;

Rocket.defaultProps = {
  reserved: false,
};
