'use strict';

import { Pirate } from './pirates';

class Captain extends Pirate {
  constructor(id) {
    super(id);
    this.id = `Captain ${id}`;
    this.drunkness = 30;
    this.atk = 50;
    this.dfs = 50;
    this.health = 200;
    this.dead = false;
  }
}

export { Captain };
