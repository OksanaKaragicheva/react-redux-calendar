import { ALL_DAY, CLEAR, SAVE_CHANGES, CHOOSE_ONE_CELL, CHOOSE_SEVERAL_CELLS } from '../actions/actionsTypes.js';


export const initialState = {
 "mo": [
      {
        "bt": 240,
        "et": 779
      }
 ],
 "tu": [
 ],
 "we": [
 ],
 "th": [
   {
        "bt": 240,
        "et": 779
   },
   {
        "bt": 1140,
        "et": 1319
   }
 ],
 "fr": [
   {
        "bt": 660,
        "et": 1019
   }
 ],
 "sa": [
      {
        "bt": 0,
        "et": 1439
      }
    ],
 "su": []
};

 const selectInterval = (state = initialState, action) => {
   switch (action.type){
     case CHOOSE_ONE_CELL: return state;
     case CHOOSE_SEVERAL_CELLS: return state;
     case ALL_DAY: return state;
     case SAVE_CHANGES: return state;
     case CLEAR: return state;
     default: return state;
   }
};

export default selectInterval;
