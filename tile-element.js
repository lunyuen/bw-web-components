class TileElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    margin: 5px;
                    padding: 10px;
                    background-color: #F1C156;
                    border-radius: 5px;
                    text-align: center;
                    color: white;
                    user-select: none;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 28px;
                    position: relative; /* added this line */
                }
                .number {
                    position: absolute;
                    bottom: 12px;
                    right: 12px;
                    font-size: 14px;
                }
            </style>
            <div>${this.getAttribute('letter')}</div>
            <div class="number">${this.getAttribute('number')}</div>
        `;
    }
}

customElements.define('tile-element', TileElement);