package model.util;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

public class DBUtil {
	private static Properties db = new Properties();
	private static Properties comm = new Properties();
	static{ 
		try {
			db.load(DBUtil.class.getResourceAsStream("/db.properties"));
			comm.load(DBUtil.class.getResourceAsStream("/comm.properties"));
			Class.forName(db.getProperty("jdbc.driver"));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static Connection getConnection() throws SQLException{
		return DriverManager.getConnection(db.getProperty("jdbc.url"), 
										 db.getProperty("jdbc.id"), 
										 db.getProperty("jdbc.pw"));
	}
	
	public static Properties getComm() {
		return comm;
	}

	public static void close(Connection con, Statement stmt) {
		try {
			if (con != null) {
				con.close();
				con = null;
			}
			if (stmt != null) {
				stmt.close();
				stmt = null;
			}
		} catch (SQLException s) {
			s.printStackTrace();
		}
	}

	public static void close(Connection con, Statement stmt, ResultSet rset) {
		try {
			if (rset != null) {
				rset.close();
				rset = null;
			}
			if (con != null) {
				con.close();
				con = null;
			}
			if (stmt != null) {
				stmt.close();
				stmt = null;
			}
		} catch (SQLException s) {
			s.printStackTrace();
		}
	}
}