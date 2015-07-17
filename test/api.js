'use strict';

import chai from 'chai';
import api from '../api/api.js';
//import helpers from './helpers';

const expect = chai.expect;

describe('sanity check', () => {
  it('is sane', () => {
    expect(true).to.equal(true);
  });
});

describe('Get Endpoint Categories', () => {
  let request;

  beforeEach(() => {
    request = api({ token: "f839f7841f7276c6b688e67c4ba562cdd72bbe7b" })
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

