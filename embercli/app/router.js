import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts');
  this.route('post.new', { path: 'posts/new' });
  this.resource('post', { path: 'posts/:post_id' }, function() {
    this.route('comment.new', { path: 'comments/new' });
  });
});

/*
Router.map(function() {
this.route('posts');
  this.route('comments');
  this.route('post', function() {
    this.route('new');

    this.route('comment', function() {
      this.route('new');
    });
  });
});
*/

export default Router;
