(function() {
  'use strict';

  angular
    .module('cron.ui.selectvalues')
    .directive('cronSelect', cronSelect);

  function cronSelect () {
    return {
      templateUrl: 'select-values-directive/select-values-templates/select-cron.template.html',
      controller: 'SelectValuesController',
      restrict: 'E',
      scope: {},
      link: function(scope, element, attrs) {
      }
    }
  };
})();