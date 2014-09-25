import DS from 'ember-data';

var Project = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  language: DS.attr('string'),
  html_url: DS.attr('string')
});

export default Project;
