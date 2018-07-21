import Fighter from './fighter';
import ImprovedFighter from './improvedFighter';
import fight from './fight';

// create two instances
let fighter1 = new Fighter('First Fighter', 3, 100);
let fighter2 = new ImprovedFighter('Second Fighter', 4);
let points = [2, 2, 3, 1, 10, 4, 3, 1, 5, 4, 3, 4];


// call fight function
fight(fighter1, fighter2, ...points)