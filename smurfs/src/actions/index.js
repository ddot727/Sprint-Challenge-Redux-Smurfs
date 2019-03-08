import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS  = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL  = 'FETCH_SMURFS_FAIL';
export const ADD_SMURFS_START = 'ADD_SMURFS_START';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_FAIL = 'ADD_SMURFS_FAIL';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res=> dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err }));
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURFS_START });
  axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type:ADD_SMURFS_FAIL, payload: err}))
};