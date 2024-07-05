function highestPalindrome(n, k) {
    let maxPalindrome = -1;
  
    function recursive(num, count, index,digit) {
      if (count > k) return;
      let str = num.toString();
      if (index >= str.length) {
        if (isPalindrome(num) && num > maxPalindrome) {
          maxPalindrome = num;
        }
        return;
      }
  
      recursive(
        parseInt(str.substring(0, index) + 0 + str.substring(index + 1)),
        count + (str[index]!== '0'),
        index + 1,
        0
      );
      recursive(
        parseInt(str.substring(0, index) + 1 + str.substring(index + 1)),
        count + (str[index]!== '1'),
        index + 1,
        1
      );
      recursive(
        parseInt(str.substring(0, index) + 2 + str.substring(index + 1)),
        count + (str[index]!== '2'),
        index + 1,
        2
      );
      recursive(
        parseInt(str.substring(0, index) + 3 + str.substring(index + 1)),
        count + (str[index]!== '3'),
        index + 1,
        3
      );
      recursive(
        parseInt(str.substring(0, index) + 4 + str.substring(index + 1)),
        count + (str[index]!== '4'),
        index + 1,
        4
      );
      recursive(
        parseInt(str.substring(0, index) + 5 + str.substring(index + 1)),
        count + (str[index]!== '5'),
        index + 1,
        5
      );
      recursive(
        parseInt(str.substring(0, index) + 6 + str.substring(index + 1)),
        count + (str[index]!== '6'),
        index + 1,
        6
      );
      recursive(
        parseInt(str.substring(0, index) + 7 + str.substring(index + 1)),
        count + (str[index]!== '7'),
        index + 1,
        7
      );
      recursive(
        parseInt(str.substring(0, index) + 8 + str.substring(index + 1)),
        count + (str[index]!== '8'),
        index + 1,
        8
      );
      recursive(
        parseInt(str.substring(0, index) + 9 + str.substring(index + 1)),
        count + (str[index]!== '9'),
        index + 1,
        9
      );
    }
  
    function isPalindrome(num) {
      let str = num.toString();
      let left = 0;
      let right = str.length - 1;
  
      function recursivePalindromeCheck() {
        if (left >= right) return true;
        if (str[left]!== str[right]) return false;
        left++;
        right--;
        return recursivePalindromeCheck();
      }
  
      return recursivePalindromeCheck();
    }
  
    recursive(n, 0, 0, 0);
    return maxPalindrome === -1? -1 : maxPalindrome;
  }
  
  
  console.log(highestPalindrome("932239", 2)); // 3993
