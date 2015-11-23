(function() {
  'use strict';

  angular
    .module('cron')
    .directive('cronInterface', cronInterface);

  function cronInterface() {
    return {
      templateUrl: 'cron-select.html',
      controller: 'CronController',
      restrict: 'E'
    }
  }
})();