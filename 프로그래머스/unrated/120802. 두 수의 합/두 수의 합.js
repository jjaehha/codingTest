function solution (num1, num2) {
    var answer = 0
    if (-50000 <= num1 <= 50000 && -50000 <= num2 <= 50000) {
            answer = num1 + num2;
    } else {
        console.log("error")
    }
    return answer;
}