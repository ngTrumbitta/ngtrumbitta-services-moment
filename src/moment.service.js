var momentService = angular.module('ngtrumbitta.services.moment', []);

momentService.factory('moment', ['$window',
    function($window) {
      'use strict';
      return $window.moment;
    }
  ]
);
