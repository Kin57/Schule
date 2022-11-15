package firstClasses;

import java.util.Scanner;

public class FirstClasses {

    public static void main(String[] args) {
        Cat myCat = new Cat();
        buildCat(myCat);
        do {
            myCat.fight();
        }while (myCat.getNumberOfLegs() == 4);
    }

    private static void buildCat(Cat myCat) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Build your own cat");
        System.out.print("Name: ");
        myCat.setName(sc.nextLine());
        System.out.print("Fur Color: ");
        myCat.setFurColor(sc.nextLine());
        myCat.setNumberOfLegs();
    }
}
