import java.util.Random;

public class test {
    public static void main(String[] args) {
        Random random = new Random();
        System.out.println(random.nextInt(10) + 1);
        double temp = 0.5;
        String abc = "123";
        int notTemp = Integer.parseInt(abc);
        System.out.println(notTemp);

        String str = "Hallo/Ich/bin/Andreas";
        String[] strArr = str.split("/");
        for(int i = 0; i < 3; i++){
            System.out.println(strArr[i]);

        }
        System.out.printf("%c", 12);
    }

}
