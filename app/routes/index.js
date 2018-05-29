import Route from '@ember/routing/route';

export default Route.extend({
  // redirect user navigates to root (/) to /rentals
  // with life cycle hook - beforeModel()
  // beforeModel() hook is executed 
  // before data fetched from model & before page rende
  beforeModel() {
    this.replaceWith('rentals'); // Replace current URL in browser history
  }
});
