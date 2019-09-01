package com.qa;

import java.util.ArrayList;

public class Roster {

    String rname;
    int size;
    ArrayList<Pokemon> pmon;
    String desc;

    public Roster(String rname, int size, ArrayList<Pokemon> pmon, String desc) {
        this.rname = rname;
        this.size = size;
        this.pmon = pmon;
        this.desc = desc;
    }

    public String getRname() {
        return rname;
    }

    public ArrayList<Pokemon> getPmon() {
        return pmon;
    }
}
