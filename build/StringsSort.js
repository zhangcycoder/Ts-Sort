"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringSort = void 0;
const Sort_1 = require("./Sort");
class StringSort extends Sort_1.Sortable {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    ;
    swap(leftIndex, rightIndex) {
        let list = this.data.split('');
        const leftHead = list[leftIndex];
        list[leftIndex] = list[rightIndex];
        list[rightIndex] = leftHead;
        this.data = list.join('');
    }
    ;
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
    }
}
exports.StringSort = StringSort;
