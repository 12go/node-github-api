'use strict';

import request from 'superagent';
import url from 'url';
import chai from 'chai';

var expect = chai.expect;

describe('sanity check', () => {
  it('is sane', () => {
    expect(true).to.equal(true);
  });
});

describe('GH API test', () => {
  it('authenticates', (done) => {
    const protocol = "https",
          host = "api.github.com",
          headers = {
            "Accept": "application/vnd.github.v3+json"
          },
          reqUrl = url.format({ protocol, host });

    request
      .get(reqUrl)
      .auth('f839f7841f7276c6b688e67c4ba562cdd72bbe7b')
      .set(headers)
      .end((e, data) => {
        if (e) {
          done(e);
        }
        else {
          expect(data).to.have.property('status', 200);
          done();
        }
      });
  });
});

