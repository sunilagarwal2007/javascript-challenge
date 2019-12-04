// from data.js
var tableData = data;
// YOUR CODE HERE!

console.log("tableData: ",tableData);



var tbody = d3.select("tbody");

function constructTable(tableData){

  //clear the data from table if there is Anomoly
  tbody.html("");

  tableData.forEach(function(element){
    var tr = tbody.append("tr");
    tr.append("td").attr("class","ufosight").text(element.datetime);
    tr.append("td").attr("class","ufosight").text(element.city);
    tr.append("td").attr("class","ufosight").text(element.state);
    tr.append("td").attr("class","ufosight").text(element.country);
    tr.append("td").attr("class","ufosight").text(element.shape);
    tr.append("td").attr("class","ufosight").text(element.durationMinutes);
    tr.append("td").attr("class","ufosight").text(element.comments);
  });
}

function searchThroughDateTime(){
  console.log("Inside searchThroughDateTime");

  // Prevent the page from refreshing
  d3.event.preventDefault();

  //Get the date  value from filter
  var date = d3.select("#datetime").property("value");

  //Get the city value from filter
  var city = d3.select("#city").property("value");

  //Get the state value from filter
  var state = d3.select("#state").property("value");

  //Get the country value from filter
  var country = d3.select("#country").property("value");

  //Get the shape value from filter
  var shape = d3.select("#shape").property("value");

  let filterUFOSightData = tableData;
  if(date){
    filterUFOSightData = filterUFOSightData.filter(row => row.datetime === date);
   //console.log("filterUFOSightData:", filterUFOSightData);
  }
  if(city){
    filterUFOSightData = filterUFOSightData.filter(row => row.city === city);
   //console.log("filterUFOSightData:", filterUFOSightData);
  }

  // if(state){
  //   filterUFOSightData = filterUFOSightData.filter(row => row.state === state);
  //
  // }
  //
  // if(country){
  //   filterUFOSightData = filterUFOSightData.filter(row => row.country === country);
  //
  // }
  //
  // if(shape){
  //   filterUFOSightData = filterUFOSightData.filter(row => row.shape === shape);
  //
  // }

  constructTable(filterUFOSightData);
}

d3.selectAll("#filter-btn").on("click", searchThroughDateTime);

constructTable(tableData);
