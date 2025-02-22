        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
        	// Basic options for a simple Google Map
        	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        	var mapOptions = {
        		// How zoomed in you want the map to start at (always required)
        		zoom: 3,
        		scrollwheel: false,

        		// The latitude and longitude to center the map (always required)
        		center: new google.maps.LatLng(23.7593, 90.3788), // Replace latitude and longitude for your palce.

        		styles: [{
        			"featureType": "administrative",
        			"elementType": "labels.text.fill",
        			"stylers": [{
        				"color": "#000000"
                    }]
                }, {
        			"featureType": "landscape",
        			"elementType": "all",
        			"stylers": [{
        				"color": "#f2f2f2"
                    }]
                }, {
        			"featureType": "poi",
        			"elementType": "all",
        			"stylers": [{
        				"visibility": "off"
                    }]
                }, {
        			"featureType": "road",
        			"elementType": "all",
        			"stylers": [{
        				"saturation": -100
                    }, {
        				"lightness": 45
                    }]
                }, {
        			"featureType": "road.highway",
        			"elementType": "all",
        			"stylers": [{
        				"visibility": "simplified"
                    }]
                }, {
        			"featureType": "road.arterial",
        			"elementType": "labels.icon",
        			"stylers": [{
        				"visibility": "off"
                    }]
                }, {
        			"featureType": "transit",
        			"elementType": "all",
        			"stylers": [{
        				"visibility": "off"
                    }]
                }, {
        			"featureType": "water",
        			"elementType": "all",
        			"stylers": [{
        				"color": "#00c9ff"
                    }, {
        				"visibility": "on"
                    }]
                }]
        	};

        	// Get the HTML DOM element that will contain your map 
        	// We are using a div with id="map" seen below in the <body>
        	var mapElement = document.getElementById('map');

        	// Create the Google Map using our element and options defined above
        	var map = new google.maps.Map(mapElement, mapOptions);

        	// Let's also add a marker while we're at it
        	var marker = new google.maps.Marker({
        		position: new google.maps.LatLng(24.04646399966657, 90),
        		map: map,
        		icon: 'img/map-marker.png',
        		title: 'Dentist'
        	});
        }
