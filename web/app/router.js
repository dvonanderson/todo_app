
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('index', { path: '/'})
  this.route('todos', function() {
    this.route('index', { path: '/'});
    this.route('create');
    this.route('edit');
  });
});

export default Router;

