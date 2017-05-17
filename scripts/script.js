var app = angular.module('app', ['ngRoute','ngCookies']);

app.config(function($routeProvider){
  $routeProvider

  .when('/', {
    controller: 'MainController',
    templateUrl: 'home.html'
  })

  .when('/list', {
    controller:  'ProdcutListController',
    templateUrl: 'list.html'
  })

  .when('/:productID', {
    controller:  'ProductDetailsController',
    templateUrl: 'details.html'
  });
});

app.controller('MainController', function($scope){

});



app.controller('ProdcutListController', function($scope, $http){
  $http.get('products.json').success(function (data){
    $scope.products = data;
    console.log($scope.products);
  });

  $scope.deleteProduct = function (index) {
    $scope.products.splice(index,1);
  };

  $scope.addProduct = function () {
    $scope.products.push($scope.newdata);

    $scope.newdata = {
      id: '',
      name: '',
      description: ''
    };
  }
});

app.controller('ProductDetailsController', function($scope, $routeParams, $http){
  $http.get('products.json')
    .success(function (data){
      $scope.products = data;
      console.log(data);

      for(var i = 0; i < data.length; i++) {
        $scope.product = data[i];
        if($scope.product.id === $routeParams.productID) {
          console.log('project-details',$scope.product);
          return $scope.product;
        }
      }
  })
  .error(function(data, status, headers, config) {
    console.log(data);
  });
});
