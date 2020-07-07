import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILURE,
} from "./constants.js";

const initialStateSearch = {
  searchField2: "",
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField2: action.payload });
    default:
      return state;
  }
};

const initialStateRobots = {
  robots2: [],
  isPending: false,
  error: "",
};

export const receiveRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots2: action.payload,
        isPending: false,
      });
    case REQUEST_ROBOTS_FAILURE:
      console.log(action.payload);
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
