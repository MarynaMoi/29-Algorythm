
const arr1 = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

const arr2 = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

function getIntersection (arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const arr = set1.intersection(set2);
  return arr;
}

console.log(arr1);
console.log(arr2);
console.log(getIntersection(arr1, arr2));