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
    translate(25, Settings.canvasH - 25);
    
    stroke(Settings.black);
    // Draw x axis
    line(0, 0, Settings.canvasW, 0);
    // Draw y axis
    line(0, -Settings.canvasH + 25, 0, Settings.canvasH + 25)
}