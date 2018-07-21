// create async function fight
export default async function fight(fighter1, fighter2, ...points) {
    for (let point of points) {
        console.log('Fighter 1 hits');
        fighter1.hit(fighter2, point)

        if (fighter2.health <= 0) {
            console.log('Fighter 2 dies');
            return await fighter2.knockout();
        }

        console.log('Fighter 2 hits');
        fighter2.doubleHit(fighter1, point)

        if (fighter1.health <= 0) {
            console.log('Fighter 1 dies');
            return await fighter1.knockout();
        }
    }
}