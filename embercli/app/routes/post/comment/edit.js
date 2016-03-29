import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('post.comment.edit', { into: 'application' });
  },
  actions: {
  	save: function() {
      //var route = this;
      //this.currentModel.save().then(() => {
      this.controller.get('model').save().then(() => {
          this.transitionTo('post', this.modelFor('post'));
        });
    },
    cancel() {
      this.transitionTo('post', this.modelFor('post'));
    }
  }
});