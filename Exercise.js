function getCommonElementInToArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(true)
      }
      console.log(false)
    }
  }
}

getCommonElementInToArrays(array1, array2);

const arr = [1, 1, 2, 2, 3, 4, 5]

function arrCount(arr) {
  const m = new Map();
  for (let i = 0; i < arr.length; i++) {
    let num = m.get(arr[i]) || 0;
    m.set(arr[i], num + 1);
    console.log(m)
    console.log(arr[i])
  }
  console.log(m);
}

arrCount(arr)
