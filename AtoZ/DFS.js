function dfs(graph, v, visited) {
    //현재 노드 방문 처리
    visited[v] = true;
    console.log(v);
    for( i of graph[v]) {
        console.dir(graph[v]);
        if(!visited[i]) {
            dfs(graph,i , visited)
        }
    }
}

// 인접리스트 형식 생각
// 0번노드 처리여부 메모리상 존재하지만 사용하지않는 느낌
// 총 9 개
let graph = [
  // 0       1  2        3      4     5        6     7    8
    [], [2,3,4], [1], [1,5,6], [1,7], [3,8], [3], [4], [5]
]

// 각 노드가 방문된 정보를 표시 N+1 부터
let visited = Array(9).fill(false);

dfs(graph, 1, visited)
