class Entry {
    constructor(data) {
        this.name  = data.name;
        this.title = data.title;
        this.uni   = data.universe;
        this.date  = data.air_date;

        this.prev;
        this.next;
    }
}