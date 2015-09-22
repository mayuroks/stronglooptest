var assert = require('assert')
var superagent = require('superagent')
var server = require('../server')
var status = require('http-status')

describe('/note', function() {
  var app;

  it('should return 200 status', function(done) {
    superagent.get('http://localhost:3000/api/notes').end(function(err, res) {
      assert.ifError(err);
      assert.equal(res.status, status.OK);
      var results = JSON.parse(res.text);
      done();
    });
  });
});
