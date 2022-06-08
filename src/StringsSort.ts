import { Sortable } from './Sort'
export class StringSort extends Sortable {
    constructor(public data: string) {
        super()
    }
    get length(): number {
        return this.data.length
    };
    swap(leftIndex: number, rightIndex: number): void {
        let list = this.data.split('');
        const leftHead = list[leftIndex];
        list[leftIndex] = list[rightIndex];
        list[rightIndex] = leftHead;
        this.data = list.join('')
    };
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
    }
}