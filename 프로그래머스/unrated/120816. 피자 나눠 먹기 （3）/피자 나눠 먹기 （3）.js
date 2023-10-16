function solution(slice, n) {
    var answer = 0;
    if (2 <= slice <= 10 && 1 <= n <= 100) {
        if (n % slice === 0) {
            answer = n / slice;
        } else {
            answer = Math.floor(n / slice) + 1;
        }
    }
    return answer;
}