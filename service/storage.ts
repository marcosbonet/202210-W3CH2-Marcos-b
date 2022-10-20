export class Storage<T> {
    constructor(public storage: string = 'Pets') {}
    getStorage(): Array<T> {
        const dataString = localStorage.getItem(this.storage);
        if (!dataString) return [];
        return JSON.parse(dataString);
    }

    setStorage(data: Array<T>) {
        localStorage.setItem(this.storage, JSON.stringify(data));
    }
}
