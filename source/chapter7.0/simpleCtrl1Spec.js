describe('SimpleController', function(){
  beforeEach(module('notesApp'));

  var ctrl, $loc;
beforeEach(inject(function($controller, $location){
  ctrl = $controller('SimpleController');
  $loc = $location;
}));

it('Should navigate away from the current page', function(){
  $loc.path('/here');
  ctrl.navigate();
  expect($loc.path()).toEqual('/some/where/else');
});
});
