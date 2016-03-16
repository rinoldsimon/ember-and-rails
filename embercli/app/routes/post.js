import Ember from 'ember';

export default Ember.Route.extend({
  //model: function() {
    //return this.store.findAll('comment');
    //return this.store.findAll('post');
  //},
  actions: {
    deleteComment(comment) {
      comment.deleteRecord();
      comment.save();
    }
  }
});
