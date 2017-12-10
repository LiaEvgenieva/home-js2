let n = Number(prompt('Введіть число Фібоначчі'));

let result = fib(n);

function fib(n) {
  let prePrev = 1;
  let prev = 1;
    for (let i = 3; i <= n; i++) {
      let next = prePrev + prev;
      prePrev = prev;
      prev = next;
  }
  return prev;
}

document.write(result);
// document.write('<br>');

// let n = Number(prompt('Введіть число Фібоначчі'));
// let result = fib(n);

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// document.write(result);


// let n = 10; 
// let fib = [1, 1];

// for (i = 2; i < n; i ++) {
//   fib[i] = fib[i-1] + fib[i-2];
// }
// document.write(fib.slice(0,n));
