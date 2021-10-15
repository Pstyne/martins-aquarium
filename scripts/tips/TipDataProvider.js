// Tip Data

const tipCollection = [
  {
    id: 1,
    content: "Clean it often",
    author: "Jim Jimmerson"
  },
  {
    id: 2,
    content: "Use bleach, it's good for the fish",
    author: "Sally Slappers"
  },
  {
    id: 3,
    content: "Don't swim with the fish",
    author: "Hobo Bill"
  }

]

export const useTips = () => {
  return tipCollection.slice();
}