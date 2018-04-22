/*******************************
******** ViewModel
********************************/
var itemChosen;
//Converts model components into List items
function listItem(id, name) {
	var self = this;
	self.id = id;
	self.name = name;
	self.visibleProp = ko.observable(true);
}
//Compiles List items
function listBuild(model) {
	var listItems = ko.observableArray();
	for (i=0; i < model.length; i++) {
		listItems.push(new listItem(i, model[i].name));
	}
	return listItems;
}

var viewModel = function(model) {
	var self = this;
	//Items in list displayed
	self.listItems = listBuild(model);

	self.selectedTag = ko.observable({tag:"all"});
	//Tags for filter
	self.tagList = [
		{tag:"all"}, 
		{tag:"profit"}, 
		{tag: "research"}, 
		{tag:"hardware"}
		]
	//List for filtering
	self.idList = {
		"all": [1,1,1,1,1,1,1,1,1,1,1,1], 
		"profit": [1,1,0,1,1,0,1,1,1,1,1,1], 
		"research": [1,1,1,0,1,1,1,1,0,1,1,1], 
		"hardware": [1,1,0,1,0,0,1,0,0,1,1,1]
		}
	//Selects marker when list item is chosen
	self.clickOrg = function(listItem) {
		var id = listItem.id;
		selectMarker(id);
		$('.nav').toggleClass('open');
		}
	//Recomputes when filter option is utilized dynamically adds and removes icons and list items 
	self.filter = ko.computed(function() {
		var idListList = self.idList[self.selectedTag().tag];
		for(i=0; i < self.listItems().length; i++) {
			markers[i].infowindow.close();
			markers[i].setIcon(prim);
			if(idListList[i]===1){
				self.listItems()[i].visibleProp(true);
				markers[i].setMap(map);
			}
			else {
				self.listItems()[i].visibleProp(false);
				markers[i].setMap(null);
			}
		}
		$('.nav').toggleClass('open');
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

//Sorts data from News API so it can be displayed
function apiSorter(data) {
	console.log(data["status"]);
	if(data["status"] === "ok"){
		var passAlong = []
		var artLink, artTitle, artSource;
		for(t=0; t<3; t++){
			artLink = data["articles"][t]["url"];
			artTitle = data["articles"][t]["title"];
			passAlong.push(artLink);
			passAlong.push(artTitle);
		}
		return passAlong;
	}
	else{
		return 0;
	}
}
//Async request to News API
function contentBuilder(model, i) {
	var company = model[i].news;
	var url = 'https://newsapi.org/v2/everything?q='+company+'+and+ai&apiKey=50795c5a608f4077a74a353d37f7157f';
	var store;
	$.ajax({
		url:url,
		dataType: "json",
		success: function(data) {
		console.log(data);
		store = apiSorter(data);
		markers[i].infowindow.setContent(contentUpdate(store, model, i));
		}
	}).fail( function(){
		markers[i].infowindow.setContent(fallBackContent(model, i));
	});
}
//Creates default string for infowindows in case async request to News API fails
function fallBackContent(model, i) {
	var partOne = '<div id="content">'+'<div id="siteNotice">'+'</div>'+
	'<h2 id="firstHeading" class="firstHeading"><a href="' + model[i].website + '">' + model[i].name + '</a></h2>'+
	'<div id="bodyContent"><h4>Articles</h4>';

	var partTwo = '<p>They\'re doing cool stuff!</p>' + 
	'<p>UNFORTUNATELY...the API call that displays docs here had an error. You could try reloading the page or just' +
	' google it yourself.</p>'; 

	var partThree = '<p>Powered by -> <a href="https://newsapi.org">News API</a></p>'+
	'</div>'+
	'</div>';
	var contentString = partOne + partTwo + partThree;
	return contentString;
}
//Asynchronous update of contentstrings related to infowindows that will be updated by News API
function contentUpdate(store, model, i) {
	var partOne = '<div id="content">'+'<div id="siteNotice">'+'</div>'+
	'<h2 id="firstHeading" class="firstHeading"><a href="' + model[i].website + '">' + model[i].name + '</a></h2>'+
	'<div id="bodyContent"><h4>Articles</h4>';
	var partTwo = "";
	for(j=0; j<store.length; j=j+2){
		partTwo += '<p><a href="' + store[j] + '">'+store[j+1]+'</a></p>';
	}

	var partThree = '<p>Powered by -> <a href="https://newsapi.org">News API</a></p>'+
	'</div>'+
	'</div>';
	var contentString = partOne + partTwo + partThree;
	return contentString;
}
//Function when marker is clicked, manipulates icon displayed and opening closing of infowindows
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
//Creates markers for each location in model
function loadMarkers() {
	//Populates map with Markers by looping through the model data found in app.js
	for(i = 0; i < model.length; i++){
    	latlong = {lat: (model[i].latlong[0]), lng: (model[i].latlong[1])};
    	var markerInfo = createMarker(i);
    	markers.push(markerInfo);
    	//handles marker clicks in various orders - sets icons, opens info windows, selects list items				
	};
}

//Creates marker object with infowindow and clickable feature.
function createMarker(i) {
	var marker = (new google.maps.Marker({
			id: i,
			position: latlong,
			map: map,
			title: model[i].name,
			star: model[i].priority,
			icon: prim
    	}));
    marker.infowindow = new google.maps.InfoWindow({
  		content: contentBuilder(model, i),
		maxWidth: 200
		});
	google.maps.event.addListener( marker, 'click', function() {
		var id = marker.id;
		selectMarker(id);
        });
	return marker;
}
//Creates map, and creates knockout ViewModel. ViewModel is dependent on google map components	
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
function mapError() {
	var errorMsg = "<br><br><p>There was supposed to be a map here...</p><p>But we have encountered an error...</p><p>Sooo...Try again?!?</p>";
	$('#map').append(errorMsg);
}