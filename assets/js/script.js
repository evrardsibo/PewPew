window.onload = () =>{

    window.addEventListener("resize", () => {
        document.getElementById("mon_canvas").width = document.body.clientWidth;
    })
    function reload() {
        window.location.reload();
    }
    document.getElementById("rest").addEventListener("click" , () => {
        reload()
    })
    document.getElementById("start").addEventListener("click" , () => {

    let canvas = document.getElementById("mon_canvas");
    let ctx= canvas.getContext('2d');
    let x = 500;
    let y = 940;
    let xprime = 200;
    let yprime = 50;
    let bullets = [];
    const button = document.getElementById('start');
    document.getElementById("start").style.display = "none";
    score = 0;

    button.disabled = true;

    function draw() {
        ctx.clearRect(0, 0, c.width, c.height)
        drawCanon();
        cible();
        for (let i = 0; i < bullets.length; i++) {
            let bullet = bullets[i];
            bullet.y -= 25;
            projeCti(bullet.x, bullet.y);
            if (bullet.y >= 0) {
                projeCti(bullet.x, bullet.y)

            }
        }
        requestAnimationFrame(draw);
    }


    function drawCanon(){

        // canon

        ctx.beginPath();
        ctx.moveTo(100,300);
        ctx.lineTo(50,500);
        ctx.lineTo(20,300);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fillRect(15,340,10,20);
        ctx.fillRect(90,340,10,20);
        
    }
    drawCanon()

    function projeCti (x,y){

        ctx.beginPath();
        ctx.arc(70,200,10,0,Math.PI*2,true);
        ctx.strokeStyle = "yellow";
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.stroke();

        if (y <= yprime && xprime - 40 <= x && xprime + 40 >= x) {

            bullets = bullets.filter(values => {
                values.y !== y
            })
            xprime = Math.floor(Math.random() * ((c.width - 100) - 100) + 100);
            console.log("colision")
            score++;
            document.getElementById("scrore").innerHTML = "scrore : " + score;
            if (score === 10) {
                document.getElementById("cong").innerHTML = "Bravo !";
                document.getElementById("rest").style.display = "block";
                
            }
        }
    }
    projeCti()

    
    function cible(){

        ctx.fillStyle = "red";
        ctx.fillRect(00,50,50,10);

    }
    cible()

    xprime = Math.floor(Math.random() * ((c.width - 100) - 100) + 100);
        draw();

        document.onkeydown = function (e) {
            if (score < 10) {
                switch (e.keyCode) {
                    case 37:
                        if (x - 10 - 90 > 0) {
                            x = x - 10
                        }
                        break;
                    case 39:
                        if (x + 10 + 90 < c.width) {
                            x = x + 10;
                        }
                        break;
                    case 32:
                        bullets.push({ x: x, y: y - 200 })
    
                        break;
                }
            }
        }

    })
}






