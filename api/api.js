'use strict';

import Promise from 'bluebird';
import url from 'url';
import request from 'superagent';

const API = ({ token }) => {

  const protocol = "https",
        host = "api.github.com",
        headers = {
          "Accept": "application/vnd.github.v3+json"
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
  }

  return {
    getEndpointCategories
  };
};

export default API;

