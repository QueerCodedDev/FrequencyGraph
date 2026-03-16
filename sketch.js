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
    lines.push(new Line(entryManager.entriesByUniverseByAirDate[1]));
    // for (let e of entryManager.entriesByUniverseByAirDate) {
    //     lines.push(new Line(e));
    // }
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

    for (let l of lines) {
        console.log(l.color)
        console.log(l.dataPoints)
        l.render();
    }
}