<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%> 
<%response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin")); %>
<div id="app">
        <table border="1">
            <tr>
                <th>id</th><th>이름</th><th>성</th><th>입사일</th><th>급여</th>
            </tr>
            <tr v-for="(model, key) in employees">
                <td>{{model.employee_id}}</td><td>{{model.first_name}}</td><td>{{model.last_name}}</td><td>{{model.hire_date}}</td><td>{{model.salary}}</td>
            </tr>
        </table>
        2번 급여 15000이상인 사람 이름 : {{employees|over}}<br>
        3번 급여 15000이상인 사람 합 : {{employees|sum}}<br>
    </div>