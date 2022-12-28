//  @TODO: try bubble sort method
const arr = Array.from({ length: 10000 }, () => Math.random() * 100);

const checkTheDuration = (func) => {
  const startTime = performance.now();
  func();
  const endTime = performance.now();

  const duration = (endTime - startTime).toFixed(3);
  console.log(`function ${func.name} took ${duration} miliseconds`);
};

const builtInSortMethod = () => {
  return arr.sort((a, b) => a - b);
};

const sortingMethod = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

const sort2 = () => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    arr.forEach((number, index) => {
      if (number > arr[index + 1]) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        sorted = false;
      }
    });
  }
  return arr;
};
checkTheDuration(builtInSortMethod);
checkTheDuration(sortingMethod);
checkTheDuration(sort2);
