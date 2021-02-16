let count=0;
function loadJSONDoc() {
	count++;
	console.log(`updating ${count}`)
	var xmlhttp;
	req = new XMLHttpRequest();
	req.onreadystatechange = function() {
	  if (req.readyState == 4 && req.status == 200) {
		var obj = JSON.parse(req.responseText);
		var output = "<tbody>";
		for (x in obj) {
		  output += "<tr><td>" + obj[x].Id + "</td>" + "<td>" + obj[x].Temperature+ "</td>" + "<td>"+ obj[x].Timestamp+ "</td></tr>";
		}
		output += "</tbody>";
		document.getElementById("wt").innerHTML = output;
	  }
	}
	req.open("GET", "http://localhost:8080/api/weather");
	req.send();
  }

 document.addEventListener("DOMContentLoaded", function(event) {
	setInterval(loadJSONDoc, 60000) //updating temp data in every 60 second
  });