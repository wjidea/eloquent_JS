// A vector type
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length() {
        let distance = Math.sqrt(this.x**2 + this.y**2);
        return distance;
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// Groups

class Group {
    constructor(collection=[]) {
        this.group = collection;
    }

    add(val) {
        if (!this.has(val)) {
            this.group.push(val);
        }
    }

    delete(val) {
        this.group = this.group.filter(arrItem => arrItem !== val);
    }

    has(val) {
        return this.group.includes(val);
    }

    static from(collection) {
        let group = new Group;
        for (let val of collection) {
            group.add(val)
        }
        return group;
    }

    // [Symbol.iterator]() {
    //     return new GroupIterator(this);
    // }

}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


// Iterable Groups
class GroupIterator {
    constructor (groupObj) {
        this.groupObj = groupObj;
        this.idx = 0;
    }

    next() {
        if (this.idx == this.groupObj.group.length) {
            return {done: true};
        } else {
            let value = this.groupObj.group[this.idx];
            this.idx++;
            return {value, done: false};
        }

    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}


// Borrowing a Method
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, 'one'));
// → true