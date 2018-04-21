/*******************************
******** ViewModel
********************************/
var itemChosen;
//Function to convert model values into Knockout compatible versions
function listItem(id, name) {
	var self = this;
	self.id = id;
	self.name = name;
	self.visibleProp = ko.observable(true);
}

function listBuild(model) {
	var listItems = ko.observableArray();
	for (i=0; i < model.length; i++) {
		listItems.push(new listItem(i, model[i].name));
	}
	return listItems;
}

var viewModel = function(model) {
	var self = this;

	self.listItems = listBuild(model);

	self.selectedTag = ko.observable({tag:"all"});
	self.tagList = [
		{tag:"all"}, 
		{tag:"profit"}, 
		{tag: "research"}, 
		{tag:"hardware"}
		]
	self.idList = {
		"all": [1,1,1,1,1,1,1,1,1,1,1,1], 
		"profit": [1,1,0,1,1,0,1,1,1,1,1,1], 
		"research": [1,1,1,0,1,1,1,1,0,1,1,1], 
		"hardware": [1,1,0,1,0,0,1,0,0,1,1,1]
		}

	self.clickOrg = function(listItem) {
		var id = listItem.id;
		selectMarker(id);
		}
	self.filter = ko.computed(function() {
		console.log(self.selectedTag());
		var idListList = self.idList[self.selectedTag().tag];
		console.log(idListList);
		console.log("running");
		for(i=0; i < self.listItems().length; i++) {
			
			if(idListList[i]===1){
				self.listItems()[i].visibleProp(true);
				markers[i].setMap(map);
				console.log("one");
			}
			else {
				self.listItems()[i].visibleProp(false);
				markers[i].setMap(null);
				console.log("two");
			}
		}
		})

}



/**************************************
******* MENU
**************************************/
$('.menu-icon').click(function() {
	$('.nav').toggleClass('open');
});


/**************************************
******* GOOGLE MAP
***************************************/

var map;
var markers = [];
var premarkerid = -1;
var latlong;

//Variables used to manage marker icons
var prim = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
var select = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
//star icon and programming not implemented in this iteration, was used for comprehensive click testing
var star = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";

//Creates map, and sets the intial settings and styles. 	
function initMap() {
    var uluru = {lat: 0, lng: -122};
    map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 2.5,
      	center: uluru,
      	mapTypeControl: false,
      	streetViewControl: false,
      	fullscreenControl: false,
      	styles: mapStyle
    });
	loadMarkers();
	var myViewModel = new viewModel(model);
	ko.applyBindings(myViewModel);
}

function contentBuilder() {
	var contentString = '<div id="content">'+'<div id="siteNotice">'+'</div>'+
	'<h1 id="firstHeading" class="firstHeading">Company</h1>'+
	'<div id="bodyContent">'+
	'<p>article title, source, link</p>'+
	'<p>article title, source, link</p>'+
	'<p>article title, source, link</p>'+
	'<p>Powered by -> <a href="https://newsapi.org">News API</a></p>'+
	'</div>'+
	'</div>'
	return contentString;
}

function loadMarkers() {
	//Populates map with Markers by looping through the model data found in app.js
	for(i = 0; i < model.length; i++){
    	latlong = {lat: (model[i].latlong[0]), lng: (model[i].latlong[1])};
    	var markerInfo = createMarker();
    	markers.push(markerInfo);
    	//handles marker clicks in various orders - sets icons, opens info windows, selects list items				
	};
}

function createMarker() {
	var marker = (new google.maps.Marker({
			id: i,
			position: latlong,
			map: map,
			title: model[i].name,
			star: model[i].priority,
			icon: prim,
			content: model[i].content,
			news: model[i].news
    	}));
    marker.infowindow = new google.maps.InfoWindow({
  		content: model[i].name
		});
	google.maps.event.addListener( marker, 'click', function() {
		var id = marker.id;
		selectMarker(id);
        });
	return marker;
}

function selectMarker(id) {
	
	if(premarkerid === -1){
		markers[id].setIcon(select);
		markers[id].infowindow.open(map, markers[id]);
	}

	else if (id != premarkerid){
		markers[id].setIcon(select);
		markers[id].infowindow.open(map, markers[id]);
		//reset previously clicked marker to proper icon
		if (markers[premarkerid].star) {
			markers[premarkerid].setIcon(star);	
		}
		else{
			markers[premarkerid].setIcon(prim);
		}
		markers[premarkerid].infowindow.close();
	}
	//repetitive clicks on same marker
	else {
		//marker receives third consecutive click
		if(markers[id].icon != select) {
			markers[id].setIcon(select);
			markers[id].infowindow.open(map, markers[id]);
		}
		//marker receives second consecutive click
		else {
			//reset marker to proper icon
			if (markers[id].star) {
				markers[id].setIcon(star);
			}
			else{
				markers[id].setIcon(prim);
			}
		markers[id].infowindow.close();
		}
	}		
//sets clicked marker to be premarker in next click event
	premarkerid = id;
}