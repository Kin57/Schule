package momentMal;

public class Moment {
    private int hours;
    private int minutes;
    private int seconds;
    private int milliseconds;

    public void setMoment(String value){
        String[] values = value.split( ";");
        int[] valuesInt = new int[values.length];
        for(int i = 0; i < values.length; i++){
            valuesInt[i] = Integer.parseInt(values[i]);
        }
        setHours(valuesInt[0]);
        setMinutes(valuesInt[1]);
        setSeconds(valuesInt[2]);
        setMilliseconds(valuesInt[3]);
    }

    public int getHours() {
        return hours;
    }

    public void setHours(int hours) {
        this.hours = hours % 24;
    }

    public int getMinutes() {
        return minutes;
    }

    public void setMinutes(int minutes) {
        setHours(this.hours + minutes / 60);
        this.minutes = minutes % 60;
    }

    public int getSeconds() {
        return seconds;
    }

    public void setSeconds(int seconds) {
        setMinutes(this.minutes + seconds / 60);
        this.seconds = seconds % 60;
    }

    public int getMilliseconds() {
        return milliseconds;
    }

    public void setMilliseconds(int milliseconds) {
        setSeconds(this.seconds + milliseconds / 1000);
        this.milliseconds = milliseconds % 1000;
    }

    public int getTotalMilliseconds() {
        return this.hours * 3600000 + this.minutes * 60000 + this.seconds * 1000 + this.milliseconds;
    }

    public int calculateDifferenceTo(Moment moment) {
        int difference = (moment.hours - this.hours) * 360000;
        difference += (moment.minutes - this.minutes) * 60000;
        difference += (moment.seconds - this.seconds) * 1000;
        difference += moment.milliseconds - this.milliseconds;

        return difference;
    }
}
