import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL, ADD_SMURFS_START, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAIL } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

const rootReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [ ...state.smurfs, ...action.payload],
        fetchingSmurfs: false
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case ADD_SMURFS_START:
      return {
        ...state,
        addingSmurf: true,
        error: ''
      };
    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [ ...state.smurfs, ...action.payload],
        addingSmurf: false
      };
    case ADD_SMURFS_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;