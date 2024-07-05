function balancedBrackets(str) {
    const stack = [];
    const bracketMap = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let char of str) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }


  console.log(balancedBrackets("()")); // true
  console.log(balancedBrackets("()[]{}")); // true
  console.log(balancedBrackets("(]")); // false
  console.log(balancedBrackets("([)]")); // false
  console.log(balancedBrackets("{[]}")); // true

//   This implementation has a time complexity of O(n), where n is the length of the input string, and a space complexity of O(n) due to the stack.