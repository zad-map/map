import { DATE_SET } from '../constants/action_names';
import { START_DATE } from '../constants/config';

const initialState = {
  date: START_DATE
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DATE_SET:
      return {
        ...state,
        date: action.date
      };
    default:
      return state;
  }
}
