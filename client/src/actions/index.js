import axios from 'axios';
import { FETCH_USER } from './types';

//  thunkified action creator (in es6 notation)
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};