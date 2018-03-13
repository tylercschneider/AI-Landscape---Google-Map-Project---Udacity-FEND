/*****************************************************
Model
*/  
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
/*****************************************************
ViewModel
*/

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
/*
*Click menu icon to open and close side menu
*/
$('.menu-icon').click(function() {
	$('.nav').toggleClass('open');
});