function initMap() {
    var uluru = {lat: 52.4166667, lng: 16.9666667};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }