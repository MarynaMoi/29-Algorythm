const num1 = 351;
const num2 = 450;

function getDenominator(a, b) {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  if (a === 0 || b === 0) return 0;
  if (a % b === 0) return b;
  if (a % b !== 0) {
    return getDenominator(b, a % b);
  }
}

console.log(getDenominator(num1, num2));
