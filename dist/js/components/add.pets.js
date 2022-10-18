import { Component } from './component.js';
export class AddPets extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
    }
    createTemplate() {
        return `
        <form>
            <div>
                <input type="name" id="name" placeholder="Cuál es tu Mascota?" required>
            </div>
            <div>
                <input type="race" id="race" placeholder="Que raza es tu mascota?">
            </div>
            <div>
                <input type="owner" id="resp" placeholder="quien es el dueño?">
            </div>
            
            <button type="submit">Guardar</button>
        </form>
        `;
    }
}
