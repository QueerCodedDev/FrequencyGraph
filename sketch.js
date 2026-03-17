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

    let sortedLines = [];
    let min = lines[0];
    for (let line of lines) {
        if (min.start.date > line.start.date) {
            min = line;
        }
        // Push new minimum to sortedArr
        sortedLines.push(min);
        // Remove new minimum from the array being sorted
        lines.splice(lines.indexOf(min), 1);
    }

    lines = sortedLines;
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
    for (let i = 0; i < Settings.canvasW; i++) {
        line(Settings.xINC * i, -10, Settings.xINC * i, 10);
    }


    // Draw y axis (EPISODES)
    line(0, 0, 0, -Settings.canvasH)
    for (let i = 0; i < Settings.canvasH; i++) {
        line(-10, -Settings.yINC * i, 10, -Settings.yINC * i);
    }

    for (let l of lines) {
        l.render();
    }
}