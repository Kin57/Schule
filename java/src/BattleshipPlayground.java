import java.util.Scanner;

public class BattleshipPlayground {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the Battlefield: ");
        int size = sc.nextInt();
        boolean[][] battlefield = new boolean[size][size];

        printBattlefield(battlefield);
    }

    private static void printBattlefield(boolean[][] battlefield) {
        for (int i = 0; i < battlefield.length; i++) {
            System.out.print(" ---");
        }
        System.out.println();

        for (int i = 0;i < battlefield.length; i++) {
            System.out.print(i);

            System.out.print("|");
            for (boolean aBoolean : battlefield[i]) {
                if (aBoolean) {
                    System.out.print(" X ");
                } else {
                    System.out.print("   ");
                }
                System.out.print("|");
            }
            System.out.println();

            for (boolean ignored : battlefield[i]) {
                System.out.print(" ---");
            }
            System.out.println();
        }
    }
}