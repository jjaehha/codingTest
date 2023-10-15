function solution(strlist) {
    var answer = [];
    for(let i = 0; i < strlist.length; i++) {
        for(let j = 0; j <= strlist[i].length; j++) {
            answer[i] = j
        }
    }
    return answer;
}