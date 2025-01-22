const solution = (a,b) => {
    const daysInMonths = [31,29,31,30,31,30,31,31,30,31,30,31];
    const daysOfWeek = ["FRI","SAT","SUN","MON","TUE","WED","THU"]
    
    const daysUntilprevMonths = daysInMonths.slice(0,a-1).reduce((acc,num) => acc+num,0)
    const totalDays = daysUntilprevMonths + b - 1;
    const day = daysOfWeek[totalDays % 7]
    
    return day
    
}