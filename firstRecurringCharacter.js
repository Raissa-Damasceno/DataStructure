const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];

function firstRecurringCharacter(arr) {
  let test = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
return undefined
}

function firstRecurringCharacter(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
    console.log(map);
  }
}

firstRecurringCharacter(arr);
