// Fish Data

const fishCollection = [
  {
    id: 1,
    name: "George",
    species: "Gold Fish",
    diet: "seaweed",
    size: 12,
    location: "New River"
  },
  {
    id: 2,
    name: "Sally Slappers",
    species: "Brown Trout",
    diet: "Protien",
    size: 15,
    location: "Coal River"
  },
  {
    id: 3,
    name: "Zucky",
    species: "Slaughterfish",
    diet: "Unprotected Data",
    size: 7,
    location: "De Nile River"
  },
  {
    id: 4,
    name: "Jeff Bezos",
    species: "Siren",
    diet: "The souls of the wealthy",
    size: 6,
    location: "Amazon River"
  },
  {
    id: 5,
    name: "Fish5",
    species: "Siren",
    diet: "The souls of the wealthy",
    size: 4,
    location: "Amazon River"
  },
  {
    id: 6,
    name: "Fish6",
    species: "Siren",
    diet: "The souls of the wealthy",
    size: 10,
    location: "Amazon River"
  }
]

// Maybe not the perfect solution to my problem but it works for getting all unique id values
Array.prototype.unique = function() {
  const values = {};
  const output = [];

  for (let i = 0; i < this.length; i++) {
    if (!values[this[i].id]) {
      values[this[i].id] = this[i];
      output.push(this[i]);
    }
  }

  return output;
}

// A good conditional function that determines if the fish is just regular
const isRegular = (fish) => {
  return (fish.size % 3 !== 0 && fish.size % 5 !== 0);
}

export const useFish = () => {
  return fishCollection.slice();
}

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFish = [];

  for (const fish of fishCollection) {
    if (fish.size % 3 === 0) holyFish.push(fish);
  }

  return holyFish;
}

export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  const soldiers = [];

  for (const fish of fishCollection) {
    if (fish.size % 5 === 0) soldiers.push(fish);
  }

  return soldiers;
}

export const nonHolyFish = () => {
  // Any fish not a multiple of 3 or 5
  const regularFish = [];
  
  for (const fish of fishCollection) {
    if (isRegular(fish)) regularFish.push(fish);
  }

  return regularFish
}