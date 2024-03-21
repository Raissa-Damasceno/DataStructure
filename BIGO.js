const nemo = ["nemo"];

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array.includes("nemo")) {
      console.log("Found NEMO!");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}

findNemo(nemo);

// O(n) -> Linear Time  (The number of Operations depends of the number of elements)

let boxesArr = [1, 2, 3, 4, 5, 6, 7, 8];

function compressFirstBox(boxes) {
  let t0 = performance.now();
  console.log(boxes[0]);
  let t1 = performance.now();
  console.log("Compress the box took " + (t1 - t0) + " milliseconds");
}

compressFirstBox(boxesArr);

// O(1) -> Contant time  (The number of Operations will always be one)

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)

  // O(2) -> will also be a O(1), because is related with constant time(flat line)
}

logFirstTwoBoxes(boxesArr); //O(1) -> Contant time  (The number of Operations will always be one)

function anotherFunction() {
  console.log("Hi");
}

function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}

funChallenge(boxesArr);

const boxes = ["a", "b", "c", "d", "e"];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes);
