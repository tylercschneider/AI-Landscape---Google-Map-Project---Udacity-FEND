
**** READ ME ****

PROJECT
---
AI MAP - UDACITY FRONT END DEVELOPER NANODEGREE - Use APIs and code bases


DEVELOPER CONTACT
---
fictitious at gmail dot com


BUILD TOOLS
---
Sublime Text v3.0
Google Map API
News API
jQuery v3.3.1
Knockout js v3.4.2
Google Developer Tools


GENERAL USAGE NOTES
---
To check out map open index.html in your favorite browser.
Click the markers. To see more info on locations.
Open menu by clicking hamburger in upper right corner.
Close menu by clicking hamburger again.
Filter the markers by utilizing the drop down menu found in menu.
Select a marker from the list by clicking one of the names.

Check out articles about companies when infowindow opens.


BACKGROUND
---
There are three main things happening in this web map
1. Knockout - knockout is a javascript framework that is being used to update the DOM when two things happen. 
	- when the user selects an item from the menu
	- when the user filters the item list and markers displayed.

2. Google Maps - google maps displays the markers and handles the click functionalities when a marker is clicked.
	- when marker is clicked infowindow is also opened. It has default content but also is updated by News API

3. News API - 3rd Party api is sent a query of company name and ai to find recent articles on the subject. THe info is then displayed in infowindow.