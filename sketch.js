let dataJSON;
let entryManager;
let lines = [];

function preload() {
    dataJSON = loadJSON('res/individual_data.json');
    Settings.font = loadFont('res/Consolas.ttf');
}

function setup() {
    createCanvas(Settings.canvasW, Settings.canvasH);
    entryManager = new EntryManager(dataJSON.media);
    for (let e of entryManager.entriesByUniverseByAirDate) {
        lines.push(new Line(e));
    }
}

function draw() {
    background(Settings.grey);
    renderGraph();
    noLoop();
}

function renderGraph() {
    translate(0, Settings.canvasH);
    // Draw x axis
    stroke(Settings.black);
    line(0, 0, Settings.canvasW, 0);
}