import java.util.Arrays;
import java.util.HashMap;

// https://leetcode.com/problems/two-sum/description/

class Solution {
  public static int[] twoSum(int[] nums, int target) {
    HashMap<Integer, Integer> hash = new HashMap<>();
    int[] ar = new int[2];

    for (int i = 0; i < nums.length; i++) {
      int value = target - nums[i];
      if(hash.containsKey(value)) {
        ar[0] = hash.get(value);
        ar[1] = i;
      }else {
        hash.put(nums[i], i);
      }
    }
    return ar;
  }

  public static void main(String[] args) {

    int [] ar = {2,7,11,15};
    System.out.println(Arrays.toString(twoSum(ar, 9)));
  }
}
