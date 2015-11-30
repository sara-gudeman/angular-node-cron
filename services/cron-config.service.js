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
        id : 1,
        label : 'Second',
        templateName: 'seconds',
        isOption: true
      },
      {
        id : 2,
        label : 'Minute',
        templateName: 'minutes',
        isOption: true
      },
      {
        id : 3,
        label : 'Hour',
        templateName: 'hours',
        isOption: true
      },
      {
        id : 4,
        label : 'Day of Month',
        templateName: 'daysOfMonth',
        isOption: true
      },
      {
        id : 5,
        label : 'Month',
        templateName: 'months',
        isOption: true
      },
      {
        id : 6,
        label : 'Day of Week',
        templateName: 'daysOfWeek',
        isOption: true
      }
    ];

    this.frequencyOptions = frequencyOptions;
    
    this.minFrequencyOption = frequencyOptions.reduce(function(currObj, min) {
      return Math.min(currObj.id, min);
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