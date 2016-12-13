angular.module('app', ['app.services'])
.controller('AppController', function($scope, API) {
  $scope.message = 'Student Enrollment';
  $scope.courses = [];
  $scope.students = [];
  $scope.courses_students = [];

  $scope.studentIsInCourse = (student, course) => (
    $scope.courses_students
      .filter(row => row.student_id === student.id && row.course_id === course.id )
      .length >= 1
  );

  API.getAll().then(data => {
    Object.assign($scope, data);
  });
});