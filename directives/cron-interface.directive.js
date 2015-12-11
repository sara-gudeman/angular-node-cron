(function() {
  'use strict';

  angular
    .module('angular-node-cron')
    .directive('cronInterface', cronInterface);

  function cronInterface (cronConfig) {
    return {
      templateUrl: 'templates/cron.template.html',
      controller: 'CronController',
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        config : '=',
        output : '=?',
        init   : '=?'
      },
      link: function(scope, element, attrs) {
      }
    }
  };
})();