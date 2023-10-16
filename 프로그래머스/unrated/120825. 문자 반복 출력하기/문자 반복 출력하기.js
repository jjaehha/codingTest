function solution(my_string, n) {
    var answer = '';
    if (2 <= my_string.length <= 5 && 2 <= n <= 10) {
        for (let i = 0; i < my_string.length; i++) {
            for (let j = 0; j < n; j++) {
                answer += my_string[i];
            }
        }
    }
    return answer;
}