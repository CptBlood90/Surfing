let myMap;
const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.75399400, 37.62209300],
    zoom: 11,
    controls: [],
  });

  let coords = [
      [55.75312576, 37.59531092],
      
    ],
    myCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52]
    });

  for (let i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);
