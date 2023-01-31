//햄버거 만들기
// 스택
// 1231 순서가되면 제거 하고 햄버거 갯수 추가

function solution(ingredient) {
    let stack = [];
    let count = 0;
    
    ingredient.forEach((item) => {
        stack.push(item);
        
        if(stack.length >= 4){
            const hamburger = stack.slice(-4).join("");
            
            if(hamburger === "1231"){
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
            
                count++;
                }    
            }
        }
    )
    
    return count;
}