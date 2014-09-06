import DS from 'ember-data';

var News = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

News.reopenClass({
	FIXTURES: [
		{
			id: 1,
			title: "My first post!",
			body: "Wow exciting things are happening here."
		},
		{
			id: 2,
			title: "Ember has an interesting learning curve",
			body: "Still trying to really understand all these generators."
		}
	]
});


export default News;
