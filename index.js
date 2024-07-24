const inquirer = require('inquirer');
const filesystem = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");

class Svg{
    constructor(){
        this.textElement = ""
        this.shapeElement = ""
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100" height="100">${this.textElement}${this.shapeElement}</svg>`
    }

    setTextElement(text,color){
        this.textElement = `<text x="150" y="125 font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}

const questions = [
    {
        type: 'input',
        name: 'text',
        message:'Enter three characters for the shape:',
    },

    {
        type: 'input',
        name: 'shape-color',
        message: 'Enter a color keyword for the shape or a hexadecimal number:',
    },

    {
        type: 'input',
        name: 'text-color',
        message: 'Enter a color keyword for the text:',
    },

    {
        type: 'list',
        name:'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Square', 'Triangle']
    },

];


inquirer.prompt(questions).then(answers => {
    const svg = new Svg();
    svg.setTextElement(answers.text, answers.text_color);
    const shape = new Circle();
    shape.setColor(answers.shape_color);
    if (answers.shape === 'Circle') {
        svg.setShapeElement(shape, answers.shape_color);
        console.log(svg.render());
    }
    if (answers.shape === 'Square') {
        shape = new Square();
        svg.setShapeElement(shape, answers.shape_color);
        console.log(svg.render());
    }
    if (answers.shape === 'Triangle') {
        shape = new Triangle();
        svg.setShapeElement(shape, answers.shape_color);
        console.log(svg.render());
    }
    // Save SVG to file
    filesystem.writeFile('logo.svg', svg.render(), (err) => {
        if (err) throw err;
        console.log('SVG saved to logo.svg');
    });
});
