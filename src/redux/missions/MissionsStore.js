const FETCH_MISSIONS = 'SpaceX-Project/books/FETCH_MISSIONS';
const RESERVE_MISSIONS = 'SpaceX-Project/books/RESERVE_MISSIONS';
const CANCEL_MISSIONS = 'SpaceX-Project/books/CANCEL_MISSIONS';

const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';
const initialState = [];
let loadedStatus = false;

export const fetchAllMissions = () => async (dispatch) => {
  const response = await fetch(MISSIONS_URL);
  const data = await response.json();
  if (loadedStatus) return;
  await dispatch({
    type: FETCH_MISSIONS,
    data,
  });
  loadedStatus = true;
};

export const reserveMission = (id) => ({
  type: RESERVE_MISSIONS,
  id,
});

export const cancelMission = (id) => ({
  type: CANCEL_MISSIONS,
  id,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.data;

    case RESERVE_MISSIONS:
      return state.map((rocket) => {
        if (rocket.mission_id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });

    case CANCEL_MISSIONS:
      return state.map((rocket) => {
        if (rocket.mission_id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });

    default:
      return state;
  }
};

export default missionsReducer;
