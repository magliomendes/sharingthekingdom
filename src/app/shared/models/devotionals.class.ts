export class Devotionals {
    id: number;
    title: string;
    description: string;
    imageKey: string;

    constructor(json: any) {
        Object.assign(this, json);
    }

}