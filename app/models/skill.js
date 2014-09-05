import DS from 'ember-data';

export default DS.Model.extend({
  persons: DS.hasMany('person'),
  projects: DS.hasMany('project')
});
