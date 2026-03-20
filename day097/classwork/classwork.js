// cw1
const cw = sentence => sentence.trim().split(" ").length;


// cw2
const verify = arr => arr.every(item => typeof item === 'string');

console.log(verify(["apple", "banana", "cherry"]));
console.log(verify(["apple", 1, "cherry"]));


// cw3
const allActive = arr => arr.every(item => item.status === 'active');

const arr1 = [{ status: 'active' }, { status: 'active' }, { status: 'active' }];
console.log(allActive(arr1));

const arr2 = [{ status: 'active' }, { status: 'inactive' }, { status: 'active' }];
console.log(allActive(arr2));
