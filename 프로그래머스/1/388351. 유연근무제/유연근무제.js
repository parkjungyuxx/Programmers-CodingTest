function solution(schedules, timelogs, startday) {
  const toMin = (hhmm) => Math.floor(hhmm / 100) * 60 + (hhmm % 100);

  const isWeekday = (dayIdx) => {
    const day = ((startday - 1 + dayIdx) % 7) + 1;
    return day >= 1 && day <= 5; 
  };

  let winners = 0;

  for (let i = 0; i < schedules.length; i++) {
    const limit = toMin(schedules[i]) + 10; 

    let ok = true;
    for (let d = 0; d < 7; d++) {
      if (!isWeekday(d)) continue; 

      const arrive = toMin(timelogs[i][d]);
      if (arrive > limit) {        
        ok = false;
        break;
      }
    }

    if (ok) winners++;
  }

  return winners;
}
