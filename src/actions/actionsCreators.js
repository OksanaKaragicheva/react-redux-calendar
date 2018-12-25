import { ALL_DAY, CLEAR, SAVE_CHANGES, CHOOSE_ONE_CELL, CHOOSE_SEVERAL_CELLS } from '../actions/actionsTypes.js';

export const selectAllDay = () => (
  { type: ALL_DAY }
);

export const clear = (state) => (
  { type: CLEAR,
    state: {}
  }
);

export const saveChanges = () => (
  { type: SAVE_CHANGES }
);

export const chooseOneCell = (begin) => (
  { type: CHOOSE_ONE_CELL,
    begin
  }
);

export const chooseSeveralCells = () => (
  { type: CHOOSE_SEVERAL_CELLS }
);
