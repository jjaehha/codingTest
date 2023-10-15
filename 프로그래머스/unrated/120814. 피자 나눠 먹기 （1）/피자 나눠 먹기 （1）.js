function solution(n) {
    var answer = 0;
    if (1 <= n <= 100){
        if (n % 7 === 0) {
            answer = Math.floor(n/7);
        } else {
            answer = Math.floor(n/7) + 1;
        }
    }
    return answer;   
}