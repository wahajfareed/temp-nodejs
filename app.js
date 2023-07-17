function isValid(s) {
    const stack = [];
    const openBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    const bracketPairs = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (openBrackets.includes(char)) {
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
