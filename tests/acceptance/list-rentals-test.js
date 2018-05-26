import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  // setupApplicationTest ensures app is started and shut down b/t each test
  setupApplicationTest(hooks);
    // assert is an object passed in each test function by QUnit
    test('visiting /', async function(assert) {
      // Test helpers have functions like vist() and currentURL() 
      await visit('/');
      // assert has functions like equal() to check conditions w/in test enviornment 
      assert.equal(currentURL(), '/');
      // A test must pass one assert to be successful 
    });
});
