(function() {
  'use strict';

  angular
    .module('angular-node-cron')
    .service('cronConfig', cronConfig);

  cronConfig.$inject = ['utilsFactory'];


  function cronConfig (utilsFactory) {
    var _configDefault = {};

    // modeled after: https://docs.angularjs.org/api/ng/directive/ngOptions
    var frequencyOptions = [
      {
        idx : 0,
        label : 'Second',
        templateName: 'seconds',
        disabled: false
      },
      {
        idx : 1,
        label : 'Minute',
        templateName: 'minutes',
        disabled: false
      },
      {
        idx : 2,
        label : 'Hour',
        templateName: 'hours',
        disabled: false
      },
      {
        idx : 3,
        label : 'Day of Month',
        templateName: 'daysOfMonth',
        disabled: false
      },
      {
        idx : 4,
        label : 'Month',
        templateName: 'months',
        disabled: false
      },
      {
        idx : 5,
        label : 'Day of Week',
        templateName: 'daysOfWeek',
        disabled: false
      }
    ];

    this.frequencyOptions = frequencyOptions;
    
    this.minFrequencyOption = frequencyOptions.reduce(function(currObj, min) {
      return Math.min(currObj.idx, min);
    }, 6);

    this.frequencyRanges = {
      seconds: utilsFactory.range(0, 60),
      hours: utilsFactory.range(0, 24),
      minutes: utilsFactory.range(0, 60),
      daysOfWeek: utilsFactory.range(0, 7),
      daysOfMonth: utilsFactory.range(1, 32),
      months: utilsFactory.range(0, 12)
    };


  }

})();