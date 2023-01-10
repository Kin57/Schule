
public class BicycleTest {
    public static void main(String[] args) {
        System.out.println("= Bicycle Test =");
        System.out.println("Testing constructor.");
        testConstructor();
        System.out.println("Testing getters and setters.");
        testGettersAndSetters();
        System.out.println("Testing toString.");
        testToString();
        System.out.println("Testing ride.");
        testRide();

        System.out.println("Good job! :)");
    }

    private static void testConstructor() {
        Bicycle bicycle = new Bicycle("Pinarello", "Road");
        assertEquals(1, bicycle.getFrameId());
        assertEquals("Pinarello", bicycle.getBrand());
        assertEquals(0, bicycle.getMileage());
        assertEquals("Road", bicycle.getType());

        bicycle = new Bicycle("KTM", "Trekking");
        assertEquals(2, bicycle.getFrameId());
        assertEquals("KTM", bicycle.getBrand());
        assertEquals(0, bicycle.getMileage());
        assertEquals("Trekking", bicycle.getType());

        bicycle = new Bicycle("Puch", "City");
        assertEquals(3, bicycle.getFrameId());
        assertEquals("Puch", bicycle.getBrand());
        assertEquals(0, bicycle.getMileage());
        assertEquals("City", bicycle.getType());

        bicycle = new Bicycle("Scott", "Mountain");
        assertEquals(4, bicycle.getFrameId());
        assertEquals("Scott", bicycle.getBrand());
        assertEquals(0, bicycle.getMileage());
        assertEquals("Mountain", bicycle.getType());

        bicycle = new Bicycle("Cannondale", "Haxi");
        assertEquals(5, bicycle.getFrameId());
        assertEquals("Cannondale", bicycle.getBrand());
        assertEquals(0, bicycle.getMileage());
        assertEquals("City", bicycle.getType()); //default value for illegal types
    }


    private static void testGettersAndSetters() {
        Bicycle bicycle = new Bicycle("Cannondale", "Mountain");

        assertEquals(6, bicycle.getFrameId());
        assertEquals("Cannondale", bicycle.getBrand());
        assertEquals(0, bicycle.getMileage());
        assertEquals("Mountain", bicycle.getType());

        bicycle.setType("Road");

        assertEquals(6, bicycle.getFrameId());
        assertEquals("Cannondale", bicycle.getBrand());
        assertEquals(0, bicycle.getMileage());
        assertEquals("Road", bicycle.getType());

        bicycle.setBrand("Pinarello");

        assertEquals(6, bicycle.getFrameId());
        assertEquals("Pinarello", bicycle.getBrand());
        assertEquals(0, bicycle.getMileage());
        assertEquals("Road", bicycle.getType());

        bicycle.setType("Tandem");

        assertEquals(6, bicycle.getFrameId());
        assertEquals("Pinarello", bicycle.getBrand());
        assertEquals(0, bicycle.getMileage());
        assertEquals("City", bicycle.getType());
    }

    private static void testToString() {
        Bicycle bicycle = new Bicycle("Scott", "Mountain");
        assertEquals("#7 - Mountain Bike by Scott (Mileage: 0 km)", bicycle.toString());

        bicycle = new Bicycle("Pinarello", "Popaxi");
        assertEquals("#8 - City Bike by Pinarello (Mileage: 0 km)", bicycle.toString());

        bicycle.setType("Road");
        assertEquals("#8 - Road Bike by Pinarello (Mileage: 0 km)", bicycle.toString());

        bicycle = new Bicycle("KTM", "Trekking");
        assertEquals("#9 - Trekking Bike by KTM (Mileage: 0 km)", bicycle.toString());
    }

    private static void testRide() {
        Bicycle bicycle = new Bicycle("Puch", "City");
        assertEquals(0, bicycle.getMileage());
        assertEquals("#10 - City Bike by Puch (Mileage: 0 km)", bicycle.toString());

        bicycle.ride(114);

        assertEquals(114, bicycle.getMileage());
        assertEquals("#10 - City Bike by Puch (Mileage: 114 km)", bicycle.toString());

        bicycle.ride(40);

        assertEquals(154, bicycle.getMileage());
        assertEquals("#10 - City Bike by Puch (Mileage: 154 km)", bicycle.toString());

        bicycle.ride(-13);

        assertEquals(154, bicycle.getMileage());
        assertEquals("#10 - City Bike by Puch (Mileage: 154 km)", bicycle.toString());

        bicycle.ride(80);

        assertEquals(234, bicycle.getMileage());
        assertEquals("#10 - City Bike by Puch (Mileage: 234 km)", bicycle.toString());
    }

    public static void assertEquals(Object expected, Object actual) {
        if(!expected.equals(actual)) {
            throw new RuntimeException(String.format("Expected \"%s\" but received \"%s\" instead!", expected, actual));
        }
    }
}
