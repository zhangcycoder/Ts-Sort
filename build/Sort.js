"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sortable = void 0;
// interface ISort {
//     length: number;
//     compare: (leftIndex: number, rightIndex: number) => boolean;
//     swap: (leftIndex: number, rightIndex: number) => void;
// }
class Sortable {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sortable = Sortable;
