angular.module('app', ['app.services'])
.controller('AppController', function($scope) {
  $scope.message = 'Why hello there, world!';
});