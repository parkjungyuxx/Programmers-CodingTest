const solution = (array) => {
    const string = array.join("")
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "7") {
            result += 1;
        } 
    } 
    return result;
}