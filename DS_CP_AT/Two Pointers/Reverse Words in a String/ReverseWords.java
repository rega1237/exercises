public class ReverseWords {

  public static String reverseWords (String sentence) {

    sentence = sentence.trim().replaceAll("\\s+", " ");

    String [] words = sentence.split(" ");

    int back = 0;
    int front = words.length - 1;
    String temp = " ";

    while (back < front) {
      temp = words[back];
      words[back] = words[front];
      words[front] = temp;
      back ++;
      front --;
    }

    return String.join(" ", words);
  }

  public static void main(String[] args) {

    System.out.println(reverseWords("We love Python"));
    System.out.println(reverseWords("To be or not to be"));
    System.out.println(reverseWords("You are amazing"));
    System.out.println(reverseWords(" Hello     World "));
    System.out.println(reverseWords("Hey"));

  }
}
