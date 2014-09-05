import DS from 'ember-data';

export default DS.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  leaders: DS.hasMany('person'),
  contributors: DS.hasMany('person'),
  skills: DS.hasMany('skill')
});
