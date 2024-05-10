// krok 1 - premenná, ktorá bude zisťovať, ktorý tile má mole
let currMoleTile;
// vytvárame to isté, len pre rastlinu
let currPlantTile;
//ideme vytvoriť kliknuteľné tily a počítanie
let score = 0;
let gameOver = false;

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
        //pridávame kliker - umožňuje vybrať tile
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    //nastavujeme interval zobrazenia na každých 1000 a 2000milisek
    setInterval(setMole, 900);
    setInterval(setPlant, 1800);
}
// 4 do funkcie ideme dosadiť výpočet náhodnosti
function getRandomTile(){
    //vzorec pre náhodné číslo od 0 po 8 - zaokrúhľujeme totiž nadol
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

// 2 funkcia naviazaná na mole - tá to bude zisťovať
function setMole(){
    //nastavenie konca hry - ak hra už nie je 
    if (gameOver) {
        return;
    }

    //nastavujeme neustále vymazávanie mole pred spusetním - nech ich nie je nekonečno
    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./ruby.png";
    // 3 náhodná funkcia
    let num = getRandomTile();
    //pridávame podmienku aby sa nezobrazoval mole a plant na rovnakom poli
    if (currPlantTile && currPlantTile.id === num) {
        return;
    }
    // 5 vkladáme obrázok do funkcie, ktorá náhodne vyvolá mole
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    //nastavenie vynulovania pri Gameover
    if(gameOver){
        return;
    }
    //vymazanie pred každým klikom
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    //nastavenie obrázka
    let plant = document.createElement("img");
    plant.src = "./ghost.png";
    //nastavenie random funkcie pre výpočet
    let num = getRandomTile();
    //nastavenie podmienky pre zobrazenie tilov
    if (currMoleTile && currMoleTile.id === num){
        return;
    }
    //vyberáme a appendujeme obrázok
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}
//vytvárame klikaciu funkciu
function selectTile(){
    if (gameOver){
        return;
    }
    // toto kontroluje, či klikáme na obrázok mole - zvyšuje body a priraďuje ho ku konkr. ID
    if (this === currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString()
    } else if (this === currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}