// @TODO: implement Eratosthenes sieve

function sieve(number) {
  // Create an array of all the integers from 2 to max
  const numbers = Array.from({ length: number - 1 }, (x, i) => i + 2);

  console.log(numbers);

  // Mark all multiples of each number as not prime
  numbers.forEach((number, index) => {
    numbers.forEach((m, j) => {
      if (j > index && m % number === 0) {
        numbers[j] = false;
      }
    });
  });

  // Return all the numbers that are still true (i.e. not marked as not prime)
  return numbers.filter((n) => n !== false);
}

console.log(sieve(10));
