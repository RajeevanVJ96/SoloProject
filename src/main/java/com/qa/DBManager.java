package com.qa;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;

public class DBManager {

    static Connection conn = null;
    static Statement stmt = null;

    DBManager() {}

    private Connection setupConn() throws SQLException {

        try {
            Class.forName(Constants.JDBC_DRIVER);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        System.out.println("Connecting to database...");
        Connection conn = DriverManager.getConnection(Constants.DB_URL,Constants.USER, Constants.PASS);
        return conn;

    }

    void populateDB() throws IOException, SQLException {

        stmt = setupConn().createStatement();
        stmt.executeUpdate("CREATE TABLE pokemon(name VARCHAR(20) PRIMARY KEY NOT NULL, " +
                "type VARCHAR(20) NOT NULL, dexno INT NOT NULL, description VARCHAR(500))");
        stmt.executeUpdate("CREATE TABLE natures(name VARCHAR(20))");
        stmt.executeUpdate("CREATE TABLE moves(name VARCHAR(50))");
        stmt.executeUpdate("CREATE TABLE types(name VARCHAR(20))");

        readFiles("src\\data\\Pokes.txt", "pokemon");
        readFiles("src\\data\\moves.txt", "moves");
        readFiles("src\\data\\types.txt", "types");
        readFiles("src\\data\\natures.txt", "natures");

    }

    private void readFiles(String s, String name) throws IOException, SQLException {
        FileReader fr =
                new FileReader(s);

        BufferedReader br = new BufferedReader(fr);
        String st;
        while ((st = br.readLine()) != null) {
            String[] arr = st.split(",");
            stmt.executeUpdate(customSQL(arr, name));


        }
    }

    private String customSQL(String[] arr, String name) {
        StringBuilder sb = new StringBuilder();
        sb.append("INSERT INTO " + name +  " VALUES(");
        for(String i: arr){

            sb.append("'"+i+"'"+",");
        }

        sb.deleteCharAt(sb.length() - 1);
        sb.append(")");
        System.out.println(sb.toString());
        return sb.toString();
    }

    public ArrayList<String> toString(String[] s){
        ArrayList<String> st = new ArrayList<>();
        for (String i: s){
            st.add(i);
        }
        return st;
    }

    public void viewTeam(int i) throws SQLException {
        stmt = conn.createStatement();
        String sql = "SELECT * FROM teams WHERE id = " + i;
        ResultSet rs = stmt.executeQuery(sql);

    }

    /*
    createTeam - takes in a Roster object to describe the team as well as list of pokemon to be added to the
    roster. This should be used to create a new table for the roster while calling in values from pokes, Moves, nature
    and types for info about pokemon
     */

    public void createTeam(ArrayList<Pokemon> pokes){

    }

    /*
    editTEam should take in the roster that is being changed as well as the required changes so ALTER TABLE should be used
    */
    public void editTeam(){}

    /*
    delTEam should take in the roster that is being deleted as well so DROP TABLE should be used
    */
    public void delTeam(){}

    /*
    viewTeam should take in the team to be shown and SELECT all query should be used to return the correct table.
     */
    public void viewTeam(){}

    public void flush() throws SQLException {
        stmt = setupConn().createStatement();
        stmt.executeUpdate("DROP TABLE pokemon");
        stmt.executeUpdate("DROP TABLE natures");
        stmt.executeUpdate("DROP TABLE moves");
        stmt.executeUpdate("DROP TABLE types");
        System.out.println("Fresh DB available");

    }
}

