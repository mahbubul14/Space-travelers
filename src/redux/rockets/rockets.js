const RESERVE_TICKET = 'space-travelers-hub/rockets/RESERVE_TICKET';
const CANCEL_TICKET = 'space-travelers-hub/rockets/CANCEL_TICKET';
const LOAD_ROCKET = 'space-travelers-hub/rockets/LOAD_ROCKET';

const initialState = [];

export const reserveTicket = (id) => ({
  type: RESERVE_TICKET,
  id,
});

export const cancelTicket = (id) => ({
  type: CANCEL_TICKET,
  id,
});

export const loadRockets = (payload) => ({
  type: LOAD_ROCKET,
  payload,
});

export const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKET:
      return action.payload.map((rocket) => {
        const {
          rocket_id: id,
          rocket_name: name,
          flickr_images: flickrImages,
          description,
        } = rocket;
        return {
          id, name, flickrImages, description,
        };
      });
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
