const fs = require("fs");

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const city = [];
const chickenHouses = [];
let answer = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= N; i++) {
    const row = input[i].split(" ").map(Number);
    city.push(row);

    if (row.includes(2)) {
        // 치킨집 위치 저장
        for (let j = 0; j < row.length; j++) {
            if (row[j] === 2) {
                chickenHouses.push([i - 1, j]);
            }
        }
    }
}

function solve(idx, selectedHouses) {

    if (selectedHouses.length === M) {
        // M개의 치킨집을 선택한 경우 치킨 거리 계산
        let totalDistance = 0;
        for (let i = 0; i < city.length; i++) {
            for (let j = 0; j < city[i].length; j++) {
                if (city[i][j] === 1) {
                    let minDistance = Number.MAX_SAFE_INTEGER;
                    for (const [x, y] of selectedHouses) {
                        const distance = Math.abs(i - x) + Math.abs(j - y);
                        minDistance = Math.min(minDistance, distance);
                    }
                    totalDistance += minDistance;
                }
            }
        }
        answer = Math.min(answer, totalDistance);
        return;
    }

    if (idx === chickenHouses.length) {
        return;
    }

    // 치킨집 선택
    solve(idx + 1, [...selectedHouses, chickenHouses[idx]]);
    // 치킨집 선택하지 않음
    solve(idx + 1, selectedHouses);
}

solve(0, []);
console.log(`최소 치킨 거리: ${answer}`);