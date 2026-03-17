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

    lines = sortLines(lines);
}

function draw() {
    background(Settings.grey);
    renderGraph();
    noLoop();
}

function sortLines(arr) {
    let sortedArr = [];

    // While there is at least 1 item that needs to be sorted
    while (arr.length >= 1) {
        // Assume the first value in the array is the minimum
        let minItem = arr[0];

        // For each item in arr
        for (let i = 0; i < arr.length; i++) {
            // Compare it against the current minimum
            if (minItem.start.dateOBJ > arr[i].start.dateOBJ) {
                minItem = arr[i];
            }
        }

        // Push new minimum to sortedArr
        sortedArr.push(minItem);
        // Remove new minimum from the array being sorted
        arr.splice(arr.indexOf(minItem), 1);
    }

    return sortedArr;
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