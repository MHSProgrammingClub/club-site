import DS from 'ember-data';

var Person = DS.Model.extend({
	name: DS.attr('string'),
  login: DS.attr('string'),
  avatar_url: DS.attr('string'),
  html_url: DS.attr('string')
});

export default Person;
