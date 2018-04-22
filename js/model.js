/**************************
******** Model
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

		"news": "Google"

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

		"news": "Amazon"

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

		"news": "Open-AI"

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

		"news": "nvidia"

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

		"news": "mit"
	},
	{
		"name": "Carnegie Mellon University (CMU)",

		"latlong": [40.440624, -79.995888],

		"priority": 0,

		"tags": ["all", "profit", "research"],

		"city": "Pittsburgh",

		"state": "PA",

		"country": "USA",

		"website": "https://www.cmu.edu",

		"news": "carnegie-mellon-university"
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

		"news": "Facebook"
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

		"news": "Alibaba"
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

		"news": "Udacity"
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

		"news": "Apple"
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

		"news": "IBM"
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

		"news": "Microsoft"
	}
];
//Variable for Google map Customization. Moved to this doc for cleanliness
var mapStyle = [
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
		];