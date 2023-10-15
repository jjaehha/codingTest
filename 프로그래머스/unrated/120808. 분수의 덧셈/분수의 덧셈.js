function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    if (0 < numer1, denom1, numer2, denom2 < 1000) {
        var a = (numer1 * denom2) + (numer2 * denom1);
        var b = denom1 * denom2;
        let num1 = 0;
        for(let i = 1; i <= a; i++ ){
            if (a % i === 0 && b % i === 0) {
                num1 = i
                answer [0] = a / num1
                answer [1] = b / num1
            }
        }

    } else {
        console.log("입력값 오류")
    }
    return answer;
}