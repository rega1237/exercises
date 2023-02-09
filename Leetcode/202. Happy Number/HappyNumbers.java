// https://leetcode.com/problems/happy-number/

public class HappyNumbers {

  public static int sumNumbers(int num) {
    int totalSum = 0;

    while (num > 0) {
      int digit = num % 10;
      num = (int) Math.floor(num / 10);
      totalSum += digit * digit;
    }

    return totalSum;
  }

  public static boolean isHappy(int n) {

    int slow = sumNumbers(n);
    int fast = sumNumbers(sumNumbers(n));

    while (true) {
      System.out.println("slow es : " + slow);
      System.out.println("fast es: " + fast);
      if (fast == 1) {
        return true;
      } else if (fast == slow) {
        return false;
      } else {
        slow = sumNumbers(slow);
        fast = sumNumbers(sumNumbers(fast));
      }
    }
  }

  public static void main(String[] args) {
    System.out.println(isHappy(19));
  }
}
