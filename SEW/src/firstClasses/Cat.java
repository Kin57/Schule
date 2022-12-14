package firstClasses;

import java.util.Random;

public class Cat {
    private String name;
    private String furColor;
    private int numberOfLegs;
    private int mood;
    private int maxMood = 100;
    private boolean isCow = false;

    public void fight() {
        if (isCow) {
            System.out.println(name + " is a cow. She can#t fight.");
        }
        Random random = new Random();

        System.out.println(name + " got into a fight.");
        raiseMood(-20);
        if (random.nextInt(1000) < 5) {
            if (name.toLowerCase() == "sachmet") {
                System.out.println(name + " got drunk and was turned into a cow.");
                isCow = true;
            } else {
                System.out.println("Sadly it was badly injured and lost a leg.");
                numberOfLegs--;
                System.out.printf(name + " now has %d legs left.", numberOfLegs);
                maxMood -= 25;
            }
        }
    }

    public void petCat() {
        System.out.println("You attempt to pet " + name + " .");
        if (mood >= 25) {
            System.out.println("The cat likes it.");
            raiseMood(5);
        } else {
            System.out.println("The cat doesn't like it and tries to scratch you.");
        }
    }

    public void resetMood() {
        mood = 50;
    }

    public int getMood() {
        return mood;
    }

    public void raiseMood(int value) {
        mood += value;
        if (mood > maxMood) {
            mood = maxMood;
        }
    }

    public void setName(String value) {
        name = value;
    }

    public void setFurColor(String value) {
        furColor = value;
    }

    public void resetNumberOfLegs() {
        numberOfLegs = 4;
    }

    public int getNumberOfLegs() {
        return numberOfLegs;
    }

    public boolean getIsCow(){
        return isCow;
    }
}
