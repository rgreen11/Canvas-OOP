let canvas = document.querySelector('.canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');


// Square
// c.fillStyle = 'green';
// c.fillRect(100,500,100,100)
// c.fillStyle = 'red';
// c.fillRect(400,700,100,100)
// c.fillStyle = 'blue';
// c.fillRect(700,300,100,100)

// Line
// c.beginPath();
// c.moveTo(30,100);
// c.lineTo(300, 500);
// c.lineTo(200, 400);
// c.lineTo(1000, 400);
// c.lineTo(1000, 100);
// c.strokeStyle = 'green';
// c.stroke();

// Arc / Circle & Animation

class Circle {
    constructor(x,y,dx,dy, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }
    draw (){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, true);
        c.strokeStyle = 'blue';
        c.fill()

        c.stroke();
    }

    update(){
        console.log('hi')
        if(this.x + this.radius > window.innerWidth){
            this.dx --;
        } else if(this.x - this.radius < 0 ) {
            this.dx ++;
        }
    
        if(this.y + this.radius > window.innerHeight){
            this.dy --;
        } else if(this.y - this.radius < 0 ) {
            this.dy ++;
        }
        this.y += this.dy
        this.x += this.dx
        
        this.draw()
    }
}

const multipleCircle = []

for(let i = 0; i < 150; i++){
    let radius = 30;
    let x = Math.random() * (innerWidth  - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5);
    let dy = (Math.random() - 0.5);
    multipleCircle.push(new Circle(x, y, dx, dy,radius));

}

function animate (){
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);
    for(let i = 0; i < multipleCircle.length; i++){
        multipleCircle[i].update()
    }   
}

    animate()
