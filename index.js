const inquirer = require('inquirer');
const filesystem = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");

class Svg{

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
   
});