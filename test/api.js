'use strict';

import request from 'superagent';
import url from 'url';
import chai from 'chai';

var expect = chai.expect;

describe('sanity check', function() {
  it('is sane', function() {
    expect(true).to.equal(true);
  });
});

describe('GH API test', function() {
  beforeEach(function(done) {
    var headers,
          protocol,
          host,
          reqUrl;

    protocol = "https";
    host = "api.github.com";
    headers = {
      "Accept": "application/vnd.github.v3+json"
    };

    reqUrl = url.format({ protocol, host });

    request
      .get(reqUrl)
      .auth('archanid', 'f839f7841f7276c6b688e67c4ba562cdd72bbe7b')
      .set(headers)
      .end((err, data) => {
        if (err) {
          console.log("oops!", err);
          done();
        }
        else {
          console.log("yay!", data);
          done();
        }
      });
  });

  it('authenticates', function() {

  });
});

