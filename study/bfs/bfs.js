function bfs(graph, start, visited) {
  let queue = new Queue();
  queue.enqueue(start);
  visited[start] = true;

  while (queue.getLength() !== 0) {
    let v = queue.dequeue();
    console.log(v);
    for (let i of graph[v]) {
      queue.enqueue(i);
      visited[i] = true;
    }
  }
}

let visited = Array(9).fill(false);
bfs(graph, 1, visited);
