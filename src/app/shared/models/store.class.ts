export class Store {
    Fotos: string[];
    Item: string;
    Tamanhos: string[] = [];
    Valor: number;
    id: number;

    constructor(json: any) {
        Object.assign(this, json);
    }

}