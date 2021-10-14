// Fish Data

const fishCollection = [
  {
    name: "George",
    species: "Gold Fish",
    diet: "seaweed",
    size: "10cm",
    location: "New River"
  },
  {
    name: "Sally Slappers",
    species: "Brown Trout",
    diet: "Protien",
    size: "30cm",
    location: "Coal River"
  },
  {
    name: "Zucky",
    species: "Slaughterfish",
    diet: "Unprotected Data",
    size: "4ft",
    location: "De Nile River"
  },
  {
    name: "Jeff Bezos",
    species: "Siren",
    diet: "The souls of the wealthy",
    size: "2ft",
    location: "Amazon River"
  }
]

export const useFish = () => {
  return fishCollection.slice();
}