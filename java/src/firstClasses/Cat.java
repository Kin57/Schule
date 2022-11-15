package firstClasses;

import java.util.Random;

public class Cat {
    private String name;
    private String furColor;
    private int numberOfLegs;

    public void fight() {
        Random random = new Random();

        System.out.println("Your cat got into a fight.");
        if (random.nextInt(1000) < 5) {
            System.out.println("Sadly it was badly injured and lost a leg.");
            numberOfLegs--;
            System.out.printf("It now has %d legs left.", numberOfLegs);
        }
    }

    public void setName(String value) {
        name = value;
    }

    public void setFurColor(String value) {
        furColor = value;
    }

    public void setNumberOfLegs(){
        numberOfLegs = 4;
    }

    public int getNumberOfLegs(){
        return numberOfLegs;
    }
}
