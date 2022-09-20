public class Main {
    public static void main(String[] args){

        int pyramidSize = 5;
        printPyramind(pyramidSize);

        int a = 600;
        int b = 136;
        int GGT = calculateGGT(a, b);
        System.out.println(GGT);
    }

    private static void printLine(int lineLength) {
        for(int i = 0; i < lineLength; i++){
            System.out.print('*');
        }
        System.out.println();
    }

    private static void printPyramind(int pyramidSize){
        for(int i = 0; i < pyramidSize; i++){
            printLine(pyramidSize - i);
        }
    }


    private static int calculateGGT(int a, int b){
        int temp = a % b;
        a = b;
        b = temp;
        if(temp > 0){
            return calculateGGT(a, b);
        }return a;
    }
}