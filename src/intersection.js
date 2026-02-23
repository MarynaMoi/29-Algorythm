const arr1 = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))
const arr2 = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100))


function getIntersection (arr1, arr2) {
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


console.log(getIntersection(arr1, arr2))

