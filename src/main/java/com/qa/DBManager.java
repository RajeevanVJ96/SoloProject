package com.qa;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.*;
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
        Connection conn = DriverManager.getConnection(Constants.DB_URL,Constants.USER, Constants.PASS);
        return conn;

    }

    public void populateDB() throws IOException, SQLException {

        stmt = setupConn().createStatement();
        stmt.executeUpdate("CREATE TABLE pokemon(name VARCHAR(20) PRIMARY KEY NOT NULL, " +
                "type VARCHAR(20) NOT NULL, dexno INT NOT NULL, entry LONGTEXT)");
        stmt.executeUpdate("CREATE TABLE natures(name VARCHAR(20))");
        stmt.executeUpdate("CREATE TABLE moves(name VARCHAR(50))");
        FileReader fr =
                new FileReader("src\\data\\Pokes.txt");

        BufferedReader br = new BufferedReader(fr);
        String st;
        while ((st = br.readLine()) != null) {
            String[] arr = st.split(",");
            stmt.executeUpdate(customSQL(arr));


        }
    }

    private String customSQL(String[] arr) {
        StringBuilder sb = new StringBuilder();
        sb.append("INSERT pokemon VALUES(");
        for(String i: arr){
            sb.append(i);
            sb.append(",");
        }

        sb.append(")");
        String finish = sb.toString();
        finish = finish.replaceAll(",$","");
        System.out.println(finish);
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

    public void createTeam(){}

    public void editTeam(){}

    public void delTeam(){}

    public void flush() throws SQLException {
        stmt = setupConn().createStatement();
        stmt.executeUpdate("DROP TABLE pokemon");
        stmt.executeUpdate("DROP TABLE natures");
        stmt.executeUpdate("DROP TABLE moves");
        System.out.println("Fresh DB available");

    }
}

