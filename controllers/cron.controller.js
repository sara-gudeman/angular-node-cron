(function() {
  'use strict';

  angular
    .module('cron')
    .controller('CronController', CronController);

  CronController.$inject = ['$scope', 'utilsFactory'];

  function CronController($scope, utilsFactory) {

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
        notAnOption: false
      },
      {
        id : 2,
        label : 'Minute',
        values: options.minutes,
        notAnOption: false
      },
      {
        id : 3,
        label : 'Hour',
        values: options.hours,
        notAnOption: false
      },
      {
        id : 4,
        label : 'Day of Month',
        values: options.daysOfMonth,
        notAnOption: false
      },
      {
        id : 5,
        label : 'Month',
        values: options.months,
        notAnOption: false
      },
      {
        id : 6,
        label : 'Day of Week',
        values: options.daysOfWeek,
        notAnOption: false
      }
    ];

  }
})();