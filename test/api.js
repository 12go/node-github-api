'use strict';

import chai from 'chai';
import api from '../api/api.js';
//import helpers from './helpers';

const expect = chai.expect;

const BAD_TOKEN = "badtoken",
      GOOD_TOKEN = "f839f7841f7276c6b688e67c4ba562cdd72bbe7b";

describe('sanity check', () => {
  it('is sane', () => {
    expect(true).to.equal(true);
  });
});

describe('Endpoint Test with good token', () => {
  let request;

  beforeEach(() => {
    request = new api({ token: GOOD_TOKEN })
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
    request = new api({ token: BAD_TOKEN })
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

