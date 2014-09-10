import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  slug: DS.attr('string'),
  projects: DS.hasMany('project'),
  skills: DS.hasMany('skill')
});
