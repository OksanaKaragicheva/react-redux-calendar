import React, { Component } from 'react';
import { initialState } from '../reducers/selectedInterval.js';
import $ from 'jquery';



class DayOfWeek extends Component {
  constructor(props) {
   super(props);
  }

fillOneCell = (e) => {
  $(e.target).toggleClass('selected');
//  if ($(e.target).has('.selected')) {
//    const day = $('th').text();
  //  const bt = $(e.target).data("value");
  //  const et = bt + 59;



  // $(e.target).text(JSON.stringify(Object.assign({...initialState}, {[day]: [{"bt": bt, "et": et}]})));
//    $(e.target).text(this.props.week);
//  }

  // $(e.target).data("value");

  $('td').on('mouseenter',function(){
    $(this).toggleClass('selected');
    let bt = $(this).data('value');
    let et = bt + 59;
$(this).text(JSON.stringify(initialState));
  }).mouseup(function(){
    $('td').off('mouseenter');
  });

}

allDay = (e) => {
  $('td').toggleClass('selected');
  // $('td').unbind('onMouseDown', this.allDay);

}


  render() {
    return(
      Object.keys(initialState).map((day, index) => {
        return (
    <tr id="tableRow">
    <th scope="row" style={this.props.border}>
      {day.toUpperCase()}
    </th>
    <td style={Object.assign({}, this.props.back, this.props.border, this.props.noneTopBorder)} onMouseDown={this.allDay}>
    </td>
    <td style={this.props.border} data-value={0} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={60} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={120} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={180} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={240} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={300} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={360} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={420} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={480} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={540} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={600} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={660} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={720} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={780} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={840} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={900} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={960} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1020} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1080} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1140} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1200} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1260} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1320} onMouseDown={this.fillOneCell}>
    </td>
    <td style={this.props.border} data-value={1380} onMouseDown={this.fillOneCell}>
    </td>
    </tr>
  );
  })

  );

  }

};
export default DayOfWeek;
