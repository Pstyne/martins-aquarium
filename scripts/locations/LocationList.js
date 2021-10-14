// Import Data and do something with it

import { useLocations } from './LocationDataProvider.js';
import { Location } from './Location.js';

const allLocations = useLocations();

console.log(allLocations);

export const LocationComponents = () => {
  const locationList = document.querySelector(".location-list");
  locationList.innerHTML = "<h1>Locations</h1>";

  allLocations.forEach((locationObj, i) => locationList.innerHTML += Location(locationObj, i));
  
}