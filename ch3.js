// recursion 1
function power(base, exponent) {
    if (exponent == 0) {
        return 1
    } else {
        return base * power(base, exponent - 1)
    }
}

console.log(power(2,2))

// recursion 2
function findSolution(target) {
    function find(current, history) {
        // console.log(current, history)
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1")
}
console.log(findSolution(14));

// minimum
function minOfTwo(x, y){
    if (x > y) {
        console.log(y)
    } else {
        console.log(x)
    }
}

// Recursion
function isEven(num) {
    if (num == 1) {
        return num;
    } else if (num == 0) {
        return num;
    } else if (num < 0) {
        return 'Negative number detected'
    } else {
        return isEven(num - 2);
    }
}
console.log(isEven(75))

// Bean counting
function countBs(str1){
    let counter = 0
    for (let idx=0; idx < str1.length; idx++) {
        if (str1[idx] == 'B') counter++
    }
    return counter
}
console.log(countBs('HDBdfasbfsdaBBB'), 'B')

function countChrs(str1, chr1){
    let counter = 0
    for (let idx=0; idx < str1.length; idx++) {
        if (str1[idx] == chr1) counter++
    }
    return counter
}
console.log(countChrs('HDBdfasbfsdaBBB', 'f'), 'f')
