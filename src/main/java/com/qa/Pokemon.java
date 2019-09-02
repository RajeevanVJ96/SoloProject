package com.qa;

public class Pokemon {

    private int pokeNo;
    private String name;
    private int level;
    private String type;
    private String nature;
    private String m1;
    private String m2;
    private String m3;
    private String m4;
    private String description;

    public Pokemon(int pokeNo, String name, int level, String type, String nature, String m1, String m2, String m3, String m4, String description) {
        this.pokeNo = pokeNo;
        this.name = name;
        this.level = level;
        this.type = type;
        this.nature = nature;
        this.m1 = m1;
        this.m2 = m2;
        this.m3 = m3;
        this.m4 = m4;
        this.description = description;
    }

    public int getPokeNo() {
        return pokeNo;
    }
}
