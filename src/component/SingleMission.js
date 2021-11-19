import { useDispatch } from 'react-redux';
import { reserveMission, cancelMission } from '../redux/missions/MissionsStore';

const SingleMission = (prop) => {
  const dispatch = useDispatch();
  const { data } = prop;
  const {
    mission_id: missionId,
    mission_name: missionName,
    description,
    reserved,
  } = data;

  const changeMissionsStatus = (id) => (!reserved ? dispatch(reserveMission(id))
    : dispatch(cancelMission(id)));
  return (
    <>
      <span>
        <b>{missionName}</b>
      </span>
      <span className="description">{description}</span>
      <span className="center">{reserved ? 'Active Member' : 'Not A Member'}</span>
      <span className="center">
        <button
          type="button"
          onClick={() => changeMissionsStatus(missionId)}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}

        </button>

      </span>
    </>
  );
};

export default SingleMission;
