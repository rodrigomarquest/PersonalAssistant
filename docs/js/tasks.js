const doneToday = tasks.filter(t => t.doneDate === today).length;
const streak = calcStreak(tasks); // dias consecutivos