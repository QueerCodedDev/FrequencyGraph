let dataJSON;
let entryManager;
function preload() {
    dataJSON = loadJSON('res/individual_data.json');
    Settings.font = loadFont('res/Consolas.ttf');
}

function setup() {
    createCanvas(Settings.canvasW, Settings.canvasH);
    entryManager = new EntryManager(dataJSON);
}

function draw() {
    background(Settings.white);
    console.log(entryManager.dataEntriesByUniverseByAirDate);
    noLoop();
}