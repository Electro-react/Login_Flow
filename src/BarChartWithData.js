import React, { Component } from "react";
import data from "./utils/constant";
import BarChart from "./component/DataChart";

class BarChartWithData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "US",
    };
  }

  render() {
    const { selectedValue } = this.state;
    return (
      <React.Fragment>
        <BarChart
          width={800}
          height={450}
          data={
            this.state.selectedValue === "US" ? data.USData : data.JapanData
          }
        />
      </React.Fragment>
    );
  }
}

export default BarChartWithData;
