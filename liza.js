function initMap() {

  //Map Option
  var options = {
    center: { lat: 51.4839, lng: -0.6044 },
    zoom: 10
  }
  //New Map
  map = new google.maps.Map(document.getElementById("map"), options)


  //Marker
  /*
const marker = new google.maps.Marker({
position:{lat: 51.510195, lng:-0.145437},
  map:map
});

  //InfoWindow

  const detailWindow = new google.maps.InfoWindow({
content: '<h2>Bruton Street</h2>'

  });

  marker.addListener("mouseover", () =>{
    detailWindow.open(map, marker);
  })
*/

  // Add different Markers
  function addMarker(property) {
    const marker = new google.maps.Marker({
      position: property.location,
      map: map,
    });

    if (property.content) {

      const detailWindow = new google.maps.InfoWindow({
        content: property.content

      });
      marker.addListener("mouseover", () => {
        detailWindow.open(map, marker);

      })
    }


  }

  addMarker({ location: { lat: 51.510195, lng: -0.145437 }, content: '<h2>Bruton Street, Queen Elizabeth birth place.</h2>' });
  addMarker({
    location: { lat: 51.6611, lng: -0.3970 },
    content: '<h2>Watford Town, famed for its football club, and its Warner Bros.</h2>'
  });
  addMarker({ location: { lat: 51.4288, lng: -0.5479 }, content: '<h2>Egham Town, known for having memorials like Kennedy Memorial.</h2>' });
  addMarker({ location: { lat: 51.6286, lng: -0.7482 }, content: '<h2>High Wycombe Town, most famous industry for furniture making.</h2>' });
  addMarker({ location: { lat: 51.4029, lng: -0.1667 }, content: '<h2>Mitcham Village, became the calico cloth printing centres of England by 1750.</h2>' })

}



function write_name() {
  var welcome_parra = document.getElementById("welcome");
  var name = document.getElementById("name"); welcome_parra.innerHTML = "Hope you find the content readable and enjoyable,   " + name.value;


}



const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function() {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "1s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "1s";
  }
});









