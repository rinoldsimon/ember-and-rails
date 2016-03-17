import Ember from 'ember';

export default Ember.Route.extend({
  //model() {
    //return this.get('store').findAll('post');

  model: function() {
    return this.store.findAll('post', {id: true});
    //return this.store.findAll('comment');
  },
  actions: {
    delete(post) {
      post.deleteRecord();
      post.save();
    }
  }
});
