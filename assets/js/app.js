// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss";

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  LineSeries,
  HeatmapSeries
} from "react-vis";

function Demo() {
  const [count, setCount] = useState(0);
  const barData = [
    { x: "Movie 1", y: 10 },
    { x: "Movie 2", y: 3 },
    { x: "Movie 3", y: 12 },
  ];

  return (
    <div>
      <XYPlot xType="ordinal" width={300} height={300}>
        <XAxis />
        <YAxis />
        <HorizontalGridLines />
        <VerticalBarSeries data={barData} />
      </XYPlot>
      <XYPlot
        width={300}
        height={300}>
        <HorizontalGridLines />
        <LineSeries
          color="red"
          data={[
            {x: 1, y: 10},
            {x: 2, y: 5},
            {x: 3, y: 15}
          ]}/>
        <XAxis title="X" />
        <YAxis />
      </XYPlot>
      <XYPlot
        width={300}
        height={300}>
        <XAxis />
        <YAxis />
        <HeatmapSeries
          className="heatmap-series-example"
          colorType="literal"
          data={[
            {x: 1, y: 0, color: "#f00"},
            {x: 1, y: 5, color: "#f00"},
            {x: 1, y: 10, color: "#0f0"}
          ]}/>
      </XYPlot>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
  document.getElementById("root")
);
