function get_primes(num) {
  console.log(num);
  const result = [];
  const prime = [false, false, ...Array(num - 1).fill(true)];
  console.log(prime);

  //에리토스테네스의 체 알고리즘
  for (let i = 2; i * i <= num; i += 1) {
    if (prime[i]) {
      for (let j = 2; j * i <= num; j += 1) {
        prime[j * i] = false;
      }
    }
  }

  //소수 출력
  for (let k = 0; k < num; k += 1) {
    if (prime[k]) {
      result.push(k);
    }
  }
  return result;
}

console.log(get_primes(8));
