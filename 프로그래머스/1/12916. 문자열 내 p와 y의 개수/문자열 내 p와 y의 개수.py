def solution(s):
    answer = True
    strP = 0
    strY = 0
    
    for i in range (0, len(s)):
        if(s[i] == "p" or s[i] == "P"):
            strP += 1
        elif(s[i] == "y" or s[i] == "Y"):
            strY += 1
            
    if(strP == strY):
        answer = True
    elif(strP != strY):
        answer = False
                
    return answer
            

