(function() {
  'use strict';

  angular
    .module('angular-node-cron')
    .value('cronFrequency' {
      // every second
      EVERY_SECOND: 0,
      // every minute
      EVERY_MINUTE: 1,
      // every hour
      EVERY_HOUR: 2,
      // every month
      EVERY_DAY_OF_MONTH: 3,
      // month
      EVERY_MONTH: 4,
      // every week
      EVERY_DAY_OF_WEEK: 5
    });
})();