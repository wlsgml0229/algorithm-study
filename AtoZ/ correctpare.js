function solution (s) {
    const stack = [];

    for (const c of s){
        if(c === '(') {
            stack.push(c);
        } else {
            if(stack.length === 0) {
                return false
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}


// 배열 내용 실제 사용하는게 아니니까 배열 사용하지않고 - 메모리를 좀더 적게 사용
function solution (s) {
    const count = 0;

    for (const c of s){
        if(c === '(') {
            count += 1;
        } else {
            if(stack.length === 0) {
                return false
            }
            count -= 1;
        }
    }

    return stack.length === 0;
}