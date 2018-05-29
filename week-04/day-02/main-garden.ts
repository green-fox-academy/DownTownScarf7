'use strict';

import { Garden } from './garden';

let g: Garden = new Garden(0, 0);
g.addFlower('yellow');
g.addTree('brown');
g.checkGarden();
g.water(40);
g.water(70);
