import {save, load} from './storage.js';
const KEY = 'pa_gamification';
let data = load(KEY,{points:0, streak:0, lastDate:null});

export function awardPoints(p){
  data.points += p;
  save(KEY, data);
}
export function updateStreak(doneToday){
  const today = new Date().toDateString();
  if(doneToday){
    if(data.lastDate===new Date(Date.now()-864e5).toDateString())
       data.streak++; else data.streak=1;
    data.lastDate=today;
  }
  save(KEY,data);
}