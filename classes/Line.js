class Line {
    constructor(entries) {
        this.dataPoints = entries;

        // Get first and last data points
        this.start = this.dataPoints[0];
        this.end   = this.dataPoints[this.dataPoints.length-1];

        // Get rest of data points
        this.connectEntries(this.dataPoints);
        // Get color of line
        this.color = Settings.UNI_COLORS[this.dataPoints[0].uni];
    }

    connectEntries(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == this.start) {
                arr[i].prev = null;
                arr[i].next = arr[i+1];
            } else if (arr[i] == this.end) {
                arr[i].prev = arr[i-1];
                arr[i].next = null;
            } else {
                arr[i].prev = arr[i-1];
                arr[i].next = arr[i+1];
            }
        }
    }

    // x = DATE, y = EPISODES
    // map(value, val_low, val_high, target_low, target_high);

    // The values below are just for testing, and do NOT AT ALL reflect how this should be handled
    // The val_high should not be based on this.end, but based on the over-all range of dates.
    render() {
        stroke(this.color);
        for (let e of this.dataPoints) {
            if (e == this.end) return;
            let x1 = map(new Date(e.date).getTime(), Settings.EARLIEST.getTime(), Settings.LATEST.getTime(), 0, Settings.canvasW);
            let y1 = (this.dataPoints.indexOf(e));
            let x2 = map(new Date(e.next.date).getTime(), Settings.EARLIEST.getTime(), Settings.LATEST.getTime(), 0, Settings.canvasW);
            let y2 = (this.dataPoints.indexOf(e.next));

            line(x1, -y1, x2, -y2);
        }

        
    }
}