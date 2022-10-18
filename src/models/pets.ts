export class Pets {
    id: number;
    static crearId() {
        return Math.round(Math.random() * 1_000_000);
    }
    constructor(
        public name: string,
        public race: string,
        public owner: string
    ) {
        this.id = Pets.crearId();
    }
}
