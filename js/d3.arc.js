
var width = window.innerWidth,
    height = window.innerHeight;

var redTranslate = "translate(380, 180)";


  // append svg to the DIV
d3.select(".chart").append("svg:svg")
  .attr("width", 650)
  .attr("height", 530);

var render = function(dataset) {
  vis = d3.select("svg");   // select the svg

    // set constants
  var PI = Math.PI;
  var arcMin = 72;        // inner radius of the first arc
  var arcWidth = 22;      // width
  var arcPad = 12;         // padding between arcs

    // arc accessor
    //  d and i are automatically passed to accessor functions,
    //  with d being the data and i the index of the data
  var drawArc = d3.svg.arc()
      .innerRadius(function(d, i) {
        return  arcMin + i*(arcWidth) + arcPad;
      })
      .outerRadius(function(d, i) {
        return arcMin + (i+1)*(arcWidth);
      })
      .startAngle(function(d, i) {
        return Math.floor((d*6 * (PI/180))*1000)/1000;
      })
      .endAngle(function(d, i) {
        return Math.floor((60*6 * (PI/180))*1000)/1000;
      });


  var redArcs = vis.selectAll("path.red-path").data(dataset);

    // update red arcs

    // custom tween function used by the attrTween method to draw the intermediary steps.
    //  attrTween will actually pass the data, index, and attribute value of the current
    //  DOM object to this function, but for our purposes, we can omit the attribute value
  function arc2Tween(d, indx) {
    var interp = d3.interpolate(this._current, d);    // this will return an interpolater
                                                      //  function that returns values
                                                      //  between 'this._current' and 'd'
                                                      //  given an input between 0 and 1

    this._current = d;                    // update this._current to match the new value

    return function(t) {                  // returns a function that attrTween calls with
                                          //  a time input between 0-1; 0 as the start time,
                                          //  and 1 being the end of the animation

      var tmp = interp(t);                // use the time to get an interpolated value
                                          //  (between this._current and d)

      return drawArc(tmp, indx);          // pass this new information to the accessor
                                          //  function to calculate the path points.
                                          //  make sure sure you return this.

                                          // n.b. we need to manually pass along the
                                          //  index to drawArc so since the calculation of
                                          //  the radii depend on knowing the index. if your
                                          //  accessor function does not require knowing the
                                          //  index, you can omit this argument
    }
  };

    // *** update red arcs -- using attrTeen and a custom tween function ***
  redArcs.transition()
      .duration(300)
      .attr("fill", "rgb(255, 255, 255)")
      .attrTween("d", arc2Tween);         // using attrTween instead of attr here since
                                          //  attr interpolates linearly without taking
                                          //  in account the shape of the arc.
                                          // attrTween requires a function as the second
                                          //  argument, whereas attr can just be a value.

      // drawing the red arcs for new data
      //  similar to above, except for
  redArcs.enter().append("svg:path")
      .attr("class", "red-path")
      .attr("transform", redTranslate)
      .attr("fill", "rgb(255, 255, 255)")
      .attr("d", drawArc)
      .each(function(d){
        this._current = d;
      });
};


// the code below is not necessary for your understanding of arc tweening
//  instead, it is used to create a click area for people to regenerate
//  arcs by generating a new data set and calling render on that set

  // drawing the click area
var initialize = function() {
  var arcMin = 65;    // this should match the arcMin in render()

  render([15,48,20]);

  if(!d3.selectAll("circle.click-circle")[0].length) {    // if there is no click area..

    // making the click circle for red arcs
    d3.select("svg").append("circle")
        .attr("class", 'click-circle')
        .attr("transform", redTranslate)
        .attr("r", arcMin*0.85)
        .attr("fill", "rgba(134, 214, 203, 1)");
    d3.select("svg").append("text").text(function(d){return "2.7 fl.oz"})
    .attr("transform", redTranslate)
    .attr("class", 'text-circle')
    .attr("dy", ".35em")
    .attr("fill", "rgb(255, 255, 255)");
    d3.select("svg").append("text").text("Sugar")
    .attr("transform", redTranslate)
    .attr("class", 'text-path')
    .attr("dy", "-9em")
    .attr("dx", "1em")
    .attr("fill", "rgb(255, 255, 255)");
    d3.select("svg").append("text").text("Proteins")
    .attr("transform", redTranslate)
    .attr("class", 'text-path')
    .attr("dy", "-7.5em")
    .attr("dx", "1em")
    .attr("fill", "rgb(255, 255, 255)");
    d3.select("svg").append("text").text("Carbohyrates")
    .attr("transform", redTranslate)
    .attr("class", 'text-path')
    .attr("dy", "-6em")
    .attr("dx", "1em")
    .attr("fill", "rgb(255, 255, 255)");
  }
}

initialize();
