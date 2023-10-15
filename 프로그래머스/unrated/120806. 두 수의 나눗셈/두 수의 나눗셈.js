function solution(num1, num2) {
    var answer = 0;
    if (0 < num1 <= 100 && 0 < num2 <= 100) {
        answer = Math.floor(num1 / num2 * 1000);
    } else {
        console.log("입력값 오류");
    }
    return answer;
}