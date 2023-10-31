function solution(money) {
    var answer = [];
    if (0 < money <= 1000000) {
        if (money >= 5500) {
            answer[0] = Math.floor(money / 5500)
        } else {
            answer[0] = 0
            answer[1] = money
        }
        answer[1] = money - (answer[0] * 5500)
    }
    return answer;
}