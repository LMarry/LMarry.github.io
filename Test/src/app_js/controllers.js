var colorTableApp = angular.module("colorTableApp", []);

colorTableApp.controller('dataController',  [ '$scope', '$http',
    function dataController($scope, $http){     
        $http.get('data.json').success(function(data) {
            $scope.list = data;
        });
    }]
);

    colorTableApp.controller("colorTableController", [ '$scope', function ($scope) {
    $scope.addItem = function (color, code, addColorForm) {
        if(addColorForm.$valid){
            var char = code[code.length-1];
            while(code.length != 6){
                code += char;
            }
            code = '#'+code;
            $scope.list.colorsArray.push({ colorName: color, hexValue: code});
            $scope.code = null;
            $scope.color = null;
            return;
        }
        alert('Hex field must contain only symbols a-f (A-F) and numbers without #');

    }
}]);