package momentMal;

import java.util.Scanner;

public class MomentMalMain {
    public static void main(String[] args) {
        Moment myMoment = new Moment();
        Scanner sc = new Scanner(System.in);
        System.out.print("Hours: ");
        myMoment.setHours(sc.nextInt());
        System.out.print("Minutes: ");
        myMoment.setMinutes(sc.nextInt());
        System.out.print("Seconds: ");
        myMoment.setSeconds(sc.nextInt());
        System.out.print("Milliseconds: ");
        myMoment.setMilliseconds(sc.nextInt());

        System.out.println();

        Moment moment = new Moment();
        System.out.print("Time in format[hh;mm;ss;MMM]: ");
        moment.setMoment(sc.next());

        System.out.println();

        System.out.println("Total Milliseconds moment 1: " + myMoment.getTotalMilliseconds());
        System.out.println("Total Milliseconds moment 2: " + moment.getTotalMilliseconds());

        System.out.println();

        System.out.println("Time from moment 1 to moment 2 in ms: " + myMoment.calculateDifferenceTo(moment));
    }
}
