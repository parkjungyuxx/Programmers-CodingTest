const solution = (before, after) => {
    const beforeArr = before.split("").sort();
    const afterArr = after.split("").sort();
    if (beforeArr.join("") === afterArr.join("")) return 1;
    if (beforeArr.join("") !== afterArr.join("")) return 0;


}