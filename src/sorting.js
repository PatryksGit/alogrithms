//  @TODO: try bubble sort method
const arr = Array.from({ length: 10000 }, () => Math.round(Math.random() * 100000));

const checkTheDuration = (func) => {
  const startTime = performance.now();
  func(arr);
  const endTime = performance.now();

  const duration = (endTime - startTime).toFixed(3);
  console.log(`function ${func.name} took ${duration} miliseconds`);
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

const builtInSortMethod = (items) => {
  const arr = [...items];
  return arr.sort((a, b) => a - b);
};

const sort2 = (items) => {
  const arr = [...items];
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

function bubbleMethod(immutableItems) {
  const items = [...immutableItems];

  // for (let n = 1; n < items.length; n++) {
  //   for (let i = 0; i < items.length - n; i++) {
  //     if (items[i] > items[i + 1]) {
  //       let valueHolder = items[i];
  //       items[i] = items[i + 1];
  //       items[i + 1] = valueHolder;
  //     }
  //   }
  // }

  for (let n = 1; n < items.length; n++) {
    let swapped = false;
    for (let i = 0; i < items.length - n; i++) {
      if (items[i] > items[i + 1]) {
        let valueHolder = items[i];
        items[i] = items[i + 1];
        items[i + 1] = valueHolder;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return items;
}

function mergeSort(values) {
  const items = [...values];
  if (items.length <= 1) {
    return items;
  }

  const middle = Math.floor(items.length / 2);
  const left = items.slice(0, middle);
  const right = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

function init() {
  // const startTime = performance.now();
  // arr.sort(sortingMethod);
  // const endTime = performance.now();
  // const duration = (endTime - startTime).toFixed(3);
  // console.log(`function sortingMethod took ${duration} miliseconds`);
  //
  checkTheDuration(builtInSortMethod);
  checkTheDuration(sort2);
  checkTheDuration(bubbleMethod);
  checkTheDuration(mergeSort);
}

init();
