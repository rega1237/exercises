// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/

const numberOfSubstrings = (s) => {
  const n = s.length;
  let count = 0;
  const freq = { a: 0, b: 0, c: 0 };
  let left = 0;

  for (let right = 0; right < n; right++) {
    freq[s[right]]++;

    while (freq.a > 0 && freq.b > 0 && freq.c > 0) {
      count += n - right;
      freq[s[left]]--;
      left++;
    }
  }

  return count;
}

console.log(numberOfSubstrings("abcabc"));  // Output: 10
//console.log(numberOfSubstrings("aaacb"));   // Output: 3
//console.log(numberOfSubstrings("abc"));     // Output: 1
