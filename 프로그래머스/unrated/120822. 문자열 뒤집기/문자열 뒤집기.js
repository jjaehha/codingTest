function solution(my_string) {
    var answer = '';
    for(let i = (my_string.length - 1); i >= 0; i--) {
            answer = answer + my_string[i]
        }
    return answer;
}