"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberSort = void 0;
const Sort_1 = require("./Sort");
class NumberSort extends Sort_1.Sortable {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    swap(leftIndex, rightIndex) {
        const leftHead = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHead;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
}
exports.NumberSort = NumberSort;
