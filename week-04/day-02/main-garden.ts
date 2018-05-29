'use strict';

import { Garden } from './garden';

let g: Garden = new Garden();
g.addFlower('yellow');
g.addTree('brown');
g.checkGarden();
g.water(40);
g.water(70);
