import java.util.Random;

public class TwoDArray{
    public static void main(String[]args){
        int[][] matrix = makeNewTwoDArray(3,3);
        printTwoDArray(matrix);
    }

    private static void printTwoDArray(int[][] matrix) {
        for(int row = 0; row < matrix.length; row++){
            for(int col = 0; col < matrix[row].length; col++){
                System.out.print(matrix[row][col]);
                System.out.print(' ');
                printOperator(matrix,row,col);
                System.out.print(' ');
            }
            printOperatorRow(matrix,row);
            System.out.println();
        }
    }

    private static void printOperatorRow(int[][] matrix, int row) {
        System.out.println();
        for(int col = 0; col < matrix.length; col++){
            if(row != matrix.length-1){
                if(matrix[row][col] > matrix[row+1][col]){
                    System.out.print('V');
                }else if(matrix[row][col] < matrix[row+1][col]){
                    System.out.print('A');
                }else if(matrix[row][col] == matrix[row+1][col]){
                    System.out.print('H');
                }
                System.out.print("   ");
            }
        }
    }

    private static void printOperator(int[][] matrix, int row, int col) {
        if(col != matrix[row].length-1){
            if(matrix[row][col] > matrix[row][col+1]){
                System.out.print('>');
            }else if(matrix[row][col] < matrix[row][col+1]){
                System.out.print('<');
            }else if(matrix[row][col] == matrix[row][col+1]){
                System.out.print('=');
            }
        }
    }

    private static int[][] makeNewTwoDArray(int rows, int cols) {
        Random random = new Random();
        int[][] matrix = new int[rows][cols];
        for(int row = 0; row < matrix.length; row++){
            for(int col = 0; col < matrix[row].length; col++){
                matrix[row][col] = random.nextInt(0,9);
            }
        }
        return matrix;
    }

}