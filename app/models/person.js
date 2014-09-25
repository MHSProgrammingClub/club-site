import DS from 'ember-data';

var Person = DS.Model.extend({
	name: DS.attr('string'),
  login: DS.attr('string'),
  avatar_url: DS.attr('string'),
  url: function() {
  	return "https://github.com/" + this.get('login');
  }
});

export default Person;
