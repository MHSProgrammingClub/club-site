import DS from 'ember-data';

var News = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  date: DS.attr('date'),
  slug: DS.attr('string')
});

News.reopenClass({
	FIXTURES: [
		{
			id: 2,
			title: "MHS Programming Club New Meeting Day",
			body: "MHS Programming Club will now meet on the Wednesdays of each week."
		},
		{
			id: 1,
			title: "My first post!",
			body: "Wow exciting things are happening here."
		}
	]
});


export default News;
