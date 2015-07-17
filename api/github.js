'use strict';

import API from './api';
import Repos from './repos';

class Github extends API {
  constructor(opts = {}) {
    super(opts);
    this.Repos = new Repos();
  }
}

export default Github;

