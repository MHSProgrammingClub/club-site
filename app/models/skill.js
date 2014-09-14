import DS from 'ember-data';

var Skill = DS.Model.extend({
	name: DS.attr('string'),
	slug: function() {
		return this.get('name').toLowerCase().replace(/\s/g, '-');
	}.property('name')
});

Skill.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: "Ruby"
		},
		{
			id: 2,
			name: "Git"
		},
		{
			id: 3,
			name: "JavaScript"
		}
	]
});

export default Skill;
