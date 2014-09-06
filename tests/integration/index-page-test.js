import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('An Integration test', {
	setup: function() {
		App = startApp();
	},
	teardown: function() {
		Ember.run(App, App.destroy);
	}
});

test('Should activate home link', function() {
	visit('/').then(function() {
		equal(find('li:contains("Home")').hasClass("active"), true);
		equal(find('li:contains("Projects")').hasClass("active"), false);
	});
});
