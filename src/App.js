import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import DayOfWeek from "./Components/DayOfWeek";
import Head from "./Components/Head";
import { selectAllDay, clear, saveChanges, chooseOneCell, chooseSeveralCells } from './actions/actionsCreators.js';

const back = {"background": "#8F9BA6"};
const border = {"borderBottom": "2px solid black", "verticalAlign": "middle"};
const noneBorder = {"borderTop": "1px solid white", "borderRight": "1px solid white"};
const noneTopBorder = {"borderTop": "1px solid white"};
const noneLeftBorder = {"borderLeft": "2px solid white"};


class App extends Component {
  clearFunc = () => {

  }


  render() {
    //const containerOfDays = document.getElementsByTagName("tbody");
    //const week = JSON.stringify(document.querySelectorAll("tbody TwentyFourHours"));

    return (
     <div className="table">
      <table className="table-bordered">
       <tbody>
         <Head colspan={2} border={border} noneBorder={noneBorder} noneTopBorder={noneTopBorder} noneLeftBorder={noneLeftBorder} />
         <DayOfWeek head="MO" back={back} border={border} />

       </tbody>
      </table>
      <div id="buttons">
      <button type="button" className="btn" id="clearBtn" onClick={this.clearFunc}>Clear</button>
      <button type="button" className="btn" id="saveBtn">Save<br></br>Changes</button>
      </div>
     </div>
        );
  }
}
function mapStateToProps (state) {
  return {
    interval: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    oneCell: (begin) => {
      dispatch(chooseOneCell(begin));
    },
    severalCells: () => {
      dispatch(chooseSeveralCells());
    },
    allDay: () => {
      dispatch(selectAllDay());
    },
    clear: (state) => {
      dispatch(clear(state));
    },
    save: () => {
      dispatch(saveChanges());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
