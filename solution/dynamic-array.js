class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
    

  }

  read(index) {
    if (index < 0 || index >= this.length){
      return undefined;
    }
    return this.data[index];
  }

  unshift(val) {
    if (this.length >= this.capacity){
      const newData = new Array(this.capacity * 2);
      for (let i = 0; i < this.length; i++) {
        newData[i + 1] = this.data[i];
      }
      this.data = newData;
      this.capacity *= 2;
      } else {
        for (let i = this.length; i > 0; i--) {
          this.data[i] = this.data[i - 1];
        }
      }
      this.data[0] = val;
      this.length++;
  }

}


module.exports = DynamicArray;