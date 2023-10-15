function solution(num_list) {
    var answer = [];
    let j = num_list.length - 1;
    if (1 <= num_list.length <= 1000 && 0 <= num_list <= 1000) {
        for (let i = 0; i < num_list.length; i++) {
            answer[j--] = num_list[i]
        }
    }
    return answer;
}