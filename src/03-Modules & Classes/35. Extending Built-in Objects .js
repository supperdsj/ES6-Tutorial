/**
 * Created by dongsj on 2016/12/23.
 */
class ConvertableArray extends Array {
    convert() {
        let returnArray = [];
        this.forEach(value => returnArray.push('Converted!' + value));
        return returnArray;
    }
}
let numberArray = new ConvertableArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);
console.log(numberArray);
console.log(numberArray.convert());