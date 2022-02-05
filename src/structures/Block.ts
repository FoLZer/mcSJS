export class Block {
    private id: string;
    private properties: {[property: string]: any} | null;

    constructor(id: string, properties: {[property: string]: any} | null) {
        this.id = id;
        this.properties = properties;
    }

    public getNumId() {
        return 0;
    }
}