// Tip Component

export const Tip = (tipObj) => {
  return `
    <div id="tip-${tipObj.id}" class="tip-card">
      <div>${tipObj.content}</div>
      <div>${tipObj.author}</div>
    </div>
  `;
}