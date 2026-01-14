type Rectangle = {
  width: number;
  height: number;
};

const obj: Rectangle = { width: 10, height: 15 };

// Why is this NaN? Spelling is hard!
const area = obj.width * obj.height;
console.log(area)
