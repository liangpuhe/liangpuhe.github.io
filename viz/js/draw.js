var node_radius = 5,
  padding = 1,
  cluster_padding = 10,
  num_nodes = 9898;

var bornColor = "#ECECEC",
  lifeColor = "#23cdc7";

var dic = [{
    decade: 1,
    probability: 0.000093,
    num: 8
  },
  {
    decade: 2,
    probability: 0.000926,
    num: 4
  },
  {
    decade: 3,
    probability: 0.000479,
    num: 13
  },
  {
    decade: 4,
    probability: 0.000625,
    num: 17
  },
  {
    decade: 5,
    probability: 0.002864,
    num: 30
  },
  {
    decade: 6,
    probability: 0.006367,
    num: 70
  },
  {
    decade: 7,
    probability: 0.012026,
    num: 126
  },
  {
    decade: 8,
    probability: 0.035331,
    num: 226
  },
  {
    decade: 9,
    probability: 0.105814,
    num: 326
  },
  {
    decade: 10,
    probability: 0.184602,
    num: 171
  }
];




var foci = {
  "10": {
    x: 475,
    y: 50,
    color: "#23cdc7",
    label: '95+'
  },
  "9": {
    x: 475,
    y: 100,
    color: "#23cdc7",
    label: '85'
  },
  "8": {
    x: 475,
    y: 150,
    color: "#23cdc7",
    label: '75'
  },
  "7": {
    x: 475,
    y: 200,
    color: "#23cdc7",
    label: '65'
  },
  "6": {
    x: 475,
    y: 250,
    color: "#23cdc7",
    label: '55'
  },
  "5": {
    x: 475,
    y: 300,
    color: "#23cdc7",
    label: '45'
  },
  "4": {
    x: 475,
    y: 350,
    color: "#23cdc7",
    label: '35'
  },
  "3": {
    x: 475,
    y: 400,
    color: "#23cdc7",
    label: '25'
  },
  "2": {
    x: 475,
    y: 450,
    color: "#23cdc7",
    label: '15'
  },
  "1": {
    x: 475,
    y: 500,
    color: "#23cdc7",
    label: '5'
  },
  "bottompos": {
    x: 475,
    y: 600,
    color: "#ECECEC"
  },
  "dead": {
    x: 0,
    y: 0,
    color: "silver"
  }
};

var data_disease = [{
    decade: "1",
    nervous: 3636,
    cancer: 563,
    disease: 28997,
    total: 0
  },
  {
    decade: "2",
    nervous: 3109,
    cancer: 1076,
    disease: 2417,
    total: 0
  },
  {
    decade: "3",
    nervous: 26030,
    cancer: 1810,
    disease: 6394,
    total: 0
  },
  {
    decade: "4",
    nervous: 24664,
    cancer: 3763,
    disease: 13498,
    total: 0
  },
  {
    decade: "5",
    nervous: 28044,
    cancer: 14934,
    disease: 41807,
    total: 0
  },
  {
    decade: "6",
    nervous: 29048,
    cancer: 51134,
    disease: 103348,
    total: 0
  },
  {
    decade: "7",
    nervous: 16746,
    cancer: 100558,
    disease: 157997,
    total: 0
  },
  {
    decade: "8",
    nervous: 12069,
    cancer: 140796,
    disease: 245490,
    total: 0
  },
  {
    decade: "9",
    nervous: 17215,
    cancer: 171015,
    disease: 358435,
    total: 0
  },
  {
    decade: "10",
    nervous: 15749,
    cancer: 87364,
    disease: 200056,
    total: 0
  }
];



var colors = ["#7F4F4F", "#314659", "#D6D0C0"];
var disease_arr = ["nervous", "cancer", "other disease"]


$(document).ready(function() {
  loadData();
});


function loadData() {

  var data = dic.slice().reverse();
  var data_bar = data_disease.slice();
  var hide_col = 0;

  var value = slider.value.slice(0);
  for (var i = 0; i < data.length; i++) {
    if (parseInt(foci[data[i].decade].label) < value) {
      data.splice(i, data.length - i);
      hide_col = 11 - i;
    }
  }

  console.log(hide_col);
  visualizeDotsFly(data);
  visualizeBarChart(data_bar, hide_col);
  visualizeLegend();
};

function visualizeLegend(){
  var legendVals = disease_arr.slice();

  //console.log(legendVals)

  var legendVals1 = d3.scale.ordinal()
            .domain(legendVals)
            .range(colors);
}
function visualizeDotsFly(dataitems) {
  //console.log(dataitems);
  var margin = {
      top: 16,
      right: 0,
      bottom: 0,
      left: 50
    },
    width = 750 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

  var svg = d3.select("#dot-fly").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var barWidth = 150,
    barHeight = 10;


  var rects = svg.selectAll("rect")
    .data(dataitems)
    .enter().append("rect")
    .attr("x", 50)
    .attr("y", function(d, i) {
      return foci[d.decade].y;
    })
    .attr("height", barHeight)
    .attr("width", barWidth)
    .attr("fill", function(d, i) {
      return "C33232";
    })
    .attr("class", "front")
    .style("opacity", function(d) {
      if (d.decade == 10) {
        return d.decade * 0.04;
      }
      return d.decade * 0.08;

    })
    .attr("radius", 5);

  var text = svg.selectAll("text")
    .data(dataitems)
    .enter().append("text")
    .attr("x", 0)
    .attr("y", function(d, i) {
      return foci[d.decade].y + 8;
    })
    .attr("fill", function(d, i) {
      return "black";
    })
    .text(function(d) {
      return foci[d.decade].label
    })
    .attr("font-family", 'Inconsolata')
    .attr("font-size", "12px");

  var arr = [];
  //console.log(dataitems);
  for (var i = 0; i < dataitems.length; i++) {
    for (var j = 0; j < dataitems[i].num; j++) {
      arr.push(10 - i);
    }
  }

  // Create node objects
  var nodes = d3.range(0, arr.length).map(function(o, i) {
    return {
      id: "node" + i,
      x: foci.bottompos.x + Math.random(),
      y: foci.bottompos.y + Math.random(),
      radius: node_radius,
      choice: "bottompos",
      decade: arr[i]
    }
  });

  // Force-directed layout
  var force = d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .gravity(0)
    .charge(0)
    //    .alpha(900)
    .friction(.81)
    .on("tick", tick)
    .start();

  // Draw circle for each node.
  var circle = svg.selectAll("circle")
    .data(nodes)
    .enter().append("circle")
    .attr("id", function(d) {
      return d.id;
    })
    .attr("class", "node")
    .attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    })
    .attr("r", function(d) {
      return d.radius;
    })
    .style("fill", "bornColor");


  // Run function periodically to make things move.
  var timeout;
  var numberArray = [];
  for (var i = 0; i < arr.length; i++) {
    numberArray.push(i);
  }
  //console.log(numberArray);


  var random_index = 0;
  var flag = 1;
  var disease_color_index_dic = {};
  var last_choice;

  function timer() {
    //
    if (flag != 1) {
      nodes[random_index].choice = "dead";
    }
    flag = 0;
    //
    var choices = d3.keys(foci);
    //
    random_index = numberArray[Math.floor(Math.random() * numberArray.length)];
    //
    var foci_index = nodes[random_index].decade - 1;

    //
    var choice = d3.keys(foci)[foci_index];



    // if(last_choice == choice){
    //   choice = parseInt(choice) += 1;
    // }
    // else last_choice = choice;

    nodes[random_index].choice = choice;

    for (var i = 0; i < numberArray.length; i++) {
      if (numberArray[i] === random_index) {
        numberArray.splice(i, 1);
      }
    }
    var total = data_disease[parseInt(choice) - 1].total;
    var nervous = data_disease[parseInt(choice) - 1].nervous / total;
    var cancer = data_disease[parseInt(choice) - 1].cancer / total;
    var r = getRandom(nervous, cancer);
    //if (r != disease_color_index_dic[choice])
    disease_color_index_dic[choice] = r;
    //console.log(disease_color_index_dic);

    force.resume();

    // Run it again in a few seconds.
    timeout = setTimeout(timer, 1000);
  }


  timeout = setTimeout(timer, 1000);
  var t = d3.transition().duration(50);

  function getRandom(prob_1, prob_2) {
    var num = Math.random();
    if (num < prob_1) return 0; //nervouse probability
    else if (num < prob_2 + prob_1) return 1; // cancer probability
    else return 2; //other disease probability
  }

  function tick(e) {
    circle
      //      .transition(t)
      .each(gravity(.23 * e.alpha))
      //  .each(collide(.1))
      .style("fill", function(d) {
        if (d.choice == "dead") {

          var r = disease_color_index_dic[d.decade];
          //console.log(r);
          return colors[r];
        } else if (d.choice == "bottompos") {
          return bornColor;
        } else {
          return lifeColor;
        }
      })
      .attr("cx", function(d) {
        return d.x-350;
      })
      .attr("cy", function(d) {
        return d.y;
      });
  }


  // Move nodes toward cluster focus.
  function gravity(alpha) {
    return function(d) {
      if (d.choice == "dead") {
        d.x += (875 - d.x) * alpha * 0.3;
      } else {
        d.y += (foci[d.choice].y - d.y - 3) * alpha;
        d.x += (foci[d.choice].x - d.x) * alpha;
      }

    };
  }


}

function visualizeBarChart(data, hide_col) {
  // compute the total length of each bar, to be used in domain
  for (var i = 0; i <= data.length; i++) {
    for (var key in data[i]) {
      if (key != "decade" && key != "total") {
        data[i].total += data[i][key];
        //    console.log(data[i].total);
      }
    }
  }

  var factors = ["nervous", "cancer", "disease"];


  //build canvas
  var margin = {
      top: 11,
      right: 100,
      bottom: 30,
      left: 120
    },
    width = 500 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;


  //define x-axis
  var x = d3.scale.linear()
    .range([0, width]);

  //define y-axis
  var y = d3.scale.ordinal()
    .rangeRoundBands([height, 0], .65);

  //define color scale
  var z = d3.scale.category20c();

  //create x-axis
  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

  //create y-axis
  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("right");

  //define svg element
  var svg = d3.select("#barchart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height - hide_col * 50 + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  //read data and transform it
  //d3.csv("dataoverall.csv", type, function(error, data) {
  //  if (error) throw error;
  //	console.log(data)
  var layers = d3.layout.stack()(factors.map(function(c) {
    return data.map(function(d) {
      return {
        x: d.decade,
        y: d[c]
      };
    });

  }));

  //scale axes
  y.domain(layers[0].map(function(d) {
    return d.x;
  }));

  x.domain([0, d3.max(layers[layers.length - 1], function(d) {
    return d.y0 + d.y;
  })]).nice();
  //x.domain([0, 10000]).nice();

  //building bars
  var layer = svg.selectAll(".layers")
    .data(layers)
    .enter().append("g")
    .attr("class", "layer")
    .style("fill", function(d, i) {
      return colors[i];
    });

  layer.selectAll("rect")
    .data(function(d) {
      return d;
    })
    .enter().append("rect")
    .attr("y", function(d) {
      return y(d.x);
    })
    .attr("x", function(d) {
      return x(d.y0);
    })
    .attr("width", function(d) {
      return x(d.y);
    })
    .attr("height", y.rangeBand())
    .attr("transform", function(d) {
      //a way to flip the cordinate
      var trans_x = width - x(d.y) - 2 * x(d.y0);
      return "translate(" + trans_x + ", 0)";
    });

  // svg.append("g")
  //   .attr("class", "axis axis--x")
  //   .attr("transform", "translate(0," + height + ")")
  //   .call(xAxis);

}
