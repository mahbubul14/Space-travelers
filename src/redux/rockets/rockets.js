const RESERVE_TICKET = 'space-travelers-hub/rockets/RESERVE_TICKET';
const CANCEL_TICKET = 'space-travelers-hub/rockets/CANCEL_TICKET';
const LOAD_ROCKET = 'space-travelers-hub/rockets/LOAD_ROCKET';

const initialState = [];

const reserveTicket = (payload) => ({
  type: RESERVE_TICKET,
  payload,
});

const cancelTicket = (payload) => ({
  type: CANCEL_TICKET,
  payload,
});

const loadRockets = (payload) => ({
  type: LOAD_ROCKET,
  payload,
});

const fetchRocketDataApi = async () => {
  const resp = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await resp.json();

  const rocketData = await data.map((rocket) => (
    {
      id: rocket.id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      flickr_images: rocket.flickr_images,
      description: rocket.description,
    }

  ));
  return rocketData;
};

const loadRocketsData = () => async (dispatch) => {
  const rockets = await fetchRocketDataApi();
  if (rockets) {
    dispatch(loadRockets(rockets));
  }
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKET:
      return {
        ...state,
        rockets: action.payload,
      };

    case RESERVE_TICKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => (
          (rocket.id !== action.payload)
            ? {
              ...rocket,
            } : {
              ...rocket, reserved: true,
            }
        )),
      };
    case CANCEL_TICKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => (
          (rocket.id !== action.payload)
            ? {
              ...rocket,
            } : {
              ...rocket, reserved: false,
            }
        )),
      };
    default:
      return state;
  }
};

export {
  rocketsReducer, loadRocketsData, cancelTicket, reserveTicket,
};
