function solution(n) {
    var answer = 0;
    if (0 < n <= 1000) {
        for (let i = 0; i <= n; i++) {
            if (i % 2 === 0){
                answer += i;
            }
        }
    } else {
        console.log("입력값 오류")
    }
    return answer;
}