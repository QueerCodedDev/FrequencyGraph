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
    translate(Settings.offset, Settings.canvasH - Settings.offset);
    
    stroke(Settings.black);
    // Draw x axis (DATE)
    line(0, 0, Settings.canvasW, 0);
    line(Settings.xINC, -10, Settings.xINC, 10);


    // Draw y axis (EPISODES)
    line(0, 0, 0, -Settings.canvasH)

    //lines[0].render();
}