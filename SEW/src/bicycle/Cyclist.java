
public class Cyclist {
    private String name;
    private String team = "None";

    public Cyclist(String name, String team) {
        setName(name);
        setTeam(team);
    }
    public Cyclist(String name) {
        setName(name);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        if(team == null || team.isBlank()){
            this.team = "None";
        }
        else{
            this.team = team;
        }
    }

    @Override
    public String toString() {
        String result = "%s (Team: %s)";
        return String.format(result, this.name, this.team);
    }
}
