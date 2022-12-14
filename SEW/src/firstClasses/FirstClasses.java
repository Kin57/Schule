package firstClasses;

import java.util.Scanner;

public class FirstClasses {

    public static void main(String[] args) {
        Cat myCat = new Cat();
        buildCat(myCat);
        do {
            myCat.fight();
        }while (myCat.getIsCow() == false);
        myCat.petCat();
    }

    private static void petCat(Cat myCat) {
        System.out.println("You attempt to pet the cat.");
        if(myCat.getMood() >= 25){
            myCat.raiseMood(5);
        }
    }

    private static void buildCat(Cat myCat) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Build your own cat");
        System.out.print("Name: ");
        myCat.setName(sc.nextLine());
        System.out.print("Fur Color: ");
        myCat.setFurColor(sc.nextLine());
        myCat.resetMood();
        myCat.resetNumberOfLegs();
    }
}
