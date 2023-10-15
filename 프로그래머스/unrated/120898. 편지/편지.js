function solution(message) {
    var answer = 0;
    if (1 <= message.length <= 50) {
        answer = message.length * 2;    
    }
    return answer;
}