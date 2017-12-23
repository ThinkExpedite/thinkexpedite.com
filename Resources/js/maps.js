function initMap() {
    var myLatLng = {lat: 51.500921, lng: -2.4807557};

    var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 12,
      center: myLatLng
    });
/*
    var contentString = '<div id="overlaycontent">' +
    '<img src=resources/img/favicon.png class="mapHeader">' +
    '<br>Bristol & Bath Science Park' + 
    '<br>Dirac Crescent, Emersons Green, Bristol BS16 7FR</div>';
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
*/
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: new google.maps.MarkerImage('resources/img/marker.png'),
        title: 'Expedite Ltd'
      });
    /*
      marker.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    */

  }


