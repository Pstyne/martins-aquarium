// Import Data and do something with it

import { useTips } from './TipDataProvider.js';
import { Tip } from './Tip.js';

const allTips = useTips();

console.log(allTips);

export const TipComponents = () => {
  const tipList = document.querySelector(".tip-list");
  tipList.innerHTML = "<h1>Tips</h1>";

  allTips.forEach((tipObj, i) => tipList.innerHTML += Tip(tipObj, i));
  
}