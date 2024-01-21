class ButtonElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._onClick = () => {};
    }

    connectedCallback() {
        this.render();
        this.addEventListener('click', this._onClick);
    }

    disconnectedCallback() {
        this.removeEventListener('click', this._onClick);
    }

    set onClick(value) {
        if (typeof value === 'function') {
            this._onClick = value;
        }
    }

    get onClick() {
        return this._onClick;
    }

    render() {
        const label = this.getAttribute('label') || 'Click me!';

        this.shadowRoot.innerHTML = `
            <style>
                button {
                    padding: 10px;
                    background-color: #115BD9;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
            </style>
            <button>${label}</button>
        `;
    }
}

customElements.define('button-element', ButtonElement);