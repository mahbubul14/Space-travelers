import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  let reservedRockets;
  if (rockets) {
    reservedRockets = rockets.filter((rocket) => rocket.reserved);
  }

  return (

    <div>
      <h3>My Rockets</h3>
      {reservedRockets && (
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>
              {rocket.name}
            </li>
          ))}

        </ul>
      )}
    </div>
  );
};
export default MyProfile;
