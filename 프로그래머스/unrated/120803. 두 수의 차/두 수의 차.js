function solution(num1, num2) {
    var answer = 0;
    // 예외처리
    if (-50000 <= num1 <= 50000 && -50000 <= num2 <= 50000) {
        // answer에 요구사항 대입
        answer = num1 - num2;
    }
    return answer;
}