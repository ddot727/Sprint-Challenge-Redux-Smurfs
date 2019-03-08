import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_FAIL} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false
  addingSmurf: false
  updatingSmurf: false
  deletingSmurf: false
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
    default:
      return state;
  }
}

export default rootReducer;