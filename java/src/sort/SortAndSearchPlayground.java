package sort;//package at.htlleonding.sew;

import java.sql.SQLOutput;
import java.util.Random;
import java.util.Scanner;

public class SortAndSearchPlayground {
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Please enter the length of the arrays: ");
        int arrayLength = scanner.nextInt();

        System.out.print("Please enter the number of experiments: ");
        int numberOfExperiments = scanner.nextInt();

        long bubbleSortTotalTime = 0;
        long selectionSortTotalTime = 0;
        long insertionSortTotalTime = 0;
        long linearUnsortedSearchTotalTime = 0;
        long linearSortedSearchTotalTime = 0;
        long binarySearchTotalTime = 0;

        for (int i = 0; i < numberOfExperiments; i++) {
            long startTime = 0;
            long endTime = 0;
            long executionTime = 0;

            System.out.println("=== Experiment " + (i + 1) + " ===");
            int[] originalArray = generateRandomArray(arrayLength);

            System.out.print("Original array: ");
            printArray(originalArray);

            System.out.println("= Sorting =");

            //Bubble Sort
            int[] clonedArray = cloneArray(originalArray);
            startTime = System.nanoTime();
            sortByBubble(clonedArray);
            endTime = System.nanoTime();
            executionTime = endTime - startTime;
            bubbleSortTotalTime += executionTime;

            System.out.print("Bubble sorted array (" + executionTime + " ns): ");
            printArray(clonedArray);
            System.out.println();

            //Insertion Sort
            clonedArray = cloneArray(originalArray);
            startTime = System.nanoTime();
            //sortByInsertion(clonedArray);
            endTime = System.nanoTime();
            executionTime = endTime - startTime;
            insertionSortTotalTime += executionTime;

            System.out.print("Insertion sorted array (" + executionTime + " ns): ");
            printArray(clonedArray);
            System.out.println();

            //Selection Sort
            clonedArray = cloneArray(originalArray);
            startTime = System.nanoTime();
            //sortBySelection(clonedArray);
            endTime = System.nanoTime();
            executionTime = endTime - startTime;
            selectionSortTotalTime += executionTime;

            System.out.print("Selection sorted array (" + executionTime + " ns): ");
            printArray(clonedArray);
            System.out.println();

            //Search
            //PART 2 >>
            System.out.println("= Searching =");

            int needle = generateRandomNumber(arrayLength);

            //Linear Unsorted Search
            startTime = System.nanoTime();
            //int needleIndex = searchLinearUnsorted(needle, originalArray);
            endTime = System.nanoTime();
            executionTime = endTime - startTime;
            linearUnsortedSearchTotalTime += executionTime;

            //System.out.printf("Found %d at %d in %d ns using linear search in unsorted array.\n", needle, needleIndex, executionTime);

            //Linear Sorted Search
            startTime = System.nanoTime();
            //needleIndex = searchLinearSorted(needle, clonedArray);
            endTime = System.nanoTime();
            executionTime = endTime - startTime;
            linearSortedSearchTotalTime += executionTime;

            //System.out.printf("Found %d at %d in %d ns using linear search in sorted array.\n", needle, needleIndex, executionTime);

            //Binary Search
            startTime = System.nanoTime();
            int needleIndex = searchBinary(needle, clonedArray, 0, clonedArray.length);
            endTime = System.nanoTime();
            executionTime = endTime - startTime;
            binarySearchTotalTime += executionTime;

            System.out.printf("Found %d at %d in %d ns using binary search in sorted array.\n", needle, needleIndex, executionTime);
            //<< PART 2
        }

        System.out.println("= Statistics =");
        System.out.printf("Bubble sort average time in ns: %d\n", (bubbleSortTotalTime / numberOfExperiments));
        System.out.printf("Insertion sort average time in ns: %d\n", (insertionSortTotalTime / numberOfExperiments));
        System.out.printf("Selection sort average time in ns: %d\n", (selectionSortTotalTime / numberOfExperiments));
        //PART 2 >>
        /*System.out.printf("Linear unsorted search average time in ns: %d\n", (linearUnsortedSearchTotalTime/numberOfExperiments));
        System.out.printf("Linear sorted search average time in ns: %d\n", (linearSortedSearchTotalTime/numberOfExperiments));
        System.out.printf("Binary search average time in ns: %d\n", (binarySearchTotalTime/numberOfExperiments));*/
        //<< PART 2
    }

    private static int searchBinary(int needle, int[] array, int a, int b) {
        if(needle > array[(a+b)/2]){
            return searchBinary(needle,array,(a+b)/2, b);
        }else if(needle < array[(a+b)/2]){
            return searchBinary(needle, array, a, (a+b)/2);
        }else{
            return array[needle];
        }
    }

    private static int generateRandomNumber(int arrayLength) {
        Random random = new Random();
        return random.nextInt(0, arrayLength * 2);
    }

    private static int[] cloneArray(int[] originalArray) {
        int[] clonedArray = new int[originalArray.length];
        for (int i = 0; i < originalArray.length; i++) {
            clonedArray[i] = originalArray[i];
        }
        return clonedArray;
    }

    private static int[] sortByBubble(int[] array) {
        boolean didSwitch = true;
        for(int i = 0; didSwitch == true; i++){
            didSwitch = false;
            for(int j = 1; j < array.length-i; j++){
                if(array[j-1] > array[j]){
                    int temp = array[j-1];
                    array[j-1] = array[j];
                    array[j] = temp;

                    didSwitch = true;
                }
            }
        }
        return array;
    }
//    private static int[] sortByInsertion(int[] array) {
//
//    }

//    private static int[] sortBySelection(int[] array) {
//
//    }

    private static int[] generateRandomArray(int arrayLength) {
        int[] array = new int[arrayLength];
        Random random = new Random();
        for (int i = 0; i < arrayLength; i++) {
            array[i] = random.nextInt(0, array.length * 2);
        }
        return array;
    }

    private static void printArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i]);
            if (i < array.length - 1) {
                System.out.print(", ");
            }
        }
    }
}
