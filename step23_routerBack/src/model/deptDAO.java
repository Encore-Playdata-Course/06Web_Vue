package model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Properties;

import org.json.simple.JSONObject;

import model.util.DBUtil;

public class deptDAO {
	static Properties comm = DBUtil.getComm();
	
	public static ArrayList<JSONObject> getJson() throws SQLException{
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<JSONObject> list = null;
		try{
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement(comm.getProperty("All"));
			rset = pstmt.executeQuery();
			
			list = new ArrayList<JSONObject>();
			while(rset.next()){
				JSONObject j = new JSONObject();
				j.put("deptno", rset.getInt(1));
				j.put("dname", rset.getString(2));
				j.put("loc", rset.getString(3));
				list.add(j);
			}
		}catch(SQLException s){
			s.printStackTrace();
			throw s;
		}finally{
			DBUtil.close(con, pstmt, rset);
		}
		return list;
	}
	
}