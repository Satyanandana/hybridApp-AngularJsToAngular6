'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
  //    $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
       when('/ng2-demo', {
        template: '<app-ad-panel></app-ad-panel>' // Angular component
      })
        .otherwise({template : ''});
    }
  ]);
