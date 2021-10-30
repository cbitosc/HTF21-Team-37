// (function() {
//     var app = angular.module('myApp', ['ui.router']);
//     app.run(function($rootScope, $location, $state, LoginService) {
//         console.clear();
//         console.log('running');
//         if(!LoginService.isAuthenticated()) {
//             $state.transitionTo('login');
//         }
//     });
//     app.config(['$stateProvider', '$urlRouterProvider', 
//     function($stateProvider, $urlRouterProvider) {
//         $stateProvider
//         .state('login', {
//             url : '/login',
//             templateUrl : 'login.html',
//             controller : 'LoginController'
//         })
//         .state('home', {
//             url : '/home',
//             templateUrl : 'home.html',
//             controller : 'HomeController'
//         });
//         $urlRouterProvider.otherwise('/login');
//     }]);
//     })();
var app = angular.module('myApp', [ ]);

app.controller('myCtrl', function($scope , $http) {
  $scope.lists;
  $scope.goToLink = function(list){
    console.log(list);
  }
  $scope.login = function(userid,password) {
    //   
      var model = {
        userName: userid,
        password:password
    };
    
 
    $http.post("http://localhost:4100/api/user/login", model)
    .then(function(res) {
      $scope.lists = res.data.data;
      $scope.display=false;
     
   
      console.log($scope.lists);

    });
};
});
