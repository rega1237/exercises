public class palindromeII {

  public static boolean isPalindrome(String s) {

    int left = 0;
    int right = s.length() - 1;
    int count = 0;

    while (left < right) {
      if (s.charAt(left) == s.charAt(right)) {
        left ++;
        right --;
      } else if (s.charAt(left) != s.charAt(right) && s.charAt(left + 1) == s.charAt(right)){
        count ++;
        left += 2;
        right --;
      } else if (s.charAt(left) != s.charAt(right) && s.charAt(left) == s.charAt(right - 1)) {
        count ++;
        left ++;
        right -= 2;
      } else {
        return false;
      }

      if (count > 1) {
        return false;
      }

    }
    return true;
  }

  public static void main(String[] args) {
    System.out.println(isPalindrome("madame"));
    System.out.println(isPalindrome("dead"));
    System.out.println(isPalindrome("abca"));
    System.out.println(isPalindrome("tebbem"));
    System.out.println(isPalindrome("eeccccbebaeeabebccceea"));
    System.out.println(isPalindrome("ognfjhgbjhzkqhzadmgqbwqsktzqwjexqvzjsopolnmvnymbbzoofzbbmynvmnloposjzvqxejwqztksqwbqgmdazhqkzhjbghjfno"));
  }

}
