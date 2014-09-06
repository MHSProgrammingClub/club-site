import DS from 'ember-data';

var Project = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  leaders: DS.hasMany('person'),
  contributors: DS.hasMany('person'),
  skills: DS.hasMany('skill')
});

Project.reopenClass({
	FIXTURES: [
		{
			id: 1,
			title: "MHS Programming Website",
			description: "The project of actually making the MHS Programming Club website. Built using Ember"
		},
		{
			id: 2,
			title: "Git Basics",
			description: "A guide to the basics of git that will get you up and running in no time."
		}
	]
});

export default Project;
