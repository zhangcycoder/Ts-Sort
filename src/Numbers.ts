import { Sortable } from './Sort'
export class NumberSort extends Sortable {
    constructor(public data: number[]) {
        super();
    }
    get length(): number {
        return this.data.length;
    }
    swap(leftIndex: number, rightIndex: number): void {
        const leftHead = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHead;
    }
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }
}