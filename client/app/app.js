angular.module('app', ['app.services'])
.controller('AppController', function($scope, API) {
  $scope.message = 'Student Enrollment';
  $scope.courses = [];
  $scope.students = [];

  API.getAll().then(data => {
    $scope.courses = data.courses;
    $scope.students = data.students;
  });
});