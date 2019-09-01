package com.qa;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class DBManager {

    static Connection conn = null;
    static Statement stmt = null;

    public DBManager() {}

    public Connection setupConn() throws SQLException {

        try {
            Class.forName(Constants.JDBC_DRIVER);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        System.out.println("Connecting to database...");
        Connection conn = DriverManager.getConnection(Constants.JDBC_DRIVER,Constants.USER, Constants.PASS);
        return conn;

    }

    public void populateDB() throws IOException, SQLException {

        stmt = conn.createStatement();
        stmt.executeUpdate("CREATE TABLE (name VARCHAR(20) PRIMARY KEY NOT NULL, " +
                "type VARCHAR(20) NOT NULL, dexno INT NOT NULL, entry LONGTEXT)");
        stmt.executeUpdate("CREATE TABLE natures(name VARCHAR(20))");
        stmt.executeUpdate("CREATE TABLE moves(name VARCHAR(50))");
        FileReader fr =
                new FileReader("F:\\SoloProject\\src\\data\\Pokes.txt");

        BufferedReader br = new BufferedReader(fr);
        String st;
        while ((st = br.readLine()) != null) {
            String[] arr = st.split(",");
            stmt.executeUpdate(customSQL(arr));


        }
    }

    private String customSQL(String[] arr) {
        return null;
    }

    public ArrayList<String> toString(String[] s){
        ArrayList<String> st = new ArrayList<>();
        for (String i: s){
            st.add(i);
        }
        return st;
    }
}

