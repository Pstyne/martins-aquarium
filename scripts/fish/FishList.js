// Import Data and do something with it

import { useFish } from './FishDataProvider.js';
import { Fish } from './Fish.js';

const allTheFish = useFish();

// console.log(allTheFish);

export const FishComponents = () => {
  const fishList = document.querySelector(".fish-list");
  fishList.innerHTML = "<h1>Harvested Fish</h1>";

  allTheFish.forEach((fishObj) => fishList.innerHTML += Fish(fishObj));
  
  /*
    Push components to DOM using forEach()
    General purpose loop for iterating an array
    Does not mutate array - does not create a new array either
    The callback function can mutate the array if used appropriately
    Expects a synchronous function, does not wait for promises
  */

  // fishList.innerHTML += "<h2>forEach Fish</h2>";
  // allTheFish.forEach((fishObj, i) => fishList.innerHTML += Fish(fishObj, i));

  /*
    Push components to DOM using map()
    The map function returns a new array
    Useful for creating a new array with different values
    based on the calling array
    In this case maybe we could convert sizes based on numeric
    values and those new values would be reflected in the
    new array the fish size could be converted from cm to in or ft
    Not particularly useful in this case for printing to the DOM
  */

  // const mappedFish = allTheFish.map((fishObj) => fishObj.size + ' long');
  // fishList.innerHTML += "<h2>Mapped Fish</h2>";
  // allTheFish.forEach((fishObj, i) => {
  //   fishObj.size = mappedFish[i];
  //   return fishList.innerHTML += Fish(fishObj, i);
  // });

  /*
    Push components to DOM using filter()
    Returns multiple items meeting the condition
  */
  
  // const filteredFish = allTheFish.filter((fishObj) => fishObj.name.length > 6 );
  // fishList.innerHTML += "<h2>Filtered Fish</h2>";
  // filteredFish.forEach((fishObj, i) => fishList.innerHTML += Fish(fishObj, i));
  
  /*
    Push component to DOM using find()
    Returns the first item meeting the condition
    Good for just one item... like a coupon...
  */
  
  // const foundFish = allTheFish.find((fishObj) => fishObj.name === "Zucky");
  // fishList.innerHTML += "<h2>Found Fish</h2>";
  // fishList.innerHTML += Fish(foundFish);
}