import java.util.Arrays;

/*
  Given an array of integers, nums, and an integer value, target, determine if there are any
  three integers in nums whose sum equals the target. Return TRUE if three such integers are
  found in the array. Otherwise, return FALSE.
*/

public class SumOfThree {

  public static boolean findSumOfThree(int [] nums, int target) {

    Arrays.sort(nums);

    for (int i = 0; i < nums.length; i++) {
      int low = i + 1;
      int high = nums.length - 1;

      while (low < high) {
        int sum = nums[i] + nums[low] + nums[high];

        if (sum == target) {
          return true;
        } else if (sum < target) {
          low ++;
        } else {
          high --;
        }
      }
    }
    return false;
  }

  public static void main(String[] args) {
    int [] ar1 = {1,-1,0};
    int [] ar2 = {3,7,1,2,8,4,5};
    int [] ar3 = {3,7,1,2,8,4,5};
    int [] ar4 = {3,7,1,2,8,4,5};
    int [] ar5 = {-1,2,1,-4,5,-3};
    int [] ar6 = {-1,2,1,-4,5,-3};
    int [] ar7 = {-1,2,1,-4,5,-3};

    System.out.println(findSumOfThree(ar1, -1));// FALSE
    System.out.println(findSumOfThree(ar2, 10)); // TRUE
    System.out.println(findSumOfThree(ar3, 20)); // TRUE
    System.out.println(findSumOfThree(ar4, 21)); // FALSE
    System.out.println(findSumOfThree(ar5, -8)); // TRUE
    System.out.println(findSumOfThree(ar6, 0)); // TRUE
    System.out.println(findSumOfThree(ar7, 7)); // FALSE
  }
}
