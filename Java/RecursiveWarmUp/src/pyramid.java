import java.util.Scanner;

public class pyramid {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter height of pyramid: ");
        int height = scanner.nextInt();
        buildPyramid(height,0);
    }

    private static void buildPyramid(int height, int i){
        if(i <= height) {
            printLine(i);
            i++;
            buildPyramid(height, i);
        }
        return;
    }

    private static void printLine(int i){
        for(int j = 0; j < i; j++){
            System.out.print("*");
        }
        System.out.println();
    }
}
