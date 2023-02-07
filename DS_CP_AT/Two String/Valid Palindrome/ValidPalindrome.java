public class ValidPalindrome {

  public static boolean isPalindrome(String s) {
    int left = 0;
    int right = s.length() - 1;

    while (left < right) {
      if (s.charAt(left) != s.charAt(right)) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  }

  public static void main(String[] args) {
    System.out.println(isPalindrome("kayak")); // TRUE
    System.out.println(isPalindrome("hello")); // FALSE
    System.out.println(isPalindrome("RACEACAR")); // FALSE
    System.out.println(isPalindrome("A")); // TRUE
    System.out.println(isPalindrome("ABCDABCD")); // FALSE
    System.out.println(isPalindrome("DCBAABCD")); // TRUE
    System.out.println(isPalindrome("ABCBA")); // TRUE
  }
}
