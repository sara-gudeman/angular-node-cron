(function() {
  'use strict';

  angular
    .module('cron')
    .directive('cronInterface', cronInterface);

  function cronInterface() {
    return {
      templateUrl: 'templates/seconds.templates.html',
      controller: 'CronController',
      restrict: 'E',
      scope: {},
      transclude: true,
      link: function(scope, element, attrs, controller, transcludeFn) {}
    }
  }
})();