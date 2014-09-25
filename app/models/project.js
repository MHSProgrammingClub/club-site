import DS from 'ember-data';

var Project = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  leaders: DS.hasMany('person', { async: true, inverse: 'leader' }),
  contributors: DS.hasMany('person', { async: true, inverse: 'contributor' }),
  skills: DS.hasMany('skill', { async: true }),
	slug: function() {
		return this.get('name').toLowerCase().replace(/\s/g, '-');
	}.property('name')
});

Project.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "MHS Programming Website",
			description: "The project of actually making the MHS Programming Club website. Built using Ember",
			contributors: [1],
			skills: [3]
		},
		{
			id: 2,
			name: "Git Basics",
			description: "A guide to the basics of git that will get you up and running in no time.",
			leaders: [1],
			contributors: [1],
			skills: [2]
		}
	]
});

export default Project;
