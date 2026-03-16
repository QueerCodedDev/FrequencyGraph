let dataJSON;

function preload() {
    dataJSON = loadJSON('res/individual_data.json').media;
    Settings.font = loadFont('res/Consolas.ttf');
}

function setup() {
    createCanvas(Settings.canvasW, Settings.canvasH);

}

function draw() {
    background(Settings.darkGrey);
    console.log(dataJSON);
    noLoop();
}