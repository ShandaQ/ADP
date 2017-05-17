describe('DetailsProdcutsController', function () {

	beforeEach(angular.mock.module('app'));

	var $controller;

	beforeEach(angular.mock.inject(function(_$controller_){
	  $controller = _$controller_;
	}));

  it('Mode should be fun', function(){  //write tests
    expect(ProductDetailsController).toBeDefined(); //pass
 });
 });
