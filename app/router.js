import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ProgrammingclubENV.locationType
});

Router.map(function() {
  this.route('news', { path: '/' });
  this.resource('projects', function() {
  	this.route('show', { path: '/:project_id' });
  });
  this.resource('people', function() {
  	this.route('show', { path: '/:person_id' });
  });
});

export default Router;
