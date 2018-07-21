// Create class ImprovedFighter
class ImprovedFighter extends Fighter {
    constructor(name, power, health) {
        super(name, power, health);
    }

    doubleHit(enemy, point) {
        point = point * 2;
        super.hit(enemy, point);
    }
}