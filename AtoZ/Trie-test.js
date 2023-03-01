function makeTrie(words) {
  const root = {}; // 먼저 루트 노드를 설정할 변수를 만든다.
  for (const word of words) {
    // Trie를 구성하기 위한 루프를 돌린다.
    let current = root; // 루프부터 시작
    for (const letter of word) {
      // 단어의 글자를 하나씩 춫출한 후
      if (!current[letter]) current[letter] = [0, {}]; // 값을 넣는다. 리스트의 첫 번째 값은 학습된 단어가 몇 개인지를 카운팅하고 두 번째 값은 트리 구조로 이용할 노드 값으로 사용한다.
      current[letter][0] = 1 + (current[letter][0] || 0); // 카운팅을 위해 1 더해준다.
      current = current[letter][1]; // current는 letter에 해당되는 노드로 이동한다.
    }
  }

  return root; // 반환
}

function solution(words) {
  let answer = 0;
  const trie = makeTrie(words); // Trie 자료구조를 만들어준다.

  for (const word of words) {
    // 입력받은 수 만큼 루프
    let count = 0; // 카운팅을 위한 변수
    let current = trie; // 루트부터 시작
    for (const [index, letter] of [...word].entries()) {
      count += 1;
      if (current[letter][0] <= 1) {
        // 단어가 하나 이하로 남을 경우 종료
        break;
      }
      current = current[letter][1]; // 다음 노드로 이동
    }
    answer += count; // 카운팅을 더해준다
  }
}
