
public class CyclistTest {
    public static void main(String[] args) {
        System.out.println("= Cyclist Test =");
        System.out.println("Testing constructor.");
        testConstructor();
        System.out.println("Testing getters and setters.");
        testGettersAndSetters();
        System.out.println("Testing toString.");
        testToString();

        System.out.println("Good job! :)");
    }

    private static void testConstructor() {
        Cyclist cyclist = new Cyclist("Lance Armstrong");
        assertEquals("Lance Armstrong", cyclist.getName());
        assertEquals("None", cyclist.getTeam());

        cyclist = new Cyclist("Jan Ullrich", "Doping Squad");
        assertEquals("Jan Ullrich", cyclist.getName());
        assertEquals("Doping Squad", cyclist.getTeam());

        cyclist = new Cyclist("Jens Voigt", "");
        assertEquals("Jens Voigt", cyclist.getName());
        assertEquals("None", cyclist.getTeam());

        cyclist = new Cyclist("Eddy Merckx", "SK Vöest Linz");
        assertEquals("Eddy Merckx", cyclist.getName());
        assertEquals("SK Vöest Linz", cyclist.getTeam());

        cyclist = new Cyclist("Fausto Coppi", null);
        assertEquals("Fausto Coppi", cyclist.getName());
        assertEquals("None", cyclist.getTeam());
    }


    private static void testGettersAndSetters() {
        Cyclist cyclist = new Cyclist("Langer Armstark");

        assertEquals("Langer Armstark", cyclist.getName());
        assertEquals("None", cyclist.getTeam());

        cyclist.setName("Lance Armstrong");

        assertEquals("Lance Armstrong", cyclist.getName());
        assertEquals("None", cyclist.getTeam());

        cyclist.setTeam("Haxi Popaxi Racing Team");

        assertEquals("Lance Armstrong", cyclist.getName());
        assertEquals("Haxi Popaxi Racing Team", cyclist.getTeam());

        cyclist.setName("Mario Cipollini");
        cyclist.setTeam("");

        assertEquals("Mario Cipollini", cyclist.getName());
        assertEquals("None", cyclist.getTeam());

        cyclist.setTeam("Squadra Azzurra");

        assertEquals("Mario Cipollini", cyclist.getName());
        assertEquals("Squadra Azzurra", cyclist.getTeam());

        cyclist.setTeam(null);

        assertEquals("Mario Cipollini", cyclist.getName());
        assertEquals("None", cyclist.getTeam());
    }

    private static void testToString() {
        Cyclist cyclist = new Cyclist("Fausto Coppi");
        assertEquals("Fausto Coppi (Team: None)", cyclist.toString());

        cyclist = new Cyclist("Jan Ullrich", "Doping Squad");
        assertEquals("Jan Ullrich (Team: Doping Squad)", cyclist.toString());

        cyclist = new Cyclist("Lance Armstrong", null);
        assertEquals("Lance Armstrong (Team: None)", cyclist.toString());
    }

    public static void assertEquals(Object expected, Object actual) {
        if(!expected.equals(actual)) {
            throw new RuntimeException(String.format("Expected \"%s\" but received \"%s\" instead!", expected, actual));
        }
    }
}
