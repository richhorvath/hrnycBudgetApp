import React from "react";

import Circos from "circos";

const Graph = categories => {
  let rendered = Object.keys(categories);
  if (rendered.length > 0) {
    var myCircos = new Circos({
      container: "#chart",
      width: 600,
      height: 600
    });
    var configuration = {
      innerRadius: 150,
      outerRadius: 300,
      cornerRadius: 15,
      gap: 0.02, // in radian
      labels: {
        display: true,
        position: "center",
        size: "10px",
        color: "#000000",
        radialOffset: 100,
        noRepeat: true
      },

      events: {}
    };

    const createColor = () => {
      var letters = "0123456789ABCDEF";

      // html color code starts with #
      var color = "#";

      // generating 6 times as HTML color code consist
      // of 6 letter or digits
      for (var i = 0; i < 6; i++)
        color += letters[Math.floor(Math.random() * 16)];

      return color;
    };

    let total = 0;
    for (let index in categories) {
      total += categories[index].total;
    }
    var data = [];
    for (let index in categories) {
      let len = Math.floor((categories[index].total / total) * 100);
      let color = createColor();
      let label = categories[index].description + " " + len + "%";
      let id = categories[index].description;
      data.push({ len, color, label, id });
    }

    myCircos.layout(data, configuration);
    rendered = true;
    return myCircos.render();
  }
};

export default Graph;
