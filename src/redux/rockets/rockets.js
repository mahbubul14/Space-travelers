const RESERVE_TICKET = 'space-travelers-hub/rockets/RESERVE_TICKET';
const CANCEL_TICKET = 'space-travelers-hub/rockets/CANCEL_TICKET';
const LOAD_ROCKET = 'space-travelers-hub/rockets/LOAD_ROCKET';

const initialState = [];

const reserveTicket = (id) => ({
  type: RESERVE_TICKET,
  id,
});

const cancelTicket = (id) => ({
  type: CANCEL_TICKET,
  id,
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
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }

        return {
          ...rocket,
          reserverd: true,
        };
      });
    case CANCEL_TICKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }

        return {
          ...rocket,
          reserverd: false,
        };
      });
    default:
      return state;
  }
};

export {
  rocketsReducer, loadRocketsData, cancelTicket, reserveTicket,
};
