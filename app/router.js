import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ProgrammingclubENV.locationType
});

Router.map(function() {
  this.route('projects');
});

export default Router;
