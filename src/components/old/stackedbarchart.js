import { select, 
    csv, 
    scaleLinear, 
    scaleOrdinal,
    scaleBand, 
    axisLeft,
    axisBottom,
    map
   } from 'd3';

// const svg = select('svg');
// puts the height and width of the svg into variables
// const height = +(svg.attr('height'));
// const width = +(svg.attr('width'));

export default function MakeVisualization(props) {
// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 20, left: 50},
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = select("#my_dataviz")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_stacked.csv", function(data) {

// List of subgroups = header of the csv files = soil condition here
var subgroups = data.columns.slice(1)
console.log('this is subgroups', subgroups)

// List of groups = species here = value of the first column called group -> I show them on the X axis
var groups = map(data, function(d){return(d.group)}).keys()
console.log('this is groups', groups)

// Add X axis
var x = scaleBand()
  .domain(groups)
  .range([0, width])
  .padding([0.2])
svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(axisBottom(x).tickSize(0));

// Add Y axis
var y = scaleLinear()
.domain([0, 40])
.range([ height, 0 ]);
svg.append("g")
.call(axisLeft(y));

// Another scale for subgroup position?
var xSubgroup = scaleBand()
.domain(subgroups)
.range([0, x.bandwidth()])
.padding([0.05])

// color palette = one color per subgroup
var color = scaleOrdinal()
.domain(subgroups)
.range(['#e41a1c','#377eb8','#4daf4a'])

// Show the bars
svg.append("g")
.selectAll("g")
// Enter in data = loop group per group
.data(data)
.enter()
.append("g")
  .attr("transform", function(d) { return "translate(" + x(d.group) + ",0)"; })
.selectAll("rect")
.data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
.enter().append("rect")
  .attr("x", function(d) { return xSubgroup(d.key); })
  .attr("y", function(d) { return y(d.value); })
  .attr("width", xSubgroup.bandwidth())
  .attr("height", function(d) { return height - y(d.value); })
  .attr("fill", function(d) { return color(d.key); });

})


return (
    <div id="my_dataviz">

    </div>
);
}