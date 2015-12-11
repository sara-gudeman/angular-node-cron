 (function() {
  'use strict';

  angular
    .module('angular-node-cron')
    .controller('CronController', CronController);

  CronController.$inject = ['$scope', '$log', 'cronConfig'];

  function CronController($scope, $log, cronConfig) {
    /*
    user config
    $scope.frequencyConfig = {options: {}, range: {}}
    in-line styling --> dropdown-select=true or tab-select=true
     */
    $scope.frequencyOptions = cronConfig.frequencyOptions;
    $scope.frequencyRanges = cronConfig.frequencyRanges;
    $scope.selectedFrequency = cronConfig.minFrequencyOption;
    $scope.frequencyCreated = {};

    // TEMP HACK FOR TIMEPICKER EXAMPLE
    $scope.mytime = new Date();
    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.update = function() {
      var d = new Date();
      d.setHours( 14 );
      d.setMinutes( 0 );
      $scope.mytime = d;
    };

    $scope.changed = function () {
      $log.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function() {
      $scope.mytime = null;
    };
    // END HACK

    $scope.displayOptions = function(frequency) {
      if (!frequency.disabled) {
        if ($scope.frequencyCreated.base === 6) {
          return frequency.idx <= 3 || frequency.idx === 6;
        } else {
          return frequency.idx <= $scope.frequencyCreated.base;
        }
      }
    };
    // DIVIDE INTO TWO FUNCTIONS//DISPLAY + SET
    $scope.$watch('frequencyCreated', /*TODO USE WATCH FUNCTION,*/ function (newValue, oldValue) {
      console.log('frequencyCreated has changed. newValue: ', newValue, ' oldValue ', oldValue);
      // if there is a new value in frequencyCreated (not undefined) and old value is undefined OR newValue.base !== oldValue.base(?)
      if (newValue && (!oldValue || newValue.base !== oldValue.base)) {
        // console.log('newValue.base: ', newValue.base);
        // if there is a newValue and newValue.base is defined
        if (newValue && newValue.base) {
          // set newValue.base to the integer value
          newValue.base = parseInt(newValue.base);
          newValue.seconds = $scope.frequencyRanges.seconds[0];
          console.log(newValue.base);
        }
        if(newValue && newValue.base && newValue.base >= 2) {
          // console.log('newValue.minutes is: ', newValue.minutes);
          // this line triggers another change in myFrequency
          newValue.minutes = $scope.frequencyRanges.minutes[0];
          console.log('newValue.minutes is: ', newValue.minutes);
        }
        if(newValue && newValue.base && newValue.base >= 3) {
          newValue.hours = $scope.frequencyRanges.hours[0];
        }

        if(newValue && newValue.base && (newValue.base === 4 || newValue.base === 5)) {
          newValue.daysOfMonth = $scope.frequencyRanges.daysOfMonth[0];
        }

        if(newValue && newValue.base && newValue.base === 5) {
          console.log($scope.frequencyRanges.months[0]);
          newValue.months = $scope.frequencyRanges.months[0];
        }
        if(newValue && newValue.base && newValue.base === 6) {
          newValue.daysOfWeek = $scope.frequencyRanges.daysOfWeek[0];
        }
      }
      // $scope.output = Cron.setCron(newValue);
    }, true);
  }

})();