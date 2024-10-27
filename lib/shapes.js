class Shape{
    constructor(){
        this.color=""

    }
    setColor(color){
        this.color=(color);


    }
};

class Circle extends Shape{
    render(){
        return `<circle cx="100" cy="100" r="50" fill="lightblue" stroke="black" stroke-width="2"/>`
        
    }
};
    class Square extends Shape{
        render(){
            return `<rect x="50" y="50" width="100" height="100" fill="lightblue" stroke="black" stroke-width="2"/>`
        } 
};

class Triangle extends Shape{
    render(){
        return  `<polygon points="100,10 200,190 10,190" fill="lightblue"/>
        `
    }
};

module.exports = {Circle, Square, Triangle}