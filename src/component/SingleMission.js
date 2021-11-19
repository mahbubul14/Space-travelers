import { useDispatch } from 'react-redux';
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
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
  const className = reserved ? 'btn btn-light btn-outline-danger' : 'btn btn-primary mt-1';

  return (
    <>
      <span>
        <b>{missionName}</b>
      </span>
      <span className="description">{description}</span>
      <span className="center"><Badge className="badge bg-info mt-1">{reserved ? 'Active Member' : 'Not A Member'}</Badge></span>
      <span className="center">
        <Button
          className={className}
          type="button"
          onClick={() => changeMissionsStatus(missionId)}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}

        </Button>

      </span>
    </>
  );
};

export default SingleMission;
