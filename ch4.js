// objects
let day1 = {
    squirrel: false,
    events: ['work', 'touched tree']
};

// console.log(day1.events)

// the sum of a range
function range(start, end, step) {
    outArr = []
    if (start < end){
        for (let i=start; i <= end; i=i + step) {
            outArr.push(i)
        }
    } else if (start > end){
        for (let i=start; i >= end; i += step) {
            outArr.push(i)
        }
    } else {
        outArr.push(start)
    }
    return outArr
}

console.log(range(1, 10, 2))
console.log(range(5, 2, -1))
console.log(range(5, 5, 1))


function sum(arr) {
    total = 0
    for (let ele of arr) {
        total += ele
    }
    return total
}

console.log(sum(range(1, 10, 2)))

// reversing an array
let arr1 = [1,2,3,4,5]

function reverseArray(arr) {
    newArr = []
    for (let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length; i++){
        arr.splice(i, 0, arr.pop());
    };
}

function reverseArrayInPlace2(arr) {
    for (let i = 0; i < arr.length/2; i++){
        let tmp = arr[i];
        arr[i] = arr[arr.length -1 -i];
        arr[arr.length -1 -i] = tmp;
    };
}

console.log(reverseArray(arr1));
reverseArrayInPlace2(arr1);
console.log(arr1);
reverseArrayInPlace(arr1);
console.log(arr1);

// List
function arrayToList(arr) {
    let list = {};
    for (let i=arr.length-1; i >= 0; i--) {
        list = {
            value: arr[i],
            rest: list
        }
    }
    return list
};

console.log(arrayToList([1,2,3]));

function listToArray(list) {
    let arr = []
    while (list.rest) {
        arr.push(list.value)
        list = list.rest
    }
    return arr
}
list1 = { value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } }
console.log(listToArray(list1));
console.log(list1);

function prepend(elem, list1) {
    retList = {
        value : elem,
        rest : list1
    }
    return retList
}

console.log(prepend(0, list1));

function nth(list, pos) {
    counter = 0
    for (let node = list; node; node = node.rest) {
        console.log(node);
        if (counter == pos) {
            return node.value
        }
        counter++
    }
}

function nth_recursive(list, pos) {
    for (let counter = 0; counter <= pos; counter++) {
        // console.log(counter);
        if (counter == pos) {
            return list.value;
        } else {
            return nth_recursive(pos-1, list.rest)
        }
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// DeepEqual



function deepEqual (o1, o2) {
    if (typeof(o1) == 'object' && o1 != null) {
        for (key of Object.keys(o1)) {
            return deepEqual(o1[key], o2[key])
        }
    } else {
        return o1 === o2
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true