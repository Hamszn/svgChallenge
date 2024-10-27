const {Circle, Square, Triangle} = require("./shapes");
// Write the SVG to a file

//Circle class
describe('Circle', () => {
    test(' renders correctly', () => {
        const shape = new Circle();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="100" cy="100" r="50" fill="${this.color}" stroke="black" stroke-width="2"/>`);
    });
});
//Square class
describe('Square', () => {
    test(' renders correctly', () => {
        const shape = new Square();
        var color =('darkblue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="100" height="100" fill="${this.color}" stroke="black" stroke-width="2"/>`);
    });
});
// Triangle class
describe('Triangle', () => {
    test(' renders correctly', () => {
        const shape = new Triangle();
        var color =('purple')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="100,10 200,190 10,190" fill="${this.color}" stroke="black" stroke-width="2"/`);
    });
});