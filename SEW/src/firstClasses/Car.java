package firstClasses;

public class Car {
    private String licensePlate;
    private String brand;
    private int seats;
    private int mileage; //in km

    public void drive(int speed, int time) {
        mileage += speed / time; //speed in km/h, time in h
    }

    public void setLicensePlate(String location, String value){
        licensePlate = location + value; // nach dem Muster: location(OÖ,NÖ,..) XXXX(value)
    }

    public String getBrand() {
        return brand;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public int getSeats() {
        return seats;
    }

    public int getMileage() {
        return mileage;
    }
}
