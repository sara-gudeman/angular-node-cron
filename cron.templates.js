(function() {
  'use strict';

  angular
    .module('cron')
    .run(['$templateCache', function($templateCache) {
      $templateCache.put("cron-select.html", "");
    }])


})();