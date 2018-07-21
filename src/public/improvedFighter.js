import Fighter from './fighter'

// Create class ImprovedFighter
export default class ImprovedFighter extends Fighter {
    constructor(name, power, health) {
        super(name, power, health = 110);
    }

    doubleHit(enemy, point) {
        point = point * 2;
        super.hit(enemy, point);
    }
}