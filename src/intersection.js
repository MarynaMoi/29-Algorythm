const arr1 = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))

const arr2 = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))

function getIntersection1 (arr1, arr2) {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  const arr = Array.from(set1.intersection(set2))
  return arr
}

function getIntersection2 (arr1, arr2) {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  const arr = []
  for (const val of set1) {
    if (set2.has(val)) {
      arr.push(val)
    }
  }
  return arr
}

function getIntersection3 (arr1, arr2) {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  const set3 = new Set()

  for (const val of set1) {
    if (set2.has(val)) {
      set3.add(val)
    }
  }
  const arr = Array.from(set3)
  return arr
}

// console.log(arr1)
// console.log(arr2)
console.log(getIntersection1(arr1, arr2))
console.log(getIntersection2(arr1, arr2))
console.log(getIntersection3(arr1, arr2))
