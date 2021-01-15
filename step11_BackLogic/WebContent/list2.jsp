<%@ page language="java" contentType="application/json; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%> 
<%@page import="model.DAO"%>
<%
	request.setCharacterEncoding("utf-8");
	response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
     /* response.setHeader("Access-Control-Allow-Credentials", "true");
     response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
     response.setHeader("Access-Control-Max-Age", "3600");
     response.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
     response.setHeader("Content-Type", "application/json");
     response.setHeader("Accept", "application/json"); */
%>
<%= DAO.getJson() %>
