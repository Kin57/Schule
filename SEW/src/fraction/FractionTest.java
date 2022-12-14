public class FractionTest {
    public static void main(String[] args) {
        System.out.println("Testing GCD calculation.");
        testGreatestCommonDivisor();
        System.out.println("Testing constructor and setters.");
        testConstructorAndSetters();
        System.out.println("Testing shortening.");
        testShorten();
        System.out.println("Testing toString.");
        testToString();
        System.out.println("Testing addition.");
        testAddition();
        System.out.println("Testing subtraction.");
        testSubtraction();
        System.out.println("Testing multiplication.");
        testMultiplication();
        System.out.println("Testing division.");
        testDivision();

        System.out.println("Good job! :)");
    }

    public static void testGreatestCommonDivisor() {
        assertEquals(1, Fraction.calculateGreatestCommonDivisor(11213, 19937));
        assertEquals(3, Fraction.calculateGreatestCommonDivisor(1701, 3768));
        assertEquals(13, Fraction.calculateGreatestCommonDivisor(12987, 32903));
        assertEquals(24, Fraction.calculateGreatestCommonDivisor(1224, 2712));
    }

    public static void testConstructorAndSetters() {
        Fraction fraction = new Fraction();
        assertEquals(1, fraction.getNumerator());
        assertEquals(1, fraction.getDenominator());

        fraction = new Fraction(20, 60);

        assertEquals(20, fraction.getNumerator());
        assertEquals(60, fraction.getDenominator());

        fraction.setNumerator(19);

        assertEquals(19, fraction.getNumerator());
        assertEquals(60, fraction.getDenominator());

        fraction.setDenominator(74);

        assertEquals(19, fraction.getNumerator());
        assertEquals(74, fraction.getDenominator());

        fraction = new Fraction(3, 5);

        assertEquals(3, fraction.getNumerator());
        assertEquals(5, fraction.getDenominator());

        fraction.setNumerator(0);

        assertEquals(0, fraction.getNumerator());
        assertEquals(5, fraction.getDenominator());

        fraction.setNumerator(100);

        assertEquals(100, fraction.getNumerator());
        assertEquals(5, fraction.getDenominator());

        fraction.setNumerator(-1);

        assertEquals(0, fraction.getNumerator());
        assertEquals(5, fraction.getDenominator());

        fraction = new Fraction(12, 34);

        assertEquals(12, fraction.getNumerator());
        assertEquals(34, fraction.getDenominator());

        fraction.setDenominator(0);

        assertEquals(12, fraction.getNumerator());
        assertEquals(1, fraction.getDenominator());

        fraction.setDenominator(56);

        assertEquals(12, fraction.getNumerator());
        assertEquals(56, fraction.getDenominator());

        fraction.setDenominator(-34);

        assertEquals(12, fraction.getNumerator());
        assertEquals(1, fraction.getDenominator());
    }

    public static void testShorten() {
        Fraction fraction = new Fraction(20, 60);

        assertEquals(20, fraction.getNumerator());
        assertEquals(60, fraction.getDenominator());

        fraction.shorten();

        assertEquals(1, fraction.getNumerator());
        assertEquals(3, fraction.getDenominator());

        fraction.shorten();
        fraction.shorten();
        fraction.shorten();
        fraction.shorten();
        fraction.shorten();
        fraction.shorten();

        assertEquals(1, fraction.getNumerator());
        assertEquals(3, fraction.getDenominator());

        fraction = new Fraction(12987, 32903);

        assertEquals(12987, fraction.getNumerator());
        assertEquals(32903, fraction.getDenominator());

        fraction.shorten();

        assertEquals(999, fraction.getNumerator());
        assertEquals(2531, fraction.getDenominator());

        fraction = new Fraction(11213, 19937);

        assertEquals(11213, fraction.getNumerator());
        assertEquals(19937, fraction.getDenominator());

        fraction.shorten();

        assertEquals(11213, fraction.getNumerator());
        assertEquals(19937, fraction.getDenominator());
    }

    public static void testToString() {
        Fraction fraction = new Fraction();
        assertEquals("1/1", fraction.toString());

        fraction = new Fraction(3,4);
        assertEquals("3/4", fraction.toString());

        fraction.setNumerator(50);
        assertEquals("50/4", fraction.toString());

        fraction.setDenominator(200);
        assertEquals("50/200", fraction.toString());

        fraction.shorten();
        assertEquals("1/4", fraction.toString());

        fraction.shorten();
        assertEquals("1/4", fraction.toString());
    }

    public static void testAddition() {
        Fraction fractionA = new Fraction(1, 5);
        Fraction fractionB = new Fraction(2, 5);

        fractionA.add(fractionB);
        fractionA.shorten();
        assertEquals("3/5", fractionA.toString());
        assertEquals("2/5", fractionB.toString());

        fractionA = new Fraction(3, 4);
        fractionB = new Fraction(3, 8);

        fractionA.add(fractionB);
        fractionA.shorten();
        assertEquals("9/8", fractionA.toString());
        assertEquals("3/8", fractionB.toString());
    }
    
    public static void testSubtraction() {
        Fraction fractionA = new Fraction(3,4);
        Fraction fractionB = new Fraction(1,4);

        fractionA.subtract(fractionB);
        fractionA.shorten();

        assertEquals("1/2", fractionA.toString());
        assertEquals("1/4", fractionB.toString());

        fractionA = new Fraction(1,2);
        fractionB = new Fraction(1,6);

        fractionA.subtract(fractionB);
        fractionA.shorten();

        assertEquals("1/3", fractionA.toString());
        assertEquals("1/6", fractionB.toString());

        fractionA = new Fraction(10,12);
        fractionB = new Fraction(3,12);

        fractionA.subtract(fractionB);
        fractionA.shorten();
        fractionB.shorten();

        assertEquals("7/12", fractionA.toString());
        assertEquals("1/4", fractionB.toString());
    }

    public static void testMultiplication() {
        Fraction fractionA = new Fraction(3,4);
        Fraction fractionB = new Fraction(1,4);

        fractionA.multiply(fractionB);
        fractionA.shorten();

        assertEquals("3/16", fractionA.toString());
        assertEquals("1/4", fractionB.toString());

        fractionA = new Fraction(1, 2);
        fractionB = new Fraction(2, 5);

        fractionA.multiply(fractionB);
        fractionA.shorten();

        assertEquals("1/5", fractionA.toString());
        assertEquals("2/5", fractionB.toString());

        fractionA = new Fraction(1, 3);
        fractionB = new Fraction(9, 16);

        fractionA.multiply(fractionB);
        fractionA.shorten();

        assertEquals("3/16", fractionA.toString());
        assertEquals("9/16", fractionB.toString());
    }

    public static void testDivision() {
        Fraction fractionA = new Fraction(1,2);
        Fraction fractionB = new Fraction(1,6);

        fractionA.divide(fractionB);
        fractionA.shorten();

        assertEquals("3/1", fractionA.toString());
        assertEquals("1/6", fractionB.toString());

        fractionA = new Fraction(12,18);
        fractionB = new Fraction(500,100);

        fractionA.divide(fractionB);
        fractionA.shorten();

        assertEquals("2/15", fractionA.toString());
        assertEquals("500/100", fractionB.toString());
    }

    public static void assertEquals(Object expected, Object actual) {
        if(!expected.equals(actual)) {
            throw new RuntimeException(String.format("Expected \"%s\" but received \"%s\" instead!", expected, actual));
        }
    }
}
