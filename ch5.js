// flatten
let arrays = [[1, 2, 3], [4, 5], [6, [1,2,3,4]]];
let newArr = [];

function flatD (a, b) {
    if (typeof(a) == 'object') {
        return a.concat(b)
    } else if (typeof(a) != 'object' && typeof(b) == 'object') {
        return b.splice(b.length, 0, a)
    } else {
        return [a, b]
    }
}

function flatten (arr) {
    newArr = arr.reduce((a, b) => flatD(a, b));
    if (newArr.some((a) => typeof(a) == 'object')) {
        return flatten(newArr)
    } else {
        return newArr
    }
}

console.log(flatten(arrays));