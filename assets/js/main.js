var gameMode = {
    troughthewall: 1,
    wallsaresolid: 2
};

window.onload = function () {

    //Element listeners for GameMode buttons
    var troughthewall_el = document.getElementById('through-the-wall')
    var wallsaresolid_el = document.getElementById('walls-are-solid')

    troughthewall_el.addEventListener("click", function () {
        mode = gameMode.troughthewall;
        troughthewall_el.classList.add('active-gamemode');
        wallsaresolid_el.classList.remove('active-gamemode');
    })

    wallsaresolid_el.addEventListener("click", function () {
        mode = gameMode.wallsaresolid;
        wallsaresolid_el.classList.add('active-gamemode');
        troughthewall_el.classList.remove('active-gamemode');
    })
}

function setUpGame() {
    document.getElementById('info-section').classList.add('invisible');
    document.getElementById('game-section').classList.remove('invisible');
    setUpCanvas();
}

function setUpCanvas() {
    // Setting up the canvas
    ctx = document.getElementById("game").getContext("2d");
    //ctx.canvas.style.background = "grey";

    resizeCanvasToDisplaySize(ctx.canvas);
}

function resizeCanvasToDisplaySize(canvas) {
    // look up the size the canvas is being displayed and multiply by percentage of canvas size

    const width = (window.innerWidth * 0.9)
    const height = (window.innerHeight * 0.6)
    const max_width = 510
    const max_height = 510;

    // make it dividable by 15 

    var ratioW = Math.floor(width / 15)
    var ratioH = Math.floor(height / 15)

    // determine the canvas size

    canvas.width = chooseLower((15 * ratioW), max_width);
    canvas.height = chooseLower((15 * ratioH), max_height);
}

//Helper functions

function chooseLower(a, b) {
    if (a > b) {
        return b
    }
    return a
}