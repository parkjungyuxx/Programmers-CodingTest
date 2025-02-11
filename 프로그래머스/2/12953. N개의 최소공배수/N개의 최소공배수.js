function solution(arr) {
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    return arr.reduce((acc, num) => (acc * num) / gcd(acc, num));
}