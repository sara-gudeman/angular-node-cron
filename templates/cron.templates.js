(function() {
  'use strict';

  angular
    .module('cron')
    .run(['$templateCache', function($templateCache) {
      $templateCache.put("cron-select.html", "<label>Repeat by: <select ng-model='frequencyInput' ng-options='frequency as frequency.label for frequency in frequencyOptions track by frequency.id'></select></label> <hr />{{frequencyInput.label}} {{frequencyInput.values}}");
      $templateCache.put("tabs-select.html", "<div></div>")
      $templateCache.put("seconds-select.html", "<label><select ng-model='secondsInput' ng-options='second for second in seconds'>");
      $templateCache.put("hours-select.html", "<div></div>");
      $templateCache.put("week-select.html", "<div></div>");
      $templateCache.put("month-select.html", "<div></div>");
      $templateCache.put("date-select.html", "<div></div>");
    }])


})();