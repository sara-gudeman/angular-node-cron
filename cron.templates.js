(function() {
  'use strict';

  angular
    .module('cron')
    .run(['$templateCache', function($templateCache) {
      $templateCache.put("cron-select.html", "<select ng-model='frequencyInput' ng-options='frequency as frequency.label for frequency in frequencyOptions track by frequency.id'></select>");
    }])


})();