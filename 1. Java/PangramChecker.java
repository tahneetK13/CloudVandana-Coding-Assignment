//  Enter a Roman Number as input and convert it to an integer. (ex IX = 9) 
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        String input = sc.nextLine();
        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
        sc.close();
    }

    public static boolean isPangram(String input) {
        input = input.replaceAll(" ", "").toLowerCase();
        Set<Character> characterSet = new HashSet<>();
        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (Character.isLetter(c)) {
                characterSet.add(c);
            }
        }
        return characterSet.size() == 26;
    }
}
