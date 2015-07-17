'use strict';

import chai from 'chai';
//import helpers from './helpers';
import Github from '../api/github';

const expect = chai.expect;

const BAD_TOKEN = "badtoken",
      GOOD_TOKEN = "f839f7841f7276c6b688e67c4ba562cdd72bbe7b";

describe('sanity check', () => {
  it('is sane', () => {
    expect(true).to.equal(true);
  });
});

describe('Instantiation without token', () => {
  it('fails', () => {
    function test() {
      return new Github();
    }

    expect(test).to.throw();
  });
});

describe('Endpoint Test with good token', () => {
  let request;

  beforeEach(() => {
    request = new Github({ token: GOOD_TOKEN })
      .getEndpointCategories();
  });

  it('succeeds', (done) => {
    request
      .then((res) => {
        expect(res).to.have.property('status', 200);
        done();
      })
      .catch(done);
  });
  
  it('has data', (done) => {
    request
      .then((res) => {
        expect(res.body).to.have.property('current_user_url', 'https://api.github.com/user');
        done();
      })
      .catch(done);
  });
});

describe('Endpoint test With bad token', () => {
  let request;

  beforeEach(() => {
    request = new Github({ token: BAD_TOKEN })
      .getEndpointCategories();
  });

  it('fails with invalid token', (done) => {
    request
      .then(done)
      .catch((e) => {
        expect(e).to.have.property('status', 401);
        done();
      });
  });
});

