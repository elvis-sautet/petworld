import { OPEN_COMMAND_PALLETE, CLOSE_COMMAND_PALLETE } from "../actions/types";

const initialState = {
  isOpen: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case OPEN_COMMAND_PALLETE:
      return { isOpen: true };
    case CLOSE_COMMAND_PALLETE:
      return { isOpen: false };
    default:
      return state;
  }
}
