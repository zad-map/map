import * as actions from "../constants/action_names";
import { VIDEO_POINTS_FILE } from "../constants/config";
import tabletop from 'tabletop';

export const fetchVideoPoints = () => {
  return dispatch => {
    dispatch({
      type: actions.VIDEO_POINTS_REQUEST
    });

    tabletop.init({
      key: VIDEO_POINTS_FILE
    })
      .then(data => {
        dispatch({
          type: actions.VIDEO_POINTS_RESPONSE,
          data
        });
      })
      .catch(error =>
        dispatch({
          type: actions.VIDEO_POINTS_ERROR_RESPONSE,
          error
        })
      );
  };
};
