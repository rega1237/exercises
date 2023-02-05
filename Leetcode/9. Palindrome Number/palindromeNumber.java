import java.util.Arrays;
import java.util.Collections;

class palindromeNumber {
  public static boolean isPalindrome(int x) {

    if (x < 0) {
      return false;
    }

    Integer xInteger = x;

    // Convert integer into String
    String numString = xInteger.toString();

    // Convert the string into a Array
    String [] splitNum = numString.split("");

    // Use the method from collections to reverse the Array converting into a list
    Collections.reverse(Arrays.asList(splitNum));

    // Join the Array as a list
    String joinArr = String.join("", Arrays.asList(splitNum));


    if (Integer.parseInt(numString) == Integer.parseInt(joinArr)) {
      return true;
    } else {
      return false;
    }

  }
}
