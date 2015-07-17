'use strict';

import Promise from 'bluebird';
import url from 'url';
import request from 'superagent';
import repos from './repos';

export default API;

function API({ token }) {

  const protocol = "https",
        host = "api.github.com",
        headers = {
          "Accept": "application/vnd.github.v3+json",
          "User-Agent": "node-github-api"
        },
        baseUrl = url.format({ protocol, host });

  const getEndpointCategories = () => {
    return new Promise((res, rej) => {
      request
        .get(baseUrl)
        .auth(token)
        .set(headers)
        .end((e, data) => {
          if (e) {
            rej(e);
          }
          else {
            res(data);
          }
        });
    });
  };

  return {
    getEndpointCategories,
    repos
  };
}

