import { useSelector } from 'react-redux';
import SingleMission from './SingleMission';

const Missions = () => {
  const missionsData = useSelector((state) => state.missionsReducer);
  const emptyHeader = '';
  return (
    <div className="missions-container">
      <span><b>Mission</b></span>
      <span><b>Description </b></span>
      <span><b>Status</b></span>
      <span>{emptyHeader}</span>
      {missionsData && missionsData.map((item) => (
        <SingleMission key={item.mission_id} data={item} />
      ))}
    </div>
  );
};
export default Missions;
