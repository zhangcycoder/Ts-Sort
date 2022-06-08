import { NumberSort } from './Numbers'
import { StringSort } from './StringsSort'
import { LinkedList } from './LinkedList'
const num = new NumberSort([1, 2, 3, 4, 23, 12, 543, 21, 0, -2])
num.sort();
console.log(num, '1')

const str = new StringSort('azSQZsdqwdojicxnicbuyqs')
str.sort()
console.log(str)

const linkedList = new LinkedList();
linkedList.add(122)
linkedList.add(2)
linkedList.add(31)
linkedList.sort()

console.log(linkedList)