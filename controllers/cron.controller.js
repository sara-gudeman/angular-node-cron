(function() {
  'use strict';

  angular
    .module('cron')
    .controller('CronController', CronController);

  CronController.$inject = ['$scope', 'utilsFactory'];

  function CronController($scope, utilsFactory) {

    $scope.state = {
      selected: 'seconds'
    };

    $scope.getUrl = function(templateName) {
      return 'templates/' + templateName + '.template.html'
    };

    $scope.frequencyValues = {
      seconds: utilsFactory.range(0, 60),
      hours: utilsFactory.range(0, 24),
      minutes: utilsFactory.range(0, 60),
      daysOfWeek: utilsFactory.range(0, 7),
      daysOfMonth: utilsFactory.range(1, 32),
      months: utilsFactory.range(0, 12)
    };

    var options = {
      seconds: utilsFactory.range(0, 60),
      hours: utilsFactory.range(0, 24),
      minutes: utilsFactory.range(0, 60),
      daysOfWeek: utilsFactory.range(0, 7),
      daysOfMonth: utilsFactory.range(1, 32),
      months: utilsFactory.range(0, 12)
    };

    $scope.frequencySelected;
    $scope.frequencyCreated = {};

    // modeled after: https://docs.angularjs.org/api/ng/directive/ngOptions
    $scope.frequencyOptions = [
      {
        id : 1,
        label : 'Second',
        values: options.seconds,
        templateName: 'seconds',
        notAnOption: false
      },
      {
        id : 2,
        label : 'Minute',
        values: options.minutes,
        templateName: 'minutes',
        notAnOption: false
      },
      {
        id : 3,
        label : 'Hour',
        values: options.hours,
        templateName: 'hours',
        notAnOption: false
      },
      {
        id : 4,
        label : 'Day of Month',
        values: options.daysOfMonth,
        templateName: 'month-days',
        notAnOption: false
      },
      {
        id : 5,
        label : 'Month',
        values: options.months,
        templateName: 'months',
        notAnOption: false
      },
      {
        id : 6,
        label : 'Day of Week',
        values: options.daysOfWeek,
        templateName: 'week-days',
        notAnOption: false
      }
    ];

  }
})();