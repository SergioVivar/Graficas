'use strict';

var app = angular.module('myApp', []);

app.controller('controller', function($scope,$attrs,$http)
{
    var json = [];
    var types = [];    
    
    angular.element(document).ready(function () {$scope.getModel();});    

//    $http.get("http://localhost:3000/granos/")
//    .then(function (response) 
//        {
//            json = response.data; 
//            //Se obtienen los nombres de los granos contenidos en el json
//            angular.forEach(json,function(elemento)
//            {
//                if(!nombres.includes(elemento.item))
//                    nombres.push(elemento.item);
//            });            
//            $scope.resultados = nombres;
//        }    
//    );

    $scope.getModel = function()
    {
        var req =
        {
            method: 'GET'
            ,url: $attrs.contextPath  + "/get"
            ,headers: {'Content-Type': 'application/json'}
        };

        $http(req)
            .then(function(response)
            {
                console.log(response);
                json = response.data;
                //Se obtienen los nombres de los granos contenidos en el json
                angular.forEach(json,function(element)
                {
                    if(!types.includes(element.item))
                        types.push(element.item);
                });            
                $scope.results = types;
            });        
    };
    
    $scope.show = function(itemElement)
    {
        var json_partial = [];
        //Se crea un json que contenga únicamente el grano seleccionado...
        angular.forEach(json, function(element)
        {
            if(element.item === itemElement)
            {
                json_partial.push
                ({
                    date:element.date,
                    amount:element.amount
                });
                console.log(element.item);
            }
        });
        //... para graficarlo
        c3.generate
        ({
            bindto:"#chartC3",
            data:
            {        
                json:json_partial
                ,type:'bar'
                ,keys:{x:'date',value:['date','amount']}
                ,names: {amount: itemElement}
                ,labels: true
            }
            ,axis:
            {
                x: {label: 'Año'},
                y: {label: {text: 'Toneladas',position: 'outer-middle'}}
                //y2: {show: true,label: {text: 'Amount',position: 'outer-middle'}}
            }
        }); 
    };
    
    $scope.all = function()
    {
//        Crear el JSON con los grupos de datos adecuados, se busca crear una formación así: {"date":date, "tipo1": amount, "tipo2": amount},{...} etc
        var mainArray = [];
        //Iterar desde el menor hasta el mayor año
        var year = 0;
        for( var i = 0; i < json.length; i++)//No se utiliza forEach porque hay que terminar de iterar (break) al encontrar el año siguiente (mayor)
        {
            var elementI = json[i];
            if(elementI.date > year)
            {
                year = elementI.date;
                var tempString = "{";
                //Se coloca el año como  primer elemento
                //Se colocan los caracteres de escape porque se requiere que la cadena contenga los
                //nombres de elementos entre comillas
                tempString = tempString.concat("\"date\":" + year);
                //Para cada tipo de grano...
                angular.forEach(types, function(type)
                {
                    //...se busca la producción que tuvo
                    for( var j = 0; j < json.length; j++)
                    {
                        var elementoJ = json[j];
                        if(elementoJ.item === type && elementoJ.date === year)
                        {
                            tempString = tempString.concat(",\"" + type + "\":" + elementoJ.amount);
                            break;
                        }
                    }
                });
                tempString = tempString.concat("}");
                //Se convierte un elemento a JSON y posteriormente se añade al arreglo
                mainArray.push(JSON.parse(tempString));                
            }
            else break;
        }
        //Graficar el json reordenado
        c3.generate
        ({
            bindto:"#chartC3",
            data:
            {        
                json:mainArray
                ,type:'spline'
                ,keys:{x:'date',value:types}
                ,labels: true
            }
            ,axis:
            {
                x: {label: 'Año'},
                y: {label: {text: 'Toneladas',position: 'outer-middle'}}
            }
        }); 
    };  
});
