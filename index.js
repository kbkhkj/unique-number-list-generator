// index.js

function generateUniqueNumberList(length, min, max) {
    const uniqueNumberList = [];
    while (uniqueNumberList.length < length) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!uniqueNumberList.includes(randomNumber)) {
        uniqueNumberList.push(randomNumber);
      }
    }
    return uniqueNumberList;
  }
  
  const length = 10;
  const minNumber = 1;
  const maxNumber = 100;
  const uniqueNumberList = generateUniqueNumberList(length, minNumber, maxNumber);
  console.log(`Unique number list of length ${length} between ${minNumber} and ${maxNumber}:`, uniqueNumberList);
  