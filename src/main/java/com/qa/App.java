package com.qa;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * Hello world!
 *
 */
public class App 
{

    public static void main( String[] args ) throws SQLException, IOException {
        DBManager dbm = new DBManager();
        //dbm.setupConn();
        dbm.populateDB();
        int id = 0;
        dbm.viewTeam(id);




    }
}
