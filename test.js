let One = [6,7];
let run = One[Math.floor(Math.random() * One.length)];
console.log(run);
let walk = One.filter(data => data != run)[0];
console.log(walk)