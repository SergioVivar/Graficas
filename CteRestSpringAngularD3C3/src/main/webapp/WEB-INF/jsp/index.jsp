<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="cp" value="${pageContext.request.servletContext.contextPath}" scope="request" />

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Gráficas</title>
        <link rel="stylesheet" type="text/css" href="${cp}/resources/css/site.css" />        
        <link href="${cp}/resources/lib/c3.min.css" rel="stylesheet" type="text/css"/>
        <!--<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.0/angular.min.js"></script>-->
        <script src="${cp}/resources/lib/angular.min.js" type="text/javascript"></script>
	<script src="${cp}/resources/app.js"></script>
        <script src="${cp}/resources/lib/d3.min.js"></script>
        <script src="${cp}/resources/lib/c3.min.js"></script>
    </head>
    <body ng-app="myApp">
        <span><h3 align="center">${msg}</h3></span>         
        
        <div ng-controller="controller" context-path="${cp}">
            Filtro:<p><input type="text" ng-model="filtro"/></p>    
            <div>
                <table class="table">
                    <tr><th>Tipo de grano</th></tr>
                    <tr ng-repeat="result in results | filter:filtro"
                        ng-click="show(result)">
                        <td><input type="button" value="{{result}}" style='width:200px;'/></td>
                    </tr>
                    <tr ng-click="all()">
                        <td><input type="button" value="Graficar todos" style='width:200px;'/></td>
                    </tr>
                </table>
            </div>
            <div id="chartC3"></div>
        </div>                    
    </body>
</html>
