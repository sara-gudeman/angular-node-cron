(function() {
  'use strict';

  angular
    .module('cron')
    .run(['$templateCache', function($templateCache) {
      $templateCache.put("cron-select.html", "<div></div>");
      $templateCache.put("tabs-select.html", "<div></div>")
      $templateCache.put("seconds-select.html", "<div></div>");
      $templateCache.put("hours-select.html", "<div></div>");
      $templateCache.put("week-select.html", "<div></div>");
      $templateCache.put("month-select.html", "<div></div>");
      $templateCache.put("date-select.html", "<div></div>");
    }])


})();