// load dependencies
require("./code/load")("code/scripts.js", "code/chapter/05_higher_order.js", "code/intro.js");

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));


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