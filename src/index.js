module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    for (let bracket of bracketsConfig) {
      let topEl = stack[stack.length-1];
      if (currentChar == bracket[0] && currentChar == bracket[1]) { 
        if (topEl == currentChar) {
          stack.pop()
        } else {
          stack.push(currentChar)
        }
      } else if (currentChar == bracket[0]) {
        stack.push(currentChar)
      } else if (currentChar == bracket[1]) {
        if (topEl == bracket[0]){
          stack.pop()
        } else return false  
      } 
    }
  }
  return stack.length === 0
}