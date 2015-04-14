var app = angular.module('todoList', ['ngRoute']);

app.config(['$routeProvider', ($routeProvider) => {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/task-list.html',
      controller: 'TaskListController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);
