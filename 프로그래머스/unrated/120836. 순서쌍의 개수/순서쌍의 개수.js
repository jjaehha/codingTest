function solution(n) {
    var answer = 0;
    if (1 <= n <= 1000000) {
        for(let i = 0; i <= n; i++) {
            if(n % i === 0) {
                answer++
            }
        }
    } else {
        console.log("입력값 오류")
    }
    return answer;
}