(function() {
  'use strict';

  angular
    .module('cron')
    .directive('cronInterface', cronInterface);

  cronInterface.$inject = ['cronConfig'];
  function cronInterface (cronConfig) {
    return {
      templateUrl: 'templates/cron.template.html',
      // controller: 'CronController',
      restrict: 'E',
      scope: {},
      link: function(scope, element, attrs) {
        scope.frequencyOptions = cronConfig.frequencyOptions;
        scope.frequencyRanges = cronConfig.frequencyRanges;

        scope.state = {
          selected: 0
        };

        scope.displayOptions = function(frequency) {
          return frequency.id <= scope.state.selected && frequency.isOption;
        };

        scope.frequencySelect;
        scope.frequencyCreated = {};
      }
    }
  }
})();