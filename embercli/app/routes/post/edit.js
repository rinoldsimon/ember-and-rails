import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      //var route = this;
      //this.currentModel.save().then(() => {
      this.controller.get('model').save().then(() => {
          this.transitionTo('posts');
        });
    },
    cancel() {
      this.transitionTo('posts');
    }
  }
});
