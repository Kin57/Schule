public class Fraction {
    private int numerator;
    private int denominator;

    public Fraction() {
        setNumerator(1);
        setDenominator(1);
    }

    public Fraction(int numerator, int denominator) {
        setNumerator(numerator);
        setDenominator(denominator);
    }

    public static int calculateGreatestCommonDivisor(int a, int b) {
        int i;
        for (i = 1; (a * i) % b != 0; i++) {
        }
        int LCM = a * i;
        int GCD = (a * b) / LCM;
        return GCD;
    }

    public int getNumerator() {
        return this.numerator;
    }

    public void setNumerator(int numerator) {
        if(numerator < 0){
            numerator = 0;
        }
        this.numerator = numerator;
    }

    public int getDenominator() {
        return this.denominator;
    }

    public void setDenominator(int denominator) {
        if(denominator < 1){
            denominator = 1;
        }
        this.denominator = denominator;
    }

    public void add(Fraction secondFraction) {
    }

    public void subtract(Fraction secondFraction) {
    }

    public void multiply(Fraction secondFraction) {
    }

    public void divide(Fraction secondFraction) {
    }

    public void shorten() {
        if(this.numerator % this.denominator == 0){
            int temp = this.numerator / this.denominator;
            this.numerator /= temp;
            this.denominator /= temp;
        }
    }

    public String toString() {
        return "";
    }

}
