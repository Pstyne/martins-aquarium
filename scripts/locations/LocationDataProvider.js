// Location Data

const locationCollection = [
  {
    id: 1,
    name: "New River",
    city: "Fayetteville",
    state: "WV",
    country: "USA"
  },
  {
    id: 2,
    name: "Gauley River",
    city: "Gauley Bridge",
    state: "WV",
    country: "USA"
  },
  {
    id: 3,
    name: "Nile River",
    city: "Somewhere",
    state: "Someplace",
    country: "Egypt"
  }
]

export const useLocations = () => {
  return locationCollection.slice();
}