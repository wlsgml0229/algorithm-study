
 const readFileHandler  = () => {
    const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
    return require('fs').readFileSync(file).toString().split('\n')
}

 module.exports = readFileHandler;