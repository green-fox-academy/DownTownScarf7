'use strict';

import { Pirate } from './pirates';

class Captain extends Pirate {
  constructor(id, idShip) {
    super(id, idShip);
    this.id = `Captain ${id} of ${idShip}`;
    this.drunkness = 30;
    this.atk = 50;
    this.dfs = 50;
    this.health = 200;
    this.dead = false;
  }
}

export { Captain };
