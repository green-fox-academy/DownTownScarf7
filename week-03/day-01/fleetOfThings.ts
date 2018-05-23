export{};
'use strict';
//*import {Thing} from "./thing";*/
import {Fleet} from "./fleet";
import {Thing} from "./thing";

let fleet = new Fleet(),
    getMlk = new Thing('Get milk'),
    rmO = new Thing('Remove the obstacles'),
    stndUp = new Thing('Stand up'),
    eatLnch = new Thing('Eat lunch');
/*
Create a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
Hint: You have to create a Print method also
*/

fleet.add(getMlk);
fleet.add(rmO);
fleet.add(stndUp, true);
fleet.add(eatLnch, true);
fleet.print();
