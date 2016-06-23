var Browser = require('zombie'),
  assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function(){

  setup(function(){
    browser = new Browser();
  });

  test('requesting a group rate quote from the queen west tour page ' +
    'should populate the referrer field', function(done){
      var referrer = 'http://localhost:8080/tours/queen-west';
      browser.visit(referrer, function(){
        browser.clickLink('.requestGroupRate', function(){
          assert(browser.field('referrer').value
            === referrer);
          done();
        });
      });
  });

  test('requesting a group rate from the art gallery of ontario tour page should ' +
    'populate the referrer field', function(done){
      var referrer = 'http://localhost:8080/tours/art-gallery-ontario';
      browser.visit(referrer, function(){
        browser.clickLink('.requestGroupRate', function(){
          assert(browser.field('referrer').value
            === referrer);
          done();
        });
      });
  });

  test('visiting the "request group rate" page directly should result ' +
    'in an empty referrer field', function(done){
      browser.visit('http://localhost:8080/tours/request-group-rate',
        function(){
          assert(browser.field('referrer').value === '');
          done();
        });
    });
});
