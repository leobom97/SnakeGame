window.onload = function(){
    /*Toda a parte gráfica do jogo
    aqui estamos definindo o gráfico do palco do jogo

    */
    var stage = document.getElementById("stage");
    var context = stage.getContext('2d');
    document.addEventListener("keydown", keyPush);

    setInterval(game, 60);

    /*quantidade de casas que a cobra 
    tem que andar toda vez que iniciar o game*/
    const vel = 1;
    // Velocidades Iniciais
    var vx = 0;
    var vy = 0;
    var px = 10;
    var py = 15;
    var tp = 20;
    var qp = 20;
    var maçax = 15;
    var maçay = 15;

    var rastro = [];
    cauda = 5;

    //Atualizar a posição da cabeça da cobra
    function game(){
        px += vx;
        py += vy;
        if(px <0){
            px = qp-1;
        }
        if(px > qp-1){
            px=0;
        }
        if(py < 0){
            py = qp-1;
        }
        if(py > qp-1){
            py = 0;
        }

        //Posição Inicial
    context.fillStyle = "black";
    context.fillRect(0,0, stage.width, stage.height);

    context.fillStyle = "orange";
    context.fillRect(maçax*tp, maçay*tp, tp,tp);

    context.fillStyle = "blue";
    for(var i = 0; i < rastro.length; i++){
        context.fillRect(rastro[i].x*tp, rastro[i].y*tp, tp,tp);
        if(rastro[i].x == px && rastro[i].y == py)
        {
            vx = vy=0;
            cauda = 5;
        }
      }
      rastro.push({x:px, y:py})
      while(rastro.length > cauda){
            rastro.shift();
      }

        if(maçax==px && maçay==py){
            cauda++;
            maçax = Math.floor(Math.random()*qp);
            maçay = Math.floor(Math.random()*qp);
        }

    }
    //Movimentação
    function keyPush(event){

        switch(event.keyCode){
            case 37:    //Esquerda
                vx = -vel;
                vy = 0;
                break;
            case 38:    //Cima
                vx = 0;
                vy = -vel;
                break;
            case 39:    //Direita
                vx = vel;
                vy = 0;
                break;
            case 40:    //Pra baixo
                vx = 0;
                vy = vel;
                break;            
        }
    }


    
}