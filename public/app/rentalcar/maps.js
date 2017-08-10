function initAutocomplete() {
  var input1 = document.getElementById('pickUpLocation1');
  var options1 = {
    types: ['geocode'],
    componentRestrictions: {
      country: 'nz'
    }
  };
  add1 = new google.maps.places.Autocomplete(input1, options1);

  var input2 = document.getElementById('dropOffLocation1');
  var options2 = {
    types: ['geocode'],
    componentRestrictions: {
      country: 'nz'
    }
  };
  add2 = new google.maps.places.Autocomplete(input2, options2);
  add2.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place1 = add1.getPlace();
  // console.log(place);
  // console.log(place1.geometry.location.lng());

  var place2 = add2.getPlace();
  // console.log(place2.geometry.location.lat());


  var origin = {
    lat: place1.geometry.location.lat(),
    lng: place1.geometry.location.lng()
  };
  var destination = {
    lat: place2.geometry.location.lat(),
    lng: place2.geometry.location.lng()
  };


  var geocoder = new google.maps.Geocoder();

  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix({
    origins: [origin],
    destinations: [destination],
    travelMode: 'DRIVING',
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false
  }, function(response, status) {
    console.log(response);
    if (status !== 'OK') {
      alert('Error was: ' + status);
    } else {
      var originList = response.originAddresses;
      var destinationList = response.destinationAddresses;
      var outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '';
      var totalKm = 0;
      var totalMins = 0;

      for (var i = 0; i < originList.length; i++) {
        var results = response.rows[i].elements;
        for (var j = 0; j < results.length; j++) {
          outputDiv.innerHTML += originList[i] + ' to ' + destinationList[j] +
            ': <br /><strong>' + results[j].distance.text + ' in ' +
            results[j].duration.text + '</strong><br>';
          totalKm = results[j].distance.value;
          totalMins = results[j].duration.value;
        }
        // km minutes;
        console.log(totalKm, duration);
      }
    }
  });
}
