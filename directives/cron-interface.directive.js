(function() {
  'use strict';

  angular
    .module('cron')
    .directive('cronInterface', cronInterface);

  cronInterface.$inject = ['cronConfig'];
  function cronInterface (cronConfig) {
    return {
      templateUrl: 'templates/cron.template.html',
      restrict: 'E',
      scope: {},
      link: function(scope, element, attrs) {
        scope.frequencyOptions = cronConfig.frequencyOptions;
        scope.frequencyRanges = cronConfig.frequencyRanges;

        scope.state = {
          selected: scope.frequencyOptions[0]
        };

        scope.displayOptions = function(frequency) {
          if (frequency.isOption) {
            if (scope.state.selected.id === 6) {
              return frequency.id <= 3 || frequency.id === 6;
            } else {
              return frequency.id <= scope.state.selected.id;
            }
          }
        };

        scope.frequencyCreated = {};
      }
    }
  }
})();