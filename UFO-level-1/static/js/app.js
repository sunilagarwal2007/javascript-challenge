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
  var date = d3.select("#datetime").property("value");
  console.log("date seleected : ", date);
  let filterUFOSightData = tableData;
  if(date){
    filterUFOSightData = filterUFOSightData.filter(row => row.datetime === date);
  console.log("filterUFOSightData:", filterUFOSightData);
}
  constructTable(filterUFOSightData);
}

d3.selectAll("#filter-btn").on("click", searchThroughDateTime);

constructTable(tableData);
