function weightedStrings(str, queries) {
  let weights = {};
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let weight = 0;
    let char = str[i];
    let alphabetIndex = 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) + 1;

    for (let j = i; j < str.length; j++) {
      if (str[j] === char) {
        weight += alphabetIndex;
        weights[weight] = true;
      } else {
        break;
      }
    }
  }

  for (let i = 0; i < queries.length; i++) {
    if (weights[queries[i]]) {
      result.push("Yes");
    } else {
      result.push("No");
    }
  }

  return result;
}

console.log(weightedStrings("abbcccd", [1, 3, 9, 8])); // Output: [ 'Yes', 'Yes', 'Yes', 'No' ]
console.log(weightedStrings("aaabbbbcccddd", [9, 7, 8, 12, 5])); // Output: [ 'Yes', 'No', 'Yes', 'Yes', 'No' ]