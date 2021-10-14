// Fish Component

export const Fish = (fishObj, i) => {
  return `
    <div id="fish-${i}" class="fish-card">
      <div class="fish__name">Name: ${fishObj.name}</div>
      <div class="fish__location">Location: ${fishObj.location}</div>
      <div class="fish__species">Species: ${fishObj.species}</div>
      <div class="fish__size">Length: ${fishObj.size}</div>
      <div class="fish__diet">Diet: ${fishObj.diet}</div>
    </div>
  `;
}