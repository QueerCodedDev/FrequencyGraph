class Line {
    constructor(entries) {
        this.dataPoints = entries;

        // Get first and last data points
        this.start = this.dataPoints[0];
        this.end   = this.dataPoints[dataPoints.length-1];

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

    render() {
        
    }
}