angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
        
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html'
    })
        
      
    
      
        
    .state('solados', {
      url: '/solado',
      templateUrl: 'templates/solados.html'
    })
        
      
    
      
        
    .state('cabides', {
      url: '/page20',
      templateUrl: 'templates/cabides.html'
    })
        
      
    
      
        
    .state('tiras', {
      url: '/page18',
      templateUrl: 'templates/tiras.html'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/home');
  

  

});