


//pri otváraní okna privoláme setGame
window.onload = function(){
    setGame();
}
// definujeme setgame
function setGame(){
    //nastavíme grid pre div board v HTML
    //i ide od nuly po osem
    for (let i = 0; i < 9; i++){
        //vytvárame div do ktorého vkladáme tily s id od 0 po osem <div id=0-8></div>
        //tu budeme zisťovať, na ktorý tile hráč klikol a ktorý tile obsahuje rastlinu a ktorý bobra
        let tile = document.createElement("div")
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }
}