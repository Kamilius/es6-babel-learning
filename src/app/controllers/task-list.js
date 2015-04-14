class Task {
  constructor(id = 0, name = '', date = new Date()) {
    this.id = id;
    this.name = name;
    this.date = date;
  }

  getDetails() {
    return `${this.name} - ${this.date}`;
  }
}

app.controller('TaskListController', ['$scope', ($scope) => {
  $scope.tasks = [];

  for(let i = 1; i < 20; i++) {
    $scope.tasks.push(new Task(i, `Task${i}`, new Date()));
  }
}]);
