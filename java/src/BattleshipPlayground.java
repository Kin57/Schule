import java.sql.SQLOutput;
import java.util.Scanner;

public class BattleshipPlayground {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the Battlefield: ");
        int size = sc.nextInt();
        boolean[][] battlefield = new boolean[size][size];

        while(true){
            printBattlefield(battlefield);

            String position = sc.nextLine();
            int x = position.toLowerCase().charAt(0);
            int y = position.charAt(1) - 'a' ;

            System.out.println(x + ", " + y);
        }

    }

    private static void printBattlefield(boolean[][] battlefield) {
        System.out.print(" ");
        for (int i = 0; i < battlefield.length; i++) {
            System.out.print(" ---");
        }
        System.out.println();

        for (int i = 0;i < battlefield.length; i++) {
            System.out.print(i+1);

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

            System.out.print(" ");
            for (boolean ignored : battlefield[i]) {
                System.out.print(" ---");
            }
            System.out.println();
        }
        for(int i = 0; i < battlefield.length; i++){
            System.out.print("   " + (char) ('A'+i));
        }
    }
}