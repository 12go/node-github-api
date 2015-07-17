'use strict';

import Promise from 'bluebird';
import url from 'url';
import request from 'superagent';

class API {

  constructor (opts = {}) {
    const { token } = opts,
          protocol = "https",
          host = "api.github.com";
    
    if (!token) {
      const e = new Error("NodeGithubApi :: need token!");
      console.error(e);
      throw e;
    }

    this.token = token;
    this.baseUrl = url.format({ protocol, host });
    this.headers = {
      "Accept": "application/vnd.github.v3+json",
      "User-Agent": "node-github-api"
    };
  }

  /* getEndpointCategories
   *
   * Just to test auth for now
   * will be removed
   */
  getEndpointCategories () {
    return new Promise((res, rej) => {
      request
        .get(this.baseUrl)
        .auth(this.token)
        .set(this.headers)
        .end((e, data) => {
          if (e) {
            rej(e);
          }
          else {
            res(data);
          }
        });
    });
  }
}

export default API;

