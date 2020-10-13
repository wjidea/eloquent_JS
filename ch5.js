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

// easy version
let arrays2 = [[1, 2, 3], [4, [5, 7]], [6]];
console.log(arrays2.reduce((a, b) => a.concat(b)));
// → [1, 2, 3, 4, 5, 6]

// your own loop
function loop(start, test, update, body) {
    for (let v = start; test(v); v = update(v)) {
        body(v);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);

// recursive way
function loop2(start, test, update, body) {
    if (test(start)) {
        body(start);
    } else {
        return false
    }
    return loop2(update(start), test, update, body)
}

loop2(3, n => n > 0, n => n - 1, console.log);


// Everything
function every(arr, test) {
    let allTrue = true;
    for (elem of arr) {
        if (!test(elem)) {
            allTrue = false;
            return allTrue
        }
    }
    return allTrue
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// some version
/* !(A && B) === !A || !B
   (A && B) === ! (!A || !B) */
function every2(arr, test) {
    return !arr.some(a => !test(a));
}
console.log(every2([1, 3, 5], n => n < 10));
console.log(every2([2, 4, 16], n => n < 10));
console.log(every2([], n => n < 10));


function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
}

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
        })) {
        return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
        counts.push({name, count: 1});
        } else {
        counts[known].count++;
        }
    }
    return counts;
}


// load dependencies
require("05_higher_order/code/load.js")("05_higher_order/code/scripts.js", "05_higher_order/code/chapter/05_higher_order.js", "05_higher_order/code/intro.js");

// node 05_higher_order/run_with_node.js

function textScriptsMost(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({name}) => name != "none");
    if (scripts.length > 1) {
      return scripts.reduce((s1, s2) => {return (s1.count > s2.count ? s1.name : s2.name)} );
    } else {
      return scripts[0].name;
    }

  }


  function dominantDirection(text) {
      // Your code here.
      script = SCRIPTS.filter( script => script.name === textScriptsMost(text))[0]
      return `name: ${script.name}, direction: ${script.direction}`;

  }

  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl