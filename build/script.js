'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var app = angular.module('todoList', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/task-list.html',
    controller: 'TaskListController'
  }).otherwise({
    redirectTo: '/'
  });
}]);

var Task = (function () {
  function Task() {
    var id = arguments[0] === undefined ? 0 : arguments[0];
    var name = arguments[1] === undefined ? '' : arguments[1];
    var date = arguments[2] === undefined ? new Date() : arguments[2];

    _classCallCheck(this, Task);

    this.id = id;
    this.name = name;
    this.date = date;
  }

  _createClass(Task, [{
    key: 'getDetails',
    value: function getDetails() {
      return '' + this.name + ' - ' + this.date;
    }
  }]);

  return Task;
})();

app.controller('TaskListController', ['$scope', function ($scope) {
  $scope.tasks = [];

  for (var i = 1; i < 20; i++) {
    $scope.tasks.push(new Task(i, 'Task' + i, new Date()));
  }
}]);