function generateSeries(a) {
  const result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1);
  }
  return result;
}

// Example Usage:
const a = 4;
console.log("Output:", generateSeries(a));
