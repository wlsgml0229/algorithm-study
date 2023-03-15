// 핵심키워드 노드, 간선, 최단경로
// 최단경로가 제일 큰 경우 집합 구하는 문제

function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);
  console.log("graph", graph);

  //src -> 위치, 값
  for (const [src, dest] of edge) {
    console.log("src", src, "dest", dest);
    //출발지에서 도착지를  PUSH
    graph[src].push(dest);
    //양방향 가능하게
    graph[dest].push(src);
  }

  console.log("graph2", graph);
  // 각정점의 거리
  const visited = Array(n + 1).fill(0);
  visited[1] = 1;
  console.log(visited);

  //BFS - 큐를 이용해 구현
  const queue = [1];
  //0이 되면 빈큐-> 종료
  while (queue.length > 0) {
    const src = queue.shift(); //shift O(n) 이지만 요소가 적을 경우 자바스크립트 엔진에서 최적화를 해줌
    for (const dest of graph[src]) {
      console.log(src, "-->", graph[src]);
      // 출발지로부터 목적지
      //한번도 가지 않은 경로
      if (visited[dest] === 0) {
        queue.push(dest);
        visited[dest] = visited[src] + 1;
      }
    }
  }
  const max = Math.max(...visited);
  return visited.filter((item) => item === max).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
