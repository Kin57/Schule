import java.util.Scanner;

public class pyramid {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter height of pyramid: ");
        int height = scanner.nextInt();
        buildPyramid(height);
    }

    private static void buildPyramid(int height){
        for(int i = 0; i <= height; i++){
            for(int j = 0; j < i; j++){
                System.out.print('*');
            }
            System.out.println();
        }

        /*
        if(i < height){
            for(int j = 0; j < i; j++){
                System.out.print('*');
            }
            System.out.println();
            buildPyramid(height--, i);
        }
        */
        return;
    }
}
