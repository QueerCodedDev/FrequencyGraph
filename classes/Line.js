class Line {
    constructor(entries) {
        this.dataPoints = entries;
        this.color = Settings.UNI_COLORS[this.dataPoints[0].uni];
    }
}