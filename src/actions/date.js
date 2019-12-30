import { DATE_SET } from "../constants/action_names";

export const setDate = (date) => {
  return {
    date,
    type: DATE_SET
  };
};
