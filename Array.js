class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];

    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("Raissa");
newArray.push("Caroline");
newArray.push("de");
newArray.push("Oliveira");
newArray.push("Damasceno");
newArray.pop();
newArray.pop();
newArray.push("Salvador");
newArray.delete(1)
newArray.delete(1)
newArray.delete(0)
newArray.push("Hi");
newArray.push("How");
newArray.push("Are");
newArray.push("You");
newArray.push("!");


console.log(newArray);


