(function() {
  'use strict';

  angular
    .module('cron')
    .controller('CronController', CronController);

  CronController.$inject = ['$scope', 'utilsFactory'];

  function CronController($scope, utilsFactory) {

    var options = {
      seconds: utilsFactory.range(0, 60),
      minutes: utilsFactory.range(0, 60),
      daysOfWeek: utilsFactory.range(0, 7),
      daysOfMonth: utilsFactory.range(1, 32),
      months: utilsFactory.range(0, 12)
    };

    $scope.frequencyInput = {};

    // modeled after: https://docs.angularjs.org/api/ng/directive/ngOptions
    $scope.frequencyOptions = [
      {
        id : 1,
        label : 'Second'
      },
      {
        id : 2,
        label : 'Minute'  
      },
      {
        id : 3,
        label : 'Hour'
      },
      {
        id : 4,
        label : 'Day of Month'  
      },
      {
        id : 5,
        label : 'Month'  
      },
      {
        id : 6,
        label : 'Day of Week'  
      }
    ];

  }
})();