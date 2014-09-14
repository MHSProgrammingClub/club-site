import DS from 'ember-data';

var Person = DS.Model.extend({
  name: DS.attr('string'),
  github: DS.attr('string'),
  leader: DS.hasMany('project', { async: true, inverse: 'leaders' }),
  contributor: DS.hasMany('project', { async: true, inverse: 'contributors' }),
  skills: DS.hasMany('skill', { async: true }),
	slug: function() {
		return this.get('name').toLowerCase().replace(/\s/g, '-');
	}.property('name'),
	githubURL: function() {
		return 'http://github.com/' + this.get('github');
	}.property('github')
});

Person.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Chris Olszewski",
			github: "chris-olszewski",
			leader: [1, 2],
			skills: [1, 2]
		}
	]
});

export default Person;
