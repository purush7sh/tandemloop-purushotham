function generateAdjustedSeries(a) {
  const length = a % 2 === 0 ? a - 1 : a;
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

// Example Usage:
const a = 6;
console.log("Output:", generateAdjustedSeries(a));
