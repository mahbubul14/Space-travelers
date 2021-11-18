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
      <div className="flex">
        <div className="mr-2 mb-4">
          <img src={flickrImages} alt="rocket-img" width="250" height="160" />
        </div>
        <div className="rocket-des">
          <h5>{name}</h5>
          {reserved && (
          <div><Badge className="bg-success">Reserved</Badge></div>
          )}
          <p className="mr-4">{description}</p>
          {!reserved && (
          <Button type="button" onClick={handleReservation}>Reserve Rocket</Button>
          )}
          {reserved && (
          <Button className="bg-light text-dark" type="button" onClick={handleCancelReserv}>Cancel Reservation</Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Rocket;

Rocket.defaultProps = {
  reserved: false,
};
