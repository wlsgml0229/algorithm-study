// 과일장수
// 최대이익 구하기
function solution(k, m, score) {
    let answer = 0;
    const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
}

function solution(k, m, score) {
    if(score.length < m){
        return 0;
    }
    
    score.sort((a, b) => a - b);
    
    let total = 0;
    
    while(score.length >= m){
        const box = score.splice(score.length - m, m);
        
        const prize = m * box[0];
        
        total += prize;
    }
    
    return total;
}
