export class Pets {
    constructor(name, race, owner) {
        this.name = name;
        this.race = race;
        this.owner = owner;
        this.id = Pets.crearId();
    }
    static crearId() {
        return Math.round(Math.random() * 1000000);
    }
}
