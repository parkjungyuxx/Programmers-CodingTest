function solution(myString, pat) {
    const lastIndex = myString.lastIndexOf(pat[pat.length-1])
    return myString.split("").slice(0,lastIndex+1).join("")
}