import React from "react";

import C3Chart from "react-c3js";
import "c3/c3.css";

const Graph = () => {
  const data = {
    columns: [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 50, 20, 10, 40, 15, 25]
    ]
  };

  return (
    <div id="chart">
      <C3Chart data={data} />
    </div>
  );
};

export default Graph;
