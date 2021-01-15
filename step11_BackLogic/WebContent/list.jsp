<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%> 
<%@page import="model.DAO"%>
<%
	request.setAttribute("All", DAO.getJson());
	response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta charset="UTF-8">

<body>

<table border="1">
	<thead>
		<tr>
			<th>id</th><th>이름</th><th>성</th><th>입사일</th><th>급여</th>
		</tr>
	</thead>
	
	<c:forEach items="${requestScope.All}" var="data">
		<tr>
			<td>${data.employee_id}</td>
			<td>${data.first_name}</td>
			<td>${data.last_name}</td>
			<td>${data.hire_date}</td>
			<td>${data.salary}</td>
			
		</tr>
	</c:forEach>
</table>

</center>
</div>
</body>
</html>