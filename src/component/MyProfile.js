import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const missionsData = useSelector((state) => state.missionsReducer);
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  let reservedRockets;
  if (rockets) {
    reservedRockets = rockets.filter((rocket) => rocket.reserved);
  }
  return (

    <div className="profile-container">
      <div className="profile">

        <h3 className="reservations">Rockets reservations</h3>
        {reservedRockets && (
        <ul className="profile-list">
          {reservedRockets.map((rocket) => (
            <li className="profile-name" key={rocket.id}>
              {rocket.name}
            </li>
          ))}

        </ul>
        )}
      </div>
      <div className="profile">
        <h3 className="reservations">Missions reservations</h3>
        <ul className="profile-list">
          {missionsData.filter((data) => data.reserved)
            .map((item) => (<li className="profile-name" key={item.mission_id}>{item.mission_name}</li>))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
