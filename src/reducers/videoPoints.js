import moment from 'moment';
import {
  VIDEO_POINTS_REQUEST,
  VIDEO_POINTS_RESPONSE,
  VIDEO_POINTS_ERROR_RESPONSE
} from '../constants/action_names';

const initialState = {
  loading: false,
  points: []
};

const convertElements = elements => (
  elements.map(e => ({
    ...e,
    date_end: moment(e.date_end),
    date_start: moment(e.date_start),
    latitude: parseFloat(e.latitude),
    longitude: parseFloat(e.longitude)
  }))
);

export default function (state = initialState, action) {
  switch (action.type) {
    case VIDEO_POINTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case VIDEO_POINTS_RESPONSE:
      return {
        ...state,
        points: convertElements(action.data.Sheet1.elements)
      };
    case VIDEO_POINTS_ERROR_RESPONSE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
