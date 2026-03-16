class Entry {
    constructor(data) {
        this.name  = data.name;
        this.title = data.title;
        this.uni   = data.universe;
        this.date  = data.date;

        this.prev;
        this.next;
    }
}