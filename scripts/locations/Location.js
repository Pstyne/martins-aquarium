// Location Component

export const Location = (locationObj) => {
  return `
    <div id="location-${locationObj.id}" class="location-card">
      <div>${locationObj.name}</div>
      <div>${locationObj.city}</div>
      <div>${locationObj.state}</div>
      <div>${locationObj.country}</div>
    </div>
  `;
}