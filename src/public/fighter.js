// Create class Fighter
export default class Fighter {
    constructor(name, power, health) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    setDamage(damage) {
        this.health = this.health - damage;
        if (this.health < 0){
            this.health = 0;
        }
        console.log(`${this.name}'s health: ${this.health}`);
    }

    hit(enemy, point) {
        let damage = point * this.power;
        console.log(`Damage ${damage}`);
        enemy.setDamage(damage);
    }

    knockout() {
        let promise = new Promise((resolve, reject) => {
            console.log('Game over');
            setTimeout(() => {
                resolve();
            }, 500);
        });

        return promise;
    }
}