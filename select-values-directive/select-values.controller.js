(function() {
  'use strict';

  angular
    .module('cron.ui.selectvalues')
    .controller('SelectValuesController', SelectValuesController);

  SelectValuesController.$inject = ['$scope', '$attrs', 'selectValuesConfig'];

  function SelectValuesController($scope, $attrs, selectValuesConfig) {
    var hourStep = selectValuesConfig.hourStep;
    // if ($attrs.hourStep) {
    //   $scope.$parent.$watch($parse($attrs.hourStep), function(value) {
    //     hourStep = parseInt(value, 10);
    //   });
    // }

    var minuteStep = selectValuesConfig.minuteStep;
    // if ($attrs.minuteStep) {
    //   $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
    //     minuteStep = parseInt(value, 10);
    //   });
    // }

    var secondStep = selectValuesConfig.secondStep;
    // if ($attrs.secondStep) {
    //   $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
    //     secondStep = parseInt(value, 10);
    //   });
    // }
    $scope.items = [
      { title:"seconds", content:" seconds" },
      { title:"minutes", content:"Dynamic Item 0" },
      { title:"hours", content:"Dynamic Item 0" },
      { title:"weekDays", content:"Dynamic Item 1", disabled: true }
    ];

    $scope.getTemplate = function(selectedItem) {
      return '/select-values-directive/select-values-templates/select-' + selectedItem + '.template.html';
    }

  };

})();