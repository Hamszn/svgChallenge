const inquirer = require('inquirer');
const filesystem = require('fs');
const { Circle, Square, Triangle } = require("./lib/shapes");

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter three characters for the shape:',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword for the shape or a hexadecimal number:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword for the text:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Square', 'Triangle']
    },
];

inquirer.prompt(questions).then(answers => {
    let shape;
    switch (answers.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
    }
    shape.setColor(answers.shapeColor);

    const svgContent = `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text x="100" y="100" fill="${answers.textColor}" font-size="20" text-anchor="middle" alignment-baseline="middle">${answers.text}</text>
        </svg>
    `;

    filesystem.writeFileSync('logo.svg', svgContent.trim());
    console.log('SVG file created: logo.svg');
});