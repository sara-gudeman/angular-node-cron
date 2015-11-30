 (function() {
  'use strict';

  angular
    .module('angular-node-cron')
    .controller('CronController', CronController);

  CronController.$inject = ['$scope', 'cronConfig'];

  function CronController($scope, cronConfig) {
    /*
    user config
    $scope.frequencyConfig = {options: {}, range: {}}
    in-line styling --> dropdown-select=true or tab-select=true
     */
    $scope.frequencyOptions = cronConfig.frequencyOptions;
    $scope.frequencyRanges = cronConfig.frequencyRanges;
    $scope.selectedFrequency = cronConfig.minFrequencyOption;
    $scope.frequencyCreated = {};

    $scope.displayOptions = function(frequency) {
      if (frequency.isOption) {
        if ($scope.frequencyCreated.base === 6) {
          return frequency.id <= 3 || frequency.id === 6;
        } else {
          return frequency.id <= $scope.frequencyCreated.base;
        }
      }
    };
  }

})();