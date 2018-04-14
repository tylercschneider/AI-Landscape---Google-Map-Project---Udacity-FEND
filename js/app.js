/**************************
Model
**************************/  
var model = [
	{
		"name": "Google",

		"latlong": [37.422, -122.084],

		"priority": 0,

		"tags": ["all", "profit", "research", "hardware"],

		"city": "Mountain View",

		"state": "CA",

		"country": "USA",

		"website": "https://www.google.com",

		"content": "needs to be updated",

		"news": "some sort of an api call input"

	},
	{
		"name": "Amazon",

		"latlong": [47.609722, -122.333056],

		"priority": 0,

		"tags": ["all", "profit", "research", "hardware"],

		"city": "Seattle",

		"state": "WA",

		"country": "USA",

		"website": "https://www.amazon.com",

		"content": "needs to be updated",

		"news": "some sort of an api call input"

	},
	{
		"name": "Open AI",

		"latlong": [37.773972, -122.431297],

		"priority": 0,

		"tags": ["all", "research"],

		"city": "San Francisco",

		"state": "CA",

		"country": "USA",

		"website": "https://openai.com/",

		"content": "needs to be updated",

		"news": "some sort of an api call input"

	},
	{
		"name": "NVIDIA",

		"latlong": [37.354107, -121.955238],

		"priority": 0,

		"tags": ["all", "profit", "hardware"],

		"city": "Santa Clara",

		"state": "CA",

		"country": "USA",

		"website": "https://www.nvidia.com",

		"content": "needs to be updated",

		"news": "some sort of an api call input"

	},
	{
		"name": "Massachusetts Institute of Technology (MIT)",

		"latlong": [42.375702, -71.123238],

		"priority": 0,

		"tags": ["all", "profit", "research"],

		"city": "Cambridge",

		"state": "MA",

		"country": "USA",

		"website": "https://web.mit.edu",

		"content": "needs to be updated",

		"news": "some sort of an api call input"
	},
	{
		"name": "Carnegie Mellon University (CMU)",

		"latlong": [40.440624, -79.995888],

		"priority": 1,

		"tags": ["all", "profit", "research"],

		"city": "Pittsburgh",

		"state": "PA",

		"country": "USA",

		"website": "https://www.cmu.edu",

		"content": "needs to be updated",

		"news": "some sort of an api call input"
	},
	{
		"name": "Facebook",

		"latlong": [37.452961, -122.181725],

		"priority": 0,

		"tags": ["all", "profit", "research", "hardware"],

		"city": "Menlo Park",

		"state": "CA",

		"country": "USA",

		"website": "https://www.facebook.com",

		"content": "needs to be updated",

		"news": "some sort of an api call input"
	},
	{
		"name": "Alibaba",

		"latlong": [30.29365, 120.16142],

		"priority": 0,

		"tags": ["all", "profit", "research"],

		"city": "Hangzhou",

		"state": "ZJ",

		"country": "China",

		"website": "https://www.alibaba.com",

		"content": "needs to be updated",

		"news": "some sort of an api call input"
	},
	{
		"name": "Udacity",

		"latlong": [37.386051, -122.083855],

		"priority": 0,

		"tags": ["all", "profit"],

		"city": "Mountain View",

		"state": "CA",

		"country": "USA",

		"website": "https://www.udacity.com",

		"content": "needs to be updated",

		"news": "some sort of an api call input"
	},
	{
		"name": "Apple",

		"latlong": [37.323, -122.03218],

		"priority": 0,

		"tags": ["all", "profit", "research", "hardware"],

		"city": "Cupertino",

		"state": "CA",

		"country": "USA",

		"website": "https://www.apple.com",

		"content": "needs to be updated",

		"news": "some sort of an api call input"
	},
	{
		"name": "IBM",

		"latlong": [41.128611, -73.707778],

		"priority": 0,

		"tags": ["all", "profit", "research", "hardware"],

		"city": "Armonk",

		"state": "NY",

		"country": "USA",

		"website": "https://www.ibm.com",

		"content": "needs to be updated",

		"news": "some sort of an api call input"
	},
	{
		"name": "Microsoft",

		"latlong": [47.673988, -122.121513],

		"priority": 0,

		"tags": ["all", "profit", "research", "hardware"],

		"city": "Redmond",

		"state": "WA",

		"country": "USA",

		"website": "https://www.microsoft.com",

		"content": "needs to be updated",

		"news": "some sort of an api call input"
	}
];
/*******************************
ViewModel
********************************/

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
function displayList(listItems, selectedTag) {
	var displayItems = listItems;
	for (i=0; i < displayItems.length; i++) {
		console.log(i);
		for(j=0; j < selectedTag.idList.length; i++){
			console.log(j);
			if (selectedTag.idList[j] == displayItems[i].id){
				displayItems[i].visibleProp(true);
				console.log(displayItems[i].visibleProp());
			}
			else {
				displayItems[i].visibleProp(false);

			}
		}	
	}
	return displayItems;
}

function myViewModel() {
	var self = this;
	self.listItems = listBuild(model);
	self.selectedTag = ko.observable();
	self.tagList = [{tag:"all", idList: [0,1,2,3,4,5,6,7,8,9,10,11]}, 
			{tag:"profit", idList: [0,1,3,4,6,7,8,9,10,11]}, 
			{tag: "research", idList: [0,1,2,4,5,6,7,9,10,11]}, 
			{tag:"hardware", idList: [0,1,3,6,9,10,11]}];
	self.clickOrg = function(listItem) {console.log(listItem.id);}

	self.displayItems = displayList(self.listItems, self.selectedTag);
}
/**************************************
*Click menu icon to open and close side menu
**************************************/
$('.menu-icon').click(function() {
	$('.nav').toggleClass('open');
});
/**************************************
* GOOGLE MAP CODE
***************************************/
//Variables used to manage marker icons
var prim = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
//star icon and programming not implemented in this iteration, was used for comprehensive click testing
var star = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
var select = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
var markers = [];
var premarkerid = -1;
var premarker, marker, latlong;
var markerClicks;
//The next 298 lines of code creates a map, and sets the intial settings and styles. 
function initMap() {
    var uluru = {lat: 0, lng: -122};
    var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 2.5,
      	center: uluru,
      	mapTypeControl: false,
      	streetViewControl: false,
      	fullscreenControl: false,
      	styles: [
		  	{
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#ebe3cd"
		      }
		    ]
		  },
		  {
		    "elementType": "labels",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#523735"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#f5f1e6"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#c9b2a6"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.country",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#dcd2be"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#ae9e90"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.neighborhood",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "landscape.natural",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#dfd2ae"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#dfd2ae"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#93817c"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.business",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#a5b076"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#447530"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#f5f1e6"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.icon",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
			"featureType": "road.arterial",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#fdfcf8"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#f8c967"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#e9bc62"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway.controlled_access",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#e98d58"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway.controlled_access",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#db8555"
		      }
		    ]
		  },
		  {
		    "featureType": "road.local",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#806b63"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.line",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#dfd2ae"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.line",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#8f7d77"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.line",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#ebe3cd"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.station",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#dfd2ae"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#b9d3c2"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#92998d"
		      }
		    ]
		  }
		]
    });
	var infowindow = new google.maps.InfoWindow({
		content: '<div id="content">'+'<div id="siteNotice">'+'</div>'+
		            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
		            '<div id="bodyContent">'+
		            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
		            'sandstone rock formation in the southern part of the '+
		            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
		            'south west of the nearest large town, Alice Springs; 450&#160;km '+
		            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
		            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
		            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
		            'Aboriginal people of the area. It has many springs, waterholes, '+
		            'rock caves and ancient paintings. Uluru is listed as a World '+
		            'Heritage Site.</p>'+
		            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
		            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
		            '(last visited June 22, 2009).</p>'+
		            '</div>'+
		            '</div>'
	});
   //Populates map with Markers by looping through the model data found in app.js
    for(i = 0; i < model.length; i++){
    	latlong = {lat: (model[i].latlong[0]), lng: (model[i].latlong[1])};
    	marker = (new google.maps.Marker({
          id: i,
          position: latlong,
          map: map,
          title: model[i].name,
          star: model[i].priority,
          icon: prim,
          content: model[i].content,
          news: model[i].news
    	}));
    	markers.push(marker);
    	if(premarker === undefined || premarker == null || premarker.length <= 0) {
    		premarker = markers[i];
    	}
    	//handles marker clicks in various orders - sets icons, opens info windows, selects list items
      	markerClicks = google.maps.event.addListener(marker, 'click', (function(marker) {
			return function() {
				//different marker is clicked
				if (marker.id != premarkerid){
					markers[marker.id].setIcon(select);
					infowindow.open(map, markers[marker.id]);
					//reset previously clicked marker to proper icon
					if (premarker.star) {
						premarker.setIcon(star);	
					}
					else{
						premarker.setIcon(prim);
					}
				}
				//repetitive clicks on same marker
				else {
					//marker receives third consecutive click
					if(markers[marker.id].icon != select) {
						markers[marker.id].setIcon(select);
						infowindow.open(map, markers[marker.id]);
					}
					//marker receives second consecutive click
					else {
						//reset marker to proper icon
						if (markers[marker.id].star) {
							markers[marker.id].setIcon(star);
						}
						else{
							markers[marker.id].setIcon(prim);
						}
					infowindow.close();
					}	
				}
				//sets marker to be previously clicked marker for next click event
				premarkerid = marker.id;
				premarker = markers[marker.id];
			}
		})(marker));				
	};
  }