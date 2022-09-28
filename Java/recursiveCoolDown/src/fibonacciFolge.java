import java.util.Scanner;

public class fibonacciFolge{
    public static void main(String[] args){
        long number1 = 0;
        long number2 = 1;
        Scanner scanner = new Scanner(System.in);
        long cap = scanner.nextInt();
        calculateFibonacci(number1, number2, cap, 0);
    }   

    private static void calculateFibonacci(long number1, long number2, long cap, long itterationCounter){
        long nextNumber = number1 + number2;
        itterationCounter++;

        number1 = number2;
        number2 = nextNumber;
        if(itterationCounter < cap){
            System.out.print(nextNumber + " ");
            calculateFibonacci(number1, number2, cap, itterationCounter);
        }
    }
}