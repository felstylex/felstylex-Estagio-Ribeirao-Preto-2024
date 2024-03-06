let a = 0
let b = 1
const num = 9

function isFibonacci(n) {
  while (b <= n) {
    let temp = b;
    b = a + b;
    a = temp;
  
    if (b === n) {
      return console.log(`${n} pertence a sequencia de fibonacci`);
    };
  };

  return console.log(`${n} não pertence a sequencia de fibonacci`);

}

isFibonacci(num)

