import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	slug: DS.attr('string'),
  persons: DS.hasMany('person'),
  projects: DS.hasMany('project')
});
