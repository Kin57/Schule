public class Bicycle {
    static int i = 0;
    private int frameId;
    private String brand;
    private int mileage;
    private String type;

    public Bicycle(String brand, String type) {
        setFrameId(++i);
        setBrand(brand);
        setMileage(0);
        setType(type);
    }

    public int getFrameId() {
        return frameId;
    }

    public void setFrameId(int frameId) {
        this.frameId = frameId;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getMileage() {
        return mileage;
    }

    public void setMileage(int mileage) {
        this.mileage = mileage;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void ride(int miles) {
        this.mileage += miles;
    }

}