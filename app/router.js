import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // when user navigates to /about, run /app/route/about.js
  this.route('about');
  this.route('contact');
  this.route('rentals');
});

export default Router;
