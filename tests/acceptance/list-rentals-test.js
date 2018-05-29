import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  // setupApplicationTest ensures app is started and shut down b/t each test
  setupApplicationTest(hooks);
  /*  
  // assert is an object passed in each test function by QUnit
    test('visiting /', async function(assert) {
      // Test helpers have functions like vist() and currentURL() 
      await visit('/');
      // assert has functions like equal() to check conditions w/in test enviornment 
      assert.equal(currentURL(), '/');
      // A test must pass one assert to be successful 
    });
  */

  test('should show rentals as the home page.', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });

  test('should link to information about the company.', async function(assert){
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information.', async function(assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should list available rentals.', async function(assert) {
    // TODO
  });

  test('should filter the list of rentals by city.', async function(assert) {
    // TODO
  });

  test('should shoe details for a selected rental', async function(assert) {
    // TODO
  });


});
