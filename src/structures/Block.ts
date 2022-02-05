export class Block {
    private id: string;
    private properties: {[property: string]: any}

    constructor(id: string, properties: {[property: string]: any}) {
        this.id = id;
        this.properties = properties;
    }

    public getNumId() {
        return 0;
    }
}